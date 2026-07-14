

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
      let delay = base;
      for (let i = 0; i < index; i++) delay += Math.round(step * Math.pow(1.15, i) * overlap);
      return Math.round(delay);
    }
    case 'decelerating': {
      let delay = base;
      for (let i = 0; i < index; i++) delay += Math.round(step * Math.pow(0.82, i) * overlap + 30);
      return Math.round(delay);
    }
    default:
      return Math.round(base + index * step * overlap);
  }
}

function computeDuration(element, preset) {
  const cfg = PRESETS[preset];
  let base = cfg.baseDuration;
  if (element.type === 'heading') base = Math.round(base * 1.1);
  if (element.type === 'icon' || element.type === 'badge') base = Math.round(base * 0.8);

  return Math.round(base / state.tuning.speed);
}

function getAnimProperties(entrance, preset) {
  const cfg = PRESETS[preset];
  const d   = Math.round(cfg.distance * state.tuning.distance);
  const s   = cfg.scaleFrom;

  switch (entrance) {
    case 'fade':        return `opacity: 0 → 1`;
    case 'slide-up':    return `opacity: 0→1, translateY(${d}px → 0)`;
    case 'slide-down':  return `opacity: 0→1, translateY(-${d}px → 0)`;
    case 'slide-left':  return `opacity: 0→1, translateX(-${d}px → 0)`;
    case 'slide-right': return `opacity: 0→1, translateX(${d}px → 0)`;
    case 'scale':       return `opacity: 0→1, scale(${s} → 1)`;
    case 'rotate':      return `opacity: 0→1, rotate(-8deg→0), scale(${s}→1)`;
    default:            return `opacity: 0 → 1`;
  }
}

function generateChoreography() {
  const cfg = PRESETS[state.preset];
  const total = state.elements.length;

  const rows = state.elements.map((element, i) => {
    const entrance = resolveEntrance(element);
    const delay    = computeStaggerDelay(i, state.preset, total);
    const duration = computeDuration(element, state.preset);
    const animProp = getAnimProperties(entrance, state.preset);
    return { element, entrance, delay, duration, animProp, easing: cfg.easingCB };
  });

  const totalDuration = Math.max(...rows.map(r => r.delay + r.duration));

  return {
    rows, totalDuration,
    preset: state.preset,
    presetCfg: cfg,
  };
}

function generateCSS(choreography) {
  const { rows, presetCfg } = choreography;
  const lines = [];

  lines.push('/* ─── prefers-reduced-motion override at bottom ─── */');
  lines.push('');

  const entrances = [...new Set(rows.map(r => r.entrance))];
  for (const entrance of entrances) {
    lines.push(...generateKeyframe(entrance, presetCfg));
    lines.push('');
  }

  lines.push('/* ─── Element Animation Rules ─── */');
  for (const row of rows) {
    lines.push(`#${row.element.id} {`);
    lines.push(`  animation: anim-${row.entrance} ${row.duration}ms ${row.easing} ${row.delay}ms both;`);
    lines.push(`  will-change: transform, opacity;`);
    lines.push(`}`);
    lines.push('');
  }

  lines.push('@media (prefers-reduced-motion: reduce) {');
  for (const row of rows) {
    lines.push(`  #${row.element.id} {`);
    lines.push(`    animation: anim-fade-only ${Math.round(row.duration * 0.4)}ms ease ${Math.round(row.delay * 0.3)}ms both;`);
    lines.push(`  }`);
  }
  lines.push(`}`);
  lines.push('');
  lines.push('@keyframes anim-fade-only {');
  lines.push('  from { opacity: 0; }');
  lines.push('  to   { opacity: 1; }');
  lines.push('}');

  return lines.join('\n');
}

