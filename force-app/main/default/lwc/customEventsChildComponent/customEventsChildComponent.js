import { LightningElement } from 'lwc';

export default class CustomEventsChildComponent extends LightningElement {
    productname;
    sendDataToParent(){
        this.productname ='iphone 14 pro max';

        const event = new CustomEvent('senddatatoparent',{
            detail: this.productname
        });

        this.dispatchEvent(event);
    }
}