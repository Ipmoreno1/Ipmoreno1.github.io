// ============================================================================
//  data.js : ALL of Isaac's portfolio content lives here.
//  Edit this file to change text on the game AND the recruiter view.
//  After editing, run:  node tools/build-recruiter.mjs   (regenerates recruiter.html)
//  Rules kept on purpose: no grades, no phone number, no home address, no em dashes.
// ============================================================================

export const PROFILE = {
  name: "Isaac Moreno",
  fullName: "Isaac Patricio Moreno",
  headline: "Computer Science senior at UTEP, Minor in Mathematics",
  tagline: "Full-stack web apps, LLM and software testing research, and a photographer's eye for detail.",
  location: "El Paso, TX",
  graduation: "Expected Dec 2026",
  lookingFor: "New-grad software engineering roles",
  email: "ipmoreno1@miners.utep.edu",
  linkedin: "https://linkedin.com/in/isaac-moreno",
  // GitHub: https://github.com/Ipmoreno1 (confirmed by Isaac, Nov 10, 2026; 0 public repos at the time).
  // Paste the real profile URL here once it is public and it will show up everywhere.
  github: "https://github.com/Ipmoreno1",
  resumePdf: "assets/Resume_Isaac_Moreno.pdf",
  siteUrl: "https://ipmoreno.dev/dungeons/",
};

export const ABOUT = [
  "Hi, I'm Isaac Moreno, a Computer Science senior at The University of Texas at El Paso with a Minor in Mathematics. I graduate in December 2026.",
  "I build full-stack web apps: Moreno Captures, a booking and portfolio app for my photography business, and ESPN Hub, a multi-sport stats dashboard. This semester I'm doing an independent study with Dr. Yoonsik Cheon on whether Javadoc documentation helps LLMs write better Java unit tests, and I'm learning mutation testing (PIT) along the way.",
  "Before that I worked in the Disney College Program as a PhotoPass photographer at Walt Disney World, and earlier as a real estate agent in El Paso. Both jobs meant working face to face with people under real deadlines and quality standards.",
  "Photography and visual work are a big part of who I am, and off the clock I'm a PC and Xbox gamer. I'm looking for new-grad software engineering roles.",
];

export const EDUCATION = {
  school: "The University of Texas at El Paso",
  degree: "Bachelor of Science in Computer Science",
  minor: "Minor in Mathematics",
  dates: "Expected Graduation: Dec 2026",
  location: "El Paso, TX",
};

// category values drive the Projectdex filters
export const CATEGORIES = ["All", "Web", "Data", "AI/ML", "Research", "Testing", "Experience"];

