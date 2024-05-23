import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import MuseIcon from "./Components/MuseIcon";
import HeroSection from "./Components/HeroSection/HeroSection";
import BlogListSection from "./Components/BlogListSection/BlogListSection";
import SocialAndText from "./Components/SocialAndText/SocialAndText";
import Spacer from "./Components/Utility/Spacer";
import HeaderText from "./Components/Utility/HeaderText";

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of animation in milliseconds
            offset: 10, // Offset (in px) from the original trigger point
            easing: 'ease', // Easing type
            once: true // Whether animation should only happen once
        });
    }, []);
    return (
        <div className="App">
            <header className="App-header">
                <MuseIcon/>
            </header>

            <div className="App-body">

                <HeroSection/>

                <Spacer height="32px"/>

                <HeaderText text="Our Products"/>

                <Spacer height="32px"/>

                <BlogListSection/>

                <Spacer height="32px"/>

                <SocialAndText/>

            </div>

            <Spacer height="32px"/>

            <footer className="App-footer">
                <a className="footer-lnk" href="https://support.animaapp.com/en/">Help Center</a>
                <a className="footer-lnk" href="https://forum.animaapp.com/privacy">Privacy Policy</a>
                <a className="footer-lnk" href="https://forum.animaapp.com/tos">Terms of Service</a>
            </footer>

            <Spacer height="32px"/>

        </div>
    );
}

export default App;
