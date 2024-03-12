import { LightningElement } from 'lwc';

export default class CallJsMethod extends LightningElement {

    name
    firstName
    lastName
    gender
    dob

    submitMethod(){
        console.log("from submit method")
       this.name = this.template.querySelector("lightning-input").value
      var allInputFields = this.template.querySelectorAll("lightning-input");
        allInputFields.forEach(element => {

            if(element.name == "firstName"){
                this.firstName = element.value
            }
            if(element.name == "lastName"){
                this.lastName = element.value
            }
            if(element.name == "gender"){
                this.gender = element.value
            }
            if(element.name == "dob"){
                this.dob = element.value
            }
            
        });
      
    }



}