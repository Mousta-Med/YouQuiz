import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MediaDto} from "../../../models/media/media-dto.model";
import {MediaService} from "../../../services/media/media.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {CloudinaryService} from "../../../services/cloudinary/cloudinary.service";

@Component({
    selector: 'app-media',
    templateUrl: './media.component.html',
    styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

    sidebarVisible: boolean = false;

    operation: 'create' | 'update' = 'create';

    medias: Array<MediaDto> = [];

    media: MediaDto = {};

    constructor(
        private mediaService: MediaService,
        private confirmationService: ConfirmationService,
        private messageService: MessageService,
        private cloudinaryService: CloudinaryService
    ) {
    }

    ngOnInit(): void {
        this.retrieveAllImages();
        this.retrieveAllVideo();
        this.getMedias();
    }

    imageList: any[] = [];

    videoList: any[] = [];

    retrieveAllImages(): void {
        this.cloudinaryService.getAllImages()
            .subscribe({
                next: (response) => {
                    this.imageList = response.resources;
                }
            })
        ;
    }

    retrieveAllVideo(): void {
        this.cloudinaryService.getAllVideo()
            .subscribe({
                next: (response) => {
                    this.videoList = response.resources;
                }
            })
        ;
    }

    uploadMedia(mediaFile: any, media: MediaDto): any {
        const formData = new FormData();
        formData.append('file', mediaFile);
        formData.append('upload_preset', 'moustaMed');
        this.cloudinaryService.uploadMedia(formData)
            .subscribe({
                next: (response) => {
                    this.media.src = response.secure_url;
                    this.save(media);
                },
                error: (error) => {
                    console.error(error);
                }
            });

    }

    uploadWithSave(media: MediaDto) {
        this.uploadMedia(this.media.mediaFile, media);
    }

    getMedias() {
        this.mediaService.getMedias()
            .subscribe({
                next: (data) => {
                    this.medias = data;
                }
            })
    }


    save(media: MediaDto) {
        if (media) {
            if (this.operation === 'create') {
                this.media = media;
                this.mediaService.save(this.media)
                    .subscribe({
                        next: () => {
                            this.getMedias();
                            this.messageService.add(
                                {
                                    severity: 'success',
                                    summary: 'Media saved',
                                    detail: `Media was successfully saved`
                                }
                            );
                        }
                    });
            } else if (this.operation === 'update') {
                this.mediaService.update(media.id, media)
                    .subscribe({
                        next: () => {
                            this.getMedias();
                            this.messageService.add(
                                {
                                    severity: 'success',
                                    summary: 'Media updated',
                                    detail: `Media was successfully updated`
                                }
                            );
                        }
                    });
            }
            this.sidebarVisible = false;
            this.media = {};
        }
    }

    deleteMedia(media: MediaDto) {
        this.confirmationService.confirm({
            header: 'Delete media',
            message: `Are you sure you want to delete? You can\'t undo this action afterwords`,
            accept: () => {
                this.mediaService.delete(media.id)
                    .subscribe({
                        next: () => {
                            this.getMedias();
                            this.messageService.add(
                                {
                                    severity: 'success',
                                    summary: 'Media deleted',
                                    detail: `Media was successfully deleted`
                                }
                            );
                        }
                    });
            }
        });
    }


    createMedia() {
        this.sidebarVisible = true;
        this.media = {};
        this.operation = 'create';
    }

    updateMedia(media: MediaDto) {
        this.sidebarVisible = true;
        this.media = media;
        this.operation = 'update';
    }


    cancel() {
        this.sidebarVisible = false;
        this.media = {};
    }

}
