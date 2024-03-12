import { LightningElement } from 'lwc';

export default class DecoretorsLwc extends LightningElement {

    abcd(){
        console.log('inside abcd method');
    }
    constructor(){
        super();
        console.log('inside constructor');
    }
    connectedCallback(){
        console.log('inside connected call back method');
    }
    renderedCallback(){
        console.log('inside rendered call back method');
    }
}