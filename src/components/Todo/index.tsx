import TodoFooter from '../TodoFooter';
import TodoInput from '../TodoInput';
import TodoList from '../TodoList';
import { Routes, Route } from "react-router-dom";
import { TodoProvider, useTodo } from '../../untils';
import styles from './Todo.module.scss';



const Todo = () => {
  return (
    <TodoProvider>
      <div className={styles.todo}>
        <TodoInput />
        <Routes>
          <Route >
            <Route path='/' element={<TodoList />} />
            <Route path='/:id' element={<TodoList />} />
            <Route path='/:id' element={<TodoList />} />
          </Route>
        </Routes>
        <TodoFooter />
      </div>
    </TodoProvider>
  )
}


export default Todo;


//todo добавить useClickOutside**
//todo исправить фильтр пустой таски при изменении**
//todo добавить возможность фильтрации тасок (3 состояния)***

//todo переписать на styled components**

//todo перепистаь на Next.js + requests*** 

//todo добавить плавную анимацию
//todo сделать красивый хедере absolute
