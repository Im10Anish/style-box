import { DivStyles } from '@/types';

export const initialState: DivStyles = {
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
};
