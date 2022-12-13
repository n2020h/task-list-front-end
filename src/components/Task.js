import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Task.css';

//  Using Task props destructuring:
const Task = ({ id, title, isComplete }) => {
  const [complete, setComplete] = useState(isComplete);
  // Using ? as ternary operator:
  // conditionToTest ? valueIfTrue : valueIfFalse
  const buttonClass = complete ? 'tasks__item__toggle--completed' : '';

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        // Using the ! NOT operator to update state with the event listener:
        onClick={() => setComplete(!complete)}
      >
        {title}
      </button>
      <button className="tasks__item__remove button">x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
};

export default Task;