function generateKeyframe(entrance, presetCfg) {
  const d = Math.round(presetCfg.distance * state.tuning.distance);
  const s = presetCfg.scaleFrom;
  const lines = [];
  lines.push(`@keyframes anim-${entrance} {`);
  switch (entrance) {
    case 'fade':
      lines.push('  from { opacity: 0; filter: blur(12px); }');
      lines.push('  to   { opacity: 1; filter: blur(0); }');
      break;
    case 'slide-up':
      lines.push(`  from { opacity: 0; filter: blur(8px); transform: perspective(1000px) rotateX(-12deg) translateY(${d}px); }`);
      lines.push('  to   { opacity: 1; filter: blur(0); transform: perspective(1000px) rotateX(0) translateY(0); }');
      break;
    case 'slide-down':
      lines.push(`  from { opacity: 0; filter: blur(8px); transform: perspective(1000px) rotateX(12deg) translateY(-${d}px); }`);
      lines.push('  to   { opacity: 1; filter: blur(0); transform: perspective(1000px) rotateX(0) translateY(0); }');
      break;
    case 'slide-left':
      lines.push(`  from { opacity: 0; filter: blur(8px); transform: perspective(1000px) rotateY(-12deg) translateX(-${d}px); }`);
      lines.push('  to   { opacity: 1; filter: blur(0); transform: perspective(1000px) rotateY(0) translateX(0); }');
      break;
    case 'slide-right':
      lines.push(`  from { opacity: 0; filter: blur(8px); transform: perspective(1000px) rotateY(12deg) translateX(${d}px); }`);
      lines.push('  to   { opacity: 1; filter: blur(0); transform: perspective(1000px) rotateY(0) translateX(0); }');
      break;
    case 'scale':
      lines.push(`  from { opacity: 0; filter: blur(8px); transform: scale(${s}); }`);
      lines.push('  to   { opacity: 1; filter: blur(0); transform: scale(1); }');
      break;
    case 'rotate':
      lines.push(`  from { opacity: 0; filter: blur(8px); transform: perspective(1000px) rotate(-8deg) rotateX(-12deg) scale(${s}); }`);
      lines.push('  to   { opacity: 1; filter: blur(0); transform: perspective(1000px) rotate(0deg) rotateX(0) scale(1); }');
      break;
    default:
      lines.push('  from { opacity: 0; filter: blur(12px); }');
      lines.push('  to   { opacity: 1; filter: blur(0); }');
  }
  lines.push('}');
  return lines;
}

function generateGSAP(choreography) {
  const { rows, presetCfg } = choreography;
  const lines = [];

  lines.push('// ─── SUN Choreographer — GSAP Sequence ───');
  lines.push('// Requires GSAP 3.x: https://greensock.com/gsap/');
  lines.push('// npm install gsap');
  lines.push('');
  lines.push(`import { gsap } from 'gsap';`);
  lines.push('');
  lines.push('const tl = gsap.timeline({');
  lines.push('  defaults: {');
  lines.push(`    ease: "${presetCfg.easingCB}",`);
  lines.push('  },');
  lines.push('});');
  lines.push('');
  lines.push('// Set initial states');
  for (const row of rows) {
    const fromVars = buildGSAPFromVars(row.entrance, presetCfg);
     lines.push(`gsap.set("#${row.element.id}", ${JSON.stringify(fromVars)});`);
  }
  lines.push('');
  lines.push('// Staggered timeline (delays are relative to tl start = 0)');
  for (const row of rows) {
    const toVars = buildGSAPToVars(row.entrance, row.duration, presetCfg);
    const delayStr = (row.delay / 1000).toFixed(3);
    lines.push(`tl.to("#${row.element.id}", ${JSON.stringify(toVars)}, ${delayStr}); // ${row.element.type}`);
  }
  lines.push('');
  lines.push('// ─── Reduced motion fallback ───');
  lines.push('if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {');
  lines.push('  tl.clear();');
  for (const row of rows) {
    const delayStr = (row.delay * 0.3 / 1000).toFixed(3);
    const dur = Math.round(row.duration * 0.4);
    lines.push(`  tl.to("#${row.element.id}", { opacity: 1, duration: ${(dur/1000).toFixed(2)}, ease: "none" }, ${delayStr});`);
  }
  lines.push('}');

  return lines.join('\n');
}

