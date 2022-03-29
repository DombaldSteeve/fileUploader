import { Component, OnInit } from '@angular/core';
import { AngularFileUploaderConfig } from 'angular-file-uploader';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  afuConfig: AngularFileUploaderConfig = {
    id: 112233,
    multiple: true,
    formatsAllowed: 'movie/*',
    autoUpload: false,
    uploadAPI: {
      url: 'https://slack.com/api/files.upload',
    },
  };
}
