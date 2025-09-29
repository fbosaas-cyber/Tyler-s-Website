// Minimal shims to quiet editor/type errors until dependencies are installed
declare module 'next/head';
declare module 'next/link';
declare module 'framer-motion';
declare module 'next';
declare module 'react';
declare module 'react-dom';
declare module '*.css';

// Node builtins
declare module 'fs';
declare module 'path';
declare module 'os';

declare var process: any;

declare namespace NodeJS {
  interface Process {
    env: any
  }
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any
  }
}
