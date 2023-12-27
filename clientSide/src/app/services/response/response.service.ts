import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseDto} from "../../models/response/response-dto.model";
import {ResponseRespDto} from "../../models/response/response-resp-dto.model";

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  private readonly responseUrl = `${environment.api.baseUrl}${environment.api.responseUrl}`;

  constructor(
    private http: HttpClient
  ) {
  }

  getResponses(): Observable<ResponseRespDto[]> {
    return this.http.get<ResponseRespDto[]>(this.responseUrl);
  }

  getResponse(id: number | undefined): Observable<ResponseRespDto> {
    return this.http.get<ResponseRespDto>(`${this.responseUrl}/${id}`);
  }

  save(response: ResponseDto): Observable<ResponseRespDto> {
    return this.http.post<ResponseRespDto>(this.responseUrl, response)
  }

  delete(id: number | undefined): Observable<void> {
    return this.http.delete<void>(`${this.responseUrl}/${id}`)
  }

  update(id: number | undefined, response: ResponseDto): Observable<ResponseRespDto> {
    return this.http.put<ResponseRespDto>(`${this.responseUrl}/${id}`, response)
  }
}
