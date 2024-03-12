import { LightningElement,api } from 'lwc';

export default class ParentApiComp extends LightningElement {

    handlParentComp(){
        this.template.querySelector("c-api-demo-s-n").handlChildComp();
    }
}