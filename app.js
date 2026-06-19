'use strict';

// ── LAYERS ────────────────────────────────────────────────────────────────────
const LAYERS = [
  { id:'s', label:'Study',  color:'#00BEAA' },
  { id:'r', label:'Revise', color:'#FFB018' },
  { id:'t', label:'Test',   color:'#007F78' },
];

// ── SUBJECTS + CLASS X NCERT DATA ─────────────────────────────────────────────
const SUBJECTS = [
  {
    id:'math', label:'Math', emoji:'📐', accent:'#00BEAA', cls:'mt',
    chapters:[
      { name:'Ch 1: Real Numbers', topics:['1.1 Introduction','1.2 The Fundamental Theorem of Arithmetic','1.3 Revisiting Irrational Numbers','1.4 Summary'] },
      { name:'Ch 2: Polynomials', topics:['2.1 Introduction','2.2 Geometrical Meaning of the Zeroes of a Polynomial','2.3 Relationship between Zeroes and Coefficients of a Polynomial','2.4 Summary'] },
      { name:'Ch 3: Pair of Linear Equations in Two Variables', topics:['3.1 Introduction','3.2 Graphical Method of Solution','3.3 Algebraic Methods of Solving','3.3.1 Substitution Method','3.3.2 Elimination Method','3.4 Summary'] },
      { name:'Ch 4: Quadratic Equations', topics:['4.1 Introduction','4.2 Quadratic Equations','4.3 Solution by Factorisation','4.4 Nature of Roots','4.5 Summary'] },
      { name:'Ch 5: Arithmetic Progressions', topics:['5.1 Introduction','5.2 Arithmetic Progressions','5.3 nth Term of an AP','5.4 Sum of First n Terms of an AP','5.5 Summary'] },
      { name:'Ch 6: Triangles', topics:['6.1 Introduction','6.2 Similar Figures','6.3 Similarity of Triangles','6.4 Criteria for Similarity of Triangles','6.5 Summary'] },
      { name:'Ch 7: Coordinate Geometry', topics:['7.1 Introduction','7.2 Distance Formula','7.3 Section Formula','7.4 Summary'] },
      { name:'Ch 8: Introduction to Trigonometry', topics:['8.1 Introduction','8.2 Trigonometric Ratios','8.3 Trigonometric Ratios of Some Specific Angles','8.4 Trigonometric Identities','8.5 Summary'] },
      { name:'Ch 9: Some Applications of Trigonometry', topics:['9.1 Heights and Distances','9.2 Summary'] },
      { name:'Ch 10: Circles', topics:['10.1 Introduction','10.2 Tangent to a Circle','10.3 Number of Tangents from a Point on a Circle','10.4 Summary'] },
      { name:'Ch 11: Areas Related to Circles', topics:['11.1 Areas of Sector and Segment of a Circle','11.2 Summary'] },
      { name:'Ch 12: Surface Areas and Volumes', topics:['12.1 Introduction','12.2 Surface Area of a Combination of Solids','12.3 Volume of a Combination of Solids','12.4 Summary'] },
      { name:'Ch 13: Statistics', topics:['13.1 Introduction','13.2 Mean of Grouped Data','13.3 Mode of Grouped Data','13.4 Median of Grouped Data','13.5 Summary'] },
      { name:'Ch 14: Probability', topics:['14.1 Probability — A Theoretical Approach','14.2 Summary'] },
      { name:'Appendix A1: Proofs in Mathematics', topics:['A1.1 Introduction','A1.2 Mathematical Statements Revisited','A1.3 Deductive Reasoning','A1.4 Conjectures, Theorems, Proofs and Mathematical Reasoning','A1.5 Negation of a Statement','A1.6 Converse of a Statement','A1.7 Proof by Contradiction','A1.8 Summary'] },
      { name:'Appendix A2: Mathematical Modelling', topics:['A2.1 Introduction','A2.2 Stages in Mathematical Modelling','A2.3 Some Illustrations','A2.4 Why is Mathematical Modelling Important?','A2.5 Summary'] },
    ],
  },
  {
    id:'science', label:'Science', emoji:'🔬', accent:'#FFB018', cls:'sc',
    chapters:[
      { name:'Ch 1: Chemical Reactions and Equations', topics:['1.1.1 Writing a Chemical Equation','1.1.2 Balanced Chemical Equations','1.2.1 Combination Reaction','1.2.2 Decomposition Reaction','1.2.3 Displacement Reaction','1.2.4 Double Displacement Reaction','1.2.5 Oxidation and Reduction','1.3.1 Corrosion','1.3.2 Rancidity'] },
      { name:'Ch 2: Acids, Bases and Salts', topics:['2.1.1 Acids and Bases in the Laboratory','2.2 What do all Acids and Bases have in Common?','2.4.1 Family of Salts','2.4.2 pH of Salts','2.4.3 Chemicals from Common Salt'] },
      { name:'Ch 3: Metals and Non-metals', topics:['3.1.1 Physical Properties: Metals','3.1.2 Physical Properties: Non-metals','3.2.4 How do Metals react with Solutions of other Metal Salts?','3.2.5 The Reactivity Series','3.3.1 Properties of Ionic Compounds','3.4.2 Enrichment of Ores','3.4.3 Extracting Metals Low in the Activity Series','3.4.5 Extracting Metals towards the Top of the Activity Series'] },
      { name:'Ch 4: Carbon and its Compounds', topics:['4.1 Bonding in Carbon — The Covalent Bond','4.2.1 Saturated and Unsaturated Carbon Compounds','4.2.2 Chains, Branches and Rings','4.2.3 Will you be my Friend?','4.2.4 Homologous Series','4.2.5 Nomenclature of Carbon Compounds','4.3.3 Addition Reaction','4.3.4 Substitution Reaction','4.4.1 Properties of Ethanol','4.4.2 Properties of Ethanoic Acid'] },
      { name:'Ch 5: Life Processes', topics:['Overview'] },
      { name:'Ch 6: Control and Coordination', topics:['6.1 Animals – Nervous System'] },
      { name:'Ch 7: How do Organisms Reproduce?', topics:['7.1 Do Organisms Create Exact Copies of Themselves?','7.2.2 Fragmentation','7.2.3 Regeneration','7.2.4 Budding','7.3.3 Reproduction in Human Beings'] },
      { name:'Ch 8: Heredity', topics:['Overview'] },
      { name:'Ch 9: Light – Reflection and Refraction', topics:['9.2.3 Sign Convention for Reflection by Spherical Mirrors','9.2.4 Mirror Formula and Magnification','9.3.3 Refraction by Spherical Lenses'] },
      { name:'Ch 10: The Human Eye and the Colourful World', topics:['10.1 The Human Eye','10.3 Refraction of Light through a Prism'] },
      { name:'Ch 11: Electricity', topics:['11.1 Electric Current and Circuit','11.2 Electric Potential and Potential Difference','11.3 Circuit Diagram','11.4 Ohm\'s Law','11.5 Factors on which the Resistance of a Conductor Depends','11.6.1 Resistors in Series','11.6.2 Resistors in Parallel','11.7 Heating Effect of Electric Current'] },
      { name:'Ch 12: Magnetic Effects of Electric Current', topics:['12.1 Magnetic Field and Field Lines','12.2.2 Right-Hand Thumb Rule'] },
      { name:'Ch 13: Our Environment', topics:['13.1.1 Food Chains and Webs','13.2.1 Ozone Layer and How it is Getting Depleted','13.2.2 Managing the Garbage we Produce'] },
    ],
  },
  {
    id:'social', label:'Social', emoji:'🌍', accent:'#007F78', cls:'so',
    chapters:[
      { sec:'🗺️ Contemporary India II', name:'Ch 1: Resources and Development', topics:['Development of Resources','Land Utilisation'] },
      { sec:'🗺️ Contemporary India II', name:'Ch 2: Forest and Wildlife Resources', topics:['Flora and Fauna in India','Conservation of Forest and Wildlife in India','Project Tiger','Types and Distribution of Forest and Wildlife Resources','Community and Conservation'] },
      { sec:'🗺️ Contemporary India II', name:'Ch 3: Water Resources', topics:['Water Scarcity and the Need for Water Conservation and Management','Multi-Purpose River Projects and Integrated Water Resources Management','Rainwater Harvesting'] },
      { sec:'🗺️ Contemporary India II', name:'Ch 4: Agriculture', topics:['Types of Farming','Cropping Pattern','Food Crops other than Grains','Non-Food Crops'] },
      { sec:'🗺️ Contemporary India II', name:'Ch 5: Minerals and Energy Resources', topics:['Mode of Occurrence of Minerals','Non-Ferrous Minerals','Hazards of Mining','Conservation of Minerals','Energy Resources'] },
      { sec:'🗺️ Contemporary India II', name:'Ch 6: Manufacturing Industries', topics:['Importance of Manufacturing','Classification of Industries','Agro-based Industries','Textile Industry','Mineral-based Industries'] },
      { sec:'🗺️ Contemporary India II', name:'Ch 7: Lifelines of National Economy', topics:['Overview'] },
      { sec:'💰 Economic Development', name:'Ch 1: Development', topics:['Average Income','Income and Other Criteria'] },
      { sec:'💰 Economic Development', name:'Ch 2: Sectors of the Indian Economy', topics:['Sectors of Economic Activities','Primary, Secondary and Tertiary Sectors in India'] },
      { sec:'💰 Economic Development', name:'Ch 3: Money and Credit', topics:['Overview'] },
      { sec:'💰 Economic Development', name:'Ch 4: Globalisation and the Indian Economy', topics:['Spreading of Production by an MNC','Technology','Liberalisation of foreign trade and foreign investment policy'] },
      { sec:'💰 Economic Development', name:'Ch 5: Consumer Rights', topics:['Overview'] },
      { sec:'📜 Contemporary World II', name:'Ch I: The Rise of Nationalism in Europe', topics:['Overview'] },
      { sec:'📜 Contemporary World II', name:'Ch II: Nationalism in India', topics:['The First World War, Khilafat and Non-Cooperation'] },
      { sec:'📜 Contemporary World II', name:'Ch III: The Making of a Global World', topics:['The Pre-modern World'] },
      { sec:'📜 Contemporary World II', name:'Ch IV: The Age of Industrialisation', topics:['Overview'] },
      { sec:'📜 Contemporary World II', name:'Ch V: Print Culture and the Modern World', topics:['Overview'] },
      { sec:'🏛️ Democratic Politics II', name:'Ch 1: Power-sharing', topics:['Overview'] },
      { sec:'🏛️ Democratic Politics II', name:'Ch 2: Federalism', topics:['Overview'] },
      { sec:'🏛️ Democratic Politics II', name:'Ch 3: Gender, Religion and Caste', topics:['Overview'] },
      { sec:'🏛️ Democratic Politics II', name:'Ch 4: Political Parties', topics:['Why do we need political parties?','Challenges to political parties'] },
      { sec:'🏛️ Democratic Politics II', name:'Ch 5: Outcomes of Democracy', topics:["How do we assess democracy's outcomes?",'Accountable, responsive and legitimate government','Reduction of inequality and poverty','Accommodation of social diversity'] },
    ],
  },
];

