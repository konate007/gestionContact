import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';
import { NgForm } from '@angular/forms';
import { Contact } from '../contact';
@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  vide1:any;
  vide2:any;
  vide3:any;
  vide4:any;

  contacts:Array<Contact>=new Array<Contact>();
  constructor(private service:ContactService) { }
  addConatct(myForm:NgForm){
    const prenom=myForm.value['prenom'];
    const nom=myForm.value['nom'];
    const numeroTel=myForm.value['numeroTel'];
    const email=myForm.value['mail'];
    
    let id=this.contacts[(this.contacts.length-1)].getId+1;
    this.service.addContact(new Contact(id,prenom,nom,numeroTel,email));
    this.vide1="";
    this.vide2="";
    this.vide3="";
    this.vide4="";
    alert("contact ajouter");
  }
  ngOnInit() {
    this.service.getAll().subscribe(data=>this.contacts=data);
  }

}
