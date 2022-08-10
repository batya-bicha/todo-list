import React from 'react';
import TodoItem from '../TodoItem';
import { useParams } from 'react-router-dom';
import { useTodo } from '../../untils';
import styles from './TodoList.module.scss';
import { ITodo } from '../../models';



const TodoList = () => {
  // const [filteredTodoss, setFilteredTodoss] = React.useState<ITodo[]>([]);
  const { todos, todoForEdit, checkTodo, deleteTodo, changeTodo, editTodo, filteredTodos } = useTodo();


  return (
    <section className={styles.section}>
      <ul className={styles.list}>
        {todos.map(todo => (
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