// ── STATE ─────────────────────────────────────────────────────────────────────
const STORAGE_KEY  = 'x_tracker_v1';
const CHECKIN_KEY  = 'x_checkin_v1';
const PLANNER_KEY  = 'x_planner_v1';

const PLAN_DAYS  = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
const PLAN_SLOTS = 32;   // 6:00 AM → 9:30 PM in 30-min increments
const PLAN_START = 6;    // 6 AM

const ACTIVITIES = [
  { id:'school',  label:'School',     code:'SC', color:'#00BEAA', tc:'#fff'     },
  { id:'study',   label:'Self-Study', code:'SD', color:'#007F78', tc:'#fff'     },
  { id:'tuition', label:'Tuitions',   code:'TU', color:'#203233', tc:'#fff'     },
  { id:'play',    label:'Play',       code:'PL', color:'#FFB018', tc:'#203233'  },
  { id:'routine', label:'Routine',    code:'RO', color:'#96ADAF', tc:'#203233'  },
  { id:'rest',    label:'Rest',       code:'RS', color:'#B0C4C5', tc:'#203233'  },
];

let state = {}, checkinData = {}, openChapters = {}, plannerData = {};
let currentSubject = 'math', currentView = 'syllabus';
let plannerWeekOffset = 0, activePlannerCell = null;
let checkinDateOffset = 0;
let dashPlannerWeekOffset = 0;

const PROFILE_KEY = 'x_profile_v1';
const PHOTO_KEY   = 'x_profile_photo_v1';
let profilePhoto  = null; // base64 data URL
let profile = { name:'', grade:'X', school:'', board:'CBSE', city:'', bestStudyTime:'', avgStudyStreak:'' };

// ── SYLLABUS STATE ─────────────────────────────────────────────────────────────
function loadState() {
  try { const s = localStorage.getItem(STORAGE_KEY); if (s) state = JSON.parse(s); } catch(e) {}
  SUBJECTS.forEach(s => s.chapters.forEach((ch, ci) =>
    ch.topics.forEach((_, ti) => LAYERS.forEach(l => {
      const k = `${s.id}-${ci}-${ti}-${l.id}`;
      if (state[k] === undefined) {
        state[k] = (s.id === 'social' && ci === 0 && ti === 1) ? true : false;
      }
    }))
  ));
}
function saveState() { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch(e) {} }

// ── CHECKIN STATE ──────────────────────────────────────────────────────────────
function loadCheckinData() {
  try { const s = localStorage.getItem(CHECKIN_KEY); if (s) checkinData = JSON.parse(s); } catch(e) {}
}
function saveCheckinData() {
  try { localStorage.setItem(CHECKIN_KEY, JSON.stringify(checkinData)); } catch(e) {}
}

// ── PLANNER STATE + ACTIVITY MANAGEMENT ──────────────────────────────────────
const ACTS_KEY     = 'x_planner_acts_v1';
const COLOR_SWATCHES = ['#F87171','#FB923C','#FACC15','#4ADE80','#2DD4BF','#60A5FA','#818CF8','#E879F9','#F472B6','#A78BFA'];
let plannerActs = { custom:[], hidden:[] };
let selMode = false, selectedCells = new Set(), dragActive = false;
let selectedSwatch = COLOR_SWATCHES[0];

function loadPlannerData() {
  try { const s = localStorage.getItem(PLANNER_KEY); if (s) plannerData = JSON.parse(s); } catch(e) {}
}
function savePlannerData() {
  try { localStorage.setItem(PLANNER_KEY, JSON.stringify(plannerData)); } catch(e) {}
}
function loadPlannerActs() {
  try { const s = localStorage.getItem(ACTS_KEY); if (s) plannerActs = { custom:[], hidden:[], ...JSON.parse(s) }; } catch(e) {}
}
function savePlannerActs() {
  try { localStorage.setItem(ACTS_KEY, JSON.stringify(plannerActs)); } catch(e) {}
}
function getAllActivities() {
  return [...ACTIVITIES.filter(a => !plannerActs.hidden.includes(a.id)), ...plannerActs.custom];
}
function isLightColor(hex) {
  const r=parseInt(hex.slice(1,3),16), g=parseInt(hex.slice(3,5),16), b=parseInt(hex.slice(5,7),16);
  return (r*299+g*587+b*114)/1000 > 155;
}
function autoCode(label) {
  const words = label.trim().split(/\s+/);
  return words.length > 1
    ? words.map(w => w[0]).join('').toUpperCase().slice(0,2)
    : label.slice(0,2).toUpperCase();
}

function getWeekMonday(offset) {
  const d = new Date(), day = d.getDay();
  const mon = new Date(d);
  mon.setDate(d.getDate() - (day === 0 ? 6 : day - 1) + offset * 7);
  mon.setHours(0, 0, 0, 0);
  return mon;
}
function getPlannerWeekKey(offset) { return getWeekMonday(offset).toISOString().split('T')[0]; }
function pcKey(d, s) { return `${d}-${s}`; }
function slotLabel(slotIdx) {
  const mins = PLAN_START * 60 + slotIdx * 30;
  const h = Math.floor(mins / 60), m = mins % 60;
  if (slotIdx % 2 !== 0) return '';
  const h12 = h === 0 ? 12 : h > 12 ? h - 12 : h;
  return `${h12}${m ? ':'+String(m).padStart(2,'0') : ''}${h < 12 ? 'a' : 'p'}`;
}

// ── RENDER PLANNER ────────────────────────────────────────────────────────────
function renderPlanner() {
  const el = document.getElementById('planner-view'); if (!el) return;
  const wk = getPlannerWeekKey(plannerWeekOffset);
  const mon = getWeekMonday(plannerWeekOffset);
  const sun = new Date(mon); sun.setDate(sun.getDate() + 6);
  const fmt = d => d.toLocaleDateString('en-IN',{day:'numeric',month:'short'});
  const weekLabel = `${fmt(mon)} – ${fmt(sun)}`;
  const wd = plannerData[wk] || {};
  const acts = getAllActivities();

  const dayHdrs = PLAN_DAYS.map((lbl, i) => {
    const dd = new Date(mon); dd.setDate(dd.getDate() + i);
    const isToday = dd.toDateString() === new Date().toDateString();
    return `<div class="pdh${isToday?' today':''}"><span class="pdh-name">${lbl}</span><span class="pdh-date${isToday?' today':''}">${dd.getDate()}</span></div>`;
  }).join('');

  let rows = '';
  for (let s = 0; s < PLAN_SLOTS; s++) {
    rows += `<div class="ptl${s%2===0?' hour':''}">${slotLabel(s)}</div>`;
    for (let d = 0; d < 7; d++) {
      const ck = pcKey(d,s);
      const act = acts.find(a => a.id === (wd[ck]||''));
      const isSel = selMode && selectedCells.has(ck);
      rows += `<div class="pc${act?' ha':''}${s%2===0?' hl':''}${isSel?' sel':''}"
        data-pck="${ck}"
        style="${act?`background:${act.color};color:${act.tc}`:''};"
        onclick="handleCellClick(${d},${s})">${act?`<b>${act.code}</b>`:''}</div>`;
    }
  }

  const legend = acts.map(a =>
    `<div class="pleg"><div class="pleg-dot" style="background:${a.color}"></div>${a.label}</div>`
  ).join('') + `<button class="pleg pleg-manage" onclick="openManageActs()">⚙ Activities</button>`;

  el.innerHTML = `<div class="planner-section">
    <div class="planner-nav-row">
      <button class="planner-nav-btn" onclick="plannerWeekOffset--;selectedCells.clear();renderPlanner()">‹</button>
      <span class="planner-week-label">${weekLabel}</span>
      <button class="planner-nav-btn" onclick="plannerWeekOffset++;selectedCells.clear();renderPlanner()">›</button>
      <button class="sel-toggle${selMode?' active':''}" onclick="toggleSelMode()">${selMode?'✕ Done':'⬚ Select'}</button>
    </div>
    ${selMode?`<div class="sel-hint-bar">${selectedCells.size?`<b>${selectedCells.size}</b> slot${selectedCells.size>1?'s':''} selected — tap activity chips below or drag to add more`:'Tap or drag cells to select, then pick an activity'}</div>`:''}
    <div class="planner-legend">${legend}</div>
    <div class="pgw" id="pgw"
      ontouchstart="pgTouchStart(event)"
      ontouchmove="pgTouchMove(event)"
      ontouchend="pgTouchEnd()">
      <div class="pg">
        <div class="ptl-hdr"></div>${dayHdrs}
        ${rows}
      </div>
    </div>
    ${!selMode?'<div class="planner-hint">Tap a slot to assign · ⬚ Select for multi-slot</div>':''}
  </div>
  <div class="sel-bar${selMode&&selectedCells.size>0?' show':''}" id="sel-bar">
    <div class="sel-bar-top">
      <span id="sel-count">${selectedCells.size} slot${selectedCells.size!==1?'s':''} selected</span>
      <button class="sel-clear-btn" onclick="clearSel()">Clear all</button>
    </div>
    <div class="sel-acts-scroll">
      ${acts.map(a=>`<button class="sel-chip" style="background:${a.color};color:${a.tc}" onclick="applyToSel('${a.id}')">${a.label}</button>`).join('')}
      <button class="sel-chip sel-chip-clear" onclick="applyToSel('')">✕ Clear slots</button>
    </div>
  </div>
  <div class="manage-wrap" id="manage-wrap">
    <div class="act-overlay" onclick="closeManageActs()"></div>
    <div class="manage-sheet" id="manage-sheet"></div>
  </div>
  <div class="act-picker" id="act-picker">
    <div class="act-overlay" onclick="closePlannerPicker()"></div>
    <div class="act-sheet">
      <div class="act-sheet-hdr">
        <span class="act-sheet-title" id="picker-title">Set Activity</span>
        <button class="act-close" onclick="closePlannerPicker()">✕</button>
      </div>
      <div class="act-opts" id="act-opts"></div>
    </div>
  </div>`;
}

