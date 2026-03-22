import { LightningElement } from 'lwc';

export default class LightningDataServiceComponent extends LightningElement {
    recordId = '500gK00000XVPbqQAH';
    objectApiName = 'Case'
    fields = ['CaseNumber','ContactEmail','Subject','Status','Priority'];
}