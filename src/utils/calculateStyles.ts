import { DivStyles } from '@/types';

const calculateStyles = (styles: DivStyles): React.CSSProperties => {
  const calculatedStyles: React.CSSProperties = {};

  // Dimensions
  calculatedStyles.width = `${styles.width.value}${styles.width.unit}`;
  calculatedStyles.height = `${styles.height.value}${styles.height.unit}`;

  // Background
  if (styles.background.type === 'color') {
    calculatedStyles.background = styles.background.color;
  } else if (styles.background.type === 'gradient') {
    const { gradient } = styles.background;
    if (gradient.type === 'linear') {
      calculatedStyles.background = `linear-gradient(${gradient.angle}deg, ${gradient.colors.map((c) => `${c.color} ${c.position}%`).join(', ')})`;
    } else {
      calculatedStyles.background = `radial-gradient(circle, ${gradient.colors.map((c) => `${c.color} ${c.position}%`).join(', ')})`;
    }
  }

  const generateBorderSide = (side: 'top' | 'right' | 'bottom' | 'left') => {
    return `${styles.border.width[side].value}${styles.border.width[side].unit} ${styles.border.style[side]} ${styles.border.color[side]}`;
  };

  if (styles.border.width.linked && styles.border.style.linked && styles.border.color.linked) {
    calculatedStyles.border = generateBorderSide('top');
  } else {
    if (!styles.border.width.linked) {
      calculatedStyles.borderTopWidth = `${styles.border.width.top.value}${styles.border.width.top.unit}`;
      calculatedStyles.borderRightWidth = `${styles.border.width.right.value}${styles.border.width.right.unit}`;
      calculatedStyles.borderBottomWidth = `${styles.border.width.bottom.value}${styles.border.width.bottom.unit}`;
      calculatedStyles.borderLeftWidth = `${styles.border.width.left.value}${styles.border.width.left.unit}`;
    } else {
      calculatedStyles.borderWidth = `${styles.border.width.top.value}${styles.border.width.top.unit}`;
    }

    if (!styles.border.style.linked) {
      calculatedStyles.borderTopStyle = styles.border.style
        .top as React.CSSProperties['borderTopStyle'];
      calculatedStyles.borderRightStyle = styles.border.style
        .right as React.CSSProperties['borderRightStyle'];
      calculatedStyles.borderBottomStyle = styles.border.style
        .bottom as React.CSSProperties['borderBottomStyle'];
      calculatedStyles.borderLeftStyle = styles.border.style
        .left as React.CSSProperties['borderLeftStyle'];
    } else {
      calculatedStyles.borderStyle = styles.border.style.top;
    }

    if (!styles.border.color.linked) {
      calculatedStyles.borderTopColor = styles.border.color.top;
      calculatedStyles.borderRightColor = styles.border.color.right;
      calculatedStyles.borderBottomColor = styles.border.color.bottom;
      calculatedStyles.borderLeftColor = styles.border.color.left;
    } else {
      calculatedStyles.borderColor = styles.border.color.top;
    }
  }

  // Border Radius
  if (styles.border.radius.linked) {
    calculatedStyles.borderRadius = `${styles.border.radius.topLeft.value}${styles.border.radius.topLeft.unit}`;
  } else {
    calculatedStyles.borderRadius = `${styles.border.radius.topLeft.value}${styles.border.radius.topLeft.unit} ${styles.border.radius.topRight.value}${styles.border.radius.topRight.unit} ${styles.border.radius.bottomRight.value}${styles.border.radius.bottomRight.unit} ${styles.border.radius.bottomLeft.value}${styles.border.radius.bottomLeft.unit}`;
  }

  // Margin
  if (styles.margin.linked) {
    calculatedStyles.margin = `${styles.margin.top.value}${styles.margin.top.unit}`;
  } else {
    calculatedStyles.margin = `${styles.margin.top.value}${styles.margin.top.unit} ${styles.margin.right.value}${styles.margin.right.unit} ${styles.margin.bottom.value}${styles.margin.bottom.unit} ${styles.margin.left.value}${styles.margin.left.unit}`;
  }

  // Padding
  if (styles.padding.linked) {
    calculatedStyles.padding = `${styles.padding.top.value}${styles.padding.top.unit}`;
  } else {
    calculatedStyles.padding = `${styles.padding.top.value}${styles.padding.top.unit} ${styles.padding.right.value}${styles.padding.right.unit} ${styles.padding.bottom.value}${styles.padding.bottom.unit} ${styles.padding.left.value}${styles.padding.left.unit}`;
  }

  // Box Shadow
  if (styles.boxShadow.enabled) {
    const inset = styles.boxShadow.inset ? 'inset ' : '';
    calculatedStyles.boxShadow = `${inset}${styles.boxShadow.offsetX.value}${styles.boxShadow.offsetX.unit} ${styles.boxShadow.offsetY.value}${styles.boxShadow.offsetY.unit} ${styles.boxShadow.blur.value}${styles.boxShadow.blur.unit} ${styles.boxShadow.spread.value}${styles.boxShadow.spread.unit} ${styles.boxShadow.color}`;
  }

  // Opacity
  calculatedStyles.opacity = styles.opacity;

  // Text Properties
  if (styles.text.enabled) {
    calculatedStyles.color = styles.text.color;
    calculatedStyles.fontSize = `${styles.text.fontSize.value}${styles.text.fontSize.unit}`;
    calculatedStyles.fontFamily = styles.text.fontFamily;
    calculatedStyles.fontWeight = styles.text.fontWeight;
    calculatedStyles.fontStyle = styles.text.fontStyle;
    calculatedStyles.textAlign = styles.text.textAlign as React.CSSProperties['textAlign'];
    calculatedStyles.lineHeight = `${styles.text.lineHeight.value}${styles.text.lineHeight.unit}`;
    calculatedStyles.letterSpacing = `${styles.text.letterSpacing.value}${styles.text.letterSpacing.unit}`;

    if (styles.text.textDecoration !== 'none') {
      calculatedStyles.textDecoration = styles.text.textDecoration;
    }

    if (styles.text.textTransform !== 'none') {
      calculatedStyles.textTransform = styles.text
        .textTransform as React.CSSProperties['textTransform'];
    }
  }

  // Position
  calculatedStyles.position = styles.position.type;

  // Transform
  if (styles.transform.enabled) {
    const transformValue: string[] = [];

    if (styles.transform.rotate.value !== 0) {
      transformValue.push(
        `rotate(${styles.transform.rotate.value}${styles.transform.rotate.unit})`
      );
    }

    if (styles.transform.scale.value !== 1) {
      transformValue.push(`scale(${styles.transform.scale.value})`);
    }

    if (styles.transform.translateX.value !== 0) {
      transformValue.push(
        `translateX(${styles.transform.translateX.value}${styles.transform.translateX.unit})`
      );
    }

    if (styles.transform.translateY.value !== 0) {
      transformValue.push(
        `translateY(${styles.transform.translateY.value}${styles.transform.translateY.unit})`
      );
    }

    if (styles.transform.skewX.value !== 0) {
      transformValue.push(`skewX(${styles.transform.skewX.value}${styles.transform.skewX.unit})`);
    }

    if (styles.transform.skewY.value !== 0) {
      transformValue.push(`skewY(${styles.transform.skewY.value}${styles.transform.skewY.unit})`);
    }

    if (transformValue.length > 0) {
      calculatedStyles.transform = transformValue.join(' ');
    }
  }

  // Filter
  if (styles.filter.enabled) {
    const filterValue: string[] = [];

    if (styles.filter.blur.value !== 0) {
      filterValue.push(`blur(${styles.filter.blur.value}${styles.filter.blur.unit})`);
    }

    if (styles.filter.brightness.value !== 100) {
      filterValue.push(
        `brightness(${styles.filter.brightness.value}${styles.filter.brightness.unit})`
      );
    }

    if (styles.filter.contrast.value !== 100) {
      filterValue.push(`contrast(${styles.filter.contrast.value}${styles.filter.contrast.unit})`);
    }

    if (styles.filter.grayscale.value !== 0) {
      filterValue.push(
        `grayscale(${styles.filter.grayscale.value}${styles.filter.grayscale.unit})`
      );
    }

    if (styles.filter.hueRotate.value !== 0) {
      filterValue.push(
        `hue-rotate(${styles.filter.hueRotate.value}${styles.filter.hueRotate.unit})`
      );
    }

    if (styles.filter.invert.value !== 0) {
      filterValue.push(`invert(${styles.filter.invert.value}${styles.filter.invert.unit})`);
    }

    if (styles.filter.saturate.value !== 100) {
      filterValue.push(`saturate(${styles.filter.saturate.value}${styles.filter.saturate.unit})`);
    }

    if (styles.filter.sepia.value !== 0) {
      filterValue.push(`sepia(${styles.filter.sepia.value}${styles.filter.sepia.unit})`);
    }

    if (filterValue.length > 0) {
      calculatedStyles.filter = filterValue.join(' ');
    }
  }

  // Transition
  if (styles.transition.enabled) {
    calculatedStyles.transition = `${styles.transition.property} ${styles.transition.duration.value}${styles.transition.duration.unit} ${styles.transition.timingFunction} ${styles.transition.delay.value}${styles.transition.delay.unit}`;
  }

  // Display
  calculatedStyles.display = styles.display.type;
  if (styles.display.type === 'flex' || styles.display.type === 'inline-flex') {
    calculatedStyles.flexDirection = styles.display.flex.direction;
    calculatedStyles.flexWrap = styles.display.flex.wrap;
    calculatedStyles.justifyContent = styles.display.flex.justifyContent;
    calculatedStyles.alignItems = styles.display.flex.alignItems;
    calculatedStyles.gap = `${styles.display.flex.gap.value}${styles.display.flex.gap.unit}`;
  }

  // Miscellaneous
  calculatedStyles.cursor = styles.cursor;
  calculatedStyles.userSelect = styles.userSelect;
  calculatedStyles.overflow = styles.overflow;

  if (styles.visibility !== 'visible') {
    calculatedStyles.visibility = styles.visibility;
  }

  return calculatedStyles;
};

export default calculateStyles;
