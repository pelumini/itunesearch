/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import { ITodoState } from 'types';
import { TodoContext } from './TodoContext';
import { todoReducer } from './todoReducer';

const INITIAL_STATE: ITodoState = {
  todos: [
    {
      id: '1',
      description: 'Learn React',
      completed: false,
    },
    {
      id: '2',
      description: 'Learn Vue',
      completed: false,
    },
    {
      id: '3',
      description: 'Learn Svelte',
      completed: false,
    },
  ],
  todoCount: 2,
  completed: 0,
  pending: 2,
};

interface ITodoProviderProps {
  children: React.ReactNode;
}

export const TodoProvider: React.FC<ITodoProviderProps> = ({ children }) => {
  const [todoState, dispatch] = React.useReducer(todoReducer, INITIAL_STATE);

  const toggleTodo = (id: string) => {
    dispatch({ type: 'TOGGLE_TODO', payload: { id } });
  };

  return (
    <TodoContext.Provider value={{ todoState, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
