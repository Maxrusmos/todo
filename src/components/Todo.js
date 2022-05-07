import React from 'react';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const Todo = ({ todos, completeTodo, removeTodo }) => {
  return todos.map((todo, index) => (
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
      <span className='number'>{todos.indexOf(todo) + 1}</span>
      <input type="checkbox" onChange={() => completeTodo(todo.id)} key={todo.id}></input>
      <div>{todo.text}</div>
      <DeleteOutlinedIcon 
        onClick={() => removeTodo(todo.id)}
        className='delete-icon'
      />
    </div>
  ));
};

export default Todo;