import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modification',
  templateUrl: './modification.component.html',
  styleUrls: ['./modification.component.css']
})
export class ModificationComponent implements OnInit {
  contacts:Array<Contact>=new Array<Contact>();
  contact:Contact;
  
  p1:any;
  p2:any;
  p3:any;
  p4:any;
  id:any;

  constructor(private service:ContactService) { }
  update(myForm:NgForm,id:any){
    const prenom=myForm.value['prenom'];
    const nom=myForm.value['nom'];
    const numeroTel=myForm.value['numeroTel'];
    const email=myForm.value['mail'];
    this.service.updateContact(id,new Contact(id,prenom,nom,numeroTel,email));
    alert("contact modifier");
    
  }
  
  ngOnInit() {
    this.contact=this.service.contact;
    this.service.getAll().subscribe(data=>this.contacts=data);
  }

}
