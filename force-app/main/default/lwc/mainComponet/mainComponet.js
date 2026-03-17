import { LightningElement } from 'lwc';

export default class MainComponet extends LightningElement {
    hello = 'Hello World';
    callParentMethod(){
        this.template.querySelector('c-parent-component').handleCallParentComponent();
    }
}