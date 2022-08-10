import TodoFooter from '../TodoFooter';
import TodoInput from '../TodoInput';
import TodoList from '../TodoList';
import { TodoProvider, useTodo } from '../../untils';
import styles from './Todo.module.scss';



const Todo = () => {
  return (
    <TodoProvider>
      <div className={styles.todo}>
        <TodoInput />
        <TodoList />
        <TodoFooter />
      </div>
    </TodoProvider>
  )
}


export default Todo;


//todo добавить useClickOutside**
//todo исправить фильтр пустой таски при изменении**
//todo добавить плавную анимацию*
//todo добавить возможность выделения всех тасок**
//todo добавить возможность фильтрации тасок (3 состояния)***
//todo удалять checked tasks**
