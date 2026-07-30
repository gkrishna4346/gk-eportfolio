/* ===== Gopikrishna Rajendran — Static Portfolio JS ===== */
(function () {
  "use strict";

  // ---------- Data ----------
  var marqueeWords = ["Machine Learning","Python","Capacity Planning","Generative AI","Forecasting","PostgreSQL","Streamlit","Deep Learning","MIS Reporting","Tableau","Predictive Modeling"];

  var languages = [
    { name: "Tamil", level: "Native", value: 100 },
    { name: "French", level: "Advanced · C1", value: 85 },
    { name: "English", level: "IELTS 6.5", value: 80 },
  ];

  var skillGroups = [
    { title: "tools_&_tech", items: ["Python","Streamlit","GitHub","PostgreSQL","Advanced Excel","Tableau","Power BI","HTML / CSS"] },
    { title: "data_analytics", items: ["Exploratory Data Analysis","Predictive Modeling","Model Deployment","Forecasting","Data Visualization","MIS Reporting"] },
    { title: "ai_ml_genai", items: ["Machine Learning","Deep Learning","Neural Networks","NLP","Generative AI","Scikit-Learn","Pandas","NumPy"] },
    { title: "project_&_planning", items: ["Capacity Planning","Inventory Management","Risk Mitigation","Project Management","Root Cause Analysis","SLA Governance"] },
  ];

  var experience = [
    { company: "Tata Consultancy Services", role: "Assistant Manager — Capacity Planning", period: "Jan 2023 — Present", location: "Hyderabad, India",
      points: ["Consistently achieve 95%+ KPI delivery by optimizing execution strategies, milestones and resource allocation across concurrent initiatives.","Re-engineered hiring plans and baseline metrics, delivering 20% cost savings while improving workforce planning accuracy.","Spearheaded cost analysis reducing financial variance below 2%, identifying billing leakages and implementing corrective controls."],
      metrics: ["95%+ KPI","20% cost cut","<2% variance"] },
    { company: "Cognizant Technology Solutions", role: "Team Lead — Capacity Planning", period: "Sep 2017 — Dec 2022", location: "Hyderabad, India",
      points: ["Orchestrated delivery planning sustaining 95%+ performance for 4.5 consecutive years with zero idle time.","Supported hiring, training analytics and SLA governance across teams.","Published MIS dashboards with 100% on-time delivery for real-time leadership KPI tracking."],
      metrics: ["4.5 yrs @ 95%+","0 idle time","100% on-time MIS"] },
    { company: "Oracle India Pvt Ltd", role: "Senior Analyst — MIS Team", period: "Mar 2013 — Aug 2017", location: "Bangalore, India",
      points: ["Built 20+ MIS reports and automated 12 of them using Advanced Excel and SQL.","Partnered with HR & Ops on attrition, shrinkage and productivity analytics for 100% timely adherence."],
      metrics: ["20+ reports","12 automated"] },
    { company: "RNTBCI", role: "Senior Analyst — MIS Team", period: "Apr 2012 — Jan 2013", location: "Chennai, India",
      points: ["Delivered analysis on quality, productivity and billing trends for 5 teams in parallel.","Reported on deferred payments and cost efficiency to maintain 0% billing leakage."],
      metrics: ["5 teams","0% leakage"] },
    { company: "HSBC EDPI", role: "Finance Analyst — MIS Team", period: "Feb 2009 — Mar 2012", location: "Bangalore & Hyderabad, India",
      points: ["Supervised customer data with 100% policy adherence; built daily/monthly ops dashboards.","Enhanced reporting accuracy to a 98% average via Excel automation."],
      metrics: ["98% accuracy","100% adherence"] },
  ];

  var liveProjects = [
    { name: "MindMap: AIML Journey", blurb: "Signature interactive knowledge hub mapping AI, ML, Python & Data Science concepts.", tags: ["Streamlit","GenAI","EdTech"], link: "https://mindmap-aiml-journey.streamlit.app/", signature: true },
    { name: "Paper Mind : AI", blurb: "PDF Reader and RAG-style Q&A assistant answering any questions from the uploaded documents.", tags: ["GenAI","RAG","NLP"], link: "https://paper-mind-ai.onrender.com/", signature: true },
    { name: "Predictive Maintenance", blurb: "Capstone ML app forecasting equipment failure to reduce downtime.", tags: ["ML","Streamlit","Capstone"], link: "https://gkrishna4346-predictive-maintenance-capsto-deploymentapp-vbhras.streamlit.app/" },
    { name: "Tourism Package Prediction", blurb: "MLOps app predicting customer package purchase propensity.", tags: ["MLOps","HuggingFace"], link: "https://huggingface.co/spaces/gkrishna4346/tourism-mlops-app" },
    { name: "HR Policy QA Bot", blurb: "RAG-style assistant answering airline HR policy questions.", tags: ["GenAI","RAG","NLP"], link: "https://gk-airlines-hr-policy-bot.streamlit.app/" },
    { name: "Pulse — Know Your Speed", blurb: "Interactive typing & reaction speed analytics tool.", tags: ["Analytics","Streamlit"], link: "https://pulse-know-your-speed.streamlit.app/" },
    { name: "Chitti eCoach", blurb: "AI coaching companion for guided learning.", tags: ["GenAI","Coach"], link: "https://chitti-ecoach.onrender.com/" },
    { name: "Buy-thon — Smart Vending", blurb: "Smart vending machine simulation with a Python core.", tags: ["Python","Simulation"], link: "https://buython.streamlit.app/" },
    { name: "குறளும் பொருளும்", blurb: "Thirukkural explorer surfacing couplets with meaning.", tags: ["Tamil","NLP"], link: "https://gkrishna4346-kural-thedal-app-k4n7fp.streamlit.app/" },
    { name: "Kural Quest", blurb: "Gamified Thirukkural learning quest.", tags: ["Game","Tamil"], link: "https://kural-quest.streamlit.app/" },
  ];

  var manifesto = [
    { no: "01", title: "Data", body: "Every decision starts as a number waiting to be understood." },
    { no: "02", title: "Insight", body: "Forecasts only matter when they change what happens next." },
    { no: "03", title: "Intelligence", body: "Where 17 years of operations meet machine learning." },
  ];

  var pipeline = {
    Projects: [
      { name: "AutoEDA Studio (AES)", link: "https://autoeda-studio.streamlit.app/", live: true },
      { name: "AD QA Bot", live: false }, { name: "GK EPF Tracker", live: false },
      { name: "GGH Knowledge Center", live: false }, { name: "ES Value Predictor", live: false },
      { name: "eBook Keeper", live: false }, { name: "Kural Playground", live: false }, { name: "Python Cheat Kit", live: false },
    ],
    Games: [
      { name: "Rock · Paper · Scissors", link: "https://gkrishna4346.github.io/spc/", live: true },
      { name: "Hangman", live: false }, { name: "Treasure Hunt", live: false }, { name: "Quizzes", live: false },
    ],
    Hobbies: [
      { name: "Qubism — Rubik's Cube", live: false }, { name: "M's Cuisine — Cooking", live: false }, { name: "Sketching in Pencil", live: false },
    ],
  };

  function esc(s) { var d = document.createElement("div"); d.textContent = s; return d.innerHTML; }
  var ARROW = '<svg class="arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M7 7h10v10"/></svg>';

  // ---------- Render ----------
  var mq = document.getElementById("marquee");
  var mqItems = marqueeWords.concat(marqueeWords);
  mq.innerHTML = mqItems.map(function (w) {
    return '<span class="item"><span class="w">' + esc(w) + '</span><span class="d">◆</span></span>';
  }).join("");

  document.getElementById("langs").innerHTML = languages.map(function (l) {
    return '<div class="lang"><div class="row"><span class="n">' + esc(l.name) + '</span><span class="lvl">' + esc(l.level) + '</span></div><div class="bar"><i data-w="' + l.value + '"></i></div></div>';
  }).join("");

  document.getElementById("skills-grid").innerHTML = skillGroups.map(function (g) {
    var chips = g.items.map(function (s) { return '<span class="chip">' + esc(s) + '</span>'; }).join("");
    return '<div class="skill-group"><p class="k"><b>' + esc(g.title) + '</b> = [</p><div class="chips">' + chips + '</div><p class="k" style="margin-top:12px;color:hsl(var(--muted-fg));">]</p></div>';
  }).join("");

  document.getElementById("timeline").insertAdjacentHTML("beforeend", experience.map(function (e) {
    var pts = e.points.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("");
    var mets = e.metrics.map(function (m) { return '<span class="metric">' + esc(m) + "</span>"; }).join("");
    return '<div class="exp reveal"><div class="meta"><p class="period">' + esc(e.period) + '</p><p class="loc">' + esc(e.location) + '</p></div><span class="node"></span><div class="card"><div class="company"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" stroke-width="2"><path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-3"/></svg>' + esc(e.company) + '</div><p class="role">' + esc(e.role) + '</p><ul>' + pts + '</ul><div class="metrics">' + mets + "</div></div></div>";
  }).join(""));

  document.getElementById("projects-grid").innerHTML = liveProjects.map(function (p, i) {
    var tags = p.tags.map(function (t) { return '<span class="tag">' + esc(t) + "</span>"; }).join("");
    var badge = p.signature
      ? '<span class="badge"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.6 6.6L21 9l-5 4.3L17.5 20 12 16.5 6.5 20 8 13.3 3 9l6.4-.4z"/></svg> SIGNATURE</span>'
      : ARROW;
    return '<a class="pcard reveal ' + (p.signature ? "sig" : "") + '" href="' + p.link + '" target="_blank" rel="noopener"><div><div class="top"><span class="num">' + String(i + 1).padStart(2, "0") + "</span>" + badge + '</div><h3>' + esc(p.name) + '</h3><p>' + esc(p.blurb) + '</p></div><div class="tags">' + tags + "</div></a>";
  }).join("");

  document.getElementById("manifesto").innerHTML = manifesto.map(function (m) {
    return '<div class="chapter reveal"><span class="cn">' + esc(m.no) + '</span><div><h3>' + esc(m.title) + '</h3><p>' + esc(m.body) + "</p></div></div>";
  }).join("");

  var groups = Object.keys(pipeline);
  document.getElementById("tabs").innerHTML = groups.map(function (g, i) {
    return '<button class="tab ' + (i === 0 ? "active" : "") + '" data-tab="' + g + '">' + esc(g) + "</button>";
  }).join("");
  document.getElementById("tab-panels").innerHTML = groups.map(function (g, i) {
    var items = pipeline[g].map(function (it) {
      var inner = '<div class="left"><span class="pdot ' + (it.live ? "on" : "off") + '"></span><span class="name">' + esc(it.name) + "</span></div>" + (it.live ? ARROW : '<span class="soon-tag">SOON</span>');
      return it.live
        ? '<a class="pipe-item live" href="' + it.link + '" target="_blank" rel="noopener">' + inner + "</a>"
        : '<div class="pipe-item soon">' + inner + "</div>";
    }).join("");
    return '<div class="tab-panel ' + (i === 0 ? "active" : "") + '" data-panel="' + g + '"><div class="pipe-grid">' + items + "</div></div>";
  }).join("");

  document.getElementById("year").textContent = new Date().getFullYear();

  // ---------- Interactions ----------
  // theme toggle
  var root = document.documentElement, sun = document.getElementById("sunIcon"), moon = document.getElementById("moonIcon");
  function syncIcons() {
    var dark = root.getAttribute("data-theme") !== "light";
    sun.style.display = dark ? "block" : "none";
    moon.style.display = dark ? "none" : "block";
  }
  syncIcons();
  document.getElementById("themeToggle").addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    syncIcons();
  });

  // header scroll
  var header = document.getElementById("header");
  function onScroll() { header.classList.toggle("scrolled", window.scrollY > 24); }
  window.addEventListener("scroll", onScroll); onScroll();

  // mobile menu
  var menuBtn = document.getElementById("menuBtn"), mobileNav = document.getElementById("mobileNav");
  menuBtn.addEventListener("click", function () { mobileNav.classList.toggle("open"); });
  mobileNav.addEventListener("click", function (e) { if (e.target.tagName === "A") mobileNav.classList.remove("open"); });

  // pipeline tabs
  document.getElementById("tabs").addEventListener("click", function (e) {
    var btn = e.target.closest(".tab"); if (!btn) return;
    var g = btn.getAttribute("data-tab");
    document.querySelectorAll(".tab").forEach(function (t) { t.classList.toggle("active", t === btn); });
    document.querySelectorAll(".tab-panel").forEach(function (p) { p.classList.toggle("active", p.getAttribute("data-panel") === g); });
  });

  // reveal on scroll + language bars
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        en.target.classList.add("in");
        en.target.querySelectorAll && en.target.querySelectorAll(".bar > i").forEach(function (bar) {
          bar.style.width = bar.getAttribute("data-w") + "%";
        });
        io.unobserve(en.target);
      }
    });
  }, { rootMargin: "-80px" });
  document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  // also handle language bars inside about panel
  document.querySelectorAll(".bar > i").forEach(function (bar) {
    var p = bar.closest(".reveal");
    if (!p) bar.style.width = bar.getAttribute("data-w") + "%";
  });

  // contact -> mailto
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var subject = document.getElementById("subject").value.trim() || ("Portfolio enquiry from " + name);
    var message = document.getElementById("message").value.trim();
    var body = "Name: " + name + "\nEmail: " + email + "\n\n" + message;
    window.location.href = "mailto:gkrishna.69800@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  });
})();
