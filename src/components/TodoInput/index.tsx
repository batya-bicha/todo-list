import React from 'react';
import { useTodo } from '../../untils';
import styled from 'styled-components';



const StyledContainer = styled.div`
display: flex;
width: 100%;
height: 65px;
background: #fff;
border-radius: 2px;
overflow: hidden;
padding: 18px 5px 18px 20px;
z-index: 1;
`;

const StyledPickAll = styled.div`
height: 100%;
margin-top: 4px;
-webkit-transform: rotate(90deg);
transform: rotate(90deg);
cursor: pointer;

&::before {
  content: "❯";
  font-size: 22px;
  color: #e2e2e2;
}

&.allTodoTrue {
  &::before{
    color: #a3a3a3;
  }
}
`;

const StyledInput = styled.input`
display: flex;
width: 100%;
height: 100%;
margin-left: 20px;
font-size: 24px;
font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;

&::placeholder {
  color: #ffdbb3;
  opacity: 1;
}

&:-ms-input-placeholder {
  color: #ffdbb3;
}

&::-ms-input-placeholder {
  color: #ffdbb3;
}
`;



const TodoInput = () => {
  const [todo, setTodo] = React.useState('');
  const [allTodoTrue, setAllTodoTrue] = React.useState(false);
  const { todos, addTodo, selectAllTodos } = useTodo();


  React.useEffect(() => {
    const checkedTodos = todos.every(todo => todo.checked === true);
    setAllTodoTrue(checkedTodos);
  }, [todos]);


  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTodo(value);
  };


  const addNewTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    return e.key === 'Enter' && todo.trim().length !== 0
      ? (addTodo({ description: todo }), setTodo(''))
      : null;
  };


  const selectTodos = () => {
    selectAllTodos();
  };


  return (
    <StyledContainer>
      <StyledPickAll
        style={todos.length ? {} : { 'visibility': 'hidden' }}
        className={allTodoTrue ? 'allTodoTrue' : ''}
        onClick={() => selectTodos()}
      >
      </StyledPickAll>
      <StyledInput
        onChange={onChange}
        onKeyDown={addNewTodo}
        value={todo}
        type="text"
        placeholder='Write something :)'
      />
    </StyledContainer>
  )
}


export default TodoInput;
