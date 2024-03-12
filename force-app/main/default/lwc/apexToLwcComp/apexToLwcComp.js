import { LightningElement, wire} from 'lwc';
import accData from "@salesforce/apex/accController.accList";
//Hey this are new changes at 16:22 PM

export default class ApexToLwcComp extends LightningElement {
    //@wire(accData) accrecData;
    accRec;
    error;

    @wire(accData)
    wiredContacts({ error, data }) {
        if (data) {
            this.accRec = data;
            this.error = undefined;
          } else if (error) {
            console.log('inside error '+JSON.stringify(error));
            this.error = error;
            this.accRec = undefined;
          }
    }

}