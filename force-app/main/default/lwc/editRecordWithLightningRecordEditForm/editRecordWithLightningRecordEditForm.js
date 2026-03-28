import { api, LightningElement } from 'lwc';

export default class EditRecordWithLightningRecordEditForm extends LightningElement {
    @api recordId;
    fields = ["CaseNumber", "Subject", "Status", "Origin","Account"];
    objectApiName = 'Case';
}