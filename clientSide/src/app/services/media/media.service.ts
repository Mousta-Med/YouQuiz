import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MediaDto} from "../../models/media/media-dto.model";

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  private readonly mediaUrl = `${environment.api.baseUrl}${environment.api.mediaUrl}`;


  constructor(
    private http: HttpClient
  ) {
  }

  getMedias(): Observable<MediaDto[]> {
    return this.http.get<MediaDto[]>(this.mediaUrl);
  }

  getMedia(id: number | undefined): Observable<MediaDto> {
    return this.http.get<MediaDto>(`${this.mediaUrl}/${id}`);
  }

  save(media: MediaDto): Observable<MediaDto> {
    return this.http.post<MediaDto>(this.mediaUrl, media)
  }

  delete(id: number | undefined): Observable<void> {
    return this.http.delete<void>(`${this.mediaUrl}/${id}`)
  }

  update(id: number | undefined, media: MediaDto): Observable<MediaDto> {
    return this.http.put<MediaDto>(`${this.mediaUrl}/${id}`, media)
  }

}
