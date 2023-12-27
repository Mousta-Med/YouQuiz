export interface QuizRespDto {
  id?: number;
  successResult?: number;
  answersAccess?: boolean;
  resultAccessAfterTest?: boolean;
  chancesNum?: number;
  comment?: string;
  // teacher?: TeacherDto;
}
