import Lottie from "lottie-react";
import React from 'react';
import brocoli from "../../../Broccoli.json"
import tasty from "../../../taste.json"
import appealing from "../../../118871-pizza-slices.json"
import delivery from "../../../35193-delivery.json"
import packaging from "../../../123572-pizza-box-order.json"

const Speciality = () => {
    return (
        <div className='mt-20'>
            <h1 className='text-4xl  text-center text-emerald-500 font-sans font-bold mt-20'>Our Specialty</h1>

            <div className="flex items-center justify-center gap-10  mt-10 flex-col lg:flex-row ">
                <div>

                    <Lottie className="w-52 h-52 mb-1 " animationData={brocoli} loop={true} />
                    <h3 className="text-emerald-500 text-center font-semibold font-sans text-xl  lg:text-2xl hover:animate-pulse"  >Fresh Ingredients</h3>
                </div>
                <div>
                    <Lottie className="w-36 h-52 mt-5" animationData={tasty} loop={true} />
                    <h3 className="text-emerald-500  text-center font-semibold font-sans text-xl  lg:text-2xl hover:animate-pulse" >Fabulous Taste</h3>
                </div>
                <div>
                    <Lottie className="w-52 h-52 mt-5" animationData={appealing} loop={true} />
                    <h3 className="text-emerald-500 text-center font-semibold font-sans text-xl  lg:text-2xl hover:animate-pulse" >Visually appealing</h3>
                </div>
                <div>
                    <Lottie className="w-52 h-52 mt-5" animationData={packaging} loop={true} />
                    <h3 className="text-emerald-500 text-center font-semibold font-sans text-xl  lg:text-2xl hover:animate-pulse" > Secure Packaging</h3>
                </div>
                <div>
                    <Lottie className="w-52 h-52 mt-5" animationData={delivery} loop={true} />
                    <h3 className="text-emerald-500 text-center font-semibold font-sans text-xl  lg:text-2xl hover:animate-pulse" >Express Delivery</h3>
                </div>

            </div>




        </div>
    );
};

export default Speciality;