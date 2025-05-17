import { DivStyles } from '@/types';

export const initialDivStyle: DivStyles = {
  width: {
    value: 200,
    unit: 'px',
  },
  height: {
    value: 200,
    unit: 'px',
  },

  margin: {
    top: { value: 0, unit: 'px' },
    right: { value: 0, unit: 'px' },
    bottom: { value: 0, unit: 'px' },
    left: { value: 0, unit: 'px' },
    linked: true,
  },

  padding: {
    top: { value: 0, unit: 'px' },
    right: { value: 0, unit: 'px' },
    bottom: { value: 0, unit: 'px' },
    left: { value: 0, unit: 'px' },
    linked: true,
  },

  background: {
    type: 'color',
    color: '#3498db',
    gradient: {
      type: 'linear',
      angle: 90,
      colors: [
        { position: 0, color: '#3498db' },
        { position: 100, color: '#2980b9' },
      ],
    },
  },

  opacity: 1,

  border: {
    width: {
      top: { value: 1, unit: 'px' },
      right: { value: 1, unit: 'px' },
      bottom: { value: 1, unit: 'px' },
      left: { value: 1, unit: 'px' },
      linked: true,
    },
    style: {
      top: 'solid',
      right: 'solid',
      bottom: 'solid',
      left: 'solid',
      linked: true,
    },
    color: {
      top: '#2c3e50',
      right: '#2c3e50',
      bottom: '#2c3e50',
      left: '#2c3e50',
      linked: true,
    },
    radius: {
      topLeft: { value: 0, unit: 'px' },
      topRight: { value: 0, unit: 'px' },
      bottomRight: { value: 0, unit: 'px' },
      bottomLeft: { value: 0, unit: 'px' },
      linked: true,
    },
  },

  boxShadow: {
    enabled: false,
    inset: false,
    offsetX: { value: 0, unit: 'px' },
    offsetY: { value: 4, unit: 'px' },
    blur: { value: 8, unit: 'px' },
    spread: { value: 0, unit: 'px' },
    color: 'rgba(0, 0, 0, 0.2)',
  },

  text: {
    content: 'Sample Text',
    enabled: false,
    color: '#ffffff',
    fontSize: { value: 16, unit: 'px' },
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'normal',
    fontStyle: 'normal',
    textAlign: 'center',
    lineHeight: { value: 1.5, unit: 'em' },
    letterSpacing: { value: 0, unit: 'px' },
    textDecoration: 'none',
    textTransform: 'none',
  },

  position: {
    type: 'static',
    top: { value: 0, unit: 'px' },
    right: { value: 0, unit: 'px' },
    bottom: { value: 0, unit: 'px' },
    left: { value: 0, unit: 'px' },
    zIndex: 1,
  },

  transform: {
    enabled: false,
    rotate: { value: 0, unit: 'deg' },
    scale: { value: 1, unit: '' },
    translateX: { value: 0, unit: 'px' },
    translateY: { value: 0, unit: 'px' },
    skewX: { value: 0, unit: 'deg' },
    skewY: { value: 0, unit: 'deg' },
  },

  filter: {
    enabled: false,
    blur: { value: 0, unit: 'px' },
    brightness: { value: 100, unit: '%' },
    contrast: { value: 100, unit: '%' },
    grayscale: { value: 0, unit: '%' },
    hueRotate: { value: 0, unit: 'deg' },
    invert: { value: 0, unit: '%' },
    saturate: { value: 100, unit: '%' },
    sepia: { value: 0, unit: '%' },
  },

  transition: {
    enabled: false,
    property: 'all',
    duration: { value: 0.3, unit: 's' },
    timingFunction: 'ease',
    delay: { value: 0, unit: 's' },
  },

  display: {
    type: 'block',
    flex: {
      direction: 'row',
      wrap: 'nowrap',
      justifyContent: 'center',
      alignItems: 'center',
      gap: { value: 0, unit: 'px' },
    },
  },

  cursor: 'default',
  userSelect: 'auto',
  overflow: 'visible',
  visibility: 'visible',
};
