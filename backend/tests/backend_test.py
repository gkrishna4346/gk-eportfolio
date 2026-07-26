"""Backend API tests for Gopikrishna Portfolio."""
import os
import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://portfolio-gk.preview.emergentagent.com').rstrip('/')
API = f"{BASE_URL}/api"


@pytest.fixture
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- PIN ----------
class TestPin:
    def test_correct_pin(self, client):
        r = client.post(f"{API}/verify-pin", json={"pin": "4346"})
        assert r.status_code == 200
        assert r.json() == {"success": True}

    def test_wrong_pin(self, client):
        r = client.post(f"{API}/verify-pin", json={"pin": "0000"})
        assert r.status_code == 200
        assert r.json() == {"success": False}

    def test_pin_missing_field(self, client):
        r = client.post(f"{API}/verify-pin", json={})
        assert r.status_code == 422


# ---------- Contact ----------
class TestContact:
    def test_create_contact_valid(self, client):
        payload = {
            "name": "TEST_User",
            "email": "test_user@example.com",
            "subject": "TEST subject",
            "message": "This is a TEST message for automated testing"
        }
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert "id" in data and isinstance(data["id"], str)
        assert "created_at" in data
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["message"] == payload["message"]

        # Verify persisted via GET
        r2 = client.get(f"{API}/contact")
        assert r2.status_code == 200
        lst = r2.json()
        assert any(m.get("id") == data["id"] for m in lst)

    def test_invalid_email(self, client):
        r = client.post(f"{API}/contact", json={
            "name": "x", "email": "not-an-email", "subject": "s", "message": "hello"
        })
        assert r.status_code == 422

    def test_missing_message(self, client):
        r = client.post(f"{API}/contact", json={
            "name": "x", "email": "a@b.com", "subject": "s"
        })
        assert r.status_code == 422

    def test_list_sorted_recent_first(self, client):
        # create two, ensure order
        import time
        a = client.post(f"{API}/contact", json={
            "name": "TEST_A", "email": "a@example.com", "subject": "A", "message": "first"
        }).json()
        time.sleep(1.1)
        b = client.post(f"{API}/contact", json={
            "name": "TEST_B", "email": "b@example.com", "subject": "B", "message": "second"
        }).json()
        lst = client.get(f"{API}/contact").json()
        ids = [m["id"] for m in lst]
        assert b["id"] in ids and a["id"] in ids
        assert ids.index(b["id"]) < ids.index(a["id"])
