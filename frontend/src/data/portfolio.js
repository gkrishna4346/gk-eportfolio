// Central content for the portfolio. Static data derived from resume + prior site.

export const profile = {
  name: "Gopikrishna Rajendran",
  firstName: "Gopikrishna",
  lastName: "Rajendran",
  handle: "gkrishna4346",
  role: "AIML Business Analyst",
  headline: "Assistant Manager · AIML Business Analyst · Capacity Planning",
  tagline: "17+ years turning operational chaos into forecast-grade clarity — now fluent in Machine Learning & Generative AI.",
  location: "Hyderabad, India",
  email: "gkrishna.69800@gmail.com",
  phone: "+91 98869 69800",
  resumeUrl:
    "https://github.com/gkrishna4346/gk-master-repo/blob/main/data/Gopikrishna%20R_AIML%20Business%20Analyst.pdf",
  summary:
    "Results-oriented Planning & Workforce Management professional with 17+ years across the ITES/BPO industry, including 8+ years leading Capacity Planning, Business Analysis and Operational Strategy at two leading MNCs. Recently certified with A-Grade in the PGP in Artificial Intelligence & Machine Learning from UT Austin (McCombs) & Great Lakes — pairing deep operational instinct with Python, EDA, Machine Learning, Deep Learning and Generative AI.",
};

export const socials = {
  linkedin: "https://www.linkedin.com/in/gopikrishna-r-44b47a317",
  github: "https://github.com/gkrishna4346/",
  huggingface: "https://huggingface.co/gkrishna4346",
  email: "mailto:gkrishna.69800@gmail.com",
};

export const stats = [
  { value: "17+", label: "Years in ITES", sub: "Planning & Analytics" },
  { value: "95%+", label: "On-time delivery", sub: "KPI adherence" },
  { value: "20%", label: "Cost savings", sub: "Re-engineered plans" },
  { value: "<2%", label: "Financial variance", sub: "Cost governance" },
];

export const languages = [
  { name: "Tamil", level: "Native", value: 100 },
  { name: "French", level: "Advanced · C1", value: 85 },
  { name: "English", level: "IELTS 6.5", value: 80 },
];

export const skillGroups = [
  {
    title: "tools_&_tech",
    items: ["Python", "Streamlit", "GitHub", "PostgreSQL", "Advanced Excel", "Tableau", "Power BI", "HTML / CSS"],
  },
  {
    title: "data_analytics",
    items: ["Exploratory Data Analysis", "Predictive Modeling", "Model Deployment", "Forecasting", "Data Visualization", "MIS Reporting"],
  },
  {
    title: "ai_ml_genai",
    items: ["Machine Learning", "Deep Learning", "Neural Networks", "NLP", "Generative AI", "Scikit-Learn", "Pandas", "NumPy"],
  },
  {
    title: "project_&_planning",
    items: ["Capacity Planning", "Inventory Management", "Risk Mitigation", "Project Management", "Root Cause Analysis", "SLA Governance"],
  },
];

export const experience = [
  {
    company: "Tata Consultancy Services",
    role: "Assistant Manager — Capacity Planning",
    period: "Jan 2023 — Present",
    location: "Hyderabad, India",
    points: [
      "Consistently achieve 95%+ KPI delivery by optimizing execution strategies, milestones and resource allocation across concurrent initiatives.",
      "Re-engineered hiring plans and baseline metrics, delivering 20% cost savings while improving workforce planning accuracy.",
      "Spearheaded cost analysis reducing financial variance below 2%, identifying billing leakages and implementing corrective controls.",
    ],
    metrics: ["95%+ KPI", "20% cost cut", "<2% variance"],
  },
  {
    company: "Cognizant Technology Solutions",
    role: "Team Lead — Capacity Planning",
    period: "Sep 2017 — Dec 2022",
    location: "Hyderabad, India",
    points: [
      "Orchestrated delivery planning sustaining 95%+ performance for 4.5 consecutive years with zero idle time.",
      "Supported hiring, training analytics and SLA governance across teams.",
      "Published MIS dashboards with 100% on-time delivery for real-time leadership KPI tracking.",
    ],
    metrics: ["4.5 yrs @ 95%+", "0 idle time", "100% on-time MIS"],
  },
  {
    company: "Oracle India Pvt Ltd",
    role: "Senior Analyst — MIS Team",
    period: "Mar 2013 — Aug 2017",
    location: "Bangalore, India",
    points: [
      "Built 20+ MIS reports and automated 12 of them using Advanced Excel and SQL.",
      "Partnered with HR & Ops on attrition, shrinkage and productivity analytics for 100% timely adherence.",
    ],
    metrics: ["20+ reports", "12 automated"],
  },
  {
    company: "RNTBCI",
    role: "Senior Analyst — MIS Team",
    period: "Apr 2012 — Jan 2013",
    location: "Chennai, India",
    points: [
      "Delivered analysis on quality, productivity and billing trends for 5 teams in parallel.",
      "Reported on deferred payments and cost efficiency to maintain 0% billing leakage.",
    ],
    metrics: ["5 teams", "0% leakage"],
  },
  {
    company: "HSBC EDPI",
    role: "Finance Analyst — MIS Team",
    period: "Feb 2009 — Mar 2012",
    location: "Bangalore & Hyderabad, India",
    points: [
      "Supervised customer data with 100% policy adherence; built daily/monthly ops dashboards.",
      "Enhanced reporting accuracy to a 98% average via Excel automation.",
    ],
    metrics: ["98% accuracy", "100% adherence"],
  },
];

