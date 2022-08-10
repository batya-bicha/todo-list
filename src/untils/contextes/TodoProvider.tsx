import React from "react";
import { TodoContext, TodoContextProps } from "./TodoContext";
import { ITodo } from "../../models";



interface TodoProviderProps {
  children: React.ReactNode;
};



export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todos, setTodos] = React.useState<ITodo[]>([]);
  const [filteredTodos, setFilteredTodos] = React.useState<ITodo[]>([]);
  const [todoForEdit, setTodoForEdit] = React.useState<ITodo['id']>(0);


  const addTodo = ({ description }: Omit<ITodo, 'id' | 'checked'>) => {
    const newId = todos?.length ? todos[todos.length - 1]?.id + 1 : 0;
    setTodos([...todos, { id: newId, description, checked: false }]);
  };


  const checkTodo = (id: ITodo['id']) => {
    const checkedTodo = todos.map(todo => {
      return todo.id === id ? { ...todo, checked: !todo.checked } : todo;
    });

    setTodos(checkedTodo);
  };


  const changeTodo = (id: ITodo['id']) => {
    setTodoForEdit(id);
  };


  const deleteTodo = (id: ITodo['id']) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };


  const editTodo = (id: ITodo['id'], description: ITodo['description'], checked: ITodo['checked'], todoForEdit: ITodo['id']) => {
    const modifiedTodo = todos.map(todo => (
      todo.id === id ? { id, description, checked } : todo
    ));
    setTodos(modifiedTodo.filter(todo => (todo.description.trim().length !== 0)));
  };


  const selectAllTodos = () => {
    const checkTodos = todos.every(todo => todo.checked === true);
    const checkedTodos = todos.map(todo => (
      {
        id: todo.id,
        description: todo.description,
        checked: checkTodos ? false : true,
      }
    ));
    setTodos(checkedTodos);
  };


  const clearCompletedTodos = () => {
    setTodos(todos.filter(todo => todo.checked !== true));
  };


  const displayAllTodos = () => {
    setFilteredTodos(todos);
    return filteredTodos;
    // console.log('displayAllTodos');
  };


  const displayActiveTodos = () => {
    setFilteredTodos(todos.filter(todo => todo.checked === false));
    return filteredTodos;
    // console.log('displayActiveTodos')
  };


  const displayCompletedTodos = () => {
    setFilteredTodos(todos.filter(todo => todo.checked === true));
    return filteredTodos;
    // console.log('displayCompletedTodos')
  };



  const value = React.useMemo(
    () => ({
      todos,
      todoForEdit,
      editTodo,
      checkTodo,
      deleteTodo,
      changeTodo,
      addTodo,
      selectAllTodos,
      clearCompletedTodos,
      displayAllTodos,
      displayActiveTodos,
      displayCompletedTodos,
      filteredTodos,
    }),
    [
      todos,
      todoForEdit,
      editTodo,
      checkTodo,
      deleteTodo,
      changeTodo,
      addTodo,
      selectAllTodos,
      clearCompletedTodos,
      displayAllTodos,
      displayActiveTodos,
      displayCompletedTodos,
      filteredTodos,
    ]
  );


  return <TodoContext.Provider value={value}> {children} </TodoContext.Provider>
};