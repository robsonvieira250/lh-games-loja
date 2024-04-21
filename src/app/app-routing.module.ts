import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Componente1Component } from './componente1/componente1.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'inicio', component:Componente1Component},
  {path:'login', component:LoginComponent},
  {path:'',redirectTo:'/inicio',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
