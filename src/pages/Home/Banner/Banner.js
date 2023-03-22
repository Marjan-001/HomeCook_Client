import React from 'react';
import banner from '../../../assets/images/banner.jpg'
import './banner.css'

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})`}} >
           
  <div className="hero-overlay bg-opacity-50">


  </div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md lg:max-w-2xl ">
      <h1 className="mb-5 text-3xl lg:text-6xl text-white font-bold font-serif lg:font-extrabold txt  ">Welcome To Home Cook</h1>
      <p className="mb-5 font-serif text-white text-lg lg:text-2=xl font-normal lg:font-semibold    ">Hello, I am Jenny, a passionate home cook with flair for creating delicious and healthy meals. Whether you're looking for a quick and easy weeknignt dinner, Asian or Western Cusine or a lavish feast for a special occasion , Jenny has you covered.</p>
      <button data-theme="emerald" className="btn btn-success text-white ">Learn More</button>
    </div>
  </div>
</div>
    );
};

export default Banner;