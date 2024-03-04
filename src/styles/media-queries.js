export const breakpoints = {
  xxxxs: 350,
  xxxs: 420,
  xxs: 500,
  xs: 600,
  sm: 800,
  md: 992,
  m1024: 1024,
  lg: 1151,
  xl: 1400,
  xxl: 1440,
  xxxl: 1600,
};

export const mediaQueries = {
  greaterThan: (key) => (style) =>
    `@media (min-width: ${breakpoints[key]}px) { ${style} }`,

  lessThan: (key) => (style) =>
    `@media (max-width: ${breakpoints[key]}px) { ${style} }`,

  between: (min, max) => (style) =>
    `@media (min-width: ${breakpoints[min]}px) and (max-width: ${breakpoints[max]}px) { ${style} }`,
};