function buildGSAPFromVars(entrance, cfg) {
  const d = Math.round(cfg.distance * state.tuning.distance);
  const s = cfg.scaleFrom;
  
  const base = { opacity: 0, filter: 'blur(8px)', transformPerspective: 1000 };
  switch (entrance) {
    case 'fade':        return { opacity: 0, filter: 'blur(12px)' };
    case 'slide-up':    return { ...base, y: d, rotateX: -12 };
    case 'slide-down':  return { ...base, y: -d, rotateX: 12 };
    case 'slide-left':  return { ...base, x: -d, rotateY: -12 };
    case 'slide-right': return { ...base, x: d, rotateY: 12 };
    case 'scale':       return { opacity: 0, filter: 'blur(8px)', scale: s };
    case 'rotate':      return { ...base, rotation: -8, rotateX: -12, scale: s };
    default:            return { opacity: 0, filter: 'blur(12px)' };
  }
}

function buildGSAPToVars(entrance, duration, cfg) {
  const dur = parseFloat((duration / 1000).toFixed(3));
  const base = { opacity: 1, filter: 'blur(0px)', duration: dur };
  switch (entrance) {
    case 'slide-up':    return { ...base, y: 0, rotateX: 0 };
    case 'slide-down':  return { ...base, y: 0, rotateX: 0 };
    case 'slide-left':  return { ...base, x: 0, rotateY: 0 };
    case 'slide-right': return { ...base, x: 0, rotateY: 0 };
    case 'scale':       return { ...base, scale: 1 };
    case 'rotate':      return { ...base, rotation: 0, rotateX: 0, scale: 1 };
    default:            return base;
  }
}

function buildEasingCurveSVG(cb, color) {
  const [x1, y1, x2, y2] = cb;
  const W = 120, H = 80, PAD = 10;
  const iW = W - PAD * 2, iH = H - PAD * 2;

  const toSVG = (px, py) => [
    PAD + px * iW,
    PAD + (1 - py) * iH,
  ];

  const [sx, sy] = [PAD, PAD + iH]; 
  const [ex, ey] = [PAD + iW, PAD]; 
  const [c1x, c1y] = toSVG(x1, y1);
  const [c2x, c2y] = toSVG(x2, y2);

  const svgStr = [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}">`,
    `  <rect width="${W}" height="${H}" fill="rgba(0,0,0,0)" rx="4"/>`,
    
    `  <line x1="${PAD}" y1="${PAD}" x2="${PAD}" y2="${PAD + iH}" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>`,
    `  <line x1="${PAD}" y1="${PAD + iH}" x2="${PAD + iW}" y2="${PAD + iH}" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>`,
    
    `  <line x1="${sx}" y1="${sy}" x2="${c1x}" y2="${c1y}" stroke="rgba(255,255,255,0.12)" stroke-width="1" stroke-dasharray="3,3"/>`,
    `  <line x1="${ex}" y1="${ey}" x2="${c2x}" y2="${c2y}" stroke="rgba(255,255,255,0.12)" stroke-width="1" stroke-dasharray="3,3"/>`,
    
    `  <circle cx="${c1x}" cy="${c1y}" r="2.5" fill="${color}" opacity="0.5"/>`,
    `  <circle cx="${c2x}" cy="${c2y}" r="2.5" fill="${color}" opacity="0.5"/>`,
    
    `  <path d="M ${sx} ${sy} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${ex} ${ey}" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>`,
    
    `  <circle cx="${sx}" cy="${sy}" r="3" fill="${color}"/>`,
    `  <circle cx="${ex}" cy="${ey}" r="3" fill="${color}"/>`,
    `</svg>`,
  ].join('\n');

  const parser = new DOMParser();
  const doc = parser.parseFromString(svgStr, 'image/svg+xml');
  return doc.documentElement;
}

