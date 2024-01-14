import {AssignQuizDto} from "./assign-quiz-dto.model";
import {ValidationDto} from "./validation/validation-dto.model";

export interface AnswerDto{
  id?: number,
  played: number,
  validationId: number,
  assignQuizId: number,
  validation?: ValidationDto,
  assignQuiz?: AssignQuizDto,
}
