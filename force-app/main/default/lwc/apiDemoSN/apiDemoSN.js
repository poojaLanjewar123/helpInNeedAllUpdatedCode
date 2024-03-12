import { LightningElement, api } from 'lwc';

export default class ApiDemoSN extends LightningElement {

   @api fileName = "Child component";

   @api handlChildComp(){
       
    this.fileName = ("Parent lwc component");
   }

}