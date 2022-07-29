import { ITodo, ITodoState } from 'types';

type TodoAction =
  | { type: 'ADD_TODO'; payload: ITodo }
  | { type: 'TOGGLE_TODO'; payload: { id: string } };

export const todoReducer = (
  state: ITodoState,
  action: TodoAction
): ITodoState => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};
