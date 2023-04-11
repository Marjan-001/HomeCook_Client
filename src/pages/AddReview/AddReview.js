import React, { useContext } from 'react';
import { AuthContext } from '../../Context/Authprovider/Authprovider';
import { useLocation } from 'react-router-dom';


const AddReview = (foodDetails) => {

    const { _id, service_id, image, price } = foodDetails.foodDetails;
    const { user } = useContext(AuthContext);

    const location = useLocation();

    const name = user?.displayName;
    const photoURL = user?.photoURL;
    const email = user?.email;
    const date = new Date();
    //toast


    const handlePostReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const review = form.review.value;
        const postedReview = {
            review: review,
            name,
            serviceId: _id,
            photoURL,
            serviceName: foodDetails.name,
            serviceImage: image,
            servicePrice: price,
            email,
            date
        }
        console.log(postedReview)
        //post review to the server for specific service
        fetch(`https://homecookserver.vercel.app/reviews`, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(postedReview)
        })
            .then(res => res.json())
            .then(data => {


                console.log(data);
                alert("Review posted")
                form.reset();



            })
            .catch(er => console.error(er));

    }

    return (
        <div className="flex flex-col items-center justify-center text-center ">
            <h2 className='text-xl text-emerald-500 '>Review Our Service</h2>
            <form onSubmit={handlePostReview} className="bg-emerald-200 flex flex-col w-full max-w-lg p-12 rounded shadow-lg dark:text-gray-100 ng-untouched ng-pristine ng-valid">

                <textarea name="review" id="review" cols="30" rows="10"></textarea>

                <button type="submit" className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded bg-emerald-500 text-white">Post Review</button>
            </form>

        </div>


    );
};

export default AddReview;