import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Login } from '../contracts/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private storage: StorageService) { }

  saveLogin(key: string, obj: Login){
    this.storage.setData(key, obj);
    
  }

}
