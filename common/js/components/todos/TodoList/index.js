import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';
import { TodoItem } from '@components/todos';
import classnames from 'classnames';
import css from './index.scss';

const TodoList = props => {
  const { className, onChange, onRemove, todos: { todos } } = props;

  return (
    <List className={classnames(css.todos, className)}>
      {todos.map((todo, idx) => (
        <TodoItem
          key={idx}
          todo={todo}
          onRemove={onRemove}
          onChange={onChange}
        />
      ))}
    </List>
  );
};

TodoList.propTypes = {
  todos: PropTypes.object.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func,
  onRemove: PropTypes.func
};

export default TodoList;