// ── SINGLE-CELL PICKER ────────────────────────────────────────────────────────
function handleCellClick(d, s) {
  const wk = getPlannerWeekKey(plannerWeekOffset);
  if (selMode) toggleCellSel(d, s);
  else openPlannerPicker(wk, d, s);
}

function openPlannerPicker(wk, dayIdx, slotIdx) {
  activePlannerCell = { wk, dayIdx, slotIdx };
  const mon = getWeekMonday(plannerWeekOffset);
  const dd = new Date(mon); dd.setDate(dd.getDate() + dayIdx);
  const dayStr = dd.toLocaleDateString('en-IN',{weekday:'short',day:'numeric',month:'short'});
  const mins = PLAN_START * 60 + slotIdx * 30;
  const h = Math.floor(mins / 60), m = mins % 60;
  const h12 = h === 0 ? 12 : h > 12 ? h - 12 : h;
  const timeStr = `${h12}:${String(m).padStart(2,'0')} ${h < 12 ? 'AM' : 'PM'}`;
  const wd = plannerData[wk] || {};
  const curr = wd[pcKey(dayIdx, slotIdx)] || '';
  const acts = getAllActivities();

  document.getElementById('picker-title').textContent = `${dayStr} · ${timeStr}`;
  document.getElementById('act-opts').innerHTML = acts.map(a =>
    `<button class="act-opt${a.id===curr?' sel':''}" onclick="setPlannerActivity('${a.id}')">
      <div class="act-dot" style="background:${a.color}"></div>
      <span>${a.label}</span>
      ${a.id===curr?'<span class="act-chk">✓</span>':''}
    </button>`
  ).join('') +
    `<button class="act-opt clear-opt" onclick="setPlannerActivity('')">
      <div class="act-dot" style="background:var(--surface);border:1.5px solid var(--text3)"></div>
      <span style="color:var(--text3)">Clear</span>
    </button>`;

  const p = document.getElementById('act-picker');
  p.style.display = 'flex';
  requestAnimationFrame(() => p.classList.add('open'));
}

function closePlannerPicker() {
  const p = document.getElementById('act-picker');
  p.classList.remove('open');
  setTimeout(() => { if (p) p.style.display = 'none'; }, 250);
}

function setPlannerActivity(actId) {
  if (!activePlannerCell) return;
  const { wk, dayIdx, slotIdx } = activePlannerCell;
  if (!plannerData[wk]) plannerData[wk] = {};
  const k = pcKey(dayIdx, slotIdx);
  if (actId) plannerData[wk][k] = actId;
  else delete plannerData[wk][k];
  savePlannerData();
  closePlannerPicker();
  setTimeout(() => renderPlanner(), 270);
}

// ── SELECTION MODE ────────────────────────────────────────────────────────────
function toggleSelMode() {
  selMode = !selMode;
  if (!selMode) selectedCells.clear();
  renderPlanner();
}

function toggleCellSel(d, s) {
  const k = pcKey(d, s);
  if (selectedCells.has(k)) selectedCells.delete(k);
  else selectedCells.add(k);
  const el = document.querySelector(`[data-pck="${k}"]`);
  if (el) el.classList.toggle('sel', selectedCells.has(k));
  updateSelBar();
}

function updateSelBar() {
  const bar  = document.getElementById('sel-bar');
  const cnt  = document.getElementById('sel-count');
  const hint = document.querySelector('.sel-hint-bar');
  const n = selectedCells.size;
  if (bar) bar.classList.toggle('show', n > 0);
  if (cnt) cnt.textContent = `${n} slot${n !== 1 ? 's' : ''} selected`;
  if (hint) hint.innerHTML = n
    ? `<b>${n}</b> slot${n>1?'s':''} selected — tap activity chips below or drag to add more`
    : 'Tap or drag cells to select, then pick an activity';
}

function clearSel() {
  selectedCells.clear();
  document.querySelectorAll('.pc.sel').forEach(el => el.classList.remove('sel'));
  updateSelBar();
}

function applyToSel(actId) {
  if (!selectedCells.size) return;
  const wk = getPlannerWeekKey(plannerWeekOffset);
  if (!plannerData[wk]) plannerData[wk] = {};
  selectedCells.forEach(ck => {
    if (actId) plannerData[wk][ck] = actId;
    else delete plannerData[wk][ck];
  });
  savePlannerData();
  selectedCells.clear();
  selMode = false;
  renderPlanner();
}

// Touch drag-select
function pgTouchStart(e) {
  if (!selMode) return;
  dragActive = true;
  const t = e.touches[0];
  selectAtPoint(t.clientX, t.clientY);
}
function pgTouchMove(e) {
  if (!selMode || !dragActive) return;
  e.preventDefault();
  const t = e.touches[0];
  selectAtPoint(t.clientX, t.clientY);
}
function pgTouchEnd() { dragActive = false; }
function selectAtPoint(x, y) {
  const el = document.elementFromPoint(x, y)?.closest('[data-pck]');
  if (!el) return;
  const k = el.dataset.pck;
  if (!k || selectedCells.has(k)) return;
  selectedCells.add(k);
  el.classList.add('sel');
  updateSelBar();
}

// ── MANAGE ACTIVITIES ─────────────────────────────────────────────────────────
function openManageActs() {
  const wrap  = document.getElementById('manage-wrap');
  const sheet = document.getElementById('manage-sheet');
  if (!wrap || !sheet) return;
  selectedSwatch = COLOR_SWATCHES[0];
  renderManageSheet(sheet);
  wrap.style.display = 'flex';
  requestAnimationFrame(() => wrap.classList.add('open'));
}
function closeManageActs() {
  const wrap = document.getElementById('manage-wrap');
  if (!wrap) return;
  wrap.classList.remove('open');
  setTimeout(() => { if (wrap) wrap.style.display = 'none'; }, 250);
}
function renderManageSheet(sheet) {
  const acts = getAllActivities();
  const builtinIds = new Set(ACTIVITIES.map(a => a.id));
  sheet.innerHTML = `
    <div class="act-sheet-hdr">
      <span class="act-sheet-title">Manage Activities</span>
      <button class="act-close" onclick="closeManageActs()">✕</button>
    </div>
    <div class="manage-list">
      ${acts.map(a => {
        const isBuiltin = builtinIds.has(a.id);
        return `<div class="manage-item">
          <div class="manage-item-dot" style="background:${a.color}"></div>
          <span class="manage-item-label">${a.label}</span>
          <span class="manage-item-code" style="background:${a.color}1A;color:${a.color}">${a.code}</span>
          ${isBuiltin
            ? `<button class="manage-del-btn" onclick="deleteAct('${a.id}',false)" title="Hide">👁</button>`
            : `<button class="manage-del-btn" onclick="deleteAct('${a.id}',true)" title="Delete">✕</button>`
          }
        </div>`;
      }).join('')}
      ${plannerActs.hidden.length ? `<div class="manage-restore"><button class="restore-btn" onclick="restoreDefaults()">↺ Restore hidden defaults</button></div>` : ''}
    </div>
    <div class="manage-add-section">
      <div class="manage-add-title">Add New Activity</div>
      <input class="manage-input" id="new-act-name" placeholder="Activity name (e.g. Meditation)" maxlength="20" oninput="previewAct()">
      <div class="color-swatches" id="color-swatches">
        ${COLOR_SWATCHES.map((c, i) => `<div class="cswatch${i===0?' sel':''}" style="background:${c}" data-color="${c}" onclick="pickSwatch(this)"></div>`).join('')}
      </div>
      <div class="manage-preview" id="act-preview">
        <div class="act-dot" id="prev-dot" style="background:${COLOR_SWATCHES[0]}"></div>
        <span id="prev-label" style="font-weight:700;color:var(--text3)">Your activity</span>
        <span class="manage-item-code" id="prev-code" style="background:${COLOR_SWATCHES[0]}1A;color:${COLOR_SWATCHES[0]}">??</span>
      </div>
      <button class="save-btn" style="margin-top:8px;padding:12px;font-size:13px" onclick="addNewAct()">+ Add Activity</button>
    </div>`;
}
function pickSwatch(el) {
  document.querySelectorAll('.cswatch').forEach(s => s.classList.remove('sel'));
  el.classList.add('sel');
  selectedSwatch = el.dataset.color;
  const dot = document.getElementById('prev-dot');
  const code = document.getElementById('prev-code');
  if (dot) dot.style.background = selectedSwatch;
  if (code) { code.style.background = selectedSwatch + '1A'; code.style.color = selectedSwatch; }
}
function previewAct() {
  const name = document.getElementById('new-act-name')?.value || '';
  const lbl  = document.getElementById('prev-label');
  const code = document.getElementById('prev-code');
  if (lbl)  lbl.textContent  = name || 'Your activity';
  if (code) code.textContent = autoCode(name) || '??';
}
function addNewAct() {
  const nameEl = document.getElementById('new-act-name');
  const name = (nameEl?.value || '').trim();
  if (!name) { nameEl?.focus(); return; }
  const color = selectedSwatch;
  const tc = isLightColor(color) ? '#203233' : '#fff';
  plannerActs.custom.push({ id:'cust_'+Date.now(), label:name, code:autoCode(name), color, tc });
  savePlannerActs();
  const sheet = document.getElementById('manage-sheet');
  if (sheet) renderManageSheet(sheet);
  renderPlanner();
}
function deleteAct(id, isCustom) {
  if (isCustom) {
    plannerActs.custom = plannerActs.custom.filter(a => a.id !== id);
  } else {
    if (!plannerActs.hidden.includes(id)) plannerActs.hidden.push(id);
  }
  savePlannerActs();
  const sheet = document.getElementById('manage-sheet');
  if (sheet) renderManageSheet(sheet);
  renderPlanner();
}
function restoreDefaults() {
  plannerActs.hidden = [];
  savePlannerActs();
  const sheet = document.getElementById('manage-sheet');
  if (sheet) renderManageSheet(sheet);
  renderPlanner();
}

