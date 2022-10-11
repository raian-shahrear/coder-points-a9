import React from 'react';
import './QuizItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const QuizItem = ({item}) => {
  const {id, name, logo, total} = item;
  const navigate = useNavigate();
  const handleQuiz = () =>{
    navigate(`/quizitem/${id}`);
  }
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure className='bg-amber-100'><img src={logo} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p><b>Total Quiz: {total}</b> </p>
        <div className="card-actions justify-center mt-6">
          <button onClick={() => handleQuiz()} className="btn bg-amber-500 hover:text-amber-500 hover:bg-transparent text-white text-lg custom-btn">
            <p>Start Practice</p>
            <p className='ml-4'><FontAwesomeIcon icon={faArrowRight} /></p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizItem;