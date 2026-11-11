// Mission, loot, and dungeon layouts. Portfolio text still comes from data.js.
import { LANDMARKS, PROJECTS, PROFILE, EDUCATION } from "./data.js";

const LM = Object.fromEntries(LANDMARKS.map((l) => [l.id, l]));
const rewardFor = (id, extra) => ({ mission: id, ...extra });

// Rarity colors match a typical ARPG scheme, not a ripped UI skin.
export const RARITY = {
  Common: { color: "#d8d4cc", glow: "rgba(200,200,200,0.35)" },
  Rare: { color: "#5ad0ff", glow: "rgba(80,180,255,0.5)" },
  Unique: { color: "#d46cff", glow: "rgba(180,80,255,0.55)" },
  Legendary: { color: "#ff9a2a", glow: "rgba(255,140,40,0.65)" },
};

export const STARTER_GEAR = [
  { id: "pick-campus", name: "Campus Pick", slot: "melee", rarity: "Common", power: 8, icon: "sword", desc: "A sturdy starter tool. Every miner starts somewhere." },
  { id: "sling-practice", name: "Practice Sling", slot: "ranged", rarity: "Common", power: 5, icon: "bow", desc: "Good for reaching the far side of the plaza." },
  { id: "miner-cap", name: "Miner Cap", slot: "helm", rarity: "Common", power: 4, icon: "helm", desc: "Keeps the desert sun off your eyes." },
  { id: "orange-mail", name: "Orange Mail", slot: "chest", rarity: "Common", power: 6, icon: "chestarm", desc: "UTEP orange, patched by hand." },
  { id: "trail-pants", name: "Trail Pants", slot: "legs", rarity: "Common", power: 4, icon: "legs", desc: "Built for walking a tight campus." },
  { id: "work-boots", name: "Work Boots", slot: "boots", rarity: "Common", power: 4, icon: "boots", desc: "Dusty, reliable, El Paso tough." },
];

// Legendary (or Unique) loot dropped by each mission, tied to Isaac's real work.
export const LOOT = {
  plaza: { id: "artifact-about", name: "Miner's Portrait", slot: "talisman", rarity: "Unique", power: 12, icon: "head", desc: "A painted token of Isaac Moreno, CS senior at UTEP." },
  union: { id: "artifact-experience", name: "PhotoPass Lens", slot: "artifact", rarity: "Legendary", power: 18, icon: "castle", desc: "A lens that remembers 200+ photos a shift at Walt Disney World." },
  library: { id: "artifact-resume", name: "Paper Trail", slot: "talisman", rarity: "Unique", power: 14, icon: "paper", desc: "Isaac's resume, ready to download or read in the field." },
  ccsb: { id: "artifact-research", name: "Javadoc Quill", slot: "artifact", rarity: "Legendary", power: 18, icon: "quill", desc: "A research tool from CS 4371. Mutation testing (PIT) is still being learned." },
  engineering: { id: "artifact-valkyrie", name: "Valkyrie Shield", slot: "artifact", rarity: "Legendary", power: 16, icon: "shield", desc: "Forged in 48 hours at a UTEP hackathon." },
  sunbowl: { id: "artifact-espn", name: "Hub Compass", slot: "ranged", rarity: "Unique", power: 15, icon: "trophy", desc: "Points to live scores across the NFL, NBA, and MLB." },
  museum: { id: "artifact-captures", name: "Capture Crystal", slot: "melee", rarity: "Legendary", power: 17, icon: "camera", desc: "A photographer's focus, set in a crystal from Moreno Captures." },
  haskins: { id: "artifact-skills", name: "Skill Medallion", slot: "talisman", rarity: "Unique", power: 14, icon: "star", desc: "A compact inventory of the tools Isaac actually uses." },
  pick: { id: "artifact-contact", name: "Ping Charm", slot: "artifact", rarity: "Unique", power: 13, icon: "envelope", desc: "A charm that opens a line to Isaac. Email is fastest." },
  lhakhang: { id: "artifact-site", name: "Gift From Bhutan", slot: "helm", rarity: "Rare", power: 11, icon: "knowledge", desc: "A quiet token from The Lhakhang. Read the campus facts inside." },
};

const unionLootNote = "Disney PhotoPass, 2024-2025 Disney College Program, and Clear View Realty.";
const panelBlurb = (type, id) => {
  if (type === "project") return PROJECTS.find((p) => p.id === id)?.summary || "";
  if (type === "about") return `${PROFILE.name}, ${PROFILE.headline}. ${PROFILE.graduation}.`;
  if (type === "experience") return unionLootNote;
  if (type === "resume") return "View or download Resume_Isaac_Moreno.pdf.";
  if (type === "skills") return "Languages, frameworks, testing, cloud, and tools from the resume.";
  if (type === "contact") return `Email ${PROFILE.email}. El Paso, TX. Looking for new-grad software engineering roles.`;
  if (type === "lhakhang") return "About this site, campus facts, and a short disclaimer.";
  return "";
};

