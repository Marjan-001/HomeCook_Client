import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Allservices = () => {


    const [services, setService] = useState([]);

    useEffect(() => {
        fetch('https://homecookserver.vercel.app/services/all')
            .then(res => res.json())
            .then(data => setService(data.data))
    }, [])
    return (
        <div>
            <h1 className='text-4xl text-center text-emerald-500 font-sans font-bold mt-20'>Discover Our Delicious Items</h1>
            <div className='mt-20 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8'>
                {


                    services.map(({ image, name, description, price, _id }) => {

                        return (

                            <div className="card card-compact   shadow-xl" key={_id}>
                                <figure><img className="w-full bottom-7 object-cover h-72" src={image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-emerald-500">{name}</h2>
                                    <p className='tex-xl font-sans font-bold'>{
                                        description.length > 100 ? description.slice(0, 100) + "..." : description
                                    }</p>
                                    <span className='text-2xl font-extrabold font-sans text-emerald-600'>${price}</span>
                                    <div className="card-actions justify-end">
                                        <Link to={`/services/${_id}`}>      <button data-theme="emerald" className="btn btn-primary text-white" >View Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        )

                    })


                }
            </div>

        </div>
    );
};

export default Allservices;