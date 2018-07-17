import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) { }


    public today;
    public currentBlog;
    baseUrl='https://anapioficeandfire.com/api';
  
    
    
  
    getdata()
    {
     return this.http.get(this.baseUrl);
    }
  
  
   
  
    public getinfo():any{
  
      return this.http.get(this.baseUrl+'/books')  
    
  
      }
     
      public singleinfo(id):any{
       return this.http.get(id);
     }
  
  
     public sendedit1():any{
       return this.http.get(this.baseUrl+'/books');
     }
  
     public sendedit2():any{
      return this.http.get(this.baseUrl+'/houses');
    }
  
    public sendedit3():any{
      return this.http.get(this.baseUrl+'/characters')
    }
  

}