// ── PROFILE ───────────────────────────────────────────────────────────────────
function loadProfile() {
  try { const s = localStorage.getItem(PROFILE_KEY); if (s) profile = { ...profile, ...JSON.parse(s) }; } catch(e) {}
  try { profilePhoto = localStorage.getItem(PHOTO_KEY) || null; } catch(e) {}
}
function saveProfileData() {
  try { localStorage.setItem(PROFILE_KEY, JSON.stringify(profile)); } catch(e) {}
}
function saveProfilePhoto(dataUrl) {
  profilePhoto = dataUrl;
  try { localStorage.setItem(PHOTO_KEY, dataUrl); } catch(e) {}
}
function getInitials(name) {
  if (!name) return '?';
  return name.trim().split(/\s+/).map(w=>w[0]).join('').toUpperCase().slice(0,2);
}

// ── DASHBOARD STATS ───────────────────────────────────────────────────────────
function calcStreak() {
  let streak = 0;
  for (let i = 0; i >= -365; i--) {
    const d = new Date(); d.setDate(d.getDate() + i);
    const k = d.toISOString().split('T')[0];
    const e = checkinData[k];
    if (e && (e.mood > 0 || e.highlights || e.lowlights || e.studyH > 0)) streak++;
    else break;
  }
  return streak;
}
function calcAvgMood(days) {
  let sum = 0, count = 0;
  for (let i = 0; i >= -(days-1); i--) {
    const d = new Date(); d.setDate(d.getDate() + i);
    const k = d.toISOString().split('T')[0];
    const e = checkinData[k];
    if (e && e.mood > 0) { sum += e.mood; count++; }
  }
  return count ? (sum/count).toFixed(1) : '—';
}
function calcTimeMins(days, field) {
  let total = 0;
  for (let i = 0; i >= -(days-1); i--) {
    const d = new Date(); d.setDate(d.getDate() + i);
    const k = d.toISOString().split('T')[0];
    const e = checkinData[k];
    if (e) total += (e[field+'H']||0)*60 + (e[field+'M']||0);
  }
  return total;
}
function getMoodTrend(days) {
  const arr = [];
  for (let i = -(days-1); i <= 0; i++) {
    const d = new Date(); d.setDate(d.getDate() + i);
    const k = d.toISOString().split('T')[0];
    const lbl = d.toLocaleDateString('en-IN',{weekday:'short'}).slice(0,2);
    arr.push({ mood: checkinData[k]?.mood || 0, lbl, k, offset: i });
  }
  return arr;
}
function getPlannerWeekStats(weekOffset) {
  const off = weekOffset ?? 0;
  const wk = getPlannerWeekKey(off);
  const wd = plannerData[wk] || {};
  const counts = {};
  Object.values(wd).forEach(id => { counts[id] = (counts[id]||0)+1; });
  const acts = getAllActivities();
  return Object.entries(counts).map(([id, slots]) => {
    const act = acts.find(a => a.id === id);
    return { id, label:act?.label||id, color:act?.color||'#ccc', tc:act?.tc||'#fff', slots, minutes:slots*30 };
  }).sort((a,b) => b.slots - a.slots);
}
function getDashPlannerWeekLabel(offset) {
  const mon = getWeekMonday(offset);
  const sun = new Date(mon); sun.setDate(mon.getDate() + 6);
  const fmt = d => d.toLocaleDateString('en-IN',{day:'numeric',month:'short'});
  if (offset === 0) return `This week · ${fmt(mon)} – ${fmt(sun)}`;
  if (offset === -1) return `Last week · ${fmt(mon)} – ${fmt(sun)}`;
  return `${fmt(mon)} – ${fmt(sun)}`;
}
function totalCheckins() {
  return Object.keys(checkinData).filter(k => {
    const e = checkinData[k];
    return e && (e.mood > 0 || e.highlights || e.lowlights || e.studyH > 0 || e.studyM > 0);
  }).length;
}

function getTodayKey() { return new Date().toISOString().split('T')[0]; }
function getDefaultEntry() {
  return { highlights:'', lowlights:'', mood:0, digitalH:0, digitalM:0, studyH:0, studyM:0 };
}
function fmtTime(h, m) {
  if (!h && !m) return '—';
  if (!h) return `${m}m`;
  if (!m) return `${h}h`;
  return `${h}h ${m}m`;
}
function getMoodText(n) {
  const d = [null,['😞','Terrible'],['😣','Very Bad'],['😔','Bad'],['😕','Below Average'],['😐','Average'],['🙂','Good'],['😊','Very Good'],['😄','Great'],['😁','Excellent'],['🤩','Outstanding!']];
  return n && d[n] ? `${d[n][0]} ${d[n][1]}` : 'How was your day? Tap to rate';
}
function moodColor(n) { return n >= 7 ? '#00BEAA' : n >= 4 ? '#FFB018' : '#F87171'; }

// ── PROGRESS ──────────────────────────────────────────────────────────────────
function pct(done, total) { return total === 0 ? 0 : Math.round(done / total * 100); }
function chapterProgress(sid, ci, lid) {
  const ch = SUBJECTS.find(s => s.id === sid).chapters[ci];
  let done = 0;
  ch.topics.forEach((_, ti) => { if (state[`${sid}-${ci}-${ti}-${lid}`]) done++; });
  return { done, total: ch.topics.length, pct: pct(done, ch.topics.length) };
}
function subjectProgress(sid, lid) {
  const subj = SUBJECTS.find(s => s.id === sid);
  let done = 0, total = 0;
  subj.chapters.forEach((ch, ci) => ch.topics.forEach((_, ti) => {
    total++; if (state[`${sid}-${ci}-${ti}-${lid}`]) done++;
  }));
  return { done, total, pct: pct(done, total) };
}
function allProgress(lid) {
  let done = 0, total = 0;
  SUBJECTS.forEach(s => { const p = subjectProgress(s.id, lid); done += p.done; total += p.total; });
  return { done, total, pct: pct(done, total) };
}
function totalTopics() { return SUBJECTS.reduce((a,s) => a + s.chapters.reduce((b,ch) => b + ch.topics.length, 0), 0); }
function countDone(lid) {
  let n = 0;
  SUBJECTS.forEach(s => s.chapters.forEach((ch,ci) => ch.topics.forEach((_,ti) => { if (state[`${s.id}-${ci}-${ti}-${lid}`]) n++; })));
  return n;
}
function chapsDone(lid) {
  let n = 0;
  SUBJECTS.forEach(s => s.chapters.forEach((ch,ci) => {
    if (ch.topics.every((_,ti) => state[`${s.id}-${ci}-${ti}-${lid}`])) n++;
  }));
  return n;
}
function readyToTest() {
  let n = 0;
  SUBJECTS.forEach(s => s.chapters.forEach((ch,ci) => {
    if (ch.topics.every((_,ti) => state[`${s.id}-${ci}-${ti}-s`] && state[`${s.id}-${ci}-${ti}-r`])) n++;
  }));
  return n;
}
function bestSubject(lid) {
  let best = null, bp = -1;
  SUBJECTS.forEach(s => { const p = subjectProgress(s.id,lid); if (p.pct > bp) { bp = p.pct; best = s; } });
  return best ? `${best.emoji} ${best.label}` : '—';
}

// ── SVG ARC ───────────────────────────────────────────────────────────────────
function ringArc(r, percentage, color, id) {
  const C = +(2 * Math.PI * r).toFixed(2);
  const d = +(C * Math.min(percentage, 100) / 100).toFixed(2);
  const g = +(C - d).toFixed(2);
  const o = +(C * 0.25).toFixed(2);
  return `<circle cx="50" cy="50" r="${r}" fill="none" stroke="rgba(32,50,51,0.08)" stroke-width="7"/>
<circle id="${id}" cx="50" cy="50" r="${r}" fill="none" stroke="${color}" stroke-width="7"
  stroke-dasharray="${d} ${g}" stroke-dashoffset="${o}" stroke-linecap="round"
  style="transition:stroke-dasharray .4s ease"/>`;
}

