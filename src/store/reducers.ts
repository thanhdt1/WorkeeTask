import {combineReducers} from 'redux';

import session from '../slices/sessionSlice';
import loading from '../slices/loadingSlice';

const rootReducer = combineReducers({
  session: session.reducer,
  loading: loading.reducer,
});

const initialState = {
  session: session.initialState,
  loading: loading.initialState,
};

export default (state, action) => {
  if (action.type === 'CLEAR_DATA') {
    return rootReducer(
      {
        ...initialState,
        session: state.session,
      },
      action,
    );
  }
  return rootReducer(state, action);
};
