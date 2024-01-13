import {appState} from "../app.state";
import {createSelector} from "@ngrx/store";

export const selectNextQuestionState = (state: appState) => state.nextQuestion;

export const selectNextQuestion = createSelector(selectNextQuestionState, (state) => state.questionIndex)
