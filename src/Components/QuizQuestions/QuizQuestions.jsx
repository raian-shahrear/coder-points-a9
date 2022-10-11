import React, { useEffect, useState } from 'react';
import './QuizQuestions.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const QuizQuestions = ({questions, idx}) => {
  const [quizOption, setQuizOption] = useState('');
  const {id, question, correctAnswer, options} = questions;
  useEffect(()=>{
    for(let eachOption of options){
      setQuizOption(eachOption)
    }
  }, [options])
  console.log(quizOption)
  return (
    <div className='w-8/12 mx-auto shadow-lg p-10 rounded-xl mb-6 bg-amber-50'>
      <div className='flex justify-between'>
        <h2 className='text-xl w-11/12 font-semibold'>Quiz {idx+1}: {question}</h2>
        <p className='hover:text-yellow-700 hover:cursor-pointer'><FontAwesomeIcon icon={faEye} /></p>
      </div>
      <div className='mt-4'>
      <div className='custom-options'>
          {
            options.map(option => {
              return(
                <div className='eachOption'>
                  <input type="radio" name="quiz" />
                  <label htmlFor="">{option}</label>
                </div>
              )
            })
          }
        </div>
        
      </div>
    </div>
  );
};

export default QuizQuestions;