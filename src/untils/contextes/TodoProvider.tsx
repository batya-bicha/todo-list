import React from "react";
import { TodoContext, TodoContextProps } from "./TodoContext";
import { ITodo } from "../../models";



interface TodoProviderProps {
  children: React.ReactNode;
};



export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todos, setTodos] = React.useState<ITodo[]>([]);
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
    ))
    console.log(id, todoForEdit)
    setTodos(modifiedTodo.filter(todo => ( todo.description.trim().length !== 0)));
  };


  const value = React.useMemo(
    () => ({
      todos,
      todoForEdit,
      editTodo,
      checkTodo,
      deleteTodo,
      changeTodo,
      addTodo
    }),
    [
      todos,
      todoForEdit,
      editTodo,
      checkTodo,
      deleteTodo,
      changeTodo,
      addTodo
    ]
  );


  return <TodoContext.Provider value={value}> {children} </TodoContext.Provider>
};