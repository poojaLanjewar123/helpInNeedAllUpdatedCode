import { LightningElement } from 'lwc';

export default class MethodeJSLwc extends LightningElement {

    firstName = 'var call in method'
    
    myFirstMethode1(){
        this.myMethode2
        console.log(this.myMethode2);
    }
    get myMethode2(){
        console.log("i am from method 2");
        return "retun output"
    }

    myMethode3(){
        console.log(this.firstName)
    }
}