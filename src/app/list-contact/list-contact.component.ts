import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';
import {Contact} from '../contact'
@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent implements OnInit {
  newContact:any;
  contacts:Array<Contact>=new Array<Contact>();
  contact:Contact;
  addConatct(a){
    this.service.addContact(a);
  }
  
  constructor(private service:ContactService) { 
    
    
  }
  deleteContact(a:Contact,id:any){
    
    if(confirm("vous le vous supprimer"))
    {
      this.service.deleteContact(id);
      this.contacts.splice(this.contacts.indexOf(a),1);
    }
   
   
  }
  modifierContact(a:Contact)
  {
    this.contact=a;
  }
  ngOnInit() {
   
    this.service.getAll().subscribe(data=>this.contacts=data);
  }
  ngOnDestroy() { 
    this.service.contact=this.contact;
  }

}
