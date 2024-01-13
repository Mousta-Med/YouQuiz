import {createReducer, on} from "@ngrx/store";
import {nextQuestion} from "./nextQuestion.action";

export interface NextQuestionState{
  questionIndex: number
}

export const initialNextQuestionState: NextQuestionState = {
  questionIndex : 0
}

export const NextQuestionReducer = createReducer(initialNextQuestionState, on(nextQuestion, state=>({...state, questionIndex: state.questionIndex++})));
