import Navbar from "./components/navbar/Navbar";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import NewsLetter from "./pages/NewsLetter";
import NewsPage from "./pages/NewsPage";
import { BrowserRouter as Router, Route, Switch, Redirect, Routes } from 'react-router-dom';
import Tazelikler from "./pages/Tazelikler";
import Library from "./pages/Library";
// import ScrollToTopOnRouteChange from "./components/ScrollToTopOnRouteChange";



function App() {
  return (
    <>
      <Navbar />
      {/* <Router> */}
      <Routes>

        {/* <ScrollToTopOnRouteChange/> */}
        {/* <div className="relative"> */}
        <Route path="ecohub/" exact element={<Home />} />
        <Route path="/news" element={<NewsPage/>} />
        <Route path="/newsletter" element={<NewsLetter/>} />
        <Route path="/tazelikler" element={<Tazelikler/>} />
        <Route path="/library" element={<Library/>} />

        {/* <Home /> */}
        {/* <NewsPage /> */}
      </Routes>
      {/* </Router> */}
      <Footer />
      {/* </div> */}


    </>
  );
}

export default App;
