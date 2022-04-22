import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InjectableService {

  uri = 'http://localhost:4000/posts';

  constructor(private http: HttpClient) {}
  addVideo(VideoTitle: any, VideoDescription: any, VideoViews: any) {
    console.log(VideoTitle, VideoDescription, VideoViews);
    const obj = {
      VideoTitle,
      VideoDescription,
      VideoViews,
    };
    this.http
      .post(`${this.uri}`, obj)
      .subscribe((res) => console.log('Done'));
  }

  getVideo() {
    return this.http.get(`${this.uri}`);
  }

}
