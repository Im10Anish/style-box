import { DivStyles } from '@/types';

const generateCss = (styles: DivStyles): string => {
  let css = '.my-div {\n';

  //Dimensions
  css += `  width: ${styles.width.value}${styles.width.unit};\n`;
  css += `  height: ${styles.height.value}${styles.height.unit};\n`;

  //Background
  if (styles.background.type === 'color') {
    css += `  background: ${styles.background.color};\n`;
  } else if (styles.background.type === 'gradient') {
    const { gradient } = styles.background;
    if (gradient.type === 'linear') {
      css += `  background: linear-gradient(${gradient.angle}deg, ${gradient.colors.map((color) => `${color.color} ${color.position}%`).join(', ')});\n`;
    } else {
      css += `  background: radial-gradient(circle, ${gradient.colors.map((color) => `${color.color} ${color.position}%`).join(', ')});\n`;
    }
  }

  //Border
  const generateBorderSide = (side: 'top' | 'right' | 'bottom' | 'left') => {
    const width = styles.border.width[side].value;
    const unit = styles.border.width[side].unit;
    const style = styles.border.style[side];
    const color = styles.border.color[side];

    return `${width}${unit} ${style} ${color}`;
  };

  if (styles.border.width.linked && styles.border.style.linked && styles.border.color.linked) {
    css += `  border: ${generateBorderSide('top')};\n`;
  } else {
    if (!styles.border.width.linked) {
      css += `  border-top-width: ${styles.border.width.top.value}${styles.border.width.top.unit};\n`;
      css += `  border-right-width: ${styles.border.width.right.value}${styles.border.width.right.unit};\n`;
      css += `  border-bottom-width: ${styles.border.width.bottom.value}${styles.border.width.bottom.unit};\n`;
      css += `  border-left-width: ${styles.border.width.left.value}${styles.border.width.left.unit};\n`;
    } else {
      css += `  border-width: ${styles.border.width.top.value}${styles.border.width.top.unit};\n`;
    }

    if (!styles.border.style.linked) {
      css += `  border-top-style: ${styles.border.style.top};\n`;
      css += `  border-right-style: ${styles.border.style.right};\n`;
      css += `  border-bottom-style: ${styles.border.style.bottom};\n`;
      css += `  border-left-style: ${styles.border.style.left};\n`;
    } else {
      css += `  border-style: ${styles.border.style.top};\n`;
    }

    if (!styles.border.color.linked) {
      css += `  border-top-color: ${styles.border.color.top};\n`;
      css += `  border-right-color: ${styles.border.color.right};\n`;
      css += `  border-bottom-color: ${styles.border.color.bottom};\n`;
      css += `  border-left-color: ${styles.border.color.left};\n`;
    } else {
      css += `  border-color: ${styles.border.color.top};\n`;
    }
  }

  //Border Radius
  if (styles.border.radius.linked) {
    css += `  border-radius: ${styles.border.radius.topLeft.value}${styles.border.radius.topLeft.unit};\n`;
  } else {
    css += `  border-radius: ${styles.border.radius.topLeft.value}${styles.border.radius.topLeft.unit} ${styles.border.radius.topRight.value}${styles.border.radius.topRight.unit} ${styles.border.radius.bottomRight.value}${styles.border.radius.bottomRight.unit} ${styles.border.radius.bottomLeft.value}${styles.border.radius.bottomLeft.unit};\n`;
  }

  // Margin
  if (styles.margin.linked) {
    css += `  margin: ${styles.margin.top.value}${styles.margin.top.unit};\n`;
  } else {
    css += `  margin: ${styles.margin.top.value}${styles.margin.top.unit} ${styles.margin.right.value}${styles.margin.right.unit} ${styles.margin.bottom.value}${styles.margin.bottom.unit} ${styles.margin.left.value}${styles.margin.left.unit};\n`;
  }

  // Padding
  if (styles.padding.linked) {
    css += `  padding: ${styles.padding.top.value}${styles.padding.top.unit};\n`;
  } else {
    css += `  padding: ${styles.padding.top.value}${styles.padding.top.unit} ${styles.padding.right.value}${styles.padding.right.unit} ${styles.padding.bottom.value}${styles.padding.bottom.unit} ${styles.padding.left.value}${styles.padding.left.unit};\n`;
  }

  // Box Shadow
  if (styles.boxShadow.enabled) {
    const inset = styles.boxShadow.inset ? 'inset ' : '';
    css += `  box-shadow: ${inset}${styles.boxShadow.offsetX.value}${styles.boxShadow.offsetX.unit} ${styles.boxShadow.offsetY.value}${styles.boxShadow.offsetY.unit} ${styles.boxShadow.blur.value}${styles.boxShadow.blur.unit} ${styles.boxShadow.spread.value}${styles.boxShadow.spread.unit} ${styles.boxShadow.color};\n`;
  }

  // Opacity
  css += `  opacity: ${styles.opacity};\n`;

  //Text Styles
  if (styles.text.enabled) {
    css += `  color: ${styles.text.color};\n`;
    css += `  font-size: ${styles.text.fontSize.value}${styles.text.fontSize.unit};\n`;
    css += `  font-family: ${styles.text.fontFamily};\n`;
    css += `  font-weight: ${styles.text.fontWeight};\n`;
    css += `  font-style: ${styles.text.fontStyle};\n`;
    css += `  text-align: ${styles.text.textAlign};\n`;
    css += `  line-height: ${styles.text.lineHeight.value}${styles.text.lineHeight.unit};\n`;
    css += `  letter-spacing: ${styles.text.letterSpacing.value}${styles.text.letterSpacing.unit};\n`;

    if (styles.text.textDecoration !== 'none') {
      css += `  text-decoration: ${styles.text.textDecoration};\n`;
    }

    if (styles.text.textTransform !== 'none') {
      css += `  text-transform: ${styles.text.textTransform};\n`;
    }
  }

  //Position
  css += `  position: ${styles.position.type};\n`;
  if (styles.position.type !== 'static') {
    css += `  top: ${styles.position.top.value}${styles.position.top.unit};\n`;
    css += `  right: ${styles.position.right.value}${styles.position.right.unit};\n`;
    css += `  bottom: ${styles.position.bottom.value}${styles.position.bottom.unit};\n`;
    css += `  left: ${styles.position.left.value}${styles.position.left.unit};\n`;
    css += `  z-index: ${styles.position.zIndex};\n`;
  }

  //Transform
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
      css += `  transform: ${transformValue.join(' ')};\n`;
    }
  }

  //Filter
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
      css += `  filter: ${filterValue.join(' ')};\n`;
    }
  }

  //Transition
  if (styles.transition.enabled) {
    css += `  transition: ${styles.transition.property} ${styles.transition.duration.value}${styles.transition.duration.unit} ${styles.transition.timingFunction} ${styles.transition.delay.value}${styles.transition.delay.unit};\n`;
  }

  //Display
  css += `  display: ${styles.display.type};\n`;
  if (styles.display.type === 'flex' || styles.display.type === 'inline-flex') {
    css += `  flex-direction: ${styles.display.flex.direction};\n`;
    css += `  flex-wrap: ${styles.display.flex.wrap};\n`;
    css += `  justify-content: ${styles.display.flex.justifyContent};\n`;
    css += `  align-items: ${styles.display.flex.alignItems};\n`;
    css += `  gap: ${styles.display.flex.gap.value}${styles.display.flex.gap.unit};\n`;
  }

  //Miscellaneous
  css += `  cursor: ${styles.cursor};\n`;
  css += `  user-select: ${styles.userSelect};\n`;
  css += `  overflow: ${styles.overflow};\n`;

  if (styles.visibility !== 'visible') {
    css += `  visibility: ${styles.visibility};\n`;
  }

  css += `}`;

  return css;
};

export default generateCss;
