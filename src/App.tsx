import './App.scss';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/pagination';

import { AboutUs, Blog, Home, Services } from './components';
import { DefaultLayout } from './layouts';

export const App = (): JSX.Element => {
  return (
    <DefaultLayout>
      <Home />
      <AboutUs />
      <Services />
      <Blog />
    </DefaultLayout>
  );
};
