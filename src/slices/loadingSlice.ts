import {createSlice} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';

/* ------------- Initial State ------------- */
const initialState = {
  isLoading: false,
  isReload: false,
};

const reducers = {
  setLoadingAction(state, {payload}) {
    state.isLoading = payload;
  },
  setReloadAction(state, {payload}) {
    state.isReload = payload;
  },
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers,
});

export const {setLoadingAction, setReloadAction} = loadingSlice.actions;

export const useLoading = () => {
  const dispatch = useDispatch();
  const setLoading = data => {
    dispatch(setLoadingAction(data));
  };
  const setReload = data => {
    dispatch(setReloadAction(data));
  };

  return {
    setLoading,
    setReload,
  };
};

export default {
  reducer: loadingSlice.reducer,
  initialState,
};
