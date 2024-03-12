import { LightningElement } from 'lwc';
import createAccountRecord from "@salesforce/apex/AccountProvider.createAccountRecord";

export default class CreateAccountRecordLWC extends LightningElement {

    objAccount = {'sobjectType' : 'Account'}
   

    saveButtonHandler(){
        this.objAccount.Name = this.template.querySelector('lightning-input[data-formfield="accountName"] ').value;
        this.objAccount.Type = this.template.querySelector('lightning-input[data-formfield="accountType"] ').value;
        console.log(this.objAccount.Name);
        console.log(this.objAccount.Type);

        createAccountRecord({ objAcc : this.objAccount})
      .then((result) => {
        this.result = result;
        this.error = undefined;
    })
    .catch((error) => {
        this.error = error;
        this.result = undefined;
    });
  

    
    }
}