import { LightningElement } from 'lwc';
import TIME_ZONE from '@salesforce/i18n/timeZone';

export default class CustomEventsParentComponent extends LightningElement {
    dataReceived;
    timestamp;
    lastmodifiedby;
    hasRecieved = false;
    timeZone = TIME_ZONE;

    handleChildData(event){
        console.log('@data received from child component',JSON.stringify( event.detail));
        this.dataReceived = event.detail.dataReceived;
        this.timestamp = event.detail.timestamp;
        this.lastmodifiedby = event.detail.lastmodifiedby;
        this.hasRecieved = true;
    }
}