import { LightningElement } from 'lwc';
import createNewRecord from "@salesforce/apex/AccountProvider.createNewRecord";

export default class AccCreateLwc extends LightningElement {

    objAccount = { "sobjectType" : "Account" }

    createAcc(){
        
        this.objAccount.Name = this.template.querySelector('lightning-input[data-formfield ="AccountName"]').value;
        console.log(this.objAccount.name)
        console.log('ur in createAcc method')
    }
}