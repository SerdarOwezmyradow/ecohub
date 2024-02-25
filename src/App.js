import Navbar from "./components/navbar/Navbar";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import NewsPage from "./pages/NewsPage";
import { BrowserRouter as Router, Route, Switch, Redirect, Routes } from 'react-router-dom';



function App() {
  return (
    <>
      <Navbar />
      {/* <Router> */}
      <Routes>


        {/* <div className="relative"> */}
        <Route path="/" exact element={<Home />} />
        <Route path="/news" element={<NewsPage/>} />

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