export const PROJECTS = [
  {
    id: "moreno-captures",
    title: "Moreno Captures",
    icon: "camera",
    dates: "Feb 2026 - Present",
    kind: "Full-stack web app for my photography business",
    categories: ["Web", "Data"],
    stack: ["React", "Vite", "Supabase", "PostgreSQL", "Vercel", "Resend"],
    summary: "A full-stack photography business web app with a cinematic portfolio gallery, a booking system, and an admin panel, serving real El Paso clients.",
    bullets: [
      "Built and deployed a full-stack photography business web app with a cinematic portfolio gallery, serving real El Paso clients.",
      "Designed a PostgreSQL-backed booking system with automated Resend email notifications, cutting manual coordination.",
      "Implemented a password-protected admin panel for bookings, media uploads, and portfolio updates without code changes.",
      "Architected a cloud storage pipeline with Supabase Storage and edge functions; deployed on Vercel with continuous delivery.",
    ],
    status: "Ongoing",
    landmark: "museum",
    links: [], // add {label, url} only for real, public links
  },
  {
    id: "espn-hub",
    title: "ESPN Hub",
    icon: "trophy",
    dates: "Mar 2026",
    kind: "Multi-sport analytics dashboard",
    categories: ["Web", "Data"],
    stack: ["React", "Vite", "React Router", "Recharts", "ESPN API", "Vercel"],
    summary: "A multi-sport dashboard built on ESPN's public REST APIs for live scores, standings, and stats across the NFL, NBA, and MLB.",
    bullets: [
      "Built a multi-sport analytics dashboard on ESPN's public REST APIs for live scores, standings, and stats (NFL, NBA, MLB).",
      "Created interactive Recharts visualizations for at-a-glance comparison of team and player performance across leagues.",
      "Architected a modular React component system with React Router, extensible to new leagues; deployed on Vercel.",
    ],
    status: "Complete",
    landmark: "sunbowl",
    links: [],
  },
  {
    id: "code-valkyrie",
    title: "Code Valkyrie",
    icon: "shield",
    dates: "Oct 2025",
    kind: "AI threat assessment platform, UTEP Hackathon (team project)",
    categories: ["AI/ML"],
    stack: ["NLP", "Computer vision", "Figma"],
    summary: "A 48-hour hackathon prototype that fuses drone video, NLP on 911 transcripts, and real-time risk scoring to help dispatchers assess threats.",
    bullets: [
      "Prototyped an AI threat assessment platform fusing drone video, NLP on 911 transcripts, and real-time risk scoring.",
      "Implemented NLP-based incident severity classification and designed a Figma dispatcher dashboard for live risk indicators.",
      "Delivered a functional end-to-end prototype within 48 hours as part of a multidisciplinary team.",
    ],
    status: "Hackathon prototype",
    landmark: "engineering",
    links: [],
  },
  {
    id: "javadoc-llm-tests",
    title: "Does Documentation Help?",
    icon: "quill",
    dates: "Fall 2026 (in progress)",
    kind: "CS 4371 Independent Study with Dr. Yoonsik Cheon",
    categories: ["Research", "Testing", "AI/ML"],
    stack: ["Java", "JUnit", "PIT (learning)", "Claude"],
    summary: "Undergraduate research on whether Javadoc-style comments help an LLM (Claude) write Java unit tests that catch more bugs, measured with mutation testing.",
    bullets: [
      "Conducting a semester-long study of whether Javadoc comments improve bug detection by Claude-generated Java unit tests.",
      "Conducting a literature review on LLM-generated unit tests, code documentation, and mutation testing.",
      "Selecting open-source Java projects and learning mutation testing (PIT) for the study's preliminary report.",
      "Planning a three-condition comparison: code only, Javadoc + signature only, and code + Javadoc.",
    ],
    status: "In progress. The preliminary report covers the literature review, Java project selection, and PIT setup. No results yet.",
    landmark: "ccsb",
    links: [],
    fullTitle: "Does Documentation Help? Evaluating the Role of Javadoc-Style Comments in LLM-Generated Unit Tests via Mutation Testing",
  },
  {
    id: "disney-photopass",
    title: "Disney PhotoPass",
    icon: "castle",
    dates: "Jun 2024 - Jan 2025",
    kind: "Disney College Program, Cast Member / PhotoPass Photographer, Orlando, FL",
    categories: ["Experience"],
    stack: ["Photography", "Guest experience", "Communication"],
    summary: "Photographed guests at Walt Disney World in a fast-paced, high-traffic setting with strict quality and turnaround standards.",
    bullets: [
      "Captured 200+ high-quality photos per shift in a fast-paced, high-traffic setting under strict quality and turnaround standards.",
      "Interacted with guests daily, gathering live feedback and adapting quickly to improve the guest experience.",
      "Earned 100+ documented guest compliments for professionalism, creativity, and customer experience.",
    ],
    status: "Completed",
    landmark: "union",
    links: [],
  },
  {
    id: "clear-view-realty",
    title: "Clear View Realty",
    icon: "house",
    dates: "Jun 2021 - Jun 2023",
    kind: "Real Estate Agent, El Paso, TX",
    categories: ["Experience"],
    stack: ["Market analysis", "Negotiation", "Client relationships"],
    summary: "Residential real estate agent handling pricing analysis, negotiations, and contracts for El Paso clients.",
    bullets: [
      "Closed multiple residential transactions by managing pricing analysis, negotiations, and contract execution.",
      "Applied comparative market analysis to guide data-informed client decisions; built long-term client relationships.",
    ],
    status: "Completed",
    landmark: "union",
    links: [],
  },
];

export const EXPERIENCE_IDS = ["disney-photopass", "clear-view-realty"];

export const SKILLS = [
  { label: "Languages", items: ["Java", "Python", "C/C++", "SQL", "JavaScript"] },
  { label: "Frameworks & Libraries", items: ["React", "Vite", "Node.js", "Recharts", "React Router", "JUnit"] },
  { label: "Software Testing", items: ["Unit testing", "Learning mutation testing (PIT)", "LLM-based test generation", "LLM prompting (Claude)"] },
  { label: "Databases & Cloud", items: ["PostgreSQL", "Supabase", "Vercel", "REST APIs"] },
  { label: "Machine Learning", items: ["Data preprocessing", "Feature extraction", "Model evaluation", "NLP fundamentals"] },
  { label: "Tools", items: ["Git", "GitHub", "Figma", "VS Code", "IntelliJ IDEA", "Microsoft Excel", "Word", "PowerPoint"] },
  { label: "Concepts", items: ["Full-stack development", "Data modeling", "API integration", "Computer vision basics"] },
];

