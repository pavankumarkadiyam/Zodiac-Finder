import { LightningElement } from 'lwc';
import{NavigationMixin} from 'lightning/navigation';
export default class NavigationMixinComponent extends NavigationMixin(LightningElement) {

    handleWebPage(){
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'https://www.salesforce.com'
            }
        });
    }
    handleRecordPage(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '500gK00000kfIg1QAE',
                objectApiName: 'Case',
                actionName: 'edit'
            }
        });
    }
    handleNavItemPage(){
        this[NavigationMixin.Navigate]({
            type:'standard__navItemPage',
            attributes:{
                apiName: 'Cases'
            }
        });
    }
    handleObjectPage(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes:{
                objectApiName: 'Case',
                actionName:'list'
                
            },
            state: {
                filtername:'AllOpenCases' 
            }
        })

    }
}