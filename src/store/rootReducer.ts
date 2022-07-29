import { combineReducers } from 'redux';
import { reducer as account } from 'store/search';

export const rootReducer = combineReducers({
  account,
});

export type RootState = ReturnType<typeof rootReducer>;
