import { createContext } from 'react';
import { IUser } from 'types';

export type ICurrentUserContextProps = {
  currentUser: IUser | null;
  setCurrentUser: (user: IUser) => void;
  checkLogin: () => void;
  setAuthLoading: (isLoading: boolean) => void;
  authLoading: boolean;
  handleLogout: () => void;
  testData: string;
};

export const CurrentUserContext = createContext<ICurrentUserContextProps>(
  {} as ICurrentUserContextProps
);
