

'use strict';

const PRESETS = {
  spring: {
    emoji: '🪀', label: 'Spring', color: '#f59e0b', bg: 'rgba(245,158,11,0.15)',
    baseDelay: 60, baseDuration: 400,
    easingName: 'Spring Overshoot', easingCB: 'cubic-bezier(0.34, 1.56, 0.64, 1)', cbValues: [0.34, 1.56, 0.64, 1],
    staggerType: 'linear', staggerStep: 60, overlapRatio: 0.6, distance: 40, scaleFrom: 0.82,
  },
  smooth: {
    emoji: '🌊', label: 'Smooth', color: '#06b6d4', bg: 'rgba(6,182,212,0.15)',
    baseDelay: 120, baseDuration: 600,
    easingName: 'Ease Out Quad', easingCB: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', cbValues: [0.25, 0.46, 0.45, 0.94],
    staggerType: 'linear', staggerStep: 100, overlapRatio: 0.5, distance: 20, scaleFrom: 0.95,
  },
  elastic: {
    emoji: '🧨', label: 'Elastic', color: '#ec4899', bg: 'rgba(236,72,153,0.15)',
    baseDelay: 80, baseDuration: 650,
    easingName: 'High Elastic', easingCB: 'cubic-bezier(0.68, -0.55, 0.27, 2.0)', cbValues: [0.68, -0.55, 0.27, 2.0],
    staggerType: 'accelerating', staggerStep: 70, overlapRatio: 0.4, distance: 50, scaleFrom: 0.6,
  },
  cinematic: {
    emoji: '🎬', label: 'Cinematic', color: '#a855f7', bg: 'rgba(168,85,247,0.15)',
    baseDelay: 200, baseDuration: 1200,
    easingName: 'Expo Out', easingCB: 'cubic-bezier(0.16, 1, 0.3, 1)', cbValues: [0.16, 1, 0.3, 1],
    staggerType: 'linear', staggerStep: 150, overlapRatio: 0.8, distance: 30, scaleFrom: 0.92,
  },
  whip: {
    emoji: '🏎️', label: 'Whip', color: '#ef4444', bg: 'rgba(239,68,68,0.15)',
    baseDelay: 20, baseDuration: 250,
    easingName: 'Sharp In-Out', easingCB: 'cubic-bezier(0.4, 0, 0.2, 1)', cbValues: [0.4, 0, 0.2, 1],
    staggerType: 'linear', staggerStep: 30, overlapRatio: 0.7, distance: 60, scaleFrom: 0.9,
  },
  glitch: {
    emoji: '👾', label: 'Glitch', color: '#10b981', bg: 'rgba(16,185,129,0.15)',
    baseDelay: 10, baseDuration: 100,
    easingName: 'Linear Snap', easingCB: 'cubic-bezier(0, 0, 1, 1)', cbValues: [0, 0, 1, 1],
    staggerType: 'linear', staggerStep: 80, overlapRatio: 0.1, distance: 10, scaleFrom: 0.98,
    },
  float: {
    emoji: '🎈', label: 'Float', color: '#818cf8', bg: 'rgba(129,140,248,0.15)',
    baseDelay: 300, baseDuration: 1400,
    easingName: 'Sine In-Out', easingCB: 'cubic-bezier(0.37, 0, 0.63, 1)', cbValues: [0.37, 0, 0.63, 1],
    staggerType: 'decelerating', staggerStep: 200, overlapRatio: 0.75, distance: 15, scaleFrom: 0.98,
  },
  heavy: {
    emoji: '🪨', label: 'Heavy', color: '#78716c', bg: 'rgba(120,113,108,0.15)',
    baseDelay: 80, baseDuration: 500,
    easingName: 'Ease In', easingCB: 'cubic-bezier(0.55, 0.085, 0.68, 0.53)', cbValues: [0.55, 0.085, 0.68, 0.53],
    staggerType: 'linear', staggerStep: 120, overlapRatio: 0.2, distance: 100, scaleFrom: 1.0,
  },
  
  snappy: { emoji: '⚡', label: 'Snappy', color: '#22d3ee', bg: 'rgba(34,211,238,0.15)', baseDelay: 40, baseDuration: 280, easingName: 'Back Out', easingCB: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)', cbValues: [0.175, 0.885, 0.32, 1.275], staggerType: 'linear', staggerStep: 50, overlapRatio: 0.65, distance: 24, scaleFrom: 0.85 },
  dreamy: { emoji: '☁️', label: 'Dreamy', color: '#c084fc', bg: 'rgba(192,132,252,0.15)', baseDelay: 400, baseDuration: 1800, easingName: 'Ultra Slow', easingCB: 'cubic-bezier(0.25, 1, 0.5, 1)', cbValues: [0.25, 1, 0.5, 1], staggerType: 'decelerating', staggerStep: 300, overlapRatio: 0.9, distance: 12, scaleFrom: 0.99 },
  stiff: { emoji: '📐', label: 'Stiff', color: '#94a3b8', bg: 'rgba(148,163,184,0.15)', baseDelay: 100, baseDuration: 300, easingName: 'Hard Quad', easingCB: 'cubic-bezier(0.5, 1, 0.89, 1)', cbValues: [0.5, 1, 0.89, 1], staggerType: 'linear', staggerStep: 100, overlapRatio: 0, distance: 0, scaleFrom: 1 },
  lush: { emoji: '🌿', label: 'Lush', color: '#4ade80', bg: 'rgba(74,222,128,0.15)', baseDelay: 140, baseDuration: 850, easingName: 'Soft Expo', easingCB: 'cubic-bezier(0.19, 1, 0.22, 1)', cbValues: [0.19, 1, 0.22, 1], staggerType: 'accelerating', staggerStep: 110, overlapRatio: 0.8, distance: 25, scaleFrom: 0.9 },
  jello: { emoji: '🍮', label: 'Jello', color: '#f43f5e', bg: 'rgba(244,63,94,0.15)', baseDelay: 90, baseDuration: 750, easingName: 'Wobble', easingCB: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)', cbValues: [0.68, -0.55, 0.27, 1.55], staggerType: 'linear', staggerStep: 80, overlapRatio: 0.3, distance: 15, scaleFrom: 0.88 },
  pulse: { emoji: '💓', label: 'Pulse', color: '#e11d48', bg: 'rgba(225,29,72,0.15)', baseDelay: 60, baseDuration: 500, easingName: 'Heartbeat', easingCB: 'cubic-bezier(0.25, 1.5, 0.5, 1)', cbValues: [0.25, 1.5, 0.5, 1], staggerType: 'linear', staggerStep: 60, overlapRatio: 0.5, distance: 5, scaleFrom: 0.7 },
  swing: { emoji: '🏌️', label: 'Swing', color: '#fbbf24', bg: 'rgba(251,191,36,0.15)', baseDelay: 110, baseDuration: 650, easingName: 'Back Both', easingCB: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)', cbValues: [0.68, -0.55, 0.27, 1.55], staggerType: 'decelerating', staggerStep: 120, overlapRatio: 0.6, distance: 30, scaleFrom: 1.1 },
  fade: { emoji: '🌫️', label: 'Fade', color: '#cbd5e1', bg: 'rgba(203,213,225,0.15)', baseDelay: 50, baseDuration: 400, easingName: 'Linear Fade', easingCB: 'cubic-bezier(0.4, 0, 0.2, 1)', cbValues: [0.4, 0, 0.2, 1], staggerType: 'linear', staggerStep: 40, overlapRatio: 0.8, distance: 0, scaleFrom: 1 },
  slam: { emoji: '💥', label: 'Slam', color: '#dc2626', bg: 'rgba(220,38,38,0.15)', baseDelay: 10, baseDuration: 200, easingName: 'Hard Impact', easingCB: 'cubic-bezier(1, 0, 1, 1)', cbValues: [1, 0, 1, 1], staggerType: 'linear', staggerStep: 20, overlapRatio: 0.1, distance: 80, scaleFrom: 1.2 },
  drift: { emoji: '⛵', label: 'Drift', color: '#3b82f6', bg: 'rgba(59,130,246,0.15)', baseDelay: 250, baseDuration: 2000, easingName: 'Long Sine', easingCB: 'cubic-bezier(0.45, 0, 0.55, 1)', cbValues: [0.45, 0, 0.55, 1], staggerType: 'accelerating', staggerStep: 400, overlapRatio: 0.95, distance: 10, scaleFrom: 0.99 },
  pop: { emoji: '🍾', label: 'Pop', color: '#14b8a6', bg: 'rgba(20,184,166,0.15)', baseDelay: 50, baseDuration: 300, easingName: 'Popper', easingCB: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)', cbValues: [0.175, 0.885, 0.32, 1.275], staggerType: 'decelerating', staggerStep: 40, overlapRatio: 0.4, distance: 0, scaleFrom: 0.5 },
  slinky: { emoji: '🌀', label: 'Slinky', color: '#8b5cf6', bg: 'rgba(139,92,246,0.15)', baseDelay: 100, baseDuration: 550, easingName: 'Elastic Out', easingCB: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)', cbValues: [0.68, -0.55, 0.27, 1.55], staggerType: 'linear', staggerStep: 150, overlapRatio: 0.2, distance: 20, scaleFrom: 0.9 },
  zoom: { emoji: '🔍', label: 'Zoom', color: '#f97316', bg: 'rgba(249,115,22,0.15)', baseDelay: 80, baseDuration: 350, easingName: 'Zoom In', easingCB: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', cbValues: [0.25, 0.46, 0.45, 0.94], staggerType: 'linear', staggerStep: 50, overlapRatio: 0.7, distance: 0, scaleFrom: 0.1 },
  
  ...Array.from({length: 31}).reduce((acc, _, i) => {
    const names = ['Bounce', 'Slap', 'Glide', 'Tension', 'Hover', 'Sneak', 'Burst', 'Drop', 'Rise', 'Twitch'];
    const emojis = ['🏀', '✋', '🦅', '🏹', '🛸', '🥷', '🎆', '💧', '🌅', '👀'];
    const colors = ['#f87171', '#fb923c', '#fbbf24', '#a3e635', '#4ade80', '#34d399', '#2dd4bf', '#38bdf8', '#818cf8', '#c084fc'];
    const name = names[i % names.length] + ' ' + (Math.floor(i/10) + 1);
    acc['preset' + (20+i)] = {
      emoji: emojis[i % emojis.length], label: name, color: colors[i % colors.length], bg: colors[i % colors.length] + '26',
      baseDelay: 50 + (i * 5), baseDuration: 300 + (i * 20),
      easingName: 'Generated ' + i, easingCB: 'cubic-bezier(0.4, 0, 0.2, 1)', cbValues: [0.4, 0, 0.2, 1],
      staggerType: i % 2 === 0 ? 'linear' : 'accelerating', staggerStep: 50 + i, overlapRatio: 0.5 + (i % 4)*0.1, distance: 10 + i, scaleFrom: 0.8 + (i%5)*0.05
    };
    return acc;
    }, {})
};

const TYPE_DEFAULTS = {
  heading: 'slide-up',  text: 'fade',    button: 'scale',
  image:   'slide-left', card: 'slide-up', icon: 'scale',
  nav:     'slide-down', badge: 'scale',
};

const state = {
  elements: [],
  preset: 'cinematic',
  tuning: { speed: 1.0, distance: 1.0, overlap: 1.0 },
  direction: 'up', 
};

function sanitiseId(raw) {
  return String(raw).replace(/[^a-zA-Z0-9\-_]/g, '').slice(0, 40) || 'element';
}

function el(tag, attrs = {}, text = null) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'className') node.className = v;
    else node.setAttribute(k, v);
  }
  if (text !== null) node.textContent = text;
  return node;
}

