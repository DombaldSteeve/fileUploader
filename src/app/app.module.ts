import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploaderComponent } from './uploader/uploader.component';
import { HomeComponent } from './home/home.component';

//Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { ComprecupComponent } from './comprecup/comprecup.component';


@NgModule({
  declarations: [
    AppComponent,
    UploaderComponent,
    HomeComponent,
    ComprecupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFileUploaderModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
