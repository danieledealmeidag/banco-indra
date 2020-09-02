import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { FormInfo } from '../../contracts/formInfo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public nome: string;
  public cpf: string;
  public celular: string;
  public email: string;
  public nascimento: string;
  public senha: string;
  public resenha: string;
  public termos: boolean;
  public notificacao: boolean;
  public lista: FormInfo[] = [];
  public formInfo: FormInfo;

  cadStorageKey = 'cadList';

  constructor(public storageService: StorageService,public roteador: Router) { }

  ngOnInit(): void {
    
  }

  salvar(valor){
    this.preencherObj();
    this.carregar();
    this.lista.push(this.formInfo);
    this.storageService.setData(this.cadStorageKey, this.lista);

    setTimeout( () => {
      this.roteador.navigate(['/listar']);
  }, 1500 );

  }

  carregar(){
    this.lista = this.storageService.getData(this.cadStorageKey);
   }

  preencherObj() {
    this.formInfo = new FormInfo;
    this.formInfo.nome = this.nome;
    this.formInfo.cpf = this.cpf;
    this.formInfo.email = this.email;
    this.formInfo.nascimento = this.nascimento;
    this.formInfo.celular = this.celular;
    this.formInfo.senha = this.senha;
    this.formInfo.resenha = this.senha;
    this.formInfo.termos = this.termos;
    this.formInfo.notigicacao = this.notificacao;

  }

}