// ── SUBJECT RENDERS ───────────────────────────────────────────────────────────
function renderRings() {
  const sec = document.querySelector('.rings-section'); if (!sec) return;
  let html = '<p class="rings-label">Subject Overview</p><div class="rings-grid">';
  SUBJECTS.forEach(s => {
    const ps = subjectProgress(s.id,'s').pct, pr = subjectProgress(s.id,'r').pct, pt = subjectProgress(s.id,'t').pct;
    const avg = Math.round((ps+pr+pt)/3);
    html += `<div class="ring-card ${s.cls}">
      <div class="ring-wrap"><svg viewBox="0 0 100 100" width="90" height="90">
        ${ringArc(42,ps,'#00BEAA',`ring-s-${s.id}`)}
        ${ringArc(32,pr,'#FFB018',`ring-r-${s.id}`)}
        ${ringArc(22,pt,'#007F78',`ring-t-${s.id}`)}
      </svg>
      <div class="ring-center">
        <span class="ring-center-pct" id="ring-avg-${s.id}" style="color:${s.accent}">${avg}%</span>
        <span class="ring-center-label">avg</span>
      </div></div>
      <div class="ring-subject-name">${s.emoji} ${s.label}</div>
      <div class="ring-srt-row">
        <div class="ring-chip" style="background:rgba(0,190,170,0.12)"><span style="color:#00BEAA">S</span><span id="ring-chip-s-${s.id}" style="color:#00BEAA">${ps}%</span></div>
        <div class="ring-chip" style="background:rgba(255,176,24,0.12)"><span style="color:#C88000">R</span><span id="ring-chip-r-${s.id}" style="color:#C88000">${pr}%</span></div>
        <div class="ring-chip" style="background:rgba(0,127,120,0.12)"><span style="color:#007F78">T</span><span id="ring-chip-t-${s.id}" style="color:#007F78">${pt}%</span></div>
      </div>
    </div>`;
  });
  sec.innerHTML = html + '</div>';
}

function renderStats() {
  const sec = document.querySelector('.stats-section'); if (!sec) return;
  const tot = totalTopics(), tchaps = SUBJECTS.reduce((a,s) => a+s.chapters.length, 0);
  sec.innerHTML = `<div class="stats-scroll">
    <div class="stat-card"><span class="stat-icon">📗</span><div class="stat-value" id="stat-s" style="color:#00BEAA">${countDone('s')}</div><div class="stat-label">Studied</div><div class="stat-sub">of ${tot} topics</div></div>
    <div class="stat-card"><span class="stat-icon">🔄</span><div class="stat-value" id="stat-r" style="color:#C88000">${countDone('r')}</div><div class="stat-label">Revised</div><div class="stat-sub">of ${tot} topics</div></div>
    <div class="stat-card"><span class="stat-icon">✅</span><div class="stat-value" id="stat-t" style="color:#007F78">${countDone('t')}</div><div class="stat-label">Tested</div><div class="stat-sub">of ${tot} topics</div></div>
    <div class="stat-card"><span class="stat-icon">🏁</span><div class="stat-value" id="stat-cd" style="color:#00BEAA">${chapsDone('s')}</div><div class="stat-label">Chaps Done</div><div class="stat-sub">100% studied</div></div>
    <div class="stat-card"><span class="stat-icon">🎯</span><div class="stat-value" id="stat-rtt" style="color:#007F78">${readyToTest()}</div><div class="stat-label">Test-ready</div><div class="stat-sub">S+R complete</div></div>
    <div class="stat-card"><span class="stat-icon">🧩</span><div class="stat-value" style="font-size:16px;margin-top:4px;color:#203233">${tchaps}</div><div class="stat-label">Chapters</div><div class="stat-sub">${tot} topics</div></div>
    <div class="stat-card"><span class="stat-icon">🏆</span><div class="stat-value" id="stat-best" style="font-size:12px;margin-top:4px;letter-spacing:0;color:#203233">${bestSubject('t')}</div><div class="stat-label">Best (tests)</div><div class="stat-sub">highest %</div></div>
  </div>`;
}

function renderOverall() {
  const sec = document.querySelector('.overall-section'); if (!sec) return;
  const tot = totalTopics();
  let html = `<div class="overall-card"><div class="overall-header"><span class="overall-title">Overall Progress</span><span class="overall-total">${tot} topics</span></div>`;
  LAYERS.forEach(l => {
    const p = allProgress(l.id);
    const dc = l.id==='r'?'#C88000':l.color;
    html += `<div class="overall-row">
      <span class="overall-lbl" style="color:${dc}">${l.label}</span>
      <div class="bar-track"><div class="bar-fill" id="obar-${l.id}" style="width:${p.pct}%;background:${l.color}"></div></div>
      <span class="overall-pct" id="opct-${l.id}" style="color:${dc}">${p.pct}%</span>
      <span class="overall-count" id="ocnt-${l.id}">${p.done}/${p.total}</span>
    </div>`;
  });
  sec.innerHTML = html + '</div>';
}

function renderNav() {
  const nav = document.getElementById('bottom-nav'); if (!nav) return;
  const v = currentView;
  const isSyllabus = v === 'syllabus' || v === 'subject';
  nav.innerHTML = `
  <button class="nav-item ${isSyllabus?'active':''}" onclick="switchView('syllabus')">
    <span class="nav-emoji">📚</span>
    <span class="nav-label">Syllabus</span>
    <div class="nav-dot"></div>
  </button>
  <button class="nav-item ${v==='checkin'?'active':''}" onclick="switchView('checkin')">
    <span class="nav-emoji">📔</span>
    <span class="nav-label">Check-in</span>
    <div class="nav-dot"></div>
  </button>
  <button class="nav-item ${v==='planner'?'active':''}" onclick="switchView('planner')">
    <span class="nav-emoji">📅</span>
    <span class="nav-label">Planner</span>
    <div class="nav-dot"></div>
  </button>
  <button class="nav-item ${v==='dashboard'?'active':''}" onclick="switchView('dashboard')">
    <span class="nav-emoji">📊</span>
    <span class="nav-label">Dashboard</span>
    <div class="nav-dot"></div>
  </button>`;
}

function renderSubjectTabs() {
  const el = document.querySelector('.subject-tabs'); if (!el) return;
  el.innerHTML = SUBJECTS.map(s =>
    `<button class="stab${s.id===currentSubject?' active':''}" onclick="switchSubject('${s.id}')">${s.emoji} ${s.label}</button>`
  ).join('');
}

function renderChapters() {
  const sec = document.querySelector('.chapters-section'); if (!sec) return;
  const subj = SUBJECTS.find(s => s.id === currentSubject);
  let html = `<div class="section-row">
    <span class="section-title">${subj.emoji} ${subj.label} Chapters</span>
    <span class="section-count">${subj.chapters.length} chapters</span>
  </div>
  <div class="legend-row">
    ${LAYERS.map(l=>`<div class="legend-pill"><div class="legend-dot" style="background:${l.color}"></div>${l.label}</div>`).join('')}
    <div class="legend-pill" style="color:var(--text3)">tap S / R / T</div>
  </div>`;
  let lastSec = null;
  subj.chapters.forEach((ch, ci) => {
    if (ch.sec && ch.sec !== lastSec) { html += `<div class="sec-divider">${ch.sec}</div>`; lastSec = ch.sec; }
    const isOpen = openChapters[`${currentSubject}-${ci}`];
    const ps = chapterProgress(currentSubject,ci,'s'), pr = chapterProgress(currentSubject,ci,'r'), pt = chapterProgress(currentSubject,ci,'t');
    const allDone = ps.pct===100 && pr.pct===100 && pt.pct===100;
    html += `<div class="chapter-card ${subj.cls} ${isOpen?'open':''}">
      <div class="chapter-header" onclick="toggleChapter('${currentSubject}',${ci})">
        <div class="chapter-num-badge" style="${isOpen?`background:${subj.accent}18;color:${subj.accent}`:''}">${ci+1}</div>
        <div class="chapter-info">
          <div class="chapter-name">${ch.name}</div>
          <div class="chapter-srt">
            <div class="ch-chip"><div class="ch-chip-dot" style="background:#00BEAA"></div><span style="color:#00BEAA;font-size:9px;font-weight:700">S</span><span class="ch-chip-pct" id="cp-${currentSubject}-${ci}-s" style="color:${ps.pct===100?'#00BEAA':'var(--text3)'}">${ps.pct}%</span></div>
            <div class="ch-chip"><div class="ch-chip-dot" style="background:#FFB018"></div><span style="color:#C88000;font-size:9px;font-weight:700">R</span><span class="ch-chip-pct" id="cp-${currentSubject}-${ci}-r" style="color:${pr.pct===100?'#C88000':'var(--text3)'}">${pr.pct}%</span></div>
            <div class="ch-chip"><div class="ch-chip-dot" style="background:#007F78"></div><span style="color:#007F78;font-size:9px;font-weight:700">T</span><span class="ch-chip-pct" id="cp-${currentSubject}-${ci}-t" style="color:${pt.pct===100?'#007F78':'var(--text3)'}">${pt.pct}%</span></div>
            ${allDone?'<span class="chapter-done-badge">✓ Done</span>':''}
          </div>
        </div>
        <svg class="ch-chevron ${isOpen?'open':''}" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>
      </div>`;
    if (isOpen) {
      html += `<div class="topics-wrap open"><div class="topics-col-hdr"><div class="topics-col-hdr-space"></div><div class="col-hdr-labels">${LAYERS.map(l=>`<div class="col-hdr-lbl" style="color:${l.id==='r'?'#C88000':l.color}">${l.label}</div>`).join('')}</div></div>`;
      ch.topics.forEach((topic, ti) => {
        html += `<div class="topic-row"><span class="topic-name">${topic}</span><div class="toggle-group">`;
        LAYERS.forEach(l => {
          const k = `${currentSubject}-${ci}-${ti}-${l.id}`;
          html += `<button class="toggle-btn ${state[k]?'on-'+l.id:''}" onclick="toggleTopic(event,'${k}','${currentSubject}',${ci},'${l.id}')">${l.label[0]}</button>`;
        });
        html += `</div></div>`;
      });
      html += `</div>`;
    } else { html += `<div class="topics-wrap"></div>`; }
    html += `</div>`;
  });
  sec.innerHTML = html;
}

