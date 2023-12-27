export interface QuestionDto {
  id?: number;
  questionText?: string;
  numberOfAnswers?: number;
  numberOfCorrectAnswers?: number;
  questionType?: 'OneAnswer' | 'MultipleAnswer' | 'TrueFalse' | undefined;
  numberOfPoints?: number;
  subjectId?: number | undefined;
  levelId?: number | undefined;
}
