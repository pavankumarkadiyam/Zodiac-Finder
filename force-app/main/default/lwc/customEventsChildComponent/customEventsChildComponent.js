import { LightningElement } from 'lwc';

export default class CustomEventsChildComponent extends LightningElement {
    productname;
    sendDataToParent(){
        this.productname ='iphone 14 pro max';

        const event = new CustomEvent('senddatatoparent',{
            detail: {
                       dataReceived : this.productname,
                       timestamp : new Date().toISOString(),
                       lastmodifiedby : 'John Doe'
                    }

        });

        this.dispatchEvent(event);
    }
}