// ── TOGGLE TOPIC ──────────────────────────────────────────────────────────────
function toggleTopic(event, key, sid, ci, lid) {
  state[key] = !state[key]; saveState();
  event.currentTarget.className = `toggle-btn ${state[key]?'on-'+lid:''}`;
  LAYERS.forEach(l => {
    const p = chapterProgress(sid,+ci,l.id);
    const chip = document.getElementById(`cp-${sid}-${ci}-${l.id}`);
    const fc = l.id==='r'?'#C88000':l.color;
    if (chip) { chip.textContent = p.pct+'%'; chip.style.color = p.pct===100?fc:'var(--text3)'; }
  });
  SUBJECTS.forEach(s => {
    LAYERS.forEach(l => {
      const p = subjectProgress(s.id,l.id);
      const r = l.id==='s'?42:l.id==='r'?32:22;
      const C = +(2*Math.PI*r).toFixed(2);
      const d = +(C*p.pct/100).toFixed(2), g = +(C-d).toFixed(2);
      const arc = document.getElementById(`ring-${l.id}-${s.id}`);
      if (arc) arc.setAttribute('stroke-dasharray',`${d} ${g}`);
      const chip = document.getElementById(`ring-chip-${l.id}-${s.id}`);
      if (chip) chip.textContent = p.pct+'%';
    });
    const ps=subjectProgress(s.id,'s').pct, pr=subjectProgress(s.id,'r').pct, pt=subjectProgress(s.id,'t').pct;
    const avg = document.getElementById(`ring-avg-${s.id}`);
    if (avg) avg.textContent = Math.round((ps+pr+pt)/3)+'%';
  });
  LAYERS.forEach(l => {
    const p = allProgress(l.id);
    const bar=document.getElementById(`obar-${l.id}`), pp=document.getElementById(`opct-${l.id}`), cc=document.getElementById(`ocnt-${l.id}`);
    if (bar) bar.style.width = p.pct+'%';
    if (pp) pp.textContent = p.pct+'%';
    if (cc) cc.textContent = p.done+'/'+p.total;
  });
  ['s','r','t'].forEach(l => { const el=document.getElementById(`stat-${l}`); if(el) el.textContent=countDone(l); });
  const cd=document.getElementById('stat-cd'); if(cd) cd.textContent=chapsDone('s');
  const rtt=document.getElementById('stat-rtt'); if(rtt) rtt.textContent=readyToTest();
  const best=document.getElementById('stat-best'); if(best) best.textContent=bestSubject('t');
}

function toggleChapter(sid, ci) { openChapters[`${sid}-${ci}`]=!openChapters[`${sid}-${ci}`]; renderChapters(); }

function switchSubject(id) {
  currentView = 'syllabus'; currentSubject = id;
  ['checkin-view','planner-view','dashboard-view'].forEach(vid => {
    const el = document.getElementById(vid); if (el) el.style.display = 'none';
  });
  const sv = document.getElementById('subject-view');
  if (sv) sv.style.display = 'block';
  renderSubjectTabs(); renderNav(); renderChapters();
}

function switchView(v) {
  currentView = v;
  ['subject-view','checkin-view','planner-view','dashboard-view'].forEach(vid => {
    const el = document.getElementById(vid); if (el) el.style.display = 'none';
  });
  if (v === 'syllabus') {
    document.getElementById('subject-view').style.display = 'block';
    renderSubjectTabs();
  } else if (v === 'checkin') {
    document.getElementById('checkin-view').style.display = 'block';
    checkinDateOffset = 0;
    renderCheckin();
  } else if (v === 'planner') {
    document.getElementById('planner-view').style.display = 'block';
    renderPlanner();
  } else if (v === 'dashboard') {
    document.getElementById('dashboard-view').style.display = 'block';
    renderDashboard();
  }
  renderNav();
}

// ── CHECKIN DATE NAV ──────────────────────────────────────────────────────────
function getActiveCheckinKey() {
  const d = new Date(); d.setDate(d.getDate() + checkinDateOffset);
  return d.toISOString().split('T')[0];
}
function switchCheckinDate(delta) {
  checkinDateOffset = Math.min(0, checkinDateOffset + delta);
  renderCheckin();
}
function goToCheckinDate(isoKey) {
  const t   = new Date(getTodayKey() + 'T00:00:00');
  const tgt = new Date(isoKey        + 'T00:00:00');
  checkinDateOffset = Math.round((tgt - t) / 86400000);
  renderCheckin();
  window.scrollTo(0, 0);
}

// ── DAILY CHECK-IN ────────────────────────────────────────────────────────────
function renderCheckin() {
  const el = document.getElementById('checkin-view'); if (!el) return;
  const key = getActiveCheckinKey();
  const e = checkinData[key] || getDefaultEntry();
  const d = new Date(); d.setDate(d.getDate() + checkinDateOffset);
  const isToday     = checkinDateOffset === 0;
  const dateLabel   = isToday ? 'Today' : checkinDateOffset === -1 ? 'Yesterday' : d.toLocaleDateString('en-IN',{weekday:'long'});
  const fullDate    = d.toLocaleDateString('en-IN',{day:'numeric',month:'long',year:'numeric'});

  const moodBtns = [1,2,3,4,5,6,7,8,9,10].map(n => {
    const mc = moodColor(n), isA = e.mood === n;
    return `<button class="mood-btn" onclick="setMood(${n})"
      style="background:${isA?mc:'var(--card)'};color:${isA?'#fff':'var(--text3)'};border-color:${isA?mc:'var(--border)'}">${n}</button>`;
  }).join('');

  el.innerHTML = `<div class="checkin-section">

    <div class="checkin-date-nav">
      <button class="date-nav-btn" onclick="switchCheckinDate(-1)">‹</button>
      <div class="date-nav-center">
        <div class="date-nav-badge${isToday?' today':''}">${dateLabel}</div>
        <div class="date-nav-full">${fullDate}</div>
      </div>
      <button class="date-nav-btn${isToday?' disabled':''}" onclick="switchCheckinDate(1)" ${isToday?'disabled':''}>›</button>
    </div>

    <!-- Mood-O-Meter -->
    <div class="checkin-card">
      <div class="checkin-card-top">
        <span class="checkin-card-icon">😊</span>
        <span class="checkin-card-title">Mood-O-Meter</span>
      </div>
      <div class="mood-scale-labels"><span>Low</span><span>High</span></div>
      <div class="mood-grid" id="mood-grid">${moodBtns}</div>
      <div class="mood-descriptor" id="mood-desc">${getMoodText(e.mood)}</div>
    </div>

    <!-- Time row -->
    <div class="time-cards-row">
      <div class="checkin-card time-card">
        <div class="checkin-card-top">
          <span class="checkin-card-icon">📱</span>
          <span class="checkin-card-title">Digital</span>
        </div>
        <div class="time-display" id="digital-display">${fmtTime(e.digitalH, e.digitalM)}</div>
        <div class="stepper-row">
          <button class="stepper-btn" onclick="adjTime('digital','h',-1)">−</button>
          <div class="stepper-val-group"><span class="stepper-val" id="digital-h">${e.digitalH}</span><span class="stepper-unit">h</span></div>
          <button class="stepper-btn" onclick="adjTime('digital','h',1)">+</button>
        </div>
        <div class="stepper-row">
          <button class="stepper-btn" onclick="adjTime('digital','m',-1)">−</button>
          <div class="stepper-val-group"><span class="stepper-val" id="digital-m">${e.digitalM}</span><span class="stepper-unit">m</span></div>
          <button class="stepper-btn" onclick="adjTime('digital','m',1)">+</button>
        </div>
      </div>
      <div class="checkin-card time-card">
        <div class="checkin-card-top">
          <span class="checkin-card-icon">📚</span>
          <span class="checkin-card-title">Study</span>
        </div>
        <div class="time-display" id="study-display">${fmtTime(e.studyH, e.studyM)}</div>
        <div class="stepper-row">
          <button class="stepper-btn" onclick="adjTime('study','h',-1)">−</button>
          <div class="stepper-val-group"><span class="stepper-val" id="study-h">${e.studyH}</span><span class="stepper-unit">h</span></div>
          <button class="stepper-btn" onclick="adjTime('study','h',1)">+</button>
        </div>
        <div class="stepper-row">
          <button class="stepper-btn" onclick="adjTime('study','m',-1)">−</button>
          <div class="stepper-val-group"><span class="stepper-val" id="study-m">${e.studyM}</span><span class="stepper-unit">m</span></div>
          <button class="stepper-btn" onclick="adjTime('study','m',1)">+</button>
        </div>
      </div>
    </div>

    <!-- Highlights -->
    <div class="checkin-card">
      <div class="checkin-card-top"><span class="checkin-card-icon">✨</span><span class="checkin-card-title">Highlights of the Day</span></div>
      <textarea class="checkin-textarea" id="txt-highlights" placeholder="What went well? What are you proud of?" onblur="autoSaveText('highlights')">${e.highlights}</textarea>
    </div>

    <!-- Lowlights -->
    <div class="checkin-card">
      <div class="checkin-card-top"><span class="checkin-card-icon">💭</span><span class="checkin-card-title">Lowlights of the Day</span></div>
      <textarea class="checkin-textarea" id="txt-lowlights" placeholder="What could have been better? What would you change?" onblur="autoSaveText('lowlights')">${e.lowlights}</textarea>
    </div>

    <button class="save-btn" id="save-btn" onclick="saveCheckin()">${isToday ? "Save Today's Check-in" : `Save Check-in · ${dateLabel}`}</button>

    ${renderPastEntries(key)}
  </div>`;
}

