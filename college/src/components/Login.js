import React, { useRef, useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");

  const handleEmailLogin = async (e) => {
    e.preventDefault();

    try {
      setError("");
      await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
      navigate('/home'); // Redirect to home page after successful login
    } catch (error) {
      console.error("Error signing in:", error);
      setError("Failed to log in");
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/home'); // Redirect to home page after successful login with Google
    } catch (error) {
      console.error("Error signing in with Google:", error);
      setError("Failed to log in with Google");
    }
  };

  const handleReset = () => {
    navigate("/forgotpassword");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
    
      <div className="max-w-md w-full bg-white p-8 rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-violet-900"> WELCOME TO Learn-With-Gagan </h2>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleEmailLogin} className="mb-4">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              ref={emailRef}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              ref={passwordRef}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </form>
        <button
          onClick={handleGoogleLogin}
          className="bg-red-500 w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-200 bg-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Login with Google
        </button>
        <div className="mt-4 flex justify-between items-center">
          <Link to="/register" className="text-blue-800 hover:underline">Register</Link>
          <p className="text-blue-800 cursor-pointer" onClick={handleReset}>Forgot Password?</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