function mission(id, extra) {
  const l = LM[id];
  return {
    id,
    name: l.name,
    subtitle: extra.subtitle,
    objective: extra.objective,
    theme: extra.theme,
    recommended: extra.recommended,
    map: extra.map,
    legend: extra.legend,
    loot: LOOT[id],
    panel: l.panel,
    fact: l.fact,
    source: l.source,
    blurb: panelBlurb(l.panel.type, l.panel.id),
    adv: l.adv,
    pos: extra.pos, // node position on the mission-select map, 0-1
  };
}

/*
  Map legend (shared):
  # wall   . floor   + carpet   , grass   ~ water   = path
  S spawn  C chest   T torch    E enemy   G gate
  P pillar B barrel  K crate    F banner
*/
export const MISSIONS = [
  mission("plaza", {
    subtitle: "About Me",
    objective: "Walk the hall and open the portrait chest",
    theme: { floor: "plaza", wall: "bhutan", accent: "carpet" },
    recommended: 10,
    pos: { x: 0.48, y: 0.50 },
    map: [
      "####################",
      "#T....+...+....T#..#",
      "#.....+++++.....F..#",
      "#..F..++S++..F.....#",
      "#.....+++++.....B..#",
      "#T....+...+....T#..#",
      "######.....########.#",
      "#..............P...#",
      "#..K..........E....#",
      "#..............T...#",
      "#........C.........#",
      "#..............T...#",
      "####################",
    ],
  }),
  mission("union", {
    subtitle: "Experience",
    objective: "Cross the guest hall and claim the lens",
    theme: { floor: "tile", wall: "brick", accent: "carpet" },
    recommended: 14,
    pos: { x: 0.33, y: 0.44 },
    map: [
      "########################",
      "#S.T....+.........T....#",
      "#......+++......E......#",
      "#..##################..#",
      "#..#T..............T#..#",
      "#..#...B..E..K......#F.#",
      "#..#................#..#",
      "#..########..########..#",
      "#.....T..........E.....#",
      "#......................#",
      "#F.......C..........T..#",
      "########################",
    ],
  }),
  mission("library", {
    subtitle: "Resume",
    objective: "Find the Paper Trail in the stacks",
    theme: { floor: "wood", wall: "darkwood", accent: "carpet" },
    recommended: 16,
    pos: { x: 0.56, y: 0.40 },
    map: [
      "########################",
      "#S....#....#....#....T.#",
      "#.....P....P....P......#",
      "#..E..#....#....#..E...#",
      "#.....#....#....#......#",
      "####..####..####..####.#",
      "#T.....................#",
      "#......E.........K.....#",
      "#......................#",
      "#..##################..#",
      "#..#T.....C........T#..#",
      "########################",
    ],
  }),
  mission("ccsb", {
    subtitle: "CS 4371 Independent Study",
    objective: "Reach the lab chest at the end of the wing",
    theme: { floor: "tile", wall: "stone", accent: "carpet" },
    recommended: 18,
    pos: { x: 0.72, y: 0.30 },
    map: [
      "##########################",
      "#S.T.................T...#",
      "#....#####....#####......#",
      "#..E.#...#....#...#..E...#",
      "#....#...P....P...#......#",
      "#....##..#....#..##......#",
      "#......E..........K......#",
      "########....##....########",
      "#T....................T..#",
      "#.....E........E.........#",
      "#...........C............#",
      "##########################",
    ],
  }),
  mission("engineering", {
    subtitle: "Code Valkyrie",
    objective: "Clear the workshop and take the shield",
    theme: { floor: "cobble", wall: "copper", accent: "tile" },
    recommended: 18,
    pos: { x: 0.82, y: 0.50 },
    map: [
      "########################",
      "#S....T....K....T......#",
      "#......................#",
      "#..##########....E.....#",
      "#..#........#..........#",
      "#..#..E.....######.....#",
      "#..#..............#....#",
      "#..####..P........#....#",
      "#.....T......E....T....#",
      "#......................#",
      "#F........C..........F.#",
      "########################",
    ],
  }),
  mission("sunbowl", {
    subtitle: "ESPN Hub",
    objective: "Walk the tunnel to the field chest",
    theme: { floor: "field", wall: "stone", accent: "carpet2" },
    recommended: 16,
    pos: { x: 0.30, y: 0.20 },
    map: [
      "##########################",
      "#S.T=======..............#",
      "#...=======....E.........#",
      "#####=====################",
      "#...=====....T...........#",
      "#...=====.........E......#",
      "#...=====#################",
      "#...=====....K...........#",
      "#...=====.........E......#",
      "#T..=====.............T..#",
      "#.......=======C========.#",
      "##########################",
    ],
  }),
  mission("museum", {
    subtitle: "Moreno Captures",
    objective: "Tour the galleries and open the crystal chest",
    theme: { floor: "marble", wall: "bhutan", accent: "carpet" },
    recommended: 16,
    pos: { x: 0.36, y: 0.68 },
    map: [
      "########################",
      "#S.T....P....P....T....#",
      "#......................#",
      "#..E..#####..#####.....#",
      "#.....#+++#..#+++#..E..#",
      "#.....#+++#..#+++#.....#",
      "#.....###.....###......#",
      "#.........E............#",
      "#..F.............F.....#",
      "#T.........C.........T.#",
      "########################",
    ],
  }),
  mission("haskins", {
    subtitle: "Skills",
    objective: "Cross the training floor and claim the medallion",
    theme: { floor: "wood", wall: "brick", accent: "carpet2" },
    recommended: 15,
    pos: { x: 0.16, y: 0.34 },
    map: [
      "######################",
      "#S.T..............T..#",
      "#....E.....E.........#",
      "#..##############....#",
      "#..#............#....#",
      "#..#..E....E....#....#",
      "#..#............#....#",
      "#..######..######....#",
      "#.....T..........E...#",
      "#..........C.......T.#",
      "######################",
    ],
  }),
  mission("pick", {
    subtitle: "Contact",
    objective: "Follow the mine to the glowing sculpture chest",
    theme: { floor: "cobble", wall: "stone", accent: "dirt" },
    recommended: 14,
    pos: { x: 0.64, y: 0.74 },
    map: [
      "########################",
      "#S.T...................#",
      "#.....####.............#",
      "#..E..#  #..####.......#",
      "#.....#  #..#  #..E....#",
      "#######  #..#  ####....#",
      "#........#..#.....T....#",
      "#..K.....####..........#",
      "#...............E......#",
      "#T........C..........T.#",
      "########################",
    ],
  }),
  mission("lhakhang", {
    subtitle: "About this site",
    objective: "Walk the shrine path and open the gift chest",
    theme: { floor: "plaza", wall: "bhutan", accent: "gold" },
    recommended: 12,
    pos: { x: 0.14, y: 0.56 },
    map: [
      "####################",
      "#S.T....+....T.....#",
      "#......+++.........#",
      "#..F..+++++..F.....#",
      "#......+++.........#",
      "#.......+....P.....#",
      "#.............E....#",
      "#....P.............#",
      "#T........C......T.#",
      "####################",
    ],
  }),
];

