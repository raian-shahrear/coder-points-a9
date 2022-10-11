import React, { useContext } from 'react';
import './Home.css';
import HeaderImg from '../../header.jpg';
import { ItemContext } from '../../Utilities/Main';
import QuizItem from '../QuizItem/QuizItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const items = useContext(ItemContext);
  return (
    <div className=''>
      <section>
        <div className='relative overflow-hidden custom-cover-container'>
          <img className='block' src={HeaderImg} alt="header-img" />
          <div className='h-full w-full absolute top-0 left-0 custom-overly flex justify-center items-center'>
            <div className='text-center w-8/12 text-white'>
              <h1 className='text-4xl md:text-6xl font-semibold'>Learn Coding Fast!</h1>
              <p className='text-lg md:text-xl mt-12'>Coder Points helps you to learn code so easily. We offers world best courses along with Bootcamp. Here any level of coder, even a beginner can enhance their skill by learning code with us</p>
            </div>
          </div>
        </div>
      </section>

      <section className='w-11/12 mx-auto my-24'>
        <h1 className='text-3xl md:text-4xl font-semibold flex gap-2'>
          <p className='text-amber-500'><FontAwesomeIcon icon={faCircleCheck} /></p>
          <p>Take a quiz to evaluate your knowledge:</p>
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-6'>
          {
            items.map(item => <QuizItem key={item.id} item={item}></QuizItem>)
          }
        </div>
      </section>
    </div>
  );
};

export default Home;