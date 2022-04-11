import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comprecup',
  templateUrl: './comprecup.component.html',
  styleUrls: ['./comprecup.component.css']
})
export class ComprecupComponent implements OnInit {

  @Input() token!: string;
  @Input() video: number = 0;


  ngOnInit(): void {
    console.log('token : ' + this.token);
    console.log('vidéo : ' + this.video);

  }

  
}
