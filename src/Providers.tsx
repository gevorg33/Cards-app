import React, { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

export function Providers({ children }: { children: ReactNode }): JSX.Element {
  return <BrowserRouter>{children}</BrowserRouter>;
}
