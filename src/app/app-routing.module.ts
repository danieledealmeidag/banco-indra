import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { FormComponent } from './pages/form/form.component';
import { ListarComponent } from './pages/listar/listar.component';
 
const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'index', component: LoginComponent},
  {path: 'cadastro', component: FormComponent},
  {path: 'listar', component: ListarComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
