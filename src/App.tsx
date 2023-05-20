import "./App.scss"
import "swiper/css";
import "swiper/css/pagination";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import AboutUs from "./components/aboutUs/AboutUs";
import Services from "./components/services/Services";
import Blog from "./components/blog/Blog";
import Footer from "./components/footer/Footer";
import ScrollToStart from "./components/scrollToStart/ScrollToStart";

function App() {

	return (
		<>
			<Header/>
			<Home/>
			<AboutUs/>
			<Services/>
			<Blog/>
			<Footer/>
			<ScrollToStart/>
		</>
	)
}

export default App