function append(parent, ...children) {
  for (const c of children) parent.appendChild(c);
  return parent;
}

function renderPresetGrid(targetId, showAll) {
  const grid = document.getElementById(targetId);
  if (!grid) return;
  grid.replaceChildren();

    const entries = Object.entries(PRESETS);
  
  let visibleEntries = [];
  if (showAll) {
    visibleEntries = entries;
  } else {
    
    visibleEntries = entries.slice(0, 8);
    const selectedIdx = entries.findIndex(([k]) => k === state.preset);
    if (selectedIdx >= 8) {
      visibleEntries[7] = entries[selectedIdx];
    }
  }

  for (const [key, preset] of visibleEntries) {
    const pill = el('div', {
      className: `preset-card${state.preset === key ? ' active' : ''}`,
      role: 'radio',
      'aria-checked': state.preset === key ? 'true' : 'false',
      tabindex: '0',
      'data-preset': key,
    });
    pill.style.cssText = state.preset === key
      ? `background:${preset.bg};border-color:${preset.color};color:${preset.color};`
      : '';

    const emoji = el('span', { className: 'preset-card-emoji', 'aria-hidden': 'true' }, preset.emoji);
    const name  = el('span', { className: 'preset-card-name' }, preset.label);
    append(pill, emoji, name);

    pill.addEventListener('click', () => { 
      state.preset = key; 
      renderPresetGrid('preset-grid', false);
      renderPresetGrid('modal-preset-grid', true);
      document.getElementById('presets-modal')?.classList.add('hidden');
    });
    pill.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { 
        e.preventDefault(); 
        state.preset = key; 
        renderPresetGrid('preset-grid', false);
        renderPresetGrid('modal-preset-grid', true);
        document.getElementById('presets-modal')?.classList.add('hidden');
      }
    });
    grid.appendChild(pill);
  }
}

