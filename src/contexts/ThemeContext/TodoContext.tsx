import { createContext } from 'react';
import { ITodoState } from 'types';

export type ITodoContextProps = {
  todoState: ITodoState;
  toggleTodo: (id: string) => void;
};

export const TodoContext = createContext<ITodoContextProps>(
  {} as ITodoContextProps
);
