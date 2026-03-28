import { api, LightningElement } from 'lwc';

export default class EditRecordWithLightningRecordForm extends LightningElement {
    @api recordId;
    fields=["CaseNumber","Subject","Status","Origin"]
    objectApiName = 'Case';
    handleLoad(event){
        console.log("@this.recordId......"+this.recordId);
    }
}