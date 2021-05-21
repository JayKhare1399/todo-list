/* eslint-disable max-len */
import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [isUnderEdit, setIsUnderEdit] = useState(false);

  return (
    <>
      <h1>Whats the plan for today</h1>
      {!isUnderEdit && <TodoForm setTodos={setTodos} />}
      <TodoList todos={todos} setTodos={setTodos} isUnderEdit={isUnderEdit} setIsUnderEdit={setIsUnderEdit} />
    </>
  );
}

export default Todo;