function buildPreviewVisual(type) {
  switch (type) {
    case 'heading': {
      const v = el('div', { className: 'prev-vis-heading' });
      return v;
    }
    case 'text': {
      const v = el('div', { className: 'prev-vis-text' });
      const widths = ['100%', '80%', '62%'];
      for (const w of widths) {
        const line = el('div', { className: 'prev-text-line' });
        line.style.width = w;
        v.appendChild(line);
      }
      return v;
    }
    case 'button':
      return el('div', { className: 'prev-vis-button' });
    case 'image':
      return el('div', { className: 'prev-vis-image' });
    case 'card': {
      const v = el('div', { className: 'prev-vis-card' });
      v.appendChild(el('div', { className: 'prev-card-line' }));
      v.appendChild(el('div', { className: 'prev-card-line prev-card-line-short' }));
      return v;
    }
    case 'icon': {
      const v = el('div', { className: 'prev-vis-icon', 'aria-hidden': 'true' });
      v.innerHTML = '<img src="logo.jpg" style="width: 100%; height: 100%; object-fit: contain; border-radius: 4px;" alt="icon"/>';
      return v;
    }
    case 'badge': {
      const v = el('div', { className: 'prev-vis-badge' });
      v.appendChild(el('div', { className: 'prev-badge-dot' }));
      v.appendChild(el('div', { className: 'prev-badge-text' }));
      return v;
    }
    case 'nav': {
      const v = el('div', { className: 'prev-vis-nav' });
      v.appendChild(el('div', { className: 'prev-nav-logo' }));
      v.appendChild(el('div', { className: 'prev-nav-spacer' }));
      for (let i = 0; i < 3; i++) v.appendChild(el('div', { className: 'prev-nav-link' }));
      return v;
    }
    default:
      return el('div', { className: 'prev-vis-button' });
      }
}

function buildPreviewCSS(choreography) {
  const { rows, presetCfg } = choreography;
  const lines = [];

  const entrances = [...new Set(rows.map(r => r.entrance))];
  for (const entrance of entrances) {
    const d = presetCfg.distance;
    const s = presetCfg.scaleFrom;
    lines.push(`@keyframes prev-${entrance} {`);
    switch (entrance) {
      case 'fade':
        lines.push('  from { opacity:0; filter: blur(12px); }');
        lines.push('  to   { opacity:1; filter: blur(0); }');
        break;
      case 'slide-up':
        lines.push(`  from { opacity:0; filter: blur(8px); transform:perspective(1000px) rotateX(-12deg) translateY(${d}px); }`);
        lines.push('  to   { opacity:1; filter: blur(0); transform:perspective(1000px) rotateX(0) translateY(0); }');
        break;
      case 'slide-down':
        lines.push(`  from { opacity:0; filter: blur(8px); transform:perspective(1000px) rotateX(12deg) translateY(-${d}px); }`);
        lines.push('  to   { opacity:1; filter: blur(0); transform:perspective(1000px) rotateX(0) translateY(0); }');
        break;
      case 'slide-left':
        lines.push(`  from { opacity:0; filter: blur(8px); transform:perspective(1000px) rotateY(-12deg) translateX(-${d}px); }`);
        lines.push('  to   { opacity:1; filter: blur(0); transform:perspective(1000px) rotateY(0) translateX(0); }');
        break;
      case 'slide-right':
        lines.push(`  from { opacity:0; filter: blur(8px); transform:perspective(1000px) rotateY(12deg) translateX(${d}px); }`);
        lines.push('  to   { opacity:1; filter: blur(0); transform:perspective(1000px) rotateY(0) translateX(0); }');
        break;
      case 'scale':
        lines.push(`  from { opacity:0; filter: blur(8px); transform:scale(${s}); }`);
        lines.push('  to   { opacity:1; filter: blur(0); transform:scale(1); }');
        break;
      case 'rotate':
        lines.push(`  from { opacity:0; filter: blur(8px); transform:perspective(1000px) rotate(-8deg) rotateX(-12deg) scale(${s}); }`);
        lines.push('  to   { opacity:1; filter: blur(0); transform:perspective(1000px) rotate(0deg) rotateX(0) scale(1); }');
        break;
      default:
        lines.push('  from { opacity:0; filter: blur(12px); }');
        lines.push('  to   { opacity:1; filter: blur(0); }');
    }
    lines.push('}');
    lines.push('');
  }

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    lines.push(`#pv-${i} {`);
    lines.push(`  animation: prev-${row.entrance} ${row.duration}ms ${row.easing} ${row.delay}ms both;`);
    lines.push(`}`);
  }

  lines.push('');
  lines.push('@media (prefers-reduced-motion: reduce) {');
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const rmDur  = Math.round(row.duration * 0.4);
    const rmDlay = Math.round(row.delay * 0.3);
    lines.push(`  #pv-${i} { animation: prev-fade ${rmDur}ms ease ${rmDlay}ms both; }`);
  }
  lines.push('}');

  return lines.join('\n');
}

