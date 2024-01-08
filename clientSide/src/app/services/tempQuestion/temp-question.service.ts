import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TempQuestionDto} from "../../models/temp-question-dto.model";

@Injectable({
  providedIn: 'root'
})
export class TempQuestionService {

  private readonly tempQuestionUrl = `${environment.api.baseUrl}${environment.api.tempQuestionUrl}`;


  constructor(
    private http: HttpClient
  ) {
  }

  getTempQuestions(): Observable<TempQuestionDto[]> {
    return this.http.get<TempQuestionDto[]>(this.tempQuestionUrl);
  }

  getTempQuestion(id: number | undefined): Observable<TempQuestionDto> {
    return this.http.get<TempQuestionDto>(`${this.tempQuestionUrl}/${id}`);
  }
  findTempQuestionByQuizId(id: number | undefined): Observable<TempQuestionDto[]> {
    return this.http.get<TempQuestionDto[]>(`${this.tempQuestionUrl}/quiz/${id}`);
  }

  save(tempQuestion: TempQuestionDto): Observable<TempQuestionDto> {
    return this.http.post<TempQuestionDto>(this.tempQuestionUrl, tempQuestion)
  }

  delete(id: number | undefined): Observable<void> {
    return this.http.delete<void>(`${this.tempQuestionUrl}/${id}`)
  }

  update(id: number | undefined, tempQuestion: TempQuestionDto): Observable<TempQuestionDto> {
    return this.http.put<TempQuestionDto>(`${this.tempQuestionUrl}/${id}`, tempQuestion)
  }

}
