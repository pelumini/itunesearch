export interface ITodo {
  id: string;
  description: string;
  completed: boolean;
}

export interface ITodoState {
  todos: ITodo[];
  todoCount: number;
  completed: number;
  pending: number;
}

export interface IUser {
  id?: string;
  name?: string;
  email: string;
  password: string;
}
