import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {SubjectDto} from "../../models/subject/subject-dto.model";
import {SubjectRespDto} from "../../models/subject/subject-resp-dto.model";

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  operation!: Observable<SubjectRespDto[]>;

  subjectsLength = new BehaviorSubject<number>(0);
  
  getLength = this.subjectsLength.asObservable();

  setLength(legth: number) {
    this.subjectsLength.next(legth);
  }

  private readonly subjectUrl = `${environment.api.baseUrl}${environment.api.subjectUrl}`;

  constructor(
    private http: HttpClient
  ) {
  }


  getSubjects(): Observable<SubjectRespDto[]> {
    this.operation = this.http.get<SubjectRespDto[]>(this.subjectUrl);
    this.operation.subscribe((subjects: string | any[]) => {
      const length = subjects.length;
      this.setLength(length);
    });
    return this.operation;
  }

  getOneSubject(id: number): Observable<SubjectRespDto> {
    return this.http.get<SubjectRespDto>(`${this.subjectUrl}/${id}`);
  }

  getSubject(id: number | undefined): Observable<SubjectRespDto> {
    return this.http.get<SubjectRespDto>(`${this.subjectUrl}/${id}`);
  }

  save(subject: SubjectDto): Observable<SubjectRespDto> {
    return this.http.post<SubjectRespDto>(this.subjectUrl, subject)
  }

  delete(id: number | undefined): Observable<void> {
    return this.http.delete<void>(`${this.subjectUrl}/${id}`)
  }

  update(id: number | undefined, subject: SubjectDto): Observable<SubjectRespDto> {
    return this.http.put<SubjectRespDto>(`${this.subjectUrl}/${id}`, subject)
  }

}
