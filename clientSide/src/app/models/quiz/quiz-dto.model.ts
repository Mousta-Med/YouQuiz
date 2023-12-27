export interface QuizDto {
  id?: number;
  successResult?: number;
  answersAccess?: boolean;
  resultAccessAfterTest?: boolean;
  chancesNum?: number;
  comment?: string;
  teacherId?: number;
}
