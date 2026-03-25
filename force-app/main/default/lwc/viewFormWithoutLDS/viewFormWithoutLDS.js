import { LightningElement, api,wire } from 'lwc';
import { getRecord,getFieldValue } from 'lightning/uiRecordApi';
import CASE_NUMBER_FIELD from '@salesforce/schema/Case.CaseNumber';
import CASE_SUBJECT_FIELD from '@salesforce/schema/Case.Subject';
import CASE_STATUS_FIELD from '@salesforce/schema/Case.Status';
import CASE_PRIORITY_FIELD from '@salesforce/schema/Case.Priority';

const FIELDS = [CASE_NUMBER_FIELD, CASE_SUBJECT_FIELD, CASE_STATUS_FIELD, CASE_PRIORITY_FIELD];

export default class ViewFormWithoutLDS extends LightningElement {
    @api recordId;
    caseData;
    @wire(getRecord, { recordId: '$recordId', fields: FIELDS})
    case(data,error){
        if(data){
            this.caseData = data.data;
        }
        if(error){
            console.error('Error in fetching case data ',error);
        }
    };

    get caseNumber(){
        return getFieldValue(this.caseData,CASE_NUMBER_FIELD);
    }
    get caseSubject(){
        return getFieldValue(this.caseData,CASE_SUBJECT_FIELD);
    }
    get casePriority(){
        return getFieldValue(this.caseData,CASE_PRIORITY_FIELD);
    }
    get caseStatus(){
        return getFieldValue(this.caseData,CASE_STATUS_FIELD);
    }

}