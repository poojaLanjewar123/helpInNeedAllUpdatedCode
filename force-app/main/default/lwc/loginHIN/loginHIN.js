import { LightningElement } from 'lwc';
import loginHin from "@salesforce/apex/hinLoginClass.login";

export default class LoginHIN extends LightningElement {

    email;
    password;

    handleusername(event){
        this.email = event.target.value;
    }
    handlePasswordChange(event){
        this.password=event.target.value;
    }
    handlelogin(){
        loginHin({
            userName:this.email, password:this.password
        }).then(res=>{
            console.log('result   '+res);
        }).catch(err=>{
            console.log('error   '+err);
        });
        console.log("Inside Login");
        console.log("Email Value: ",this.email);
        console.log("Password: ",this.password);
    }
}