import { LightningElement, track, wire} from 'lwc';
import { getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';

export default class PicklistValuesByRecordType extends LightningElement {
    @track value;
    @track options;

    @wire(getPicklistValuesByRecordType, { objectApiName: 'Bank__c', recordTypeId: '0125j0000022FpXAAU' }) 
    BranchPicklistValues({error, data}) {
        if(data) {
            this.options = data.picklistFieldValues.Branch__c.values;
            console.log('picklist values '+JSON.stringify(data))
        }
        else if(error) {
            window.console.log('error =====> '+JSON.stringify(error));
        }
    }

    handleChange(event) {
        this.value = event.target.value;
    }
}