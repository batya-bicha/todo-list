import React from "react";
import { ITodo } from "../../models";


export interface TodoContextProps {
  todos: ITodo[];
  todoForEdit: ITodo['id'];
  editTodo: (id: ITodo['id'], description: ITodo['description'], checked: ITodo['checked'], todoForEdit: ITodo['id']) => void;
  checkTodo: (id: ITodo['id']) => void;
  deleteTodo: (id: ITodo['id']) => void;
  changeTodo: (id: ITodo['id']) => void;
  addTodo: ({ description }: Omit<ITodo, 'id' | 'checked'>) => void;
};


export const TodoContext = React.createContext<TodoContextProps>({
  todos: [],
  todoForEdit: 0,
  editTodo: () => { },
  checkTodo: () => { },
  deleteTodo: () => { },
  changeTodo: () => { },
  addTodo: () => { },
});
