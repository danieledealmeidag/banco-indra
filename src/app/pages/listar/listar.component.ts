import { Component, OnInit } from '@angular/core';
import { FormInfo } from 'src/app/contracts/formInfo';
import { StorageService } from 'src/app/services/storage.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  public lista: FormInfo[] = []
  cadStorageKey = 'cadList';

  constructor(
    public storageService: StorageService,
    public roteador: Router,
    public rota: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.carregar();
  }

  carregar(){
   this.lista = this.storageService.getData(this.cadStorageKey);
  }

}
