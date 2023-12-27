export interface MediaDto {
  id?: number;
  src?: string;
  secure_url?: string;
  mediaType?: 'AUDIO' | 'VIDEO' | 'IMAGE' | 'DOCUMENT';
  questionId?: number;
  mediaFile?: any;
}
