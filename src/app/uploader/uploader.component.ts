import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {
  // File: any;

  // constructor(private http: HttpClient) { }

  // ngOnInit(): void {
  // }

  // onFileSelected(event: any) {
  //   this.File = <File>event.target.files[0];
  // }

  // onUpload() {
  //   const fd = new FormData();
  //   fd.append('video', this.File, this.File.name);
  //   this.http.post('https://us-central1-fb-cloud-functions-demo.cloudfunctions.net/uploadFile', fd, {
  //     reportProgress: true,
  //     observe: 'events',
  //   })
  //   .subscribe(res => {
  //     console.log(res);

  //   })
  // }

  /*------------------------------------------
  --------------------------------------------
  Declare Form
  --------------------------------------------
  --------------------------------------------*/
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.myForm.controls;
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  onFileChange(event:any) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file
      });
    }
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){
    const formData = new FormData();
    formData.append('file', this.myForm.get('fileSource')?.value);

    this.http.post('http://localhost:8001/upload.php', formData)
      .subscribe(res => {
        console.log(res);
        alert('Uploaded Successfully.');
      })
  }



}
