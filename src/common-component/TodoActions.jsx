import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';

const TodoActions = ({ onEditClick, onDeleteClick }) => (
  <span className={cx('ml-4', 'mr-3')}>
    <FontAwesomeIcon className={cx('mr-4')} icon="edit" onClick={onEditClick} />
    <FontAwesomeIcon icon="trash-alt" onClick={onDeleteClick} />
  </span>
);

export default TodoActions;
