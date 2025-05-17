export type Unit = 'px' | '%' | 'rem' | 'em' | 'vh' | 'vw' | 'deg' | 's' | 'ms' | '';

export type ValueWithUnit = {
  value: number;
  unit: Unit;
};

export type SpacingProperty = {
  top: ValueWithUnit;
  right: ValueWithUnit;
  bottom: ValueWithUnit;
  left: ValueWithUnit;
  linked: boolean;
};

export interface DivStyles {
  // Dimensions
  width: ValueWithUnit;
  height: ValueWithUnit;

  // Spacing
  margin: SpacingProperty;
  padding: SpacingProperty;
}
