import { LightningElement } from 'lwc';

export default class RegistrationForm extends LightningElement {

    name 

    submitMethod(){
        
       this.name = this.template.querySelector('lightning-input').value
    }
}