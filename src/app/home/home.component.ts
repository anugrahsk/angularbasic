import { Component, OnInit } from '@angular/core';


import { ApiService } from '../api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public api:ApiService) { }
  public view;
  public edit1;
  public edit2;
  public edit3;

  ngOnInit() {

   
     
    this.api.sendedit1().subscribe(
      data =>{
        
        this .edit1 = data;
        console.log(this.edit1);
      },
      error=>{
        console.log(error.errorMessage);
      }
    )



     
    this.api.sendedit2().subscribe(
      data =>{
        
        this .edit2 = data;
        console.log(this.edit2);
      },
      error=>{
        console.log(error.errorMessage);
      }
    )

    
    this.api.sendedit3().subscribe(
      data =>{
        
        this .edit3 = data;
        console.log(this.edit3);
      },
      error=>{
        console.log(error.errorMessage);
      }
    )

    

    


  }

}
