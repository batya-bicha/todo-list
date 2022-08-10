import React from 'react'
import { useTodo } from '../../untils';
import styles from './TodoFooter.module.scss';



const TodoFooter = () => {
  const [todosLeft, setTodosLeft] = React.useState([]);
  const { todos } = useTodo();


  const counterTodosLeft = () => {
    const counter = todos.filter(todo => todo.checked === false).length
    return counter > 1 ? counter + ' items left' : counter + ' item left';
  };


  return (
    <footer style={todos.length ? {} : { 'display': 'none' }} className={styles.footer}>
      <div className={styles.itemsLeft}>{counterTodosLeft()}</div>
      <div className={styles.itemsFilter}>
        <div className={styles.item}>All</div>
        <div className={styles.item}>Active</div>
        <div className={styles.item}>Completed</div>
      </div>
      <div className={styles.clearCompleted}>Clear completed</div>
    </footer>
  )
}


export default TodoFooter;
