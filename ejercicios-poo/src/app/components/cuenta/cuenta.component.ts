import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent implements OnInit {
  public titular: string;
  public cantidad?: number;
  public ingresar: number;
  public retirar: number;
  constructor(titular: string, cantidad?: number) {
    this.titular = titular;
    this.cantidad = cantidad;
  }
  getTitular(){
    return this.titular
  }
  setCantidad(){
    return this.cantidad
  }

  ngOnInit(): void {
  }
}
const validacion = (ingresar: number, retirar: number ) =>{
  if(ingresar < 0){
    console.log("Error")
  }else if (retirar <= 0) {
    console.log("error")
  }else{
    console.log("exito")
  }
  return validacion
}
