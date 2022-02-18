import React, { useState } from 'react';
import './EightBall.css';
import answers from './answers';

function randomAnswer () {
  let randomAnswer = answers[Math.floor(Math.random() * answers.length)];
  return randomAnswer;
}

function EightBall (answer) {
  const [color, setColor] = useState('black');
  const [msg, setMsg] = useState('Think of a Question');

  function handleClick () {
    const { msg, color } = randomAnswer(answer.answers);
    setColor(color);
    setMsg(msg);

  }
  return (
    <div className='eightball-main'>
      <h1 className='eightball-title'>8-Ball</h1>
      <div className='eightball-container'>
        <div
          className='eightball-ball'
          onClick={ handleClick }
          style={ { backgroundColor: color } }
        >
          <h2 className='eightball-question'>{ msg }</h2>
        </div>
      </div>
    </div>
  )
}
export default EightBall;