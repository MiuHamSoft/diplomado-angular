import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './common/home/home.component';
import { LoginComponent } from './common/login/login.component';
import { ConditionalsComponent } from './examples/conditionals/conditionals.component';
import { GeneralComponent } from './examples/general/general.component';
import { FilesComponent } from './general/files/files.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'ejemplos',
    children: [
      {
        path: 'condicionales',
        component: ConditionalsComponent
      },
      {
        path: 'generales',
        component: GeneralComponent
      },
      {
        path: 'archivos',
        component: FilesComponent
      },
      {
        path: '',
        redirectTo: '/ejemplos/condicionales',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
