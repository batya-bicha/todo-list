import React from 'react';
import { ITodo } from '../../models';
import styled from 'styled-components';



const StyledLi = styled.li`
width: 100%;
height: 65px;
padding: 18px 10px 18px 15px;
z-index: 2;
overflow: hidden;
border-radius: 1px;
border-bottom: 0.75px solid #ececec;
background: #fff;
`;

const StyledContainer = styled.div`
position: relative;
display: flex;
align-items: center;
width: 100%;
height: 100%;
`;

const StyledCheckOut = styled.div`
display: flex;
justify-content: center;
width: 30px;
height: 30px;
border-radius: 50%;
border: 1px solid #dddddd;
opacity: 0.5;
cursor: pointer;

> img {
  width: 80%;
}

&.active {
  opacity: 0.7;
  border-color: #19c048;
}
`;

const StyledInput = styled.input`
display: flex;
width: 420px;
height: 100%;
margin-left: 15px;
font-size: 22px;
font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;

&.checked{
  color: #c9c9c9;
  text-decoration: line-through;
}
`;

const StyledDelete = styled.div`
position: absolute;
right: -5px;
top: 8px;
width: 10px;
height: 10px;
opacity: 0.3;
cursor: pointer;

&:hover {
  opacity: 1;
}

&:before,
&:after {
  content: " ";
  position: absolute;
  height: 15px;
  width: 2px;
  background-color: #ff0000;
}

&:before {
  transform: rotate(45deg);
}

&:after {
  transform: rotate(-45deg);
}
`;



interface TodoItemProps {
  todo: ITodo;
  checkTodo: (id: ITodo['id']) => void;
  deleteTodo: (id: ITodo['id']) => void;
  changeTodo: (id: ITodo['id']) => void;
  todoForEdit: ITodo['id'];
  editTodo: (id: ITodo['id'], description: ITodo['description'], checked: ITodo['checked'], todoForEdit: ITodo['id']) => void;
};



const TodoItem = ({ todo, checkTodo, deleteTodo, changeTodo, todoForEdit, editTodo }: TodoItemProps) => {
  const [focus, setFocus] = React.useState(false);
  const [value, setValue] = React.useState(todo.description);


  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
    editTodo(todo.id, value, todo.checked, todoForEdit);
  };


  const deleteEmptyTodo = () => {
    changeTodo(todo.id);
  };


  return (
    <StyledLi
      onMouseOver={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
    >
      <StyledContainer>
        <StyledCheckOut
          onClick={() => checkTodo(todo.id)}
          className={todo.checked ? 'active' : ''}
        >
          {todo.checked && <img src="./img/check.svg" alt="check" />}
        </StyledCheckOut>
        <StyledInput
          onDoubleClick={deleteEmptyTodo}
          onChange={(e) => onChange(e)}
          className={todo.checked ? 'checked' : ''}
          type="text"
          readOnly={todoForEdit === todo.id ? false : true}
          value={value}
        />
        <StyledDelete
          onClick={() => deleteTodo(todo.id)}
          style={focus ? {} : { 'display': 'none' }}
        >
        </StyledDelete>
      </StyledContainer>
    </StyledLi>
  )
}


export default TodoItem;
