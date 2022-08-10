import React from 'react'
import { useTodo } from '../../untils';
import { NavLink } from 'react-router-dom';
import styles from './TodoFooter.module.scss';



const TodoFooter = () => {
  const { todos, clearCompletedTodos, displayAllTodos, displayActiveTodos, displayCompletedTodos } = useTodo();


  const counterTodosLeft = () => {
    const counter = todos.filter(todo => todo.checked === false).length;
    return counter > 1 ? counter + ' items left' : counter + ' item left';
  };


  const checkTodosState = () => {
    return todos.find(todo => todo.checked === true);
  };


  const clearCompleted = () => {
    clearCompletedTodos();
  };


  const displayAll = () => {
    console.log('display ALL');
  };


  const displayActive = () => {
    console.log('display ACTIVE');

  };


  const displayCompleted = () => {
    console.log('display COMPLETED');

  };



  return (
    <footer style={todos.length ? {} : { 'display': 'none' }} className={styles.footer}>
      <div className={styles.itemsLeft}>{counterTodosLeft()}</div>
      <div className={styles.itemsFilter}>
        <NavLink to='/' className={({ isActive }) => isActive ? styles.active : ''}>
          <div
            onClick={() => displayAll()}
          >
            All
          </div>
        </NavLink>
        <NavLink to='/active' className={({ isActive }) => isActive ? styles.active : ''}>
          <div
            onClick={() => displayActive()}
          >
            Active
          </div>
        </NavLink>
        <NavLink to='/completed' className={({ isActive }) => isActive ? styles.active : ''}>
          <div
            onClick={() => displayCompleted()}
          >
            Completed
          </div>
        </NavLink>
      </div>
      <div
        onClick={() => clearCompleted()}
        style={checkTodosState() ? {} : { 'visibility': 'hidden' }}
        className={styles.clearCompleted}
      >
        Clear completed
      </div>
    </footer>
  )
}


export default TodoFooter;


// вызывать функции в футере, в провайдере менять значнение и использовать его при фильтрации в листе