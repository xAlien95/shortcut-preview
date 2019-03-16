/// <reference types="react-scripts" />

declare module '*.scss' {
  const content: any;
  export default content;
}

declare module React {
  interface CSSProperties {
    '--indent'?: number;
  }
}
