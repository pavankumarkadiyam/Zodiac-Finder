import { LightningElement,api } from 'lwc';

export default class ParentComponent extends LightningElement {

    amICalled = false;
    @api parentHello;
    @api handleCallParentComponent(){
        this.amICalled = true;
    }
}