function setMood(n) {
  const key = getActiveCheckinKey();
  if (!checkinData[key]) checkinData[key] = getDefaultEntry();
  checkinData[key].mood = n; saveCheckinData();
  const grid = document.getElementById('mood-grid');
  if (grid) grid.querySelectorAll('.mood-btn').forEach((btn, i) => {
    const num = i+1, isA = num===n, mc = moodColor(num);
    btn.style.background = isA ? mc : 'var(--card)';
    btn.style.color      = isA ? '#fff' : 'var(--text3)';
    btn.style.borderColor= isA ? mc : 'var(--border)';
  });
  const desc = document.getElementById('mood-desc');
  if (desc) desc.textContent = getMoodText(n);
}

function adjTime(which, unit, delta) {
  const key = getActiveCheckinKey();
  if (!checkinData[key]) checkinData[key] = getDefaultEntry();
  const e = checkinData[key];
  if (unit === 'h') {
    e[which+'H'] = Math.max(0, Math.min(12, e[which+'H'] + delta));
    const el = document.getElementById(`${which}-h`);
    if (el) el.textContent = e[which+'H'];
  } else {
    const STEPS = [0, 15, 30, 45];
    let idx = STEPS.indexOf(e[which+'M']); if (idx < 0) idx = 0;
    idx = (idx + delta + STEPS.length) % STEPS.length;
    e[which+'M'] = STEPS[idx];
    const el = document.getElementById(`${which}-m`);
    if (el) el.textContent = e[which+'M'];
  }
  const disp = document.getElementById(`${which}-display`);
  if (disp) disp.textContent = fmtTime(e[which+'H'], e[which+'M']);
  saveCheckinData();
}

function autoSaveText(field) {
  const key = getActiveCheckinKey();
  if (!checkinData[key]) checkinData[key] = getDefaultEntry();
  const el = document.getElementById(`txt-${field}`);
  if (el) { checkinData[key][field] = el.value; saveCheckinData(); }
}

function saveCheckin() {
  const key = getActiveCheckinKey();
  const isToday = checkinDateOffset === 0;
  if (!checkinData[key]) checkinData[key] = getDefaultEntry();
  const e = checkinData[key];
  const hl = document.getElementById('txt-highlights');
  const ll = document.getElementById('txt-lowlights');
  if (hl) e.highlights = hl.value;
  if (ll) e.lowlights  = ll.value;
  saveCheckinData();
  const btn = document.getElementById('save-btn');
  if (btn) {
    btn.textContent = '✓ Saved!';
    btn.style.background = '#007F78';
    setTimeout(() => {
      if (btn) { btn.textContent = isToday ? "Save Today's Check-in" : `Save Check-in · ${checkinDateOffset===-1?'Yesterday':'this day'}`; btn.style.background = ''; }
    }, 1800);
  }
}

function renderPastEntries(currentKey) {
  const past = [];
  const allKeys = Object.keys(checkinData).sort().reverse();
  for (const k of allKeys) {
    if (k === currentKey) continue;
    const e = checkinData[k];
    if (!e || (!e.mood && !e.highlights && !e.lowlights && !e.studyH && !e.studyM)) continue;
    const d = new Date(k + 'T00:00:00');
    past.push({ k, d, ...e });
    if (past.length >= 7) break;
  }
  if (!past.length) return '';
  return `<div class="past-entries-section">
    <div class="past-entries-title">Recent Entries — tap to view</div>
    ${past.map(e => {
      const mc = moodColor(e.mood);
      const ds = e.d.toLocaleDateString('en-IN',{weekday:'short',day:'numeric',month:'short'});
      return `<div class="past-entry-card" onclick="goToCheckinDate('${e.k}')">
        <div class="past-entry-header">
          <span class="past-entry-date">${ds}</span>
          ${e.mood ? `<span class="past-entry-mood" style="background:${mc}1A;color:${mc};border:1px solid ${mc}40">${e.mood}/10 ${getMoodText(e.mood).split(' ')[0]}</span>` : ''}
        </div>
        <div class="past-entry-meta">
          ${(e.studyH||e.studyM)?`<span class="past-meta-pill teal-pill">📚 ${fmtTime(e.studyH,e.studyM)}</span>`:''}
          ${(e.digitalH||e.digitalM)?`<span class="past-meta-pill amber-pill">📱 ${fmtTime(e.digitalH,e.digitalM)}</span>`:''}
        </div>
        ${e.highlights?`<div class="past-entry-text">✨ ${e.highlights.substring(0,100)}${e.highlights.length>100?'…':''}</div>`:''}
      </div>`;
    }).join('')}
  </div>`;
}

// ── DASHBOARD ─────────────────────────────────────────────────────────────────
function renderDashboard() {
  const el = document.getElementById('dashboard-view'); if (!el) return;
  const streak     = calcStreak();
  const avgMood7   = calcAvgMood(7);
  const studyMins7 = calcTimeMins(7, 'study');
  const digMins7   = calcTimeMins(7, 'digital');
  const total      = totalCheckins();
  const trend      = getMoodTrend(7);
  const planStats  = getPlannerWeekStats(dashPlannerWeekOffset);

  // avatar — photo or initials
  const avatarInner = profilePhoto
    ? `<img src="${profilePhoto}" style="width:100%;height:100%;object-fit:cover;border-radius:50%">`
    : getInitials(profile.name);

  // subject progress cards
  const subjCards = SUBJECTS.map(s => {
    const ps = subjectProgress(s.id,'s'), pr = subjectProgress(s.id,'r'), pt = subjectProgress(s.id,'t');
    const avg = Math.round((ps.pct + pr.pct + pt.pct) / 3);
    return `<div class="db-subj-card">
      <div class="db-subj-head">
        <span class="db-subj-name">${s.emoji} ${s.label}</span>
        <span class="db-subj-avg" style="color:${s.accent}">${avg}%</span>
      </div>
      <div class="db-bar-row"><span class="db-bar-lbl" style="color:#00BEAA">S</span><div class="db-track"><div class="db-fill" style="width:${ps.pct}%;background:#00BEAA"></div></div><span class="db-bar-pct">${ps.pct}%</span></div>
      <div class="db-bar-row"><span class="db-bar-lbl" style="color:#C88000">R</span><div class="db-track"><div class="db-fill" style="width:${pr.pct}%;background:#FFB018"></div></div><span class="db-bar-pct">${pr.pct}%</span></div>
      <div class="db-bar-row"><span class="db-bar-lbl" style="color:#007F78">T</span><div class="db-track"><div class="db-fill" style="width:${pt.pct}%;background:#007F78"></div></div><span class="db-bar-pct">${pt.pct}%</span></div>
    </div>`;
  }).join('');

  // mood trend bars
  const trendDots = trend.map(t => {
    const mc = t.mood ? moodColor(t.mood) : 'var(--border)';
    const h  = t.mood ? Math.round((t.mood/10)*32) : 4;
    return `<div class="trend-col" onclick="${t.mood||t.offset===0?`goToCheckinDateFromDash('${t.k}')`:''}" style="cursor:${t.mood||t.offset===0?'pointer':'default'}">
      <div style="height:40px;display:flex;align-items:flex-end;justify-content:center">
        <div style="height:${h}px;background:${mc};width:8px;border-radius:4px;min-height:4px"></div>
      </div>
      <div class="trend-day">${t.lbl}</div>
      ${t.mood?`<div class="trend-hint">${t.mood}</div>`:'<div class="trend-hint" style="opacity:0">—</div>'}
    </div>`;
  }).join('');

  // planner week breakdown
  const planLabel = getDashPlannerWeekLabel(dashPlannerWeekOffset);
  const canFwdPlan = dashPlannerWeekOffset < 0;
  const planRows = planStats.length
    ? planStats.slice(0,6).map(p => {
        const h = Math.floor(p.minutes/60), m = p.minutes%60;
        return `<div class="db-plan-row">
          <div class="db-plan-label"><div style="width:8px;height:8px;border-radius:50%;background:${p.color};display:inline-block;margin-right:6px"></div>${p.label}</div>
          <div class="db-plan-time">${h>0?h+'h ':''} ${m>0?m+'m':''}</div>
        </div>`;
      }).join('')
    : `<div class="db-empty">No planner data for this week</div>`;

  el.innerHTML = `
  <div class="db-scroll">

    <!-- Profile card -->
    <div class="db-profile-card">
      <div class="db-avatar-wrap" onclick="triggerPhotoUpload()">
        <div class="db-avatar">${avatarInner}</div>
        <div class="db-avatar-cam">📷</div>
      </div>
      <div class="db-profile-info">
        <div class="db-profile-name" id="db-name-display" onclick="inlineEdit('name')">${profile.name || '<span style="opacity:.5">Tap to add name</span>'}</div>
        <div class="db-profile-sub" id="db-school-display" onclick="inlineEdit('school')">${profile.school || '<span style="opacity:.4">Add school</span>'}</div>
        <div class="db-profile-tags">
          <span class="db-tag" onclick="inlineEdit('city')">📍 ${profile.city || 'Add city'}</span>
          ${profile.grade ? `<span class="db-tag">Grade ${profile.grade}</span>` : ''}
          ${profile.board ? `<span class="db-tag">${profile.board}</span>` : ''}
          <span class="db-tag">🔥 ${streak}d streak</span>
        </div>
      </div>
      <button class="db-edit-btn" onclick="openEditProfile()">✏️</button>
    </div>
    <!-- Hidden photo input -->
    <input type="file" id="photo-input" accept="image/*" style="display:none" onchange="handlePhotoUpload(event)">

    <!-- Check-in Stats -->
    <div class="db-section-label">Check-in Summary · Last 7 Days</div>
    <div class="db-stats-scroll">
      <div class="db-stat-chip"><div class="db-stat-icon">📋</div><div class="db-stat-val">${total}</div><div class="db-stat-lbl">Total</div></div>
      <div class="db-stat-chip"><div class="db-stat-icon">😊</div><div class="db-stat-val">${avgMood7}</div><div class="db-stat-lbl">Avg Mood</div></div>
      <div class="db-stat-chip"><div class="db-stat-icon">🔥</div><div class="db-stat-val">${streak}</div><div class="db-stat-lbl">Streak</div></div>
      <div class="db-stat-chip"><div class="db-stat-icon">📚</div><div class="db-stat-val">${Math.floor(studyMins7/60)}h ${studyMins7%60}m</div><div class="db-stat-lbl">Study</div></div>
      <div class="db-stat-chip"><div class="db-stat-icon">📱</div><div class="db-stat-val">${Math.floor(digMins7/60)}h ${digMins7%60}m</div><div class="db-stat-lbl">Digital</div></div>
    </div>

    <!-- Mood Trend -->
    <div class="db-card">
      <div class="db-card-title">Mood Trend · Last 7 Days</div>
      <div class="trend-row">${trendDots}</div>
    </div>

    <!-- Subject Progress -->
    <div class="db-section-label">Subject Progress</div>
    <div class="db-subj-grid">${subjCards}</div>

    <!-- Planner Summary with week nav -->
    <div class="db-card">
      <div class="db-plan-nav">
        <button class="date-nav-btn" onclick="switchDashPlannerWeek(-1)">‹</button>
        <div class="db-plan-nav-label">${planLabel}</div>
        <button class="date-nav-btn${canFwdPlan?'':' disabled'}" onclick="switchDashPlannerWeek(1)" ${canFwdPlan?'':'disabled'}>›</button>
      </div>
      <div class="db-plan-items">${planRows}</div>
    </div>

  </div>

  <!-- Edit Profile Sheet -->
  <div class="manage-wrap" id="edit-profile-wrap" style="display:none">
    <div class="act-overlay" onclick="closeEditProfile()"></div>
    <div class="manage-sheet">
      <div class="manage-header">
        <span class="manage-title">Edit Profile</span>
        <button class="manage-close" onclick="closeEditProfile()">✕</button>
      </div>
      <div class="profile-fields">
        <div class="profile-field"><div class="profile-field-lbl">Name</div><input class="manage-input" id="pf-name" value="${profile.name}" placeholder="Your name"></div>
        <div class="profile-field"><div class="profile-field-lbl">Grade</div><input class="manage-input" id="pf-grade" value="${profile.grade}" placeholder="e.g. X"></div>
        <div class="profile-field"><div class="profile-field-lbl">School</div><input class="manage-input" id="pf-school" value="${profile.school}" placeholder="School name"></div>
        <div class="profile-field"><div class="profile-field-lbl">Board</div><input class="manage-input" id="pf-board" value="${profile.board}" placeholder="CBSE / ICSE / State"></div>
        <div class="profile-field"><div class="profile-field-lbl">City</div><input class="manage-input" id="pf-city" value="${profile.city}" placeholder="City"></div>
        <div class="profile-field"><div class="profile-field-lbl">Best Study Time</div><input class="manage-input" id="pf-bst" value="${profile.bestStudyTime}" placeholder="e.g. 6–8 AM"></div>
      </div>
      <button class="save-btn" onclick="saveProfileFromForm()">Save Profile</button>
    </div>
  </div>

  <!-- Inline edit overlay -->
  <div class="manage-wrap" id="inline-edit-wrap" style="display:none">
    <div class="act-overlay" onclick="closeInlineEdit()"></div>
    <div class="manage-sheet">
      <div class="manage-header">
        <span class="manage-title" id="inline-edit-title">Edit</span>
        <button class="manage-close" onclick="closeInlineEdit()">✕</button>
      </div>
      <input class="manage-input" id="inline-edit-input" style="margin-bottom:16px">
      <button class="save-btn" onclick="saveInlineEdit()">Save</button>
    </div>
  </div>`;
}

