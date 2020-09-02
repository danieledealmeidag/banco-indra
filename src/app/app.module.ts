import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { FormComponent } from './pages/form/form.component';

import { LoginService } from './services/login.service';
import { StorageService } from './services/storage.service';
import { PrincipalComponent } from './pagina/principal/principal.component';
import { ListarComponent } from './pages/listar/listar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    FormComponent,
    PrincipalComponent,
    ListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    LoginService,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
