import React from 'react'
// import Navbar from "./components/Navbar";

import About from "../About";
import Courses from "./Courses";
// import RecentBlogs from "./pages/RecentBlogs";
import Footer from "./Footer";
import Navbar from '../components/navbar/Navbar';
import MainSlider from '../components/MainSlider';
import News from '../components/News';
import Categories from '../components/Categories';
import Newsletters from '../components/Newsletters';
import Multimedia from '../components/Multimedia';
import Gallery from '../components/Gallery';

function Home() {
    return (
        <div className=''>
            
            <MainSlider/>
            <News/>
            {/* <Categories/> */}
            {/* <Newsletters/> */}
            {/* <Multimedia/> */}
            <Gallery/>
            {/* <About /> */}
            {/* <Courses /> */}
            {/* <RecentBlogs/> */}
        </div>
    )
}

export default Home