export const MISSION_BY_ID = Object.fromEntries(MISSIONS.map((m) => [m.id, m]));

export function parseMap(mission) {
  const rows = mission.map;
  const h = rows.length, w = Math.max(...rows.map((r) => r.length));
  const tiles = [];
  const list = { spawn: null, chest: null, enemies: [], torches: [], props: [], floor: [] };
  const th = mission.theme;
  for (let y = 0; y < h; y++) {
    tiles[y] = [];
    const row = rows[y].padEnd(w, "#");
    for (let x = 0; x < w; x++) {
      const ch = row[x];
      let floor = th.floor, solid = false, kind = "floor", mat = th.wall;
      if (ch === "#") { solid = true; kind = "wall"; }
      else if (ch === " ") { solid = true; kind = "void"; floor = null; }
      else if (ch === "~") { floor = "water"; kind = "water"; solid = true; }
      else if (ch === "+") floor = th.accent;
      else if (ch === "=") floor = "path";
      else if (ch === ",") floor = "grass";
      else if (ch === "S") { list.spawn = { x: x + 0.5, y: y + 0.5 }; }
      else if (ch === "C") list.chest = { x: x + 0.5, y: y + 0.5 };
      else if (ch === "T") list.torches.push({ x: x + 0.5, y: y + 0.5 });
      else if (ch === "E") list.enemies.push({ x: x + 0.5, y: y + 0.5 });
      else if (ch === "P") { list.props.push({ type: "pillar", x: x + 0.5, y: y + 0.5 }); solid = true; }
      else if (ch === "B") list.props.push({ type: "barrel", x: x + 0.5, y: y + 0.5 });
      else if (ch === "K") list.props.push({ type: "crate", x: x + 0.5, y: y + 0.5 });
      else if (ch === "F") list.props.push({ type: "banner", x: x + 0.5, y: y + 0.5 });
      tiles[y][x] = { floor, solid, kind, mat, ch };
      if (floor && kind !== "void") list.floor.push({ x, y, floor });
    }
  }
  return { w, h, tiles, ...list, theme: th };
}
