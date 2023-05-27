import './App.scss';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/pagination';

import {
  AboutUs,
  Blog,
  Footer,
  Header,
  Home,
  ScrollToStart,
  Services,
} from './components';

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <Home />
      <AboutUs />
      <Services />
      <Blog />
      <Footer />
      <ScrollToStart />
    </>
  );
};

export default App;
