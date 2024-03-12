import { LightningElement } from 'lwc';
import apexMethod from "@salesforce/apex/InsertAccRecord.insertApexMethod";

export default class AccountRecInsert extends LightningElement {
    nameVar;
    phoneVar;
    industryVar;
    nameField1(event){
        this.nameVar= event.target.value;
    }
    phoneField2(event){
        this.phoneVar= event.target.value;
    }
    industryField3(event){
        this.industryVar= event.target.value;
    }
    accInsertButton(){
        var accObj = {};
        accObj.Name = this.nameVar;
        accObj.Phone = this.phoneVar;
        accObj.Industry = this.industryVar;
        JSON.stringify(accObj);
        apexMethod({
            accRec : accObj
        }).then(res=>{
            console.log('Account Record successfully Inserter '+JSON.stringify(res));
        }).chatch(err=>{
            console.log('Account Record successfully Inserter '+JSON.stringify(err));
        });
    }
}