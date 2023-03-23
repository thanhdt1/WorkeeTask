import {createSlice} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {ItemQuestions} from '~/type/QuestionType';

/* ------------- Initial State ------------- */
const initialState = {
  questionList: [],
};

const reducers = {
  setListQuestionAction(state, {payload}) {
    state.questionList = payload;
  },
  setSkipQuestionAction(state, {payload}) {
    const exitIndex = state.questionList.findIndex(e => e?.id === payload.id);
    state.questionList[exitIndex].skipable = true;
  },
};

export const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers,
});

export const {setListQuestionAction} = questionSlice.actions;

export const useQuestion = () => {
  const dispatch = useDispatch();
  const setListQuestion = (data: ItemQuestions[]) => {
    dispatch(setListQuestionAction(data));
  };

  return {
    setListQuestion,
  };
};

export default {
  reducer: questionSlice.reducer,
  initialState,
};
