import {SubjectDto} from "./subject-dto.model";
import {QuestionDto} from "../question/question-dto.model";

export interface SubjectRespDto {
  id?: number;
  title?: string;
  parentSubject?: SubjectDto;
  questions?: Array<QuestionDto>;
  childrenSubject?: Array<SubjectDto>
}
