import {createSlice} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';

/* ------------- Initial State ------------- */
const initialState = {
  enableNotification: true,
  networkAvailable: true,
  requireLogin: false,
};

const reducers = {
  updateEnableNotificationAction(state, {payload}) {
    state.enableNotification = payload;
  },
  updateNetworkAvailableAction(state, {payload}) {
    state.networkAvailable = payload;
  },
  updateRequireLoginAction(state, {payload}) {
    state.requireLogin = payload;
  },
};

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers,
});

export const {
  updateEnableNotificationAction,
  updateNetworkAvailableAction,
  updateRequireLoginAction,
} = sessionSlice.actions;

export const useSession = () => {
  const dispatch = useDispatch();
  const updateEnableNotification = (data: string) => {
    dispatch(updateEnableNotificationAction(data));
  };
  const updateNetworkAvailable = (data: string) => {
    dispatch(updateNetworkAvailableAction(data));
  };
  const updateRequireLogin = (data: string) => {
    dispatch(updateRequireLoginAction(data));
  };

  return {
    updateEnableNotification,
    updateNetworkAvailable,
    updateRequireLogin,
  };
};

export default {
  reducer: sessionSlice.reducer,
  initialState,
};
