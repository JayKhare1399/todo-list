import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Form from '../common-component/Form';
import TodoActions from '../common-component/TodoActions';
import styles from './TodoList.module.scss';

const TodoList = ({
  todos, setTodos,
}) => {
  const [updateTodo, setUpdateTodo] = useState({});

  const handleDelete = (todo) => {
    todos.splice(todos.findIndex((a) => a.id === todo.id), 1);
    setTodos([...todos]);
  };

  const startUpdate = (todo) => {
    setUpdateTodo({
      id: todo.id,
      details: todo.details,
    });
  };

  const handleUpdateChange = (e) => {
    setUpdateTodo((prev) => ({
      id: prev.id,
      details: e.target.value,
    }));
  };

  const submitUpdate = () => {
    todos.splice(
      todos.findIndex(
        (a) => a.id === updateTodo.id,
      ), 1, { id: updateTodo.id, details: updateTodo.details },
    );
    setTodos([...todos]);
    setUpdateTodo({});
  };

  return (
    todos.map((todo) => (
      updateTodo.id === todo.id
        ? <Form onChange={handleUpdateChange} onSubmit={submitUpdate} input={updateTodo.details} buttonLabel="Update todo" />
        : (
          <div className={cx(styles.todoItem, 'ml-4', 'mr-4', 'mb-3')}>
            {todo.details}
            <span className={styles.todoActions}>
              <TodoActions
                onDeleteClick={() => handleDelete(todo)}
                onEditClick={() => startUpdate(todo)}
              />
            </span>
          </div>
        )
    ))
  );
};

TodoList.defaultProps = {
  todos: PropTypes.array,
  setTodos: PropTypes.func,
};

export default TodoList;
