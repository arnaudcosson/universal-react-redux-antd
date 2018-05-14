import React from 'react';
import PropTypes from 'prop-types';
import { List, Checkbox, Button } from 'antd';
import classnames from 'classnames/bind';
import css from './index.scss';

const cx = classnames.bind(css);

const TodoItem = props => {
  const { onRemove, onChange, todo: { id, completed, text } } = props;

  return (
    <List.Item className={classnames(css.todo, css.extra)}>
      
        <Button onClick={() => onRemove(id)} icon="remove" size="small" />
      
      
        <Checkbox
          type="checkbox"
          checked={completed}
          onChange={() => onChange(id)}
        />
      
      <div className={cx(css.text, { [css.completed]: completed })}>
        {text}
      </div>
    </List.Item>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onRemove: PropTypes.func,
  onChange: PropTypes.func
};

TodoItem.defaultProps = {
  onRemove: () => {},
  onChange: () => {}
};

export default TodoItem;
