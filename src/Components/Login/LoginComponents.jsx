import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginComponent = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    setEmailError('');
    setPasswordError('');

    let valid = true;

    if (!email.trim()) {
      setEmailError('Please enter your email.');
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid email address.');
      valid = false;
    }

    if (!password.trim()) {
      setPasswordError('Please enter your password.');
      valid = false;
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      setPasswordError('Password must be at least 8 characters long and contain both letters and numbers.');
      valid = false;
    }

    if (valid) {
      onLogin();
      navigate('/');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div>
          <img src="./Images/logo.svg" alt="img-logo" className='w-20 h-20 mx-auto mb-4' />
        </div>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
            {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
            {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}
          </div>
          <div>
            <button
              type="button"
              onClick={handleLogin}
              className="w-full flex justify-center py-2 px-4 rounded-full shadow-sm text-sm font-medium text-gray-800 bg-orange-400 hover:bg-transparent border-[2px] border-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <div>
              <button
                type="button"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Sign in with Google</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2a10 10 0 100 20 10 10 0 100-20zm-.73 15v-5.45h3.64c-.16.83-.5 1.57-.95 2.2a6.67 6.67 0 01-2.69 3.25zm4.48-4.98c-.23-1.57-.68-2.89-1.37-3.96h-3.1v3.66h2.42a5.33 5.33 0 01-.3 1.3c-.32.6-.8 1.1-1.43 1.44v1.76a5.88 5.88 0 003.84-4.2z"></path>
                </svg>
              </button>
            </div>
            <div>
              <button
                type="button"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Sign in with Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.67 0H1.33C.6 0 0 .6 0 1.33v21.34C0 23.4.6 24 1.33 24H12v-9.33H9.33V11.4H12V9.34c0-2.63 1.6-4.08 3.95-4.08 1.13 0 2.1.08 2.38.12v2.77H16.5c-1.23 0-1.47.58-1.47 1.43v1.87h2.93l-.39 3.26h-2.54V24h4.99c.73 0 1.33-.6 1.33-1.33V1.33C24 .6 23.4 0 22.67 0z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
