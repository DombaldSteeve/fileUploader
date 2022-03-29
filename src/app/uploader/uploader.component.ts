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
    formatsAllowed: '.mp4, .avi',
    maxSize: 1,
    autoUpload: false,
    uploadAPI: {
      url: 'https://slack.com/api/files.upload',
      method:"POST",
    },
    replaceTexts: {
      selectFileBtn: 'Selectionner document',
      resetBtn: 'Réinitialiser',
      uploadBtn: 'Télécharger',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Attach Files...',
      afterUploadMsg_success: 'Téléchargé avec succès !',
      afterUploadMsg_error: 'Le téléchargement a échoué !',
      sizeLimit: 'Taille limite'
    }
  };

}
