import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {QuestionRespDto} from "../../models/question/question-resp-dto.model";
import {QuestionDto} from "../../models/question/question-dto.model";
import {SubjectRespDto} from "../../models/subject/subject-resp-dto.model";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  operation!: Observable<QuestionRespDto[]>;

  questionLength = new BehaviorSubject<number>(0);

  getLength = this.questionLength.asObservable();

  setLength(legth: number) {
    this.questionLength.next(legth);
  }

  private readonly questionUrl = `${environment.api.baseUrl}${environment.api.questionUrl}`;

  constructor(
    private http: HttpClient
  ) {
  }

  getQuestions(): Observable<QuestionRespDto[]> {
    this.operation = this.http.get<QuestionRespDto[]>(this.questionUrl);
    this.operation.subscribe((subjects: string | any[]) => {
      const length = subjects.length;
      this.setLength(length);
    });
    return this.operation;
  }

  getQuestion(id: number | undefined): Observable<QuestionRespDto> {
    return this.http.get<QuestionRespDto>(`${this.questionUrl}/${id}`);
  }

  save(question: QuestionDto): Observable<QuestionRespDto> {
    return this.http.post<QuestionRespDto>(this.questionUrl, question)
  }

  delete(id: number | undefined): Observable<void> {
    return this.http.delete<void>(`${this.questionUrl}/${id}`)
  }

  update(id: number | undefined, question: QuestionDto): Observable<QuestionRespDto> {
    return this.http.put<QuestionRespDto>(`${this.questionUrl}/${id}`, question)
  }
}
