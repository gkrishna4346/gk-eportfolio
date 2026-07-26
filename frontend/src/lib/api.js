import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const API = `${BACKEND_URL}/api`;

export const api = axios.create({ baseURL: API });

export async function submitContact(payload) {
  const { data } = await api.post("/contact", payload);
  return data;
}

export async function verifyPin(pin) {
  const { data } = await api.post("/verify-pin", { pin });
  return data;
}
