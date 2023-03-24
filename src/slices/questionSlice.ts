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
  updateQuestionAction(state, {payload}) {
    const exitIndex = state.questionList.findIndex(e => e?.id === payload.id);
    state.questionList[exitIndex] = payload;
  },
};

export const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers,
});

export const {
  setListQuestionAction,
  updateQuestionAction,
  setSkipQuestionAction,
} = questionSlice.actions;

export const useQuestion = () => {
  const dispatch = useDispatch();
  const setListQuestion = (data: ItemQuestions[]) => {
    dispatch(setListQuestionAction(data));
  };
  const updateQuestion = data => {
    dispatch(updateQuestionAction(data));
  };

  return {
    setListQuestion,
    updateQuestion,
  };
};

export default {
  reducer: questionSlice.reducer,
  initialState,
};