export const education = [
  {
    degree: "PGP — Artificial Intelligence & Machine Learning",
    school: "UT Austin (McCombs) & Great Lakes Executive Learning",
    period: "Jun 2025 — Jun 2026",
    note: "A-Grade · Executive Program",
  },
  {
    degree: "Bachelor of Arts — French Literature",
    school: "Tagore College of Arts, Pondicherry",
    period: "Jun 2004 — May 2007",
    note: "Foundation in language & communication",
  },
];

// Live, deployed apps
export const liveProjects = [
  {
    name: "MindMap: AIML Journey",
    blurb: "Signature interactive knowledge hub mapping AI, ML, Python & Data Science concepts.",
    tags: ["Streamlit", "GenAI", "EdTech"],
    link: "https://mindmap-aiml-journey.streamlit.app/",
    signature: true,
  },
  {
    name: "Paper Mind : AI",
    blurb: "PDF Reader and RAG-style Q&A assistant answering any questions from the uploaded documents.",
    tags: ["GenAI", "RAG", "NLP"],
    link: "https://paper-mind-ai.onrender.com/",
    signature: true,
  },
  {
    name: "Predictive Maintenance",
    blurb: "Capstone ML app forecasting equipment failure to reduce downtime.",
    tags: ["ML", "Streamlit", "Capstone"],
    link: "https://gkrishna4346-predictive-maintenance-capsto-deploymentapp-vbhras.streamlit.app/",
  },
  {
    name: "Tourism Package Prediction",
    blurb: "MLOps app predicting customer package purchase propensity.",
    tags: ["MLOps", "HuggingFace"],
    link: "https://huggingface.co/spaces/gkrishna4346/tourism-mlops-app",
  },
  {
    name: "HR Policy QA Bot",
    blurb: "RAG-style assistant answering airline HR policy questions.",
    tags: ["GenAI", "RAG", "NLP"],
    link: "https://gk-airlines-hr-policy-bot.streamlit.app/",
  },
  {
    name: "Pulse — Know Your Speed",
    blurb: "Interactive typing & reaction speed analytics tool.",
    tags: ["Analytics", "Streamlit"],
    link: "https://pulse-know-your-speed.streamlit.app/",
  },
  {
    name: "Chitti eCoach",
    blurb: "AI coaching companion for guided learning.",
    tags: ["GenAI", "Coach"],
    link: "https://chitti-ecoach.onrender.com/",
  },
  {
    name: "Buy-thon — Smart Vending",
    blurb: "Smart vending machine simulation with a Python core.",
    tags: ["Python", "Simulation"],
    link: "https://buython.streamlit.app/",
  },
  {
    name: "குறளும் பொருளும்",
    blurb: "Thirukkural explorer surfacing couplets with meaning.",
    tags: ["Tamil", "NLP"],
    link: "https://gkrishna4346-kural-thedal-app-k4n7fp.streamlit.app/",
  },
  {
    name: "Kural Quest",
    blurb: "Gamified Thirukkural learning quest.",
    tags: ["Game", "Tamil"],
    link: "https://kural-quest.streamlit.app/",
  },
];

