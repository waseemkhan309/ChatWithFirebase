import React from 'react';
import dumyImage from '../Assets/Images/signin.jpg';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <>
            <div className="flex h-screen w-full items-center justify-center bg-gray-100">
                <div className="w-full max-w-3xl overflow-hidden rounded-lg bg-white shadow-lg sm:flex flex-row-reverse">
                    <div
                        className="m-2 w-full rounded-2xl bg-gray-400 bg-cover bg-center text-white sm:w-2/5"
                    // style={{ backgroundImage: "url(../../Assets/Images/signin.jpg)" }}
                    >
                        <img src={dumyImage} alt='image'
                            className='object-cover size-full'
                        />
                    </div>
                    <div className="w-full sm:w-3/5">
                        <div className="p-8">
                            <h1 className="text-3xl font-black text-slate-700">Sign in</h1>
                            <p className="mt-2 mb-5 text-base leading-tight text-gray-600">
                                Welcome back! Please sign in to your account
                            </p>
                            <form className="mt-8">
                                <div className="relative mt-2 w-full">
                                    <input
                                        type="text"
                                        id="email"
                                        defaultValue="email@gmail.com"
                                        className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                                        placeholder=" "
                                    />
                                    <label
                                        htmlFor="email"
                                        className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
                                    >
                                        {" "}
                                        Enter Your Email{" "}
                                    </label>
                                </div>
                                <div className="relative mt-2 w-full">
                                    <input
                                        type="text"
                                        id="password"
                                        className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                                        placeholder=" "
                                    />
                                    <label
                                        htmlFor="password"
                                        className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
                                    >
                                        {" "}
                                        Enter Your Password
                                    </label>
                                </div>

                                <input
                                    className="mt-4 w-full cursor-pointer rounded-lg bg-blue-600 pt-3 pb-3 text-white shadow-lg hover:bg-blue-400"
                                    type="submit"
                                    defaultValue="Create account"
                                />
                            </form>
                            <div className="mt-4 text-center">
                                <p className="text-sm text-gray-600">
                                    Not have an account?{" "}
                                    <Link
                                        to='/signout'
                                        className="font-bold text-blue-600 no-underline hover:text-blue-400"
                                    >
                                        Sign up
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SignIn