function injectPreviewStyles(choreography) {
  const existing = document.getElementById('mc-preview-anim');
  if (existing) existing.remove();
  const style = document.createElement('style');
  style.id = 'mc-preview-anim';
  style.textContent = buildPreviewCSS(choreography); 
  document.head.appendChild(style);
}

function replayPreview(choreography) {
  
  const style = document.getElementById('mc-preview-anim');
  if (style) style.remove();

  const prevEls = document.querySelectorAll('.prev-el-wrap');
  prevEls.forEach(node => {
    node.style.opacity = '0';
    node.style.transform = '';
    node.style.animation = 'none';
  });

  void document.getElementById('preview-canvas')?.offsetHeight;

  setTimeout(() => {
    prevEls.forEach(node => { node.style.animation = ''; });
    injectPreviewStyles(choreography);
    runPreviewProgress(choreography);
  }, 60);
}

function runPreviewProgress(choreography) {
  const fill  = document.getElementById('preview-progress-fill');
  const timer = document.getElementById('preview-timer');
  if (!fill) return;

  const total = choreography.totalDuration;
  let start = null;

  function tick(now) {
    if (!start) start = now;
    const elapsed = now - start;
    const pct = Math.min((elapsed / total) * 100, 100);
    fill.style.width = pct + '%';
    if (timer) timer.textContent = Math.min(Math.round(elapsed), total) + 'ms';
    if (pct < 100) requestAnimationFrame(tick);
    else { if (timer) timer.textContent = total + 'ms'; }
  }
  fill.style.width = '0%';
  requestAnimationFrame(tick);
}

function buildPreviewSection(choreography) {
  const { rows, totalDuration, presetCfg } = choreography;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const sec = el('div', { className: 'out-section preview-section' });

  const header = el('div', { className: 'preview-header' });

  const left = el('div', { className: 'preview-header-left' });
  const dots = el('div', { className: 'preview-header-dot', 'aria-hidden': 'true' });
  append(dots,
    el('div', { className: 'preview-dot preview-dot-r' }),
    el('div', { className: 'preview-dot preview-dot-y' }),
    el('div', { className: 'preview-dot preview-dot-g' }),
  );
  const title = el('span', { className: 'preview-title' }, 'Live Preview');
  append(left, dots, title);

  const replayBtn = el('button', {
    className: 'preview-btn-replay',
    type: 'button',
    id: 'btn-replay-preview',
    'aria-label': 'Replay preview animation',
  });
  
  const svgStr = '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-4.99"/></svg>';
  const parser = new DOMParser();
  const svgDoc = parser.parseFromString(svgStr, 'image/svg+xml');
  replayBtn.appendChild(svgDoc.documentElement);
  replayBtn.appendChild(document.createTextNode(' Replay'));
  replayBtn.addEventListener('click', () => {
    replayBtn.classList.add('replaying');
    replayPreview(choreography);
    setTimeout(() => replayBtn.classList.remove('replaying'), totalDuration + 400);
  });

  append(header, left, replayBtn);
  sec.appendChild(header);

  const stage = el('div', { className: 'preview-stage' });
  const canvas = el('div', { className: 'preview-canvas', id: 'preview-canvas' });

  const INLINE_TYPES = new Set(['button', 'icon', 'badge']);
  let currentRow = null;

  rows.forEach((row, i) => {
    const isInline = INLINE_TYPES.has(row.element.type);
    const wrap = el('div', { className: 'prev-el-wrap', id: `pv-${i}` });

    const visual = buildPreviewVisual(row.element.type);
    wrap.appendChild(visual);

    const label = el('span', { className: 'prev-el-label' });
    label.textContent = row.element.id;
    wrap.appendChild(label);

    if (isInline) {
      
      if (!currentRow) {
        currentRow = el('div', { className: 'preview-row' });
        canvas.appendChild(currentRow);
      }
      currentRow.appendChild(wrap);
    } else {
      currentRow = null; 
      canvas.appendChild(wrap);
    }
  });

  stage.appendChild(canvas);
  sec.appendChild(stage);

  const progWrap = el('div', { className: 'preview-progress-wrap' });
  const progLabels = el('div', { className: 'preview-progress-label' });
  const progStart = el('span', {}, '0ms');
  const progTimer = el('span', { id: 'preview-timer' }, `${totalDuration}ms`);
  append(progLabels, progStart, progTimer);
  const barBg = el('div', { className: 'preview-progress-bar-bg' });
  const barFill = el('div', { className: 'preview-progress-fill', id: 'preview-progress-fill' });
  barBg.appendChild(barFill);
  append(progWrap, barBg, progLabels);
  sec.appendChild(progWrap);

  sec.dataset.ready = '1';
  return sec;
}