// PIN-gated academic works
export const academicProjects = [
  { code: "P1", name: "Food Hub", topic: "Intro to Python", link: "https://gkrishna4346.github.io/P1_Food-Hub/IP_FoodHub%20Project_Gopikrishna%20R.html" },
  { code: "P2", name: "Personal Loan Campaign", topic: "Supervised Learning", link: "https://gkrishna4346.github.io/P2_Personal-Loan-Campaign/Project-2_Personal%20Loan%20Campaign.html" },
  { code: "P3", name: "Easy Visa", topic: "Ensemble Techniques", link: "https://gkrishna4346.github.io/P3_Easy-Visa/Project-3_EasyVisa_GKR.html" },
  { code: "P4", name: "Bank Churn Prediction", topic: "Neural Networks", link: "https://gkrishna4346.github.io/P4_Bank-Churn-Predict/Project_4__Additional_Project_Introduction_to_Neural_Networks_Bank_Churn_Prediction.html" },
  { code: "P5", name: "Medical Assistant", topic: "NLP with GenAI", link: "https://gkrishna4346.github.io/P5_Medical-Assistant/Project-5_Natural%20Language%20Processing%20with%20Generative%20AI_Medical%20Assistant.html" },
  { code: "P6", name: "HelmNet", topic: "Computer Vision", link: "https://gkrishna4346.github.io/P6_Helmnet/Project-6_HelmNet_GKR.html" },
  { code: "P7", name: "Super Kart", topic: "Model Deployment", link: "https://gkrishna4346.github.io/P7_SuperKart/GK_Project_7_SuperKart_Model%20Deployment.html" },
  { code: "P8", name: "New Wheels", topic: "Introduction to SQL", link: "https://gkrishna4346.github.io/P8_New-Wheels/Project_New%20Wheels_Introduction%20to%20SQL_GopikrishnaR.pdf" },
  { code: "P9", name: "E-News Express", topic: "Applied Statistics", link: "https://gkrishna4346.github.io/P9_News-Express/Project_E_News_Express_Applied%20Statistics_Gopikrishna%20R.html" },
  { code: "P10", name: "Tourism Package Prediction", topic: "MLOps", link: "https://gkrishna4346.github.io/P10_Tourism-Package-Prediction/reports/Project%20-%20Tourism%20Package%20Prediction.html" },
  { code: "P11", name: "News Findr", topic: "Advanced GenAI for NLP", link: "https://gkrishna4346.github.io/P11_News-Findr/Project_Advanced_GenAI_for_NLP_NewsFindr_Gopikrishna.html" },
  { code: "CAP", name: "Predictive Maintenance — Report", topic: "Capstone · PDF", link: "https://gkrishna4346.github.io/predictive-maintenance-capstone/reports/final_report/Gopikrishna%20Rajendran_Predictive%20Maintenance_Final%20Submission%20Report.pdf" },
  { code: "CAP", name: "Predictive Maintenance — Notebook", topic: "Capstone · HTML", link: "https://gkrishna4346.github.io/predictive-maintenance-capstone/reports/final_report/Gopikrishna%20Rajendran_Predictive%20Maintenance_Notebook.html" },
];

export const pipeline = {
  Projects: [
    { name: "AutoEDA Studio (AES)", link: "https://autoeda-studio.streamlit.app/", live: true },
    { name: "AD QA Bot", link: "", live: false },
    { name: "GK EPF Tracker", link: "", live: false },
    { name: "GGH Knowledge Center", link: "", live: false },
    { name: "ES Value Predictor", link: "", live: false },
    { name: "eBook Keeper", link: "", live: false },
    { name: "Kural Playground", link: "", live: false },
    { name: "Python Cheat Kit", link: "", live: false },
  ],
  Games: [
    { name: "Rock · Paper · Scissors", link: "https://gkrishna4346.github.io/spc/", live: true },
    { name: "Hangman", link: "", live: false },
    { name: "Treasure Hunt", link: "", live: false },
    { name: "Quizzes", link: "", live: false },
  ],
  Hobbies: [
    { name: "Qubism — Rubik's Cube", link: "", live: false },
    { name: "M's Cuisine — Cooking", link: "", live: false },
    { name: "Sketching in Pencil", link: "", live: false },
  ],
};

export const manifesto = [
  { no: "01", title: "Data", body: "Every decision starts as a number waiting to be understood." },
  { no: "02", title: "Insight", body: "Forecasts only matter when they change what happens next." },
  { no: "03", title: "Intelligence", body: "Where 17 years of operations meet machine learning." },
];

export const marqueeWords = [
  "Machine Learning", "Python", "Capacity Planning", "Generative AI", "Forecasting",
  "PostgreSQL", "Streamlit", "Deep Learning", "MIS Reporting", "Tableau", "Predictive Modeling",
];

export const navLinks = [
  { no: "01", label: "About", href: "#about" },
  { no: "02", label: "Skills", href: "#skills" },
  { no: "03", label: "Experience", href: "#experience" },
  { no: "04", label: "Projects", href: "#projects" },
  { no: "05", label: "Academic", href: "#academic" },
  { no: "06", label: "Pipeline", href: "#pipeline" },
  { no: "07", label: "Contact", href: "#contact" },
];
