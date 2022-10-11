import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestions from '../QuizQuestions/QuizQuestions';

const StartQuiz = () => {
  const quizItem = useLoaderData().data;
  return (
    <div className='my-24'>
      <h1 className='text-center mb-8 text-3xl md:text-4xl font-semibold'>Quiz of {quizItem.name}</h1>
      <section>
        {
          quizItem.questions.map((questions, idx) => <QuizQuestions key={questions.id} questions={questions} idx={idx} />)
        }
      </section>
    </div>
  );
};

export default StartQuiz;