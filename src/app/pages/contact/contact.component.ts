import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
   nome: String;
   email: String;
   mensagem: String

   constructor(){
    this.nome = "";
    this.email = "";
    this.mensagem = "";
   }

  enviarFormulario():void{
   console.log(this.nome);
   console.log(this.email);
   console.log(this.mensagem);
  }

}
