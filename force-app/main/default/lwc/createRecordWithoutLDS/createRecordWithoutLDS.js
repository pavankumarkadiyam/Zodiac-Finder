import { LightningElement } from 'lwc';
import {createRecord} from 'lightning/uiRecordApi';

export default class CreateRecordWithoutLDS extends LightningElement {
    selectedAccount;
    subject;
    selectedContact;
    description;

    handleAccountChange(event) {
        this.selectedAccount = event.detail.recordId;
        
    }
    handleSubChange(event) {
        this.subject = event.detail.value;
        
    }
    handleContactChange(event) {
        this.selectedContact = event.detail.recordId;
    }
    handleDescription(event) {
        console.log(JSON.stringify(event.detail));
        this.description = event.detail.value;
    }

    async createCase(){
        
        const fields ={
            'AccountId': this.selectedAccount,
            'Subject': this.subject,
            'ContactId': this.selectedContact,
            'Description': this.description
        }
        try{
            const createdRec = await createRecord({apiName: 'Case', fields});
            window.alert('Created Case: ' + createdRec.fields.CaseNumber.value);
        }
        catch(error){
            window.alert('Error creating case: ' + error.body.message);
        }
    }
}