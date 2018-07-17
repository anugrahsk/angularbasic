import { Component, OnInit } from '@angular/core';

import {ActivatedRoute,Router} from "@angular/router";
import { ApiService } from '../api.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
public view;
public singleinfo;
  constructor(public _route: ActivatedRoute,public router:Router,public api:ApiService) { }

  ngOnInit() {

    this.view = this._route.snapshot.params['url'];
    console.log (  this._route.snapshot.params['url']);
 
      

     this.api.singleinfo(this.view).subscribe(
      data =>{
        
        this .singleinfo = data;
        console.log(this.singleinfo);
      },
      error=>{
        console.log(error.errorMessage);
      }
    )
  }

}
