import {SubjectDto} from "../subject/subject-dto.model";
import {LevelDto} from "../level/level-dto.model";

export interface QuestionRespDto {
  id?: number;
  questionText?: string;
  numberOfAnswers?: number;
  numberOfCorrectAnswers?: number;
  questionType?: 'OneAnswer' | 'MultipleAnswer' | 'TrueFalse';
  numberOfPoints?: number;
  subject: SubjectDto;
  level: LevelDto;
}
