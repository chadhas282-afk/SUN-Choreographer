

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