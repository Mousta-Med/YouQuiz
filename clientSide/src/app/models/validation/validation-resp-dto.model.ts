import {QuestionDto} from "../question/question-dto.model";
import {ResponseDto} from "../response/response-dto.model";

export interface ValidationRespDto {
  id?: number;
  points?: number;
  question?: QuestionDto;
  response?: ResponseDto;
// answers?: Array<AnswerDto>;
}