function switchDashPlannerWeek(delta) {
  dashPlannerWeekOffset = Math.min(0, dashPlannerWeekOffset + delta);
  // Re-render just the planner section without full dashboard re-render
  const planStats = getPlannerWeekStats(dashPlannerWeekOffset);
  const planLabel = getDashPlannerWeekLabel(dashPlannerWeekOffset);
  const canFwdPlan = dashPlannerWeekOffset < 0;
  const planRows = planStats.length
    ? planStats.slice(0,6).map(p => {
        const h = Math.floor(p.minutes/60), m = p.minutes%60;
        return `<div class="db-plan-row">
          <div class="db-plan-label"><div style="width:8px;height:8px;border-radius:50%;background:${p.color};display:inline-block;margin-right:6px"></div>${p.label}</div>
          <div class="db-plan-time">${h>0?h+'h ':''} ${m>0?m+'m':''}</div>
        </div>`;
      }).join('')
    : `<div class="db-empty">No planner data for this week</div>`;
  const navEl = document.querySelector('.db-plan-nav');
  if (navEl) navEl.innerHTML = `
    <button class="date-nav-btn" onclick="switchDashPlannerWeek(-1)">‹</button>
    <div class="db-plan-nav-label">${planLabel}</div>
    <button class="date-nav-btn${canFwdPlan?'':' disabled'}" onclick="switchDashPlannerWeek(1)" ${canFwdPlan?'':'disabled'}>›</button>`;
  const itemsEl = document.querySelector('.db-plan-items');
  if (itemsEl) itemsEl.innerHTML = planRows;
}

function goToCheckinDateFromDash(isoKey) {
  switchView('checkin');
  goToCheckinDate(isoKey);
}

// Photo upload
function triggerPhotoUpload() {
  document.getElementById('photo-input')?.click();
}
function handlePhotoUpload(event) {
  const file = event.target.files[0]; if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    saveProfilePhoto(e.target.result);
    // update avatar in place without full re-render
    const av = document.querySelector('.db-avatar');
    if (av) av.innerHTML = `<img src="${e.target.result}" style="width:100%;height:100%;object-fit:cover;border-radius:50%">`;
  };
  reader.readAsDataURL(file);
}

// Inline edit (name / school / city from profile card taps)
let _inlineEditField = null;
function inlineEdit(field) {
  _inlineEditField = field;
  const labels = { name:'Name', school:'School', city:'City' };
  const vals   = { name:profile.name, school:profile.school, city:profile.city };
  const wrap = document.getElementById('inline-edit-wrap'); if (!wrap) return;
  document.getElementById('inline-edit-title').textContent = 'Edit ' + (labels[field]||field);
  document.getElementById('inline-edit-input').value = vals[field] || '';
  wrap.style.display = 'flex';
  requestAnimationFrame(() => wrap.classList.add('open'));
  setTimeout(() => document.getElementById('inline-edit-input')?.focus(), 200);
}
function closeInlineEdit() {
  const wrap = document.getElementById('inline-edit-wrap'); if (!wrap) return;
  wrap.classList.remove('open');
  setTimeout(() => { if (wrap) wrap.style.display = 'none'; }, 250);
}
function saveInlineEdit() {
  if (!_inlineEditField) return;
  const val = (document.getElementById('inline-edit-input')?.value || '').trim();
  profile[_inlineEditField] = val;
  saveProfileData();
  closeInlineEdit();
  setTimeout(() => renderDashboard(), 260);
}

// Full profile sheet
function openEditProfile() {
  const wrap = document.getElementById('edit-profile-wrap'); if (!wrap) return;
  wrap.style.display = 'flex';
  requestAnimationFrame(() => wrap.classList.add('open'));
}
function closeEditProfile() {
  const wrap = document.getElementById('edit-profile-wrap'); if (!wrap) return;
  wrap.classList.remove('open');
  setTimeout(() => { if (wrap) wrap.style.display = 'none'; }, 250);
}
function saveProfileFromForm() {
  profile.name         = (document.getElementById('pf-name')?.value  || '').trim();
  profile.grade        = (document.getElementById('pf-grade')?.value || '').trim();
  profile.school       = (document.getElementById('pf-school')?.value|| '').trim();
  profile.board        = (document.getElementById('pf-board')?.value || '').trim();
  profile.city         = (document.getElementById('pf-city')?.value  || '').trim();
  profile.bestStudyTime= (document.getElementById('pf-bst')?.value   || '').trim();
  saveProfileData();
  closeEditProfile();
  renderDashboard();
}

// ── INIT ──────────────────────────────────────────────────────────────────────
function init() {
  const today = new Date().toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'});
  document.getElementById('app').innerHTML = `
    <div class="header">
      <div class="header-top"><span class="app-title">Class X · NCERT</span><span class="header-date">${today}</span></div>
      <div class="header-headline"><span class="hl-x">X</span> SYLLABUS<br>TRACKER</div>
    </div>
    <div class="header-bar"></div>
    <div id="subject-view">
      <div class="subject-tabs"></div>
      <div class="rings-section"></div>
      <div class="stats-section"></div>
      <div class="overall-section"></div>
      <div class="chapters-section"></div>
    </div>
    <div id="checkin-view" style="display:none"></div>
    <div id="planner-view" style="display:none"></div>
    <div id="dashboard-view" style="display:none"></div>`;
  renderSubjectTabs(); renderRings(); renderStats(); renderOverall(); renderNav(); renderChapters();
}

loadState();
loadCheckinData();
loadPlannerData();
loadPlannerActs();
loadProfile();
init();