function renderOutput(choreography) {
  const { rows, presetCfg } = choreography;
  const content = document.getElementById('output-content');
  const empty   = document.getElementById('output-empty');
  if (!content || !empty) return;

  content.replaceChildren();

  const secPreview = buildPreviewSection(choreography);

  const secCode = buildSection('', 'Production Code');

  const tabBar = el('div', { className: 'code-tabs' });
  const cssTabBtn  = el('button', { className: 'code-tab-btn active', type: 'button', id: 'tab-css' }, 'CSS @keyframes');
  const gsapTabBtn = el('button', { className: 'code-tab-btn', type: 'button', id: 'tab-gsap' }, 'GSAP / JS');
  append(tabBar, cssTabBtn, gsapTabBtn);

  const cssPanel  = el('div', { className: 'code-panel active', id: 'panel-css' });
  const gsapPanel = el('div', { className: 'code-panel', id: 'panel-gsap' });

  const cssCode  = generateCSS(choreography);
  const gsapCode = generateGSAP(choreography);

  cssPanel.appendChild(buildCodeBlock('css', cssCode, 'css-copy'));
  gsapPanel.appendChild(buildCodeBlock('javascript', gsapCode, 'gsap-copy'));

  cssTabBtn.addEventListener('click', () => {
    cssTabBtn.className = 'code-tab-btn active';
    gsapTabBtn.className = 'code-tab-btn';
    cssPanel.className = 'code-panel active';
    gsapPanel.className = 'code-panel';
  });
  gsapTabBtn.addEventListener('click', () => {
    gsapTabBtn.className = 'code-tab-btn active';
    cssTabBtn.className = 'code-tab-btn';
    gsapPanel.className = 'code-panel active';
    cssPanel.className = 'code-panel';
  });

  append(secCode, tabBar, cssPanel, gsapPanel);

  append(content, secPreview);

  const exportTarget = document.getElementById('code-export-target');
  if (exportTarget) {
    exportTarget.replaceChildren(secCode);
  }

  empty.style.display = 'none';
  content.style.display = 'flex';

  const sections = content.querySelectorAll('.out-section');
  sections.forEach((s, i) => {
    setTimeout(() => s.classList.add('visible'), i * 80);
  });

  setTimeout(() => {
    injectPreviewStyles(choreography);
    runPreviewProgress(choreography);
  }, 120);
}

function buildSection(num, title) {
  const sec = el('div', { className: 'out-section' });
  const header = el('div', { className: 'out-section-title' });
  const numSpan = el('span', { 'aria-hidden': 'true' });
  numSpan.textContent = num;
  numSpan.style.cssText = 'font-family:var(--font-mono);font-size:0.65rem;color:var(--text-muted);';
  const titleSpan = el('span', {}, title);
  if (num) {
    append(header, numSpan, titleSpan);
  } else {
    append(header, titleSpan);
    }
  sec.appendChild(header);
  return sec;
}

function buildCodeBlock(lang, code, copyId) {
  const wrap = el('div', { className: 'code-block-wrap' });
  const header = el('div', { className: 'code-block-header' });
  const langLabel = el('span', { className: 'code-block-lang' }, lang);
  const copyBtn = el('button', { className: 'code-copy-btn', type: 'button', id: copyId }, 'Copy');
  append(header, langLabel, copyBtn);

  const pre = el('pre', { className: 'code-pre' });
  
  pre.textContent = code;

  append(wrap, header, pre);

  copyBtn.addEventListener('click', () => {
    
     navigator.clipboard.writeText(code).then(() => {
      copyBtn.textContent = 'Copied!';
      copyBtn.classList.add('copied');
      setTimeout(() => {
        copyBtn.textContent = 'Copy';
        copyBtn.classList.remove('copied');
      }, 2000);
    }).catch(() => {
      
      copyBtn.textContent = 'Failed';
      setTimeout(() => { copyBtn.textContent = 'Copy'; }, 2000);
    });
  });

  return wrap;
}

