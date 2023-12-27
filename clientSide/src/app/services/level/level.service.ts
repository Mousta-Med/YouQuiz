import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LevelDto} from "../../models/level/level-dto.model";
import {environment} from "../../../environments/environment";
import {LevelRespDto} from "../../models/level/level-resp-dto.model";

@Injectable({
  providedIn: 'root'
})
export class LevelService {

  private readonly levelUrl = `${environment.api.baseUrl}${environment.api.levelUrl}`;

  constructor(
    private http: HttpClient
  ) {
  }

  getLevels(): Observable<LevelRespDto[]> {
    return this.http.get<LevelRespDto[]>(this.levelUrl);
  }

  getOneLevel(id: number): Observable<LevelRespDto> {
    return this.http.get<LevelRespDto>(`${this.levelUrl}/${id}`);
  }

  getLevel(id: number | undefined): Observable<LevelRespDto> {
    return this.http.get<LevelRespDto>(`${this.levelUrl}/${id}`);
  }

  save(level: LevelDto): Observable<LevelRespDto> {
    return this.http.post<LevelRespDto>(this.levelUrl, level)
  }

  delete(id: number | undefined): Observable<void> {
    return this.http.delete<void>(`${this.levelUrl}/${id}`)
  }

  update(id: number | undefined, level: LevelDto): Observable<LevelRespDto> {
    return this.http.put<LevelRespDto>(`${this.levelUrl}/${id}`, level)
  }
}
