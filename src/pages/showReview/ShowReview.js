import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const ShowReview = (foodDetails) => {
    const [customerreviews, setReviews] = useState([]);
    const { _id } = foodDetails.foodDetails;
    console.log(_id)

    useEffect(() => {

        fetch(`https://homecookserver.vercel.app/review?serviceId=${_id}`)
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                setReviews(data);

            })
            .catch((err) => console.log(err));
    }, [_id]);

    const NoReviews = () => {
        if (customerreviews.length === 0) {

            return <h1 className='text-emerald-600 font-extrabold mt-14 text-2xl '>No Review Posted Yet</h1>
        }
    }
    return (
        <div>

            <h1 className='text-emerald-600 text-sm lg:text-4xl'>Reviews From Our Trusted Customers</h1>


            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>




                {customerreviews?.map(rev =>


                    <ReviewCard key={rev._id} rev={rev} />





                )
                }
                <div className='w-full items-center animate-bounce'>

                    {
                        NoReviews()
                    }
                </div>
            </div>
        </div>
    );
};

export default ShowReview;