function renderElementList() {
  const list = document.getElementById('element-list');
  if (!list) return;
  list.replaceChildren();

  if (state.elements.length === 0) {
    const empty = el('div', { className: 'el-empty' });
    const t = el('span', {}, 'No elements yet. Add one below.');
    t.style.cssText = 'font-size:0.8rem;color:var(--text-muted);padding:8px 0;display:block;';
    empty.appendChild(t);
    list.appendChild(empty);
    return;
  }

  let dragSrcEl = null;

  state.elements.forEach((element, i) => {
    const item = el('div', { className: 'element-item', role: 'listitem', draggable: 'true' });

    item.addEventListener('dragstart', (e) => {
      dragSrcEl = item;
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', i.toString());
      setTimeout(() => item.classList.add('dragging'), 0);
    });
    item.addEventListener('dragend', () => {
      item.classList.remove('dragging');
      list.querySelectorAll('.element-item').forEach(el => {
        el.classList.remove('drag-over-top', 'drag-over-bottom');
      });
    });
    item.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      const rect = item.getBoundingClientRect();
      const mid = rect.top + rect.height / 2;
      if (e.clientY < mid) {
        item.classList.add('drag-over-top');
        item.classList.remove('drag-over-bottom');
      } else {
        item.classList.add('drag-over-bottom');
        item.classList.remove('drag-over-top');
      }
      return false;
    });
    item.addEventListener('dragleave', () => {
      item.classList.remove('drag-over-top', 'drag-over-bottom');
    });
    item.addEventListener('drop', (e) => {
      e.stopPropagation();
      item.classList.remove('drag-over-top', 'drag-over-bottom');
      const fromStr = e.dataTransfer.getData('text/plain');
      if (!fromStr) return false;
      const fromIndex = parseInt(fromStr, 10);
      let toIndex = i;
      
      const rect = item.getBoundingClientRect();
      const mid = rect.top + rect.height / 2;
      if (e.clientY >= mid) toIndex++;
      
      if (fromIndex < toIndex) toIndex--; 
      
      if (fromIndex !== toIndex && fromIndex >= 0 && fromIndex < state.elements.length) {
        const [movedElement] = state.elements.splice(fromIndex, 1);
        state.elements.splice(toIndex, 0, movedElement);
        renderElementList();
      }
      return false;
    });

    const handle = el('span', { className: 'el-drag-handle', 'aria-hidden': 'true' }, '⠿');
    const num    = el('span', { className: 'el-number' }, String(i + 1).padStart(2, '0'));

    const info   = el('div', { className: 'el-info' });
    const idSpan = el('span', { className: 'el-id' }, element.id);
    const meta   = el('div', { className: 'el-meta' });

    const resolvedEntrance = element.entrance === 'auto'
      ? TYPE_DEFAULTS[element.type] || 'fade'
      : element.entrance;

    const tagType     = el('span', { className: 'el-tag el-tag-type' }, element.type);
    const tagEntrance = el('span', { className: 'el-tag el-tag-entrance' },
      element.entrance === 'auto' ? `auto → ${resolvedEntrance}` : element.entrance);
    append(meta, tagType, tagEntrance);
    append(info, idSpan, meta);

    const delBtn = el('button', {
      className: 'el-delete', type: 'button',
      'aria-label': `Remove ${element.id}`,
    }, '×');
    delBtn.addEventListener('click', () => {
      state.elements.splice(i, 1);
      renderElementList();
    });

    append(item, handle, num, info, delBtn);
    list.appendChild(item);
  });
}

