import React from 'react';
import TodoItem from '../TodoItem';
import { useTodo } from '../../untils';
import styles from './TodoList.module.scss';
import { useParams } from 'react-router-dom';


const TodoList = () => {
  const { todos, todoForEdit, checkTodo, deleteTodo, changeTodo, editTodo } = useTodo();
  const params = useParams().id;


  const filterTodos = () => {
    return todos.filter(todo =>
      params === undefined ? todo
        : params === 'active' ? todo.checked === false
          : params === 'completed' ? todo.checked === true
            : {});
  };


  return (
    <section className={styles.section}>
      <ul className={styles.list}>
        {filterTodos().map(todo => (
          <TodoItem
            key={todo.id}
            checkTodo={checkTodo}
            deleteTodo={deleteTodo}
            changeTodo={changeTodo}
            todo={todo}
            todoForEdit={todoForEdit}
            editTodo={editTodo}
          />
        ))}
      </ul>
    </section>
  )
}


export default TodoList;
