

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