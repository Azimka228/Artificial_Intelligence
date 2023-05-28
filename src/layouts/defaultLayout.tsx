import React, { FC, ReactNode } from 'react';

import { Footer, Header, ScrollToStart } from '../components';

interface IDefaultLayoutProps {
  children?: ReactNode;
}

export const DefaultLayout: FC<IDefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <ScrollToStart />
    </>
  );
};
