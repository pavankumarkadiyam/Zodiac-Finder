import { LightningElement,api } from 'lwc';
import CASE_NUMBER_FIELD from '@salesforce/schema/Case.CaseNumber';
import CONTACT_EMAIL_FIELD from '@salesforce/schema/Case.ContactEmail';
import SUBJECT_FIELD from '@salesforce/schema/Case.Subject';
import STATUS_FIELD from '@salesforce/schema/Case.Status';
import PRIORITY_FIELD from '@salesforce/schema/Case.Priority';

export default class LightningDataServiceComponent extends LightningElement {
    cardTiltle;
    isLightningFormEnabled = false;
    isLightningViewFormEnabled = false;
    @api recordId;
    objectApiName = 'Case'
    fields = [CASE_NUMBER_FIELD.fieldApiName,CONTACT_EMAIL_FIELD.fieldApiName,SUBJECT_FIELD.fieldApiName,STATUS_FIELD.fieldApiName,PRIORITY_FIELD.fieldApiName];
    caseNumber = 'CaseNumber';

    handleShowLightningForm(){
        this.cardTiltle = 'Lightning Record Form';
        this.isLightningFormEnabled = true;
        this.isLightningViewFormEnabled = false;
    }
    handleShowLightningViewForm(){
        this.cardTiltle = 'Lightning Record View Form';
        this.isLightningFormEnabled = false;
        this.isLightningViewFormEnabled = true;
    }
}