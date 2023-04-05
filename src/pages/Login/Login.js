import React, { useContext } from 'react';
import Lottie from "lottie-react";
import login from "../../68312-login.json"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider/Authprovider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {

    const { googleLogin, signIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user);

            })
            .catch(error => console.error(error))
        navigate(from, { replace: true });
    }
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                navigate('/')
            })
            .catch(error => console.log(error))
    }

    return (

        <div className='grid grid-cols-1 lg:grid-cols-2  w-full gap-5 mt-24 mx-auto'>

            <Lottie className=" h-auto  " animationData={login} loop={true} />
            <div className=" mx-auto   bg-emerald-200 p-8 space-y-3 rounded-xl ">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form onSubmit={handleSubmit} no validate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label for="Email" className="block dark:text-gray-400">Email</label>
                        <input type="email" name="email" id="username" placeholder="Your email address" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="password" className="block dark:text-gray-400">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        <div className="flex justify-end text-xs dark:text-gray-400">
                            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                        </div>
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm btn-primary">Sign in</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    <hr />
                    <p className="px-3 text-sm dark:text-gray-400">Login with google</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                </div>

                <div className="flex justify-center space-x-4">
                    <button onClick={handleGoogleLogin} aria-label="Log in with Google" className="p-3 border border-emerald-600  rounded-lg hover:bg-emerald-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-20 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                    </button>

                </div>
                <p className="text-xs text-center sm:px-6 dark:text-gray-400">Don't have an account <Link className="underline dark:text-gray-100" to="/signup">Sign Up</Link> </p>
            </div>
        </div>

    );
};

export default Login;