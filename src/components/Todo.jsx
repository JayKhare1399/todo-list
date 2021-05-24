import React, { useState } from 'react';
import cx from 'classnames';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import styles from './Todo.module.scss';

function Todo() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <h1 className={cx('mt-4', 'text-center', styles.heading)}>Todo List</h1>
      <TodoForm setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}

export default Todo;