export const INTERESTS = ["Photography and visual work", "Sports media and analytics", "PC and Xbox gaming"];

// ---------------------------------------------------------------------------
// Campus landmarks. "fact" text is from official UTEP pages (see "source").
// The map is stylized and not to scale.
// panel: what opens when you press E there.
// ---------------------------------------------------------------------------
export const LANDMARKS = [
  { id: "plaza", name: "Centennial Plaza", panel: { type: "about" }, adv: "Campus Living Room",
    fact: "UTEP's 11-acre Centennial Plaza was completed in 2015 and is known as the campus living room.",
    source: "https://www.utep.edu/bhutan/centennial-plaza/" },
  { id: "union", name: "Union Building", panel: { type: "experience" }, adv: "Cast Member",
    fact: "The Union is one of the buildings that border Centennial Plaza.",
    source: "https://www.utep.edu/bhutan/centennial-plaza/" },
  { id: "library", name: "UTEP Library", panel: { type: "resume" }, adv: "Paper Trail",
    fact: "The current Library building opened on October 12, 1984, with Bhutanese-inspired architecture and over 200 works of art on display.",
    source: "https://www.utep.edu/library/about/" },
  { id: "ccsb", name: "Chemistry & Computer Science Bldg", panel: { type: "project", id: "javadoc-llm-tests" }, adv: "Documentation Required",
    fact: "Home of UTEP's Department of Computer Science, part of the Miguel A. Loya College of Engineering.",
    source: "https://www.utep.edu/cs/undergraduate/" },
  { id: "engineering", name: "Engineering Sciences Complex", panel: { type: "project", id: "code-valkyrie" }, adv: "48-Hour Build",
    fact: "A 362,000 square-foot complex that houses the W.M. Keck Center for 3D Innovation.",
    source: "https://catalog.utep.edu/university/" },
  { id: "sunbowl", name: "Sun Bowl Stadium", panel: { type: "project", id: "espn-hub" }, adv: "Kickoff",
    fact: "Opened September 21, 1963. Home of UTEP football and the Sun Bowl game every December. UTEP lists capacity at 45,971.",
    source: "https://utepminers.com/facilities/sun-bowl/2" },
  { id: "museum", name: "Centennial Museum", panel: { type: "project", id: "moreno-captures" }, adv: "Say Cheese",
    fact: "Built in 1936, it is El Paso's first museum. Stone urns shaped like prayer wheels flank the entrance steps.",
    source: "https://www.utep.edu/centennial-museum/museum/museum-natural-cultural-history.html" },
  { id: "haskins", name: "Don Haskins Center", panel: { type: "skills" }, adv: "Skill Tree",
    fact: "One of UTEP's athletic facilities, alongside the Sun Bowl and the Larry K. Durham Sports Center.",
    source: "https://catalog.utep.edu/university/" },
  { id: "pick", name: "Mining Minds", panel: { type: "contact" }, adv: "Ping Received",
    fact: "A steel pickaxe sculpture installed in 2010 to celebrate UTEP's mining heritage. On special occasions it lights up blue and orange.",
    source: "https://www.utep.edu/about/" },
  { id: "lhakhang", name: "The Lhakhang", panel: { type: "lhakhang" }, adv: "Gift From Bhutan",
    fact: "Built by Bhutanese artisans for the 2008 Smithsonian Folklife Festival, gifted to the United States, and opened at UTEP in 2015 on the western edge of Centennial Plaza.",
    source: "https://www.utep.edu/bhutan/centennial-plaza/" },
];

export const CAMPUS_FACTS = [
  "UTEP opened in 1914 as the Texas State School of Mines and Metallurgy.",
  "Bhutanese-inspired architecture has been part of the campus design since 1917.",
  "The name Paydirt Pete came from a 1974 contest with over 500 entries.",
];

export const PETE_LINES = [
  "Howdy, Miner! I'm Pete. This camp is Centennial Plaza, Isaac's home base.",
  "This is Isaac's portfolio. Walk with WASD or the arrow keys. Space rolls. Click or F swings.",
  "The glowing map on the table starts missions. Each landmark on that map holds a piece of Isaac's story.",
  "In a hurry? The orange \"Skip the game\" button up top has everything on one page.",
  "Fun fact: the name Paydirt Pete came from a 1974 contest with over 500 entries.",
  "Press I for gear, M for the mission map, and E next to me, the smith, or the wolf.",
  "Finish all ten missions for a special advancement. Good luck!",
];
