import React from 'react';
import { ITodo } from '../../models';
import styles from './TodoItem.module.scss';



interface TodoItemProps {
  todo: ITodo;
  checkTodo: (id: ITodo['id']) => void;
  deleteTodo: (id: ITodo['id']) => void;
  changeTodo: (id: ITodo['id']) => void;
  todoForEdit: ITodo['id'];
  editTodo: (id: ITodo['id'], description: ITodo['description'], checked: ITodo['checked'], todoForEdit: ITodo['id']) => void;
};


const TodoItem = ({ todo, checkTodo, deleteTodo, changeTodo, todoForEdit, editTodo }: TodoItemProps) => {
  const [value, setValue] = React.useState(todo.description);


  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
    editTodo(todo.id, value, todo.checked, todoForEdit);
  };


  const deleteEmptyTodo = () => {
    changeTodo(todo.id);
    // editTodo(todo.id, value, todo.checked, todoForEdit);
  };


  return (
    <li className={styles.li}>
      <div className={styles.container}>
        <div
          onClick={() => checkTodo(todo.id)}
          className={styles.checkOut + ' ' + (todo.checked ? styles.active : ' ')}
        >
          {todo.checked && <img src="./img/check.svg" alt="check" />}
        </div>
        <input
          onDoubleClick={deleteEmptyTodo}
          onChange={(e) => onChange(e)}
          className={styles.input}
          type="text"
          readOnly={todoForEdit === todo.id ? false : true}
          value={value}
        />
        <div
          onClick={() => deleteTodo(todo.id)}
          className={styles.delete}
        ></div>
      </div>
    </li>
  )
}


export default TodoItem;
