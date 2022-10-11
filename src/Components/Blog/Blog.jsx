import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

const Blog = () => {
  return (
    <div className='my-24 w-11/12 mx-auto'>
      <h2 className='text-4xl font-semibold flex items-center gap-2'>
        <p className='text-amber-500'><FontAwesomeIcon icon={faCircleQuestion} /></p>
        <p>Frequently Asked Question</p>
      </h2>
      <div className='my-8'>
        <h3 className='text-xl font-semibold mb-3'>Q1. What is the purpose of React Router?</h3>
        <p className='text-base'>React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.</p>
        <p className='text-base mt-2'>There are some steps to enable clint side routing:</p>
        <ol className='list-decimal pl-5'>
          <li>Install router: <code>npm i react-router-dom</code></li>
          <li>Create link by using <code>Link</code> component.</li>
          <li>Create some required Components.</li>
          <li>Create a <b>router</b> in 'App.js' or 'index.js' file to establish a connection between the <b>Link</b> and <b>Components</b> by using <code>createBrowserRouter([])</code> and pass the <b>router</b> as a props to the <code>RouterProvider</code> component.</li>
        </ol>
      </div>

      <div className='mb-8'>
        <h3 className='text-xl font-semibold mb-3'>Q2. How does Context API work?</h3>
        <p className='text-base mb-1'>useEffect actually controls the side effect in ReactJS with or without dependency. One of the most common use of useEffect is data loading from fetch, but also there are some important uses of useEffect which are:</p>
        <ol className='list-decimal pl-5'>
          <li>To validating input field.</li>
          <li>To live filtering.</li>
          <li>To trigger animation on new array value.</li>
          <li>To get data from database with dependency.</li>
          <li>To update list on fetched API data update.</li>
        </ol>
      </div>

      <div>
        <h3 className='text-xl font-semibold mb-3'>Q3. Write something about 'useRef'?</h3>
        <p className='text-base mb-1'>useEffect actually controls the side effect in ReactJS with or without dependency. One of the most common use of useEffect is data loading from fetch, but also there are some important uses of useEffect which are:</p>
        <ol className='list-decimal pl-5'>
          <li>To validating input field.</li>
          <li>To live filtering.</li>
          <li>To trigger animation on new array value.</li>
          <li>To get data from database with dependency.</li>
          <li>To update list on fetched API data update.</li>
        </ol>
      </div>
    </div>
  );
};

export default Blog;