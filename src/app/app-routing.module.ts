import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProtofolioComponent } from './protofolio/protofolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full",title:"home"},
  {path:"home",component:HomeComponent,title:"home"},
  {path:"about",component:AboutComponent,title:"about"},
  {path:"protofolio",component:ProtofolioComponent,title:"protofolio"},
  {path:"contact",component:ContactComponent,title:"contact"},
  {path:"**",component:NotFoundComponent,title:"pageNotFound"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
