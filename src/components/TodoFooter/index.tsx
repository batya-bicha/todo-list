import React from 'react'
import { useTodo } from '../../untils';
import styles from './TodoFooter.module.scss';



const TodoFooter = () => {
  const { todos } = useTodo();

  return (
    <footer style={todos.length ? {} : { 'display': 'none' }} className={styles.footer}>
      <div className={styles.itemsLeft}>{todos.length} item left</div>
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
