import React from 'react';

const AddReview = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center ">
            <h2 className='text-xl text-emerald-500 '>Review Our Service</h2>
            <form className="bg-emerald-200 flex flex-col w-full max-w-lg p-12 rounded shadow-lg dark:text-gray-100 ng-untouched ng-pristine ng-valid">

                <textarea name="review" id="review" cols="30" rows="10"></textarea>

                <button type="submit" className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded bg-emerald-500 text-white">Post Review</button>
            </form>
        </div>
    );
};

export default AddReview;