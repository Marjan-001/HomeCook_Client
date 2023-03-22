import React from 'react';
import chef from '../../../assets/images/female-chef-carefully-pouring-sauce-dish.jpg'

const About = () => {
	return (
		<div className='mt-36'>
			<h1 className='text-4xl text-center text-emerald-500 font-sans font-bold mt-20'>About</h1>
			<section className="bg-emerald-100 mt-5 dark:text-gray-100">

				<div className="container flex flex-col-reverse mx-auto lg:flex-row">
					<div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-400 dark:text-gray-900">


						<div className="flex space-x-2 mt-6 sm:space-x-4">

							<div className="space-y-2">
								<p className="text-xl  font-medium leading-snug">Meet Jenny, the talented home cook behind HomeCook. .</p>
								<p className="leading-snug mt-2">With a passion for creating delectable dishes from scratch, Jenny has turned her love for food into a thriving business. Check out our menu and taste the difference that homemade meals can make! I use only the freshest and highest quality ingredients to craft mouth-watering dishes that are both delicious and nutritious. From international cuisine to local favorites, HomeCook has something for everyone. Join us on this culinary journey and experience the joy of homemade meals. Order now and satisfy your cravings!</p>
							</div>
						</div>
					</div>
					<div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-800">
						<div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
							<img src={chef} alt="" className="rounded-lg shadow-lg dark:bg-gray-500 object-cover aspect-video sm:min-h-96" />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default About;
