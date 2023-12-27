import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {QuizRespDto} from "../../models/quiz/quiz-resp-dto.model";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {QuizDto} from "../../models/quiz/quiz-dto.model";

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  operation!: Observable<QuizRespDto[]>;

  quizLength = new BehaviorSubject<number>(0);

  getLength = this.quizLength.asObservable();

  setLength(legth: number) {
    this.quizLength.next(legth);
  }

  private readonly quizUrl = `${environment.api.baseUrl}${environment.api.quizUrl}`;

  constructor(
    private http: HttpClient
  ) {
  }

  getQuizs(): Observable<QuizRespDto[]> {
    this.operation = this.http.get<QuizRespDto[]>(this.quizUrl);
    this.operation.subscribe((subjects: string | any[]) => {
      const length = subjects.length;
      this.setLength(length);
    });
    return this.operation;
  }

  getQuiz(id: number | undefined): Observable<QuizRespDto> {
    return this.http.get<QuizRespDto>(`${this.quizUrl}/${id}`);
  }

  save(quiz: QuizDto): Observable<QuizRespDto> {
    return this.http.post<QuizRespDto>(this.quizUrl, quiz)
  }

  delete(id: number | undefined): Observable<void> {
    return this.http.delete<void>(`${this.quizUrl}/${id}`)
  }

  update(id: number | undefined, quiz: QuizDto): Observable<QuizRespDto> {
    return this.http.put<QuizRespDto>(`${this.quizUrl}/${id}`, quiz)
  }
}
