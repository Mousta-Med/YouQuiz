import {QuizDto} from "./quiz/quiz-dto.model";
import {StudentDto} from "./student-dto.model";

export interface AssignQuizDto {

  id?: number,
  score: number,
  chanceNumber: number,
  notes: string,
  date: string,
  quizId?: number,
  studentId: number,
  quiz?: QuizDto;
  student?: StudentDto;
  // answers?: AnswerDto;
}
