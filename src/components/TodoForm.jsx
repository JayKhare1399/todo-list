import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from '../common-component/Form';

const TodoForm = ({ setTodos }) => {
  const [todoDetails, setTodoDetails] = useState('');

  const handleChange = (e) => setTodoDetails(e.target.value);

  const handleSubmit = () => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: prevTodos.length + 1,
        details: todoDetails,
      },
    ]);
    setTodoDetails('');
  };

  return (
    <Form
      onChange={handleChange}
      onSubmit={handleSubmit}
      input={todoDetails}
      buttonLabel="Create todo"
      inputPlaceholder="Enter plans!"
    />
  );
};

TodoForm.defaultProps = {
  setTodos: PropTypes.func,
};

export default TodoForm;
