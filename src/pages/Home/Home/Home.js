import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import Speciality from '../specialty/Speciality';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner/>
            <Services/>
            <Speciality/>
            <About/>
            <Contact/>
        </div>
    );
};

export default Home;