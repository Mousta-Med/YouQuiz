import {QuestionDto} from "./question/question-dto.model";
import {QuizDto} from "./quiz/quiz-dto.model";

export interface TempQuestionDto{
  id?: number,
  time: number,
  questionId: number,
  quizId?: number,
  question?: QuestionDto,
  quiz?: QuizDto
}
