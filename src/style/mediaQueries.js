import breakpoints from '../constants/breakpoints';
  
  export const mediaQueries = key => {
    return style => `@media (min-width: ${breakpoints[key]}px) { ${style} }`
  }