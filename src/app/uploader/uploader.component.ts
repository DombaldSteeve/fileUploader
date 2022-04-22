import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { AngularFileUploaderConfig } from 'angular-file-uploader';
import { environment } from '../../environments/environment';
import Post from '../model/post';
import { InjectableService } from '../services/injectable/injectable.service';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent {

  posts!: Post[];
  url: string = environment.url;

  afuConfig: AngularFileUploaderConfig = {
    id: 112233,
    multiple: false,
    formatsAllowed: 'image/*',
    autoUpload: false,
    maxSize: 20,
    uploadAPI: {
      url: this.url,
    },
  };

  constructor(private root: ActivatedRoute, private is: InjectableService) {
    console.log(this.root.snapshot.paramMap.get("id"));
    console.log(this.root.snapshot.paramMap.get("token"));
    console.log(this.afuConfig.uploadAPI.url);

  }

  ngOnInit() {
    this.is.getVideo().subscribe((data: Post[] | any) => {
      console.log(data);

      this.posts = data;
    });
  }

  monUpload(event: any) {
    console.log(event);

  }

}
