/* eslint-disable max-len */
import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Form from '../common-component/Form';

const TodoList = ({ todos, setTodos }) => {
  const [editValue, setEditValue] = useState({});
  const [isUnderEdit, setIsUnderEdit] = useState(false);

  const deleteTodoHandler = (todo) => {
    todos.splice(todos.findIndex((a) => a.id === todo.id), 1);
    setTodos([...todos]);
  };

  const editTodoHandler = (todo) => {
    setIsUnderEdit(true);
    setEditValue({
      id: todo.id,
      details: todo.details,
    });
  };

  const handleEdit = (e) => {
    setEditValue((prev) => ({
      id: prev.id,
      details: e.target.value,
    }));
  };

  const handleEditComplete = () => {
    todos.splice(todos.findIndex((a) => a.id === editValue.id), 1, { id: editValue.id, details: editValue.details });
    setTodos([...todos]);
    setIsUnderEdit(false);
  };

  return (
    <ListGroup variant="flush">
      {
        isUnderEdit
          ? <Form handleChange={handleEdit} handleSubmit={handleEditComplete} input={editValue.details} />
          : todos.map((todo) => (
            <div style={{ borderBottom: '1px solid #cfcfcf', height: 30 }}>
              {todo.details}
              <div style={{ float: 'right' }}>
                <Button style={{ marginRight: 10 }} onClick={() => editTodoHandler(todo)}> / </Button>
                <Button onClick={() => deleteTodoHandler(todo)}> X </Button>
              </div>
            </div>
          ))
      }
    </ListGroup>
  );
};

TodoList.defaultProps = {
  todos: PropTypes.array,
};

export default TodoList;
