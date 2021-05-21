/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Form = (props) => (
  <form className="todo-form">
    <input
      type="text"
      placeholder={props.inputPlaceholder}
      className="todo-input"
      value={props.input}
      onChange={props.handleChange}
    />
    <Button variant="light" onClick={props.handleSubmit}>{props.buttonLabel}</Button>
  </form>
);

Form.defaultProps = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  input: PropTypes.string,
  buttonLabel: PropTypes.string,
  inputPlaceholder: PropTypes.string,
};

export default Form;
