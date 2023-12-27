import {QuestionDto} from "../question/question-dto.model";

export interface LevelRespDto {
  id?: number;
  description?: string;
  maxPoints?: number;
  minPoints?: number;
  questions?: Array<QuestionDto>;
}
