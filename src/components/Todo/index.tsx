import TodoFooter from '../TodoFooter';
import TodoInput from '../TodoInput';
import TodoList from '../TodoList';
import { Routes, Route } from "react-router-dom";
import { TodoProvider, useTodo } from '../../untils';
import styled from 'styled-components';



const StyledTodo = styled.div`
  margin-top: 80px;
  width: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%);
`;



const Todo = () => {
  return (
    <TodoProvider>
      <StyledTodo>
        <TodoInput />
        <Routes>
          <Route >
            <Route path='/' element={<TodoList />} />
            <Route path='/:id' element={<TodoList />} />
            <Route path='/:id' element={<TodoList />} />
          </Route>
        </Routes>
        <TodoFooter />
      </StyledTodo>
    </TodoProvider>
  )
}


export default Todo;


//todo добавить useClickOutside**
//todo исправить фильтр пустой таски при изменении**
//todo сделать при изменение таску в высоту с текстом**

//todo переписать на styled components**

//todo перепистаь на Next.js + requests*** 

//todo добавить плавную анимацию
