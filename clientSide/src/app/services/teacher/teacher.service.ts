import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TeacherDto} from "../../models/teacher-dto.model";

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private readonly teacherUrl = `${environment.api.baseUrl}${environment.api.teacherUrl}`;

  constructor(
    private http: HttpClient
  ) {
  }

  getTeachers(): Observable<TeacherDto[]> {
    return this.http.get<TeacherDto[]>(this.teacherUrl);
  }

  getOneTeacher(id: number): Observable<TeacherDto> {
    return this.http.get<TeacherDto>(`${this.teacherUrl}/${id}`);
  }

  getTeacher(id: number | undefined): Observable<TeacherDto> {
    return this.http.get<TeacherDto>(`${this.teacherUrl}/${id}`);
  }

  save(teacher: TeacherDto): Observable<TeacherDto> {
    return this.http.post<TeacherDto>(this.teacherUrl, teacher)
  }

  delete(id: number | undefined): Observable<void> {
    return this.http.delete<void>(`${this.teacherUrl}/${id}`)
  }

  update(id: number | undefined, teacher: TeacherDto): Observable<TeacherDto> {
    return this.http.put<TeacherDto>(`${this.teacherUrl}/${id}`, teacher)
  }
}
