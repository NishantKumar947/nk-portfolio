declare module 'react' {
  export type Key = string | number;
  export type ReactNode = any;

  export const StrictMode: any;

  export function useState<T>(
    initialState: T | (() => T),
  ): [T, (value: T | ((previousValue: T) => T)) => void];

  export function useEffect(
    effect: () => void | (() => void),
    dependencies?: readonly unknown[],
  ): void;
}

declare module 'react-dom/client' {
  export function createRoot(container: Element | DocumentFragment): {
    render(children: any): void;
  };
}

declare module 'react/jsx-runtime' {
  export const Fragment: any;
  export function jsx(type: any, props: any, key?: any): any;
  export function jsxs(type: any, props: any, key?: any): any;
}

declare namespace JSX {
  interface IntrinsicElements {
    [elementName: string]: any;
  }
}
