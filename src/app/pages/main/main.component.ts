import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public imagePath = '/assets/logo.png';
  constructor(public roteador: Router,
    public rota: ActivatedRoute) { }

  ngOnInit(): void {
  }


}
