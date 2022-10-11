import React from 'react';

const Contact = () => {
  return (
    <section className='bg-[hsl(240,4%,14%)] py-2'>
      <div className='w-8/12 mx-auto my-20'>
        <div className='text-white'>
          <h1 className='text-4xl font-semibold mb-6'>Connect With Us</h1>
          <p className='text-lg mb-2'>We would love to respond to your queries and help you succeed.</p>
          <p className='text-lg'>Feel free to get in touch with us.</p>
        </div>

        <div className='mt-16 bg-white shadow-lg flex justify-between flex-col-reverse lg:flex-row'>
          <div className='p-10'>
            <h3 className='text-xl font-semibold mb-6'>Send your request!</h3>
            <form>
              <div className='w-full'>
                <input className='border border-slate-500 px-3 py-2 mr-4 w-full lg:w-auto mb-4 lg:mb-0' type="text" name='fName' placeholder='Full Name' />
                <input className='border border-slate-500 px-3 py-2 w-full lg:w-auto mb-4 lg:mb-0' type="tel" name='telephone' placeholder='Telephone Number' />
              </div>
              <div className='my-4'>
                <input className='border border-slate-500 px-3 py-2 mr-4 w-full lg:w-auto mb-4 lg:mb-0' type="email" name='email' placeholder='Valid Email' />
                <input className='border border-slate-500 px-3 py-2 w-full lg:w-auto mb-4 lg:mb-0' type="text" name='subject' placeholder='Subject' />
              </div>
              <textarea className='border border-slate-500 px-3 py-2 w-full block mb-6' name="message" rows="10" placeholder='Message' />
              <button type='submit' className="btn bg-amber-500 hover:text-amber-500 hover:bg-transparent text-white text-lg custom-btn block px-10 w-full lg:w-auto rounded-none">
              Send</button>
            </form>
          </div>
          <div className='bg-amber-500 p-10'>
            <h3 className='text-xl font-semibold mb-6'>Send your request!</h3>
            <div className='grid grid-cols-2 items-center'>
              <p className='font-semibold'>Email</p>
              <p>contact@coderpoints.com</p>
            </div>
            <div className='grid grid-cols-2 items-center my-6'>
              <p className='font-semibold'>Phone</p>
              <p>+880 171 6694 5528</p>
            </div>
            <div className='grid grid-cols-2 items-center'>
              <p className='font-semibold'>Address</p>
              <address>
                <p>#10/B, Gulf Court Road,</p> 
                <p>Inter City, NYC</p>
              </address>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;