export class Contact {
    constructor(private id:number,private prenom:string,private nom:string,private numeroTel:string,private email:string){}
    get getPrenom():string{return this.prenom}
    get getNom():string{return this.nom}
    get getNumeroTel():string{return this.numeroTel}
    get getmail():string{return this.email}
    get  getId():number{return this.id;}
    set setNom(nom : string) { this.nom = nom;}
    set setPrenom(prenom : string) { this.prenom = prenom;}
    set setNumeroTel(numeroTel : string) { this.numeroTel = numeroTel;}
    set setEmail(email : string) { this.email = email;}


}
