import { Component, Input } from '@angular/core';
import { SharedService } from '../../shared/shared.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
@Input() Drawer: any;
usuarioLogado: string = "";

constructor(private shared: SharedService){
  shared.getUsername().subscribe((retorno: string)=>{
    this.usuarioLogado=retorno;
  })
}

public showMenu() {
  this.Drawer.toggle();
}

}
