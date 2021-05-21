import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from '../common-component/Form';

const TodoForm = ({ setTodos }) => {
  const [input, setInput] = useState('');

  const handleChange = (e) => setInput(e.target.value);

  const handleSubmit = () => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: prevTodos.length + 1,
        details: input,
      },
    ]);
    setInput('');
  };

  return (
    <Form
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      input={input}
      buttonLabel="Create todo"
      inputPlaceholder="Enter plans!"
    />
  );
};

TodoForm.defaultProps = {
  setTodos: PropTypes.func,
};

export default TodoForm;
