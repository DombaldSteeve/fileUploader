import { Component } from '@angular/core';
import { AngularFileUploaderConfig } from 'angular-file-uploader';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent {

  afuConfig: AngularFileUploaderConfig = {
    id: 112233,
    multiple: false,
    formatsAllowed: 'video/*',
    autoUpload: true,
    maxSize: 1,
    uploadAPI: {
      url: 'https://slack.com/api/files.upload',
    },
  };

}
