import { Component, OnInit } from '@angular/core';
import { Salesperson } from '../salesperson';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  name : string = "Prakhar";

  s1 : Salesperson = new Salesperson("Prakhar","Gupta","guptaprakhar1010@gmail.com",25000,"300");

  list : Salesperson [] = [
                          new Salesperson("Shreeja","shri","srejja@gmail.com",10000,"300"),
                          new Salesperson("RATAN","GUPTA","ratan@gmail.com",500000,"500"),
                          new Salesperson("RAM","KISHNA","ram@gmail.com",600000,"400"),
                          new Salesperson("RAMAN","KAPOOR","raman@gmail.com",15000,"200")
                        
                        ]


formModel : Salesperson = new Salesperson("","","",0,"");

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.formModel);
    this.list.push(this.formModel);
    
  }

}
