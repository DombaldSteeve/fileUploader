import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { AngularFileUploaderConfig } from 'angular-file-uploader';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent {
/**
 *
 */
  url: string = environment.url;
  afuConfig: AngularFileUploaderConfig = {
    id: 112233,
    multiple: false,
    formatsAllowed: 'video/*',
    autoUpload: true,
    maxSize: 10,
    uploadAPI: {
      url: this.url,
    },
  };

  constructor(private root: ActivatedRoute) {
    console.log(this.root.snapshot.paramMap.get("id"));
    console.log(this.root.snapshot.paramMap.get("token"));
    console.log(this.url + "/" + this.root.snapshot.paramMap.get("id"));
    this.url = this.url + "/" + this.root.snapshot.paramMap.get("id");
    this.afuConfig.uploadAPI.url = this.url;
    console.log(this.afuConfig.uploadAPI.url);

  }

}
