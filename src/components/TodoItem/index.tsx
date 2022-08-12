import React, { RefObject } from 'react';
import { ITodo } from '../../models';
import {
  StyledTodoItem,
  StyledContainer,
  StyledCheckOut,
  StyledInput,
  StyledDeleteTodo,
} from './TodoItem.styled';



interface TodoItemProps {
  todo: ITodo;
  checkTodo: (id: ITodo['id']) => void;
  deleteTodo: (id: ITodo['id']) => void;
  changeTodo: (id: ITodo['id']) => void;
  todoForEdit: ITodo['id'];
  editTodo: (id: ITodo['id'], description: ITodo['description'], checked: ITodo['checked'], todoForEdit: ITodo['id']) => void;
  useClickOutside: <T extends HTMLElement = HTMLElement>(ref: RefObject<T>, callback: (arg: boolean) => void, toChange: boolean) => void;
};



const TodoItem = ({ todo, checkTodo, deleteTodo, changeTodo, todoForEdit, editTodo, useClickOutside }: TodoItemProps) => {
  const [focus, setFocus] = React.useState(false);
  const [toChange, setToChange] = React.useState(todoForEdit === todo.id);
  const [value, setValue] = React.useState(todo.description);


  React.useEffect(() => {
    setToChange(todoForEdit === todo.id);
  }, [todoForEdit]);



  const clickRef = React.useRef(null);

  // console.log(toChange)
  useClickOutside(clickRef, setToChange, toChange);


  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
    editTodo(todo.id, value, todo.checked, todoForEdit);
  };


  const changeTodoDescription = () => {
    changeTodo(todo.id);
  };

  return (
    <StyledTodoItem
      ref={clickRef}
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
          onDoubleClick={changeTodoDescription}
          onChange={(e) => onChange(e)}
          className={todo.checked ? 'checked' : ''}
          type="text"
          readOnly={!toChange}
          value={value}
        />
        <StyledDeleteTodo
          onClick={() => deleteTodo(todo.id)}
          style={focus ? {} : { 'display': 'none' }}
        >
        </StyledDeleteTodo>
      </StyledContainer>
    </StyledTodoItem>
  )
}


export default TodoItem;
