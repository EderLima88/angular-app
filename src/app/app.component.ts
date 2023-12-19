import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  title = 'angular-app';
  showFiller = false;
  isAuth:boolean=false;

  constructor(private shared: SharedService) {}


  ngOnInit(): void {
    this.shared.getUsername().subscribe((retorno: string)=>{
      if(retorno){
        this.isAuth=true;
        console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkk" + this.isAuth);
      }else{
        this.isAuth=false;console.log("oooooooooooooooooooooooooooo" + this.isAuth);
      }
    });
  }

}
