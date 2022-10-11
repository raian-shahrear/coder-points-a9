import React from 'react';
import './ErrorPage.css';
import {useRouteError} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className='bg-[hsl(240,4%,14%)] error-page-container'>
      <div className='text-center flex flex-col justify-center items-center error-page-details'>
        <h2 className='text-4xl font-semibold text-amber-500 mb-10 flex gap-4'>
          <p><FontAwesomeIcon icon={faFaceFrown} /></p>
          <p>OOPS!</p>
        </h2>
        <h1 className='text-9xl lg:text-[140px] font-bold text-amber-700'>{error.status}</h1>
        <h3 className='text-6xl font-semibold text-amber-900 mt-2 mb-20'>{error.statusText || error.message}</h3>
        <p className='text-lg font-semibold text-amber-300 mb-6'>Please Go Back To Home Page</p>
        <a href="/home" className="btn bg-amber-500 hover:text-amber-500 hover:bg-transparent text-white text-lg custom-btn px-10 lg:w-8/12 rounded-md">Go Home</a>
      </div>
    </div>
  );
};

export default ErrorPage;