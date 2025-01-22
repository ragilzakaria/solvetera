import Hero from "../sections/Home/Hero";
import Footer from "../components/Footer";
import Advantages from "../sections/Home/Advantages";
import AboutUs from "../sections/Home/AboutUs";
import HowItWorks from "../sections/Home/HowItWorks";
import '../index.css';
import { useState } from "react";


const Home = () => {
    return(
        <main id="home" className="relative">
            <section className="padding-x pt-5 bg-hero bg-no-repeat bg-right">
            <Hero />
            </section>
            <section className="padding">
            <HowItWorks />
            </section>
            <section className="w-full">
            <Advantages />
            </section>
            <section className="padding-x ">
            <AboutUs />
            </section>
        </main>
    )
};

export default Home;