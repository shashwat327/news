import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubcontentComponent } from './subcontent/subcontent.component';
import { IndiaComponent } from './india/india.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormComponent } from './form/form.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomepageComponent,
    children: []
  },
  {
    path: 'india',
    pathMatch: 'full',
    component: IndiaComponent,
    children: []
  },
  {
    path: 'sub',
    pathMatch: 'full',
    component: SubcontentComponent,
    children: []
  },
  {
    path: 'form',
    pathMatch: 'full',
    component: FormComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
