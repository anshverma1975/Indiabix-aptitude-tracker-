/* ── State ── */
const TOTAL = TOPICS.length;
let state = load();

function load() {
  const saved = localStorage.getItem('aptTracker');
  if (saved) return JSON.parse(saved);
  const s = { completed: {}, subtopics: {}, streak: 0, lastDate: null, activeTopic: null };
  TOPICS.forEach(t => { s.subtopics[t.id] = {}; });
  return s;
}

function save() {
  localStorage.setItem('aptTracker', JSON.stringify(state));
}

/* ── Routing ── */
let currentTopic = null;

function goHome() {
  document.getElementById('topicScreen').classList.add('hidden');
  document.getElementById('homeScreen').classList.remove('hidden');
  renderHome();
}

function openTopic(id) {
  currentTopic = TOPICS.find(t => t.id === id);

  // track active topic (only if not completed)
  if (!state.completed[id]) {
    state.activeTopic = id;
    save();
  }

  document.getElementById('homeScreen').classList.add('hidden');
  document.getElementById('topicScreen').classList.remove('hidden');
  renderTopic();
}

/* ── Home render ── */
function renderHome() {
  const done = Object.keys(state.completed).length;
  const left = TOTAL - done;
  const pct = Math.round((done / TOTAL) * 100);

  document.getElementById('statDone').textContent = done;
  document.getElementById('statLeft').textContent = left;
  document.getElementById('statPct').textContent = pct + '%';
  document.getElementById('overallBar').style.width = pct + '%';
  document.getElementById('headerStreak').textContent = `🔥 ${state.streak} day streak`;

  // current topic banner
  const banner = document.getElementById('currentTopicBanner');
  const activeId = state.activeTopic;
  if (activeId && !state.completed[activeId]) {
    const active = TOPICS.find(t => t.id === activeId);
    const subsDone = Object.keys(state.subtopics[activeId] || {}).length;
    const subsTotal = active.subs.length;
    const subPct = Math.round((subsDone / subsTotal) * 100);

    document.getElementById('currentTopicName').textContent = active.name;
    document.getElementById('currentTopicSub').textContent = `${subsDone}/${subsTotal} subtopics · ${subPct}%`;
    document.getElementById('currentTopicBtn').onclick = () => openTopic(activeId);
    banner.classList.remove('hidden');
  } else {
    banner.classList.add('hidden');
  }

  const grid = document.getElementById('topicGrid');
  const completedGrid = document.getElementById('completedGrid');
  const completedSection = document.getElementById('completedSection');
  grid.innerHTML = '';
  completedGrid.innerHTML = '';

  const pending = TOPICS.filter(t => !state.completed[t.id]);
  const finished = TOPICS.filter(t => state.completed[t.id]);

  pending.forEach(t => grid.appendChild(makeTopicCard(t, false)));
  finished.forEach(t => completedGrid.appendChild(makeTopicCard(t, true)));

  completedSection.classList.toggle('hidden', finished.length === 0);
}

function makeTopicCard(t, done) {
  const btn = document.createElement('button');
  btn.className = 'topic-card' + (done ? ' done' : '');

  const subsDone = Object.keys(state.subtopics[t.id] || {}).length;
  const subsTotal = t.subs.length;
  const subPct = subsTotal > 0 ? Math.round((subsDone / subsTotal) * 100) : 0;

  btn.innerHTML = done
    ? `<span class="done-tick">✓ DONE</span>${t.name}<span class="sub-count">${subsTotal}/${subsTotal} subtopics</span>`
    : `${t.name}<span class="sub-count">${subsDone}/${subsTotal} subtopics · ${subPct}%</span>`;

  if (!done) btn.onclick = () => openTopic(t.id);
  return btn;
}

/* ── Topic render ── */
function renderTopic() {
  const t = currentTopic;
  document.getElementById('focusTitle').textContent = t.name;
  document.getElementById('topicMainLink').href = t.url;

  // circle
  const subsDone = Object.keys(state.subtopics[t.id] || {}).length;
  const subsTotal = t.subs.length;
  const pct = subsTotal > 0 ? Math.round((subsDone / subsTotal) * 100) : 0;
  const circ = 2 * Math.PI * 70;
  const offset = circ - (pct / 100) * circ;
  document.getElementById('circleProgress').style.strokeDashoffset = offset;
  document.getElementById('circleText').textContent = pct + '%';

  // subtopics
  const list = document.getElementById('subtopicsList');
  list.innerHTML = '';
  t.subs.forEach((s, i) => {
    const checked = !!(state.subtopics[t.id] && state.subtopics[t.id][i]);
    const div = document.createElement('div');
    div.className = 'subtopic-item';
    div.innerHTML = `
      <input type="checkbox" id="sub${i}" ${checked ? 'checked' : ''} />
      <label class="subtopic-name" for="sub${i}">${s.name}</label>
      <a class="subtopic-link" href="${s.url}" target="_blank" title="Open">↗</a>
    `;
    div.querySelector('input').onchange = (e) => {
      if (!state.subtopics[t.id]) state.subtopics[t.id] = {};
      if (e.target.checked) state.subtopics[t.id][i] = true;
      else delete state.subtopics[t.id][i];
      save();
      renderTopic();
    };
    list.appendChild(div);
  });

  // streak / quota
  const today = new Date().toDateString();
  const doneToday = state.lastDate === today;
  const btn = document.getElementById('quotaBtn');
  btn.disabled = doneToday;
  btn.textContent = doneToday ? 'DONE FOR TODAY ✓' : 'YES I DID ✓';
  document.getElementById('streakDisplay').textContent = state.streak;
}

/* ── Mark today ── */
function markToday() {
  const today = new Date().toDateString();
  const yesterday = new Date(Date.now() - 86400000).toDateString();

  if (state.lastDate === today) return;
  if (state.lastDate === yesterday) state.streak++;
  else state.streak = 1;
  state.lastDate = today;
  save();
  renderTopic();
}

/* ── Mark topic complete ── */
function markTopicComplete() {
  const t = currentTopic;

  const subsDone = Object.keys(state.subtopics[t.id] || {}).length;
  if (subsDone < t.subs.length) {
    alert(`Complete all ${t.subs.length} subtopics first!`);
    return;
  }

  state.completed[t.id] = true;
  state.subtopics[t.id] = {};
  t.subs.forEach((_, i) => { state.subtopics[t.id][i] = true; });

  // clear active topic if this was it
  if (state.activeTopic === t.id) state.activeTopic = null;

  save();

  const done = Object.keys(state.completed).length;
  document.getElementById('celebSub').textContent =
    done === TOTAL
      ? '🏆 You completed ALL topics! Go get placed!'
      : `${done} of ${TOTAL} topics done. Keep going!`;
  document.getElementById('celebration').classList.remove('hidden');
}

/* ── Celebration ── */
function closeCelebration() {
  document.getElementById('celebration').classList.add('hidden');
  goHome();
}

/* ── Init ── */
(function checkStreakOnLoad() {
  if (!state.lastDate) return;
  const last = new Date(state.lastDate);
  const today = new Date();
  last.setHours(0,0,0,0);
  today.setHours(0,0,0,0);
  const diffDays = Math.round((today - last) / 86400000);
  if (diffDays > 1) {
    state.streak = 0;
    save();
  }
})();

renderHome();
