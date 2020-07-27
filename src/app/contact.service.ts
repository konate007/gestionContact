import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Contact} from './contact';
import { Observable } from 'rxjs';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  url:string ='http://localhost:3000/contacts';

  contacts:Array<Contact>=new Array<Contact>();
  contact:Contact;
  constructor(private http:HttpClient) {
    
  }
  getAll():Observable<Array<Contact>>{
    return this.http.get<Array<Contact>>(this.url);
  }
  addContact(a:Contact){
    
    return this.http.post(this.url,a).subscribe(
      res=>console.log(res),
      err=>console.log(err)); 
  }
  deleteContact(a:any){
    const url1=this.url+"/"+a;
    this.http.delete(url1).subscribe(data =>{
      console.log("delete Request is successful",data);
    },
    error  => {

      console.log("Error", error);
      
      }
      
    );
  }
  updateContact(a:any,contact:Contact){
    const url1=this.url+"/"+a;
    this.http.put(url1,contact).subscribe(data =>{
      console.log("update Request is successful",data);
    },
    error  => {

      console.log("Error", error);
      
      }
    );
  }
}
