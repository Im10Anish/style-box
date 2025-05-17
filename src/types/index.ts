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

export type GradientStop = {
  position: number;
  color: string;
};

export type GradientProperty = {
  type: 'linear' | 'radial';
  angle: number;
  colors: GradientStop[];
};

export type BackgroundProperty = {
  type: 'color' | 'gradient';
  color: string;
  gradient: GradientProperty;
};

export type BorderWidthProperty = {
  top: ValueWithUnit;
  right: ValueWithUnit;
  bottom: ValueWithUnit;
  left: ValueWithUnit;
  linked: boolean;
};

export type BorderStyleProperty = {
  top: string;
  right: string;
  bottom: string;
  left: string;
  linked: boolean;
};

export type BorderColorProperty = {
  top: string;
  right: string;
  bottom: string;
  left: string;
  linked: boolean;
};

export type BorderRadiusProperty = {
  topLeft: ValueWithUnit;
  topRight: ValueWithUnit;
  bottomRight: ValueWithUnit;
  bottomLeft: ValueWithUnit;
  linked: boolean;
};

export type BoxShadowProperty = {
  enabled: boolean;
  inset: boolean;
  offsetX: ValueWithUnit;
  offsetY: ValueWithUnit;
  blur: ValueWithUnit;
  spread: ValueWithUnit;
  color: string;
};

export type TextProperty = {
  content: string;
  enabled: boolean;
  color: string;
  fontSize: ValueWithUnit;
  fontFamily: string;
  fontWeight: string;
  fontStyle: string;
  textAlign: string;
  lineHeight: ValueWithUnit;
  letterSpacing: ValueWithUnit;
  textDecoration: string;
  textTransform: string;
};

export type PositionProperty = {
  type: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
  top: ValueWithUnit;
  right: ValueWithUnit;
  bottom: ValueWithUnit;
  left: ValueWithUnit;
  zIndex: number;
};

export type TransformProperty = {
  enabled: boolean;
  rotate: ValueWithUnit;
  scale: ValueWithUnit;
  translateX: ValueWithUnit;
  translateY: ValueWithUnit;
  skewX: ValueWithUnit;
  skewY: ValueWithUnit;
};

export type FilterProperty = {
  enabled: boolean;
  blur: ValueWithUnit;
  brightness: ValueWithUnit;
  contrast: ValueWithUnit;
  grayscale: ValueWithUnit;
  hueRotate: ValueWithUnit;
  invert: ValueWithUnit;
  saturate: ValueWithUnit;
  sepia: ValueWithUnit;
};

export type TransitionProperty = {
  enabled: boolean;
  property: string;
  duration: ValueWithUnit;
  timingFunction: string;
  delay: ValueWithUnit;
};

export type FlexboxProperty = {
  direction: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  wrap: 'nowrap' | 'wrap' | 'wrap-reverse';
  justifyContent:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
  gap: ValueWithUnit;
};

export type DisplayProperty = {
  type:
    | 'block'
    | 'inline'
    | 'inline-block'
    | 'flex'
    | 'inline-flex'
    | 'grid'
    | 'inline-grid'
    | 'none';
  flex: FlexboxProperty;
};

export interface DivStyles {
  // Dimensions
  width: ValueWithUnit;
  height: ValueWithUnit;

  // Spacing
  margin: SpacingProperty;
  padding: SpacingProperty;

  // Visuals
  background: BackgroundProperty;
  opacity: number;

  // Border
  border: {
    width: BorderWidthProperty;
    style: BorderStyleProperty;
    color: BorderColorProperty;
    radius: BorderRadiusProperty;
  };

  // Effects
  boxShadow: BoxShadowProperty;

  // Text
  text: TextProperty;

  // Layout and Position
  position: PositionProperty;
  transform: TransformProperty;
  filter: FilterProperty;
  transition: TransitionProperty;
  display: DisplayProperty;

  // Misc
  cursor: string;
  userSelect: 'auto' | 'none' | 'text' | 'all';
  overflow: 'visible' | 'hidden' | 'scroll' | 'auto';
  visibility: 'visible' | 'hidden' | 'collapse';
}
