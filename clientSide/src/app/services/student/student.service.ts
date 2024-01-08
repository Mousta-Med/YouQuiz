import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {StudentDto} from "../../models/student-dto.model";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private readonly studentUrl = `${environment.api.baseUrl}${environment.api.studentUrl}`;


  constructor(
    private http: HttpClient
  ) {
  }

  getStudents(): Observable<StudentDto[]> {
    return this.http.get<StudentDto[]>(this.studentUrl);
  }

  getStudent(id: number | undefined): Observable<StudentDto> {
    return this.http.get<StudentDto>(`${this.studentUrl}/${id}`);
  }

  save(student: StudentDto): Observable<StudentDto> {
    return this.http.post<StudentDto>(this.studentUrl, student)
  }

  delete(id: number | undefined): Observable<void> {
    return this.http.delete<void>(`${this.studentUrl}/${id}`)
  }

  update(id: number | undefined, student: StudentDto): Observable<StudentDto> {
    return this.http.put<StudentDto>(`${this.studentUrl}/${id}`, student)
  }

}
