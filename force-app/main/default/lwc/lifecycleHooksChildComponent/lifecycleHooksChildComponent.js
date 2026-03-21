import { LightningElement } from 'lwc';

export default class LifecycleHooksChildComponent extends LightningElement {

    constructor(){
        super();
        console.log('@LifeCycleHooks Child Constructor loaded');
    }

    connectedCallback(){
        console.log('@LifeCycleHooks Child Connected Callback loaded');
    }

    renderedCallback(){
        console.log('@LifeCycleHooks Child Rendered Callback loaded');
    }

    disconnectedCallback(){
        console.log('@LifeCycleHooks Child Disconnected Callback loaded');
    }
    errorCallback(error, stack){
        console.log('@LifeCycleHooks Child: '+error.message+'-------'+stack);
    }
}