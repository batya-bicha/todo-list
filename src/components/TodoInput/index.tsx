import React from 'react';
import { useTodo } from '../../untils';
import styles from './TodoInput.module.scss';



const TodoInput = () => {
  const [todo, setTodo] = React.useState('');
  const [allTodoTrue, setAllTodoTrue] = React.useState(false);
  const { todos, addTodo, selectAllTodos } = useTodo();


  React.useEffect(() => {
    const checkedTodos = todos.every(todo => todo.checked === true);
    setAllTodoTrue(checkedTodos);
  }, [todos]);


  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTodo(value);
  };


  const addNewTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    return e.key === 'Enter' && todo.trim().length !== 0
      ? (addTodo({ description: todo }), setTodo(''))
      : null;
  };


  const selectTodos = () => {
    selectAllTodos();
  };


  return (
    <div className={styles.container}>
      <div
        style={todos.length ? {} : { 'visibility': 'hidden' }}
        className={styles.pickAll + ' ' + (allTodoTrue ? styles.allTodoTrue : '')}
        onClick={() => selectTodos()}
      >
      </div>
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