function buildNoteCard(icon, title, items) {
  const card = el('div', { className: 'note-card' });
  const header = el('div', { className: 'note-card-header' });
  const iconEl = el('span', { className: 'note-card-icon', 'aria-hidden': 'true' }, icon);
  const titleEl = el('span', { className: 'note-card-title' }, title);
  append(header, iconEl, titleEl);
  card.appendChild(header);

  const list = el('ul', { className: 'note-list' });
  for (const item of items) {
    const li = el('li', {}, item);
    list.appendChild(li);
  }
  card.appendChild(list);
  return card;
}

function buildStaggerExplanation(cfg, rows) {
  const type = cfg.staggerType;
  const delays = rows.map(r => r.delay);
  const diffs = delays.slice(1).map((d, i) => d - delays[i]);

  if (type === 'linear') {
    return `Linear stagger: each element starts exactly ${Math.round(cfg.staggerStep * cfg.overlapRatio)}ms after the previous. This creates a consistent, predictable rhythm — elements arrive like frames in a film. Overlap ratio of ${Math.round(cfg.overlapRatio * 100)}% means the next element starts while the previous is still in motion, creating flow rather than a sequence of isolated movements.`;
  } else if (type === 'accelerating') {
    return `Accelerating (exponential) stagger: the interval between elements grows with each step (approx ×1.15 per element). The sequence starts dense and spreads out — creating a burst effect that builds excitement, then releases. First gap: ~${diffs[0]}ms. Later gaps: ~${diffs[diffs.length - 1] || diffs[0]}ms. Psychologically, this front-loads visual momentum.`;
  } else {
    return `Decelerating stagger: the interval between elements shrinks with each step (approx ×0.82 decay). The sequence starts sparse and converges — like elements being drawn together by a gravitational pull. First gap: ~${diffs[0]}ms. Later gaps: ~${diffs[diffs.length - 1] || diffs[0]}ms. Creates a sense of convergence and arrival.`;
  }
}

function runHeroDemoAnimation() {
  const demoEls = document.querySelectorAll('.demo-el');
  const tlBars  = document.querySelectorAll('.demo-tl-bar');

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function reset() {
    demoEls.forEach(el => {
      el.style.transition = 'none';
      el.style.opacity    = '0';
      el.style.transform  = 'translateY(14px)';
    });
    tlBars.forEach(b => {
      b.style.transition = 'none';
      b.style.transform  = 'scaleX(0)';
    });
  }

  function play() {
    const delays = [0, 130, 220, 310, 400];
    const dur = 600;

    demoEls.forEach((el, i) => {
      setTimeout(() => {
        el.style.transition = `opacity ${dur}ms cubic-bezier(0.22,1,0.36,1), transform ${dur}ms cubic-bezier(0.22,1,0.36,1)`;
        el.style.opacity    = '1';
        el.style.transform  = 'translateY(0)';
      }, delays[i]);
    });

    tlBars.forEach((bar, i) => {
      setTimeout(() => {
        bar.style.transition = `transform ${dur * 0.8}ms cubic-bezier(0.22,1,0.36,1)`;
        bar.style.transform  = 'scaleX(1)';
      }, delays[i] + 60);
    });
  }

  if (prefersReduced) {
    
    demoEls.forEach(el => { el.style.opacity = '1'; el.style.transform = 'none'; });
    tlBars.forEach(b  => { b.style.transform = 'scaleX(1)'; });
    return;
  }

  reset();
  setTimeout(play, 1500); 

  setInterval(() => {
    reset();
    setTimeout(play, 400);
  }, 4500);
  }

function handleGenerate() {
  if (state.elements.length === 0) {
    const addBtn = document.getElementById('btn-add-element');
    if (addBtn) {
      addBtn.style.borderColor = 'var(--accent-rose)';
      addBtn.style.color = 'var(--accent-rose)';
      setTimeout(() => {
        addBtn.style.borderColor = '';
        addBtn.style.color = '';
      }, 1500);
    }
    return;
  }

  const btn = document.getElementById('btn-generate');
  if (btn) {
    btn.style.transform = 'scale(0.97)';
    setTimeout(() => { btn.style.transform = ''; }, 150);