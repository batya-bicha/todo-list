import React from 'react';
import { useTodo } from '../../untils';
import styles from './TodoInput.module.scss';



const DEFAULT_TODO = {
  description: '',
};



const TodoInput = () => {
  const [todo, setTodo] = React.useState('');
  const { addTodo } = useTodo();


  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTodo(value);
  };


  const addNewTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    return e.key === 'Enter' && todo.trim().length !== 0
      ? (addTodo({ description: todo}), setTodo(''))
      : null;
  };


  return (
    <div className={styles.container}>
      <div className={styles.pickAll}></div>
      <input
        onChange={onChange}
        onKeyDown={addNewTodo}
        value={todo}
        className={styles.input}
        type="text"
        placeholder='Write something :)'
      />
    </div>
  )
}


export default TodoInput;
