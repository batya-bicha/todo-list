import TodoItem from '../TodoItem';
import { useTodo } from '../../untils';
import styles from './TodoList.module.scss';



const TodoList = () => {
  const { todos, todoForEdit, checkTodo, deleteTodo, changeTodo, editTodo } = useTodo();

  // console.log(todoForEdit)

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
