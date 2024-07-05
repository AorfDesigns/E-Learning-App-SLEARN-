import React from 'react'

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
      <div className='flex items-center justify-center mb-4'>
      <img src='/Images/logo.svg' alt='logo' className='w-[64px] h-[64px] flex flex-col items-center justify-center' />
      </div>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="fullName">
            Full Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            id="fullName"
            type="text"
            placeholder="Full Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email Address"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <button
            className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="button"
          >
            Sign Up
          </button>
        </div>
      </form>
      <div className="flex items-center justify-center mb-4">
        <span className="text-gray-600 dark:text-gray-400">or</span>
      </div>
      <div className="flex items-center justify-center">
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-full flex items-center justify-center"
          type="button"
        >
          <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google Logo" className="mr-2" />
          Sign Up with Google
        </button>
      </div>
    </div>
  </div>
  )
}

export default SignUp