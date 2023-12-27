import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {MediaDto} from "../../models/media/media-dto.model";

@Injectable({
    providedIn: 'root'
})
export class CloudinaryService {

    private readonly mediaUploadUrl = `${environment.api.cloudinaryUrl}/dlqzkjt5k/upload`;

    private readonly imageUrl = `${environment.api.cloudinaryImageApi}`;

    private readonly videoUrl = `${environment.api.cloudinaryVideoApi}`;

    constructor(private http: HttpClient) {
    }

    getAllImages(): Observable<any> {
        return this.http.get(this.imageUrl, {withCredentials: true});
    }

    getAllVideo(): Observable<any> {
        return this.http.get(this.videoUrl, {withCredentials: true});
    }

    uploadMedia(formData: FormData): Observable<MediaDto> {
        return this.http.post<MediaDto>(this.mediaUploadUrl, formData);
    }
}
