import Navbar from "./components/navbar/Navbar";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import NewsLetter from "./pages/NewsLetter";
import NewsPage from "./pages/NewsPage";
import { BrowserRouter as Router, Route, Switch, Redirect, Routes, useLocation } from 'react-router-dom';
import Tazelikler from "./pages/Tazelikler";
import Library from "./pages/Library";
import Search from "./pages/Search";
import YashlarBarada from "./pages/YashlarBarada";
import YashlarDetail from "./pages/YashlarDetail";
import TopicDetail from "./pages/TopicDetail";
import Wakansiya from "./pages/Wakansiya";
import Questions from "./pages/Questions";
import Map from "./components/Map";
import AnotherMap from "./components/Anothermap";
import { useEffect } from "react";
import Project from "./pages/Project";
import { useTranslation } from "react-i18next";
import Enneagram from "./pages/Enneagram";
import ScrollToTop from "./components/ScrollToTop";
// import ScrollToTopOnRouteChange from "./components/ScrollToTopOnRouteChange";



function App() {
  const { t, i18n } = useTranslation();

  const location = useLocation();

  useEffect(() => {
    // Change language to 'tk' if not already set
    // if (!i18n.language || i18n.language === 'cimode') {
      i18n.changeLanguage('tk');
    // }
  }, [i18n]);

  useEffect(() => {
    // const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto' // Optional: smooth scrolling behavior
    });
    // };
    // Scroll to the top when the route changes
    // window.addEventListener('hashchange', scrollToTop);
    // return () => window.removeEventListener('hashchange', scrollToTop);
  }, [location.pathname]);


  return (
    <>
      <div className={`flex min-h-[100vh] flex-col  font-[Geologica-Regular]`}>

        <Navbar />
        {/* <Router> */}
        <div className="grow">

          <Routes>

            {/* <ScrollToTopOnRouteChange/> */}
            {/* <div className="relative"> */}
            <Route path="/" exact element={<Home />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/:id" element={<NewsPage />} />
            <Route path="/newsletter" element={<NewsLetter />} />
            <Route path="/project/:id" element={<Project />} />
            <Route path="/topic/yaslar/:id" element={<Tazelikler />} />
            <Route path="/library" element={<Library />} />
            <Route path="/search" element={<Search />} />
            <Route path="/yaslar" element={<YashlarBarada />} />
            <Route path="/yaslar/:id" element={<YashlarDetail />} />
            <Route path="/vacansy" element={<Wakansiya />} />
            <Route path="/vacansy/:id" element={<TopicDetail show={true} />} />
            <Route path="/topic/:id" element={<TopicDetail />} />
            <Route path="/topics/:id" element={<TopicDetail />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/map" element={<Map />} />
            <Route path="/enneagram" element={<Enneagram />} />
            {/* <Route path="/map1" element={<AnotherMap />} /> */}

            {/* <Home /> */}
            {/* <NewsPage /> */}
          </Routes>
        </div>
        <ScrollToTop/>
        {/* </Router> */}
        <Footer />
        {/* </div> */}
      </div>


    </>
  );
}

export default App;
