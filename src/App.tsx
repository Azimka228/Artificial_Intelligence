import './App.scss';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/pagination';

import AboutUs from './components/aboutUs/AboutUs';
import Blog from './components/blog/Blog';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import ScrollToStart from './components/scrollToStart/ScrollToStart';
import Services from './components/services/Services';

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
