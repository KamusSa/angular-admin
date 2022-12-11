import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsuario().then( usuario => {
      console.log(usuario);
      

    });

    // const promesa = new Promise( ( resolve, reject ) => {
    //   if (false){
    //     resolve('Hola, vengo de una promesa');} else {
    //     reject('Algo salio mal');}  
    // });
    // promesa.then ( (mensaje) => {
    //   console.log(mensaje); })
    // .catch( error => console.log('Error en la promesa', error) )
    // console.log('Fin del Init');
  }

  getUsuario(){

    return new Promise( resolve => {
      
      fetch('https://reqres.in/api/users')
      .then (resp => resp.json())
      .then ( body => resolve( body.data )
      )
    });
  

  }
}