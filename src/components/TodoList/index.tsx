import React, { RefObject } from 'react';
import TodoItem from '../TodoItem';
import { useTodo } from '../../untils';
import { useParams } from 'react-router-dom';
import { StyledSection } from './TodoList.styles';



const useClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  callback: (arg: boolean) => void,
  toChange: boolean,
) => {
  const handleClick = (e: Event) => {
    const el = ref?.current;
    return toChange ? (el && !el.contains(e?.target as Node)) ? (console.log(toChange), callback(false)) : (console.log('nothing')) : null;
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};




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
            useClickOutside={useClickOutside}
          />
        ))}
      </ul>
    </StyledSection>
  )
}


export default TodoList;
