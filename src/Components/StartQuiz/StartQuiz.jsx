import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestions from '../QuizQuestions/QuizQuestions';

const StartQuiz = () => {
  const quizItem = useLoaderData().data;
  return (
    <div>
      <h1>Quiz of {quizItem.name}</h1>
      <section>
        {
          quizItem.questions.map((questions, idx) => <QuizQuestions key={questions.id} questions={questions} idx={idx} />)
        }
      </section>
    </div>
  );
};

export default StartQuiz;