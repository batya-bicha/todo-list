import TodoFooter from '../TodoFooter';
import TodoInput from '../TodoInput';
import TodoList from '../TodoList';
import { Routes, Route } from "react-router-dom";
import { TodoProvider, useTodo } from '../../untils';
import { StyledTodo } from './Todo.styled';



const Todo = () => {
  return (
    <TodoProvider>
      <StyledTodo>
        <TodoInput />
        <Routes>
          <Route >
            <Route path='/' element={<TodoList />} />
            <Route path='/:id' element={<TodoList />} />
          </Route>
        </Routes>
        <TodoFooter />
      </StyledTodo>
    </TodoProvider>
  )
}


export default Todo;


//todo переписать стрелочные компоненты

//todo исправить фильтр пустой таски при изменении**
//todo сделать при изменение таску в высоту с текстом**

//todo перепистаь на Next.js + requests*** 

//todo добавить плавную анимацию
