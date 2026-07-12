

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