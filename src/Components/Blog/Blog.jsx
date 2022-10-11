import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

const Blog = () => {
  return (
    <div className='my-24 w-11/12 mx-auto'>
      <h2 className='text-4xl font-semibold flex gap-2'>
        <p className='text-amber-500'><FontAwesomeIcon icon={faCircleQuestion} /></p>
        <p>Frequently Asked Question</p>
      </h2>
      <div className='my-8'>
        <h3 className='text-xl font-semibold mb-3'>Q1. What is the purpose of React Router?</h3>
        <p className='text-base'>React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.</p>
        <p className='text-base mt-2'>There are some steps to enable clint side routing:</p>
        <ol className='list-decimal pl-5'>
          <li>To install router: <code>npm i react-router-dom</code></li>
          <li>To create link by using <code>Link</code> component.</li>
          <li>To create some required Components.</li>
          <li>To create a <b>router</b> in 'App.js' or 'index.js' file to establish a connection between the <b>Link</b> and <b>Components</b> by using <code>createBrowserRouter([])</code> and pass the router as a <b>prop</b> to the <code>RouterProvider</code> component.</li>
        </ol>
      </div>

      <div className='mb-8'>
        <h3 className='text-xl font-semibold mb-3'>Q2. How does Context API work?</h3>
        <p className='text-base'>Context provides a way to share values between many components without having to explicitly pass a prop through every level of the tree. To avoid prop drilling, <b>Context API</b> is a simpler solution.</p>
        <p className='text-base mt-2'>There are some steps to use Context API</p>
        <ol className='list-decimal pl-5'>
          <li>To Declare a <b>context</b> in the parent component: <code>const MyContext = React.createContext(defaultValue);</code></li>
          <li>To set <b>provider</b> with value/s in the parent component: <code>MyContext.Provider value= 'some value'</code></li>
          <li>To receive value/s by using <b>useContext</b> and applies this hook in child component/s: <code>const value = useContext(MyContext);</code></li>
        </ol>
      </div>

      <div>
        <h3 className='text-xl font-semibold mb-3'>Q3. Write something about 'useRef' hook?</h3>
        <p className='text-base'>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
        <p className='text-base mt-2'>Syntax is: <code>const refContainer = useRef(initialValue);</code></p>
        <p className='text-base mt-2'>useRef returns a mutable ref object whose <code>.current</code> property is initialized to the passed argument <b>(initialValue)</b>. Essentially, useRef is like a “box” that can hold a mutable value in its <code>.current</code> property.</p>
      </div>
    </div>
  );
};

export default Blog;