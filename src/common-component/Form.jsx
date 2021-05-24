/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Form.module.scss';

const Form = (props) => (
  <form className={cx(styles.form, 'mt-4', 'mb-4')}>
    <input
      type="text"
      placeholder={props.inputPlaceholder}
      className={styles.inputForm}
      value={props.input}
      onChange={props.onChange}
    />
    <Button variant="success" className={cx('border-0', 'ml-4')} onClick={props.onSubmit}>{props.buttonLabel}</Button>
  </form>
);

Form.defaultProps = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  input: PropTypes.string,
  buttonLabel: PropTypes.string,
  inputPlaceholder: PropTypes.string,
};

export default Form;