function addElement() {
  const idInput  = document.getElementById('new-el-id');
  const typeEl   = document.getElementById('new-el-type');
  const entrance = document.getElementById('new-el-entrance');
  if (!idInput || !typeEl || !entrance) return;

  const rawId = idInput.value.trim();
  if (!rawId) {
    idInput.focus();
    idInput.style.borderColor = 'var(--accent-rose)';
    setTimeout(() => { idInput.style.borderColor = ''; }, 1200);
    return;
  }

  const safeId = sanitiseId(rawId);
  const type   = typeEl.value;
  const ent    = entrance.value;

  state.elements.push({ id: safeId, type, entrance: ent });
  idInput.value = '';
  idInput.focus();
  renderElementList();
}

function resolveEntrance(element) {
  let ent = element.entrance !== 'auto' ? element.entrance : (TYPE_DEFAULTS[element.type] || 'fade');
  
  if (ent.startsWith('slide-') || ent === 'scale') {
    if (state.direction === 'center') return 'scale';
    if (state.direction === 'up') return 'slide-up';
    if (state.direction === 'down') return 'slide-down';
    if (state.direction === 'left') return 'slide-left';
    if (state.direction === 'right') return 'slide-right';
  }
  
  return ent;
}

function computeStaggerDelay(index, preset, total) {
  const cfg = PRESETS[preset];
  
  const base = Math.round(cfg.baseDelay / state.tuning.speed);
  
  const overlap = cfg.overlapRatio * state.tuning.overlap;
  const step = Math.round(cfg.staggerStep / state.tuning.speed);

  switch (cfg.staggerType) {
    case 'linear':
      return Math.round(base + index * step * overlap);
    case 'accelerating': {