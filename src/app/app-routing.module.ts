import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UploaderComponent } from './uploader/uploader.component';

const routes: Routes = [

  // { path: "redirectBtn", component: AppComponent },
  { path: "uploader/:id/:token", component: UploaderComponent },
  { path: "uploader", component: UploaderComponent },
  { path: "", redirectTo:"/uploader", pathMatch: "full" }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
