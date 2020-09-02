import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Login } from '../../contracts/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public agenciaF: string;
  public contaF: string;

  loginStorageKey = 'ACC';

  constructor(
    public roteador: Router,
    public rota: ActivatedRoute,
    public loginService: LoginService,
    ) {}

  ngOnInit(): void {
  }

  salvar(valor){
    console.log(valor);
    this.loginService.saveLogin(this.loginStorageKey, valor);

    setTimeout( () => {
        this.roteador.navigate(['/index']);
    }, 1500 );
  }

}
