import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import AddReview from '../AddReview/AddReview';

const Detail = () => {
    const router = useParams();
    const [detail, setDetail] = useState([])

    const { id } = router;
    // console.log(router)


    useEffect(() => {

        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then((data) => {
                if (data.success) {
                    console.log(data.data)
                    setDetail(data.data);
                } else {
                    console.log("error")
                }
            })
            .catch((err) => console.log(err));
    }, [id]);


    return (
        <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
            <div className="container grid gap-6 mx-auto text-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-5">
                <img src={detail.image} alt="" className="object-cover items-center mt-64 w-full rounded-md xl:col-span-2 dark:bg-gray-500" />
                <div className="w-full px-6 rounded-md sm:px-12 md:px-16 xl:col-span-3 dark:bg-gray-900">

                    <h1 className="text-3xl lg:text-5xl font-extrabold text-emerald-700">{detail.name}</h1>
                    <p className="my-8 text-xl font-semibold text-emerald-500 ">
                        {detail.description}
                    </p>
                    <p className='text-emerald-800 font-bold text-3xl '>Price:${detail.price}</p>
                    <div className='mt-7 border p-9 rounded border-emerald-300'>

                        {/* <button className='btn btn-sm btn-primary mr-5 text-white'>-</button>
                        <span>1</span>
                        <button className='btn btn-sm btn-primary ml-5 text-white'>+</button>
                        <button className='btn btn-sm btn-primary ml-5 text-white'>Order</button> */}
                        <div className='mt-0'>
                            <AddReview />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Detail;