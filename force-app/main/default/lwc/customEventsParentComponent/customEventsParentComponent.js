import { LightningElement } from 'lwc';

export default class CustomEventsParentComponent extends LightningElement {
    dataReceived;

    handleChildData(event){
        console.log('@data received from child component', event.detail);
        this.dataReceived = event.detail;
    }
}