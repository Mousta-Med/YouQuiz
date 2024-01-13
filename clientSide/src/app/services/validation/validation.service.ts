import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {ValidationRespDto} from "../../models/validation/validation-resp-dto.model";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ValidationDto} from "../../models/validation/validation-dto.model";

@Injectable({
  providedIn: 'root'
})
export class ValidationService {


  operation!: Observable<ValidationRespDto[]>;

  validationsLength = new BehaviorSubject<number>(0);

  getLength = this.validationsLength.asObservable();

  setLength(legth: number) {
    this.validationsLength.next(legth);
  }

  private readonly validationUrl = `${environment.api.baseUrl}${environment.api.validationUrl}`;

  constructor(
    private http: HttpClient
  ) {
  }


  getValidations(): Observable<ValidationRespDto[]> {
    this.operation = this.http.get<ValidationRespDto[]>(this.validationUrl);
    this.operation.subscribe((validations: string | any[]) => {
      const length = validations.length;
      this.setLength(length);
    });
    return this.operation;
  }
  getValidationsByQuiz(id: number | undefined): Observable<ValidationRespDto[]> {
    return  this.http.get<ValidationRespDto[]>(`${this.validationUrl}/question/${id}`);
  }

  getOneValidation(id: number): Observable<ValidationRespDto> {
    return this.http.get<ValidationRespDto>(`${this.validationUrl}/${id}`);
  }

  getValidation(id: number | undefined): Observable<ValidationRespDto> {
    return this.http.get<ValidationRespDto>(`${this.validationUrl}/${id}`);
  }

  save(validation: ValidationDto): Observable<ValidationRespDto> {
    return this.http.post<ValidationRespDto>(this.validationUrl, validation)
  }

  delete(id: number | undefined): Observable<void> {
    return this.http.delete<void>(`${this.validationUrl}/${id}`)
  }

  update(id: number | undefined, validation: ValidationDto): Observable<ValidationRespDto> {
    return this.http.put<ValidationRespDto>(`${this.validationUrl}/${id}`, validation)
  }
}
