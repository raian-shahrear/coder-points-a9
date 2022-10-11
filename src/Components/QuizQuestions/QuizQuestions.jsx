import React, { useState } from 'react';
import './QuizQuestions.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

const QuizQuestions = ({questions, idx}) => {
  const [quizOption, setQuizOption] = useState('');
  const {id, question, correctAnswer, options} = questions;
  
  const handleQuiz = (selectedOption) =>{
    if(selectedOption === correctAnswer){
      toast.success('Right Answer!');
    }else{
      toast.error('Wrong Answer!');
    }
  }
  const rightAnswer = () =>{
    toast.info(`Answer: ${correctAnswer}`);
  }

  return (
    <div className='w-8/12 mx-auto shadow-lg p-10 rounded-xl mb-6 bg-amber-50'>
      <div className='flex justify-between'>
        <h2 className='text-xl w-11/12 font-semibold'>Quiz {idx+1}: {question}</h2>
        <p onClick={rightAnswer} title="Correct Answer" className='hover:text-yellow-700 hover:cursor-pointer'><FontAwesomeIcon icon={faEye} /></p>
      </div>
      <div className='mt-4'>
      <div className='custom-options'>
          {
            options.map(option => {
              return(
                <div className='eachOption'>
                  <input onClick={() => handleQuiz(option)} type="radio" name="quiz" />
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