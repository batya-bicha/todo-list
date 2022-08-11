import React from 'react';
import TodoItem from '../TodoItem';
import { useTodo } from '../../untils';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';



const StyledSection = styled.section`
width: 100%;
border-top: 0.75px solid #dbdbdb;
z-index: 2;
`;



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
    <StyledSection>
      <ul>
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
    </StyledSection>
  )
}


export default TodoList;
