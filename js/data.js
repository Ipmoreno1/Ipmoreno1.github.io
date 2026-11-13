// ============================================================================
//  data.js : ALL of Isaac's portfolio content lives here.
//  Edit this file to change text on the game AND the recruiter view.
//  After editing, run:  node tools/build-recruiter.mjs   (regenerates recruiter.html)
//  This copy powers the 2D pixel campus (utep-pixel). The project texts are the same as the 3D version.
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
  resumePdf: "assets/Resume_Isaac_Moreno.pdf?v=20",
  siteUrl: "https://ipmoreno.dev/",
  role: "Full-stack builder",
};

// The MinerDex (About me card). Short, factual copy pulled from the resume.
export const DEX = {
  school: "University of Texas at El Paso",
  tagline: "Full-stack builder, testing researcher.",
  degree: "B.S. Computer Science · Minor in Mathematics",
  bio: "I'm a CS senior at UTEP graduating in December 2026. I built Moreno Captures for my photography business and ESPN Hub, a multi-sport stats dashboard, and this semester I'm studying whether Javadoc helps LLMs write better Java unit tests. Have a look around.",
  type: "Builder",
  secondType: "Researcher",
  year: "Senior",
  graduation: "Dec 2026",
  selected: ["moreno-captures", "espn-hub", "javadoc-llm-tests"],
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

// category values drive the Dig Log filters
export const CATEGORIES = ["All", "Web", "Data", "AI/ML", "Research", "Testing", "Experience"];

export const PROJECTS = [
  {
    id: "moreno-captures",
    tag: "Full-stack app",
    title: "Moreno Captures",
    icon: "camera",
    dates: "Feb 2026 - Present",
    kind: "Full-stack web app for my photography business",
    categories: ["Web", "Data"],
    stack: ["React", "Vite", "Supabase", "PostgreSQL", "Vercel", "Resend"],
    summary: "A full-stack photography portfolio and booking site with a public gallery, an inquiry form, and an authenticated admin panel.",
    bullets: [
      "Built a photography portfolio and booking site in React and Vite, with a public gallery from Supabase Storage, and deployed it on Vercel.",
      "Designed a PostgreSQL-backed inquiry form that emails new bookings through a serverless edge function and Resend.",
      "Built an admin panel with Supabase authentication and row-level security so only I can manage inquiries, media, and portfolio updates.",
    ],
    status: "Ongoing",
    landmark: "museum",
    links: [{ label: "Live site", url: "https://moreno-captures.vercel.app" }],
  },
  {
    id: "espn-hub",
    tag: "Web dashboard",
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
    tag: "Hackathon",
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
    tag: "Research, in progress",
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
    tag: "Disney College Program",
    role: "Cast Member / PhotoPass Photographer",
    dexLine: "200+ guest photos per shift at Walt Disney World.",
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
    tag: "Real estate",
    role: "Real Estate Agent",
    dexLine: "Pricing, negotiations, and contracts for El Paso clients.",
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
  {
    id: "this-site",
    tag: "Personal project",
    title: "This site: a playable portfolio",
    icon: "map",
    dates: "Nov 2026",
    kind: "Personal project, the campus you are walking around right now",
    categories: ["Web"],
    stack: ["HTML", "CSS", "JavaScript", "Canvas 2D"],
    summary: "A top-down pixel-art take on the UTEP campus where each landmark opens part of my portfolio. A plain recruiter view has the same content on one page.",
    bullets: [
      "All art is original pixel art drawn in code when the page loads: tiles, Bhutanese-style buildings, desert plants, characters, and the El Paso star on the Franklin Mountains.",
      "Vanilla HTML, CSS, and JavaScript on a 2D canvas with no frameworks, built as static files ready for GitHub Pages.",
      "Keyboard, touch, and screen reader friendly, with a reduce-animation option, a no-JavaScript fallback, and an optional campus tour in the playable view.",
      "All content lives in one data file that also generates the plain recruiter page.",
    ],
    status: "Ongoing",
    landmark: "lhakhang",
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
  "UTEP's official mascot is Paydirt Pete, a miner. The name came from a 1974 contest with over 500 entries.",
  "The visiting mascots on this campus are original pixel characters inspired by college mascots. They are not official school marks.",
];

// Optional link to the 3D Minecraft Dungeons-style version of this portfolio.
// Leave it empty until there is a confirmed live URL. Nothing about it shows while it is empty.
export const SITE = {
  dungeonsVersionUrl: "",
  footer: "Fan-inspired by playable portfolios, not affiliated with any game company.",
  recruiterNote: "The playable campus has an optional tour. Visiting characters are original fan-inspired school mascots, not official marks.",
};

// Campus mascots: original fan-inspired characters (not official school marks or logos).
// Host mascots give a greeting and topic cards. A card's answer shows in the dialog,
// and `open` adds a button that jumps to the matching panel. "fact" cycles CAMPUS_FACTS.
export const MASCOTS = {
  miner: {
    name: "Pete the Miner (UTEP)", short: "Pete", title: "Ask Pete", school: "UTEP", token: "about",
    greet: "Howdy! I'm Pete the Miner, a fan nod to UTEP's Paydirt Pete. You're in Centennial Plaza, Isaac's home base. Pick a topic and I'll dig it up.",
    cards: [
      { t: "Who is Isaac?", s: "The short version", a: "Isaac Moreno is a Computer Science senior at UTEP with a Minor in Mathematics. He graduates in December 2026 and he's looking for new-grad software engineering roles.", open: ["about", null, "MinerDex"] },
      { t: "What does he build?", s: "Projects", a: "Full-stack web apps like Moreno Captures and ESPN Hub, plus Code Valkyrie from a UTEP hackathon. Every one of them is in the Dig Log.", open: ["log", null, "Dig Log"] },
      { t: "Campus tour", s: "Optional quest", a: "Want a little quest? Talk to the five host mascots around campus. Each one holds a token: About, Projects, Experience, Skills, and Resume. It is optional, and you can still open every building without it." },
      { t: "Campus fact", s: "UTEP trivia", a: "fact" },
    ],
  },
  bear: {
    name: "The Bear (Baylor)", short: "the Bear", title: "Pick a project", school: "Baylor", token: "projects",
    greet: "Hey. I'm the Bear, visiting from Baylor. If you want the full list of what Isaac builds, I'm your guide to the Dig Log.",
    cards: [
      { t: "The Dig Log", s: "All projects", a: "The Dig Log is the full list of Isaac's projects, research and jobs. Moreno Captures, ESPN Hub, Code Valkyrie and his independent study are all in there.", open: ["log", null, "Open the Dig Log"] },
      { t: "Moreno Captures", s: "Full-stack app", a: "Moreno Captures is the web app for Isaac's photography business: a public photo gallery, a booking inquiry form, and an authenticated admin panel. Built with React, Vite and Supabase.", open: ["project", "moreno-captures", "Open project"] },
      { t: "This site", s: "Playable portfolio", a: "The campus you are walking around is itself a project: original pixel art, vanilla HTML, CSS and JavaScript, with a plain recruiter page for the same content.", open: ["project", "this-site", "Open project"] },
    ],
  },
  gator: {
    name: "The Gator (Florida)", short: "the Gator", title: "Pick a story", school: "Florida", token: "experience",
    greet: "Hey. The Gator here, in from Florida. I hang out by the museum and keep an eye on Isaac's photo work. Want the story?",
    cards: [
      { t: "Disney PhotoPass", s: "Jun 2024 - Jan 2025", a: "In the Disney College Program Isaac was a Cast Member and PhotoPass photographer at Walt Disney World, shooting guests in a fast-paced setting with strict quality and turnaround standards.", open: ["project", "disney-photopass", "Open experience"] },
      { t: "Clear View Realty", s: "Jun 2021 - Jun 2023", a: "From 2021 to 2023 Isaac worked as a real estate agent in El Paso, handling pricing analysis, negotiations and contracts for clients.", open: ["project", "clear-view-realty", "Open experience"] },
      { t: "Moreno Captures", s: "Full-stack app", a: "Moreno Captures is the web app for Isaac's photography business: a public photo gallery, a booking inquiry form, and an authenticated admin panel.", open: ["project", "moreno-captures", "Open project"] },
    ],
  },
  longhorn: {
    name: "The Longhorn (Texas)", short: "the Longhorn", title: "Choose a course", school: "Texas", token: "resume",
    greet: "Hey there. I'm the Longhorn, visiting from Texas. I keep the paper trail straight: degree, minor, and the resume.",
    cards: [
      { t: "B.S. Computer Science", s: "Major", a: "He's a Computer Science senior at The University of Texas at El Paso, with expected graduation in December 2026.", open: ["landmark", "library", "Resume"] },
      { t: "Minor in Mathematics", s: "Minor", a: "Alongside the CS degree he's finishing a Minor in Mathematics at UTEP." },
      { t: "CS 4371", s: "Independent study", a: "Isaac's independent study with Dr. Yoonsik Cheon asks whether Javadoc documentation helps an LLM write better Java unit tests. It's in progress: a literature review, picking Java projects to test, and learning mutation testing (PIT) to measure the tests.", open: ["project", "javadoc-llm-tests", "Open the study"] },
    ],
  },
  eagle: {
    name: "The Eagle (North Texas)", short: "the Eagle", title: "Game day picks", school: "North Texas", token: "skills",
    greet: "Hey. I'm the Eagle, visiting from North Texas. Isaac's sports work and skill tree live on this side of campus. What do you want to see?",
    cards: [
      { t: "ESPN Hub", s: "Web dashboard", a: "ESPN Hub is a multi-sport dashboard on ESPN's public REST APIs with live scores, standings and stats for the NFL, NBA and MLB. Built with React, Vite and Recharts.", open: ["project", "espn-hub", "Open project"] },
      { t: "Code Valkyrie", s: "UTEP Hackathon", a: "Code Valkyrie was a 48-hour UTEP hackathon team prototype that combines drone video, NLP on 911 transcripts and real-time risk scoring to help dispatchers assess threats.", open: ["project", "code-valkyrie", "Open project"] },
      { t: "Skills", s: "Skill tree", a: "The Don Haskins Center next door holds Isaac's skill tree: languages, frameworks and tools from his projects.", open: ["landmark", "haskins", "Skill tree"] },
    ],
  },
};

// Optional campus tour: talk to each host mascot for a token. Never blocks the rest of the site.
export const QUEST = {
  title: "Campus Tour",
  intro: "Optional tour: talk to each host mascot.",
  doneTitle: "You've seen it all",
  doneBody: "Thanks for walking the campus tour. Download Isaac's resume or send him a note.",
  steps: [
    { id: "about", mascot: "miner", label: "About", objective: "Talk to Pete the Miner about Isaac", area: "main" },
    { id: "projects", mascot: "bear", label: "Projects", objective: "Talk to the Bear about what Isaac builds", area: "main" },
    { id: "experience", mascot: "gator", label: "Experience", objective: "Talk to the Gator about Isaac's work", area: "main" },
    { id: "resume", mascot: "longhorn", label: "Resume", objective: "Talk to the Longhorn about Isaac's resume", area: "main" },
    { id: "skills", mascot: "eagle", label: "Skills", objective: "Ride the Sun Metro, then talk to the Eagle about skills", area: "athletics" },
  ],
};

// Visiting mascots who wander campus (short lines, not a full topic menu).
export const VISITORS = {
  aggie:   { name: "The Aggie (Texas A&M)", short: "the Aggie", line: "Howdy. I'm the Aggie, visiting from Texas A&M. Isaac's independent study lives in the Chemistry and Computer Science Building." },
  frog:    { name: "The Horned Frog (TCU)", short: "the Horned Frog", line: "Hey. The Horned Frog, in from TCU. UTEP opened in 1914 as the Texas State School of Mines and Metallurgy. Wild, right?" },
  cougar:  { name: "The Cougar (Houston)", short: "the Cougar", line: "Hey. I'm the Cougar, visiting from Houston. The Sun Metro stop at the south end of campus runs over to the Sun Bowl." },
  raider:  { name: "The Raider (Texas Tech)", short: "the Raider", line: "Hey. The Raider, in from Texas Tech. Bhutanese-inspired architecture has been part of this campus since 1917. Look at those red bands." },
  lobo:    { name: "The Lobo (New Mexico)", short: "the Lobo", line: "Hey. I'm the Lobo, just over the state line from New Mexico. In a hurry? The Skip game button shows everything on one page." },
  mustang: { name: "The Mustang (SMU)", short: "the Mustang", line: "Hey. The Mustang, visiting from SMU. Press E next to a building or a host mascot to open Isaac's work." },
  owl:     { name: "The Owl (Rice)", short: "the Owl", line: "Hey. I'm the Owl, visiting from Rice. The library holds Isaac's resume if you want the one-page version." },
  runner:  { name: "The Roadrunner (UTSA)", short: "the Roadrunner", line: "Hey. The Roadrunner, in from UTSA. Adobe the cat will trail you around campus if you start walking." },
  wildcat: { name: "The Wildcat (Arizona)", short: "the Wildcat", line: "Hey. I'm the Wildcat, visiting from Arizona. The Don Haskins Center on the athletics side holds Isaac's skill tree." },
  panther: { name: "The Panther (Prairie View A&M)", short: "the Panther", line: "Hey. The Panther, in from Prairie View A&M. The Mining Minds sculpture on the Sun Bowl side is where you can send Isaac a note." },
};

// Adobe, the cat who follows you around.
export const PET_TALK = {
  name: "Adobe the Cat", short: "Adobe", title: "Ask Adobe",
  greet: "Mrrp. Adobe is the campus cat who follows you around. Adobe keeps an eye on where you haven't been yet, and will purr if you pet them.",
  cards: [
    { t: "Pet Adobe", s: "A good cat", a: "pet" },
    { t: "Where next?", s: "Unvisited places", a: "next" },
    { t: "Cat fact", s: "Campus companion", a: "Adobe is an original pixel cat made for this portfolio, named after the adobe brick you see all over El Paso." },
  ],
};

export const STUDENT_LINES = [
  "I'm headed to the Chemistry and Computer Science Building. Isaac's independent study lives in there.",
  "UTEP opened in 1914 as the Texas State School of Mines and Metallurgy. Wild, right?",
  "The Sun Metro stop is at the south end of campus. It goes over to the Sun Bowl and the Don Haskins Center.",
  "Bhutanese-inspired architecture has been part of the campus design since 1917. Look at those red bands!",
  "In a hurry? The Skip game button in the corner shows everything on one page.",
];
