import React, { useContext } from 'react';
import './Home.css';
import HeaderImg from '../../header.jpg';
import { ItemContext } from '../../Utilities/Main';
import QuizItem from '../QuizItem/QuizItem';

const Home = () => {
  const items = useContext(ItemContext);
  return (
    <div className=''>
      <section>
        <div className='relative overflow-hidden custom-cover-container'>
          <img className='block' src={HeaderImg} alt="header-img" />
          <div className='h-full w-full absolute top-0 left-0 custom-overly flex justify-center items-center'>
            <div className='text-center w-8/12 text-white'>
              <h1 className='text-6xl font-semibold'>Learn Coding Fast!</h1>
              <p className='text-xl mt-12'><code>Coder Points</code> helps to learn code so easily. We offers world best courses along with Bootcamp. Here any level of coder, even beginner can enhance their career by learning code with us</p>
            </div>
          </div>
        </div>
      </section>

      <section className='w-11/12 mx-auto my-24'>
        <h1 className='text-4xl font-semibold'>Take a quiz to evaluate your knowledge:</h1>
        <div className='grid grid-cols-4 gap-10 mt-6'>
          {
            items.map(item => <QuizItem key={item.id} item={item}></QuizItem>)
          }
        </div>
      </section>
    </div>
  );
};

export default Home;