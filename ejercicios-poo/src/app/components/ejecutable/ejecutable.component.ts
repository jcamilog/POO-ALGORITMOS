import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejecutable',
  templateUrl: './ejecutable.component.html',
  styleUrls: ['./ejecutable.component.css']
})
export class EjecutableComponent implements OnInit {
  public ingresar: string;
  public retirar: number;

  constructor() { }

  ngOnInit(): void {
  }

}
