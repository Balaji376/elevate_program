

import React from 'react'

import '../styles/flashCard.css'
import Timer from './timer';

const ShowData = () => {

    const flashcards = [
        {
          id: 1,
          question: "What is the capital of France?",
          answer: "Paris",
        },
        {
          id: 2,
          question: "What is 5 + 7?",
          answer: "12",
        },
        {
          id: 3,
          question: "Who wrote 'To Kill a Mockingbird'?",
          answer: "Harper Lee",
        },
        {
          id: 4,
          question: "What is the chemical symbol for water?",
          answer: "H2O",
        },
        {
          id: 5,
          question: "What is the speed of light in a vacuum?",
          answer: "299,792,458 meters per second",
        }
      ];
      
      

  return (
<>
<h2>-: Learning <span>flash</span> card :-</h2>

<div className='flashcard'>
{
    
    flashcards.map((ele,id)=>{
        return (
            <div key={id}>
                <p><b>Question :</b>{ele.question}</p>
                <p><b>Answer :</b>{ele.answer}</p>

            </div>
        )
    })
}
</div>
</>
  )
}

export default ShowData
