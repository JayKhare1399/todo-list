import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function Todo() {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <h1>Whats the plan for today</h1>
      <TodoForm setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}

export default Todo;
