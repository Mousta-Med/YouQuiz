import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AssignQuizDto} from "../../models/assign-quiz-dto.model";

@Injectable({
  providedIn: 'root'
})
export class AssignQuizService {

  private readonly assignQuizUrl = `${environment.api.baseUrl}${environment.api.assignQuizUrl}`;


  constructor(
    private http: HttpClient
  ) {
  }

  getAssignQuizs(): Observable<AssignQuizDto[]> {
    return this.http.get<AssignQuizDto[]>(this.assignQuizUrl);
  }
  findAssignQuizsByQuizId(quiz_id: number | undefined): Observable<AssignQuizDto[]>{
    return this.http.get<AssignQuizDto[]>(`${this.assignQuizUrl}/students/${quiz_id}`);
}

  getAssignQuiz(id: number | undefined): Observable<AssignQuizDto> {
    return this.http.get<AssignQuizDto>(`${this.assignQuizUrl}/${id}`);
  }

  save(assignQuiz: AssignQuizDto): Observable<AssignQuizDto> {
    return this.http.post<AssignQuizDto>(this.assignQuizUrl, assignQuiz)
  }

  delete(id: number | undefined): Observable<void> {
    return this.http.delete<void>(`${this.assignQuizUrl}/${id}`)
  }

  update(id: number | undefined, assignQuiz: AssignQuizDto): Observable<AssignQuizDto> {
    return this.http.put<AssignQuizDto>(`${this.assignQuizUrl}/${id}`, assignQuiz)
  }

}
