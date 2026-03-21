import { LightningElement } from 'lwc';

export default class LifecycleHooksParentComponent extends LightningElement {

    constructor(){
        super();
        console.log('@LifeCycleHooks Parent Constructor loaded');
    }

    connectedCallback(){
        console.log('@LifeCycleHooks Parent Connected Callback loaded');
    }

    renderedCallback(){
        console.log('@LifeCycleHooks Parent Rendered Callback loaded');
    }

    disconnectedCallback(){
        console.log('@LifeCycleHooks Parent Disconnected Callback loaded');
    }
    errorCallback(error, stack){
        console.log('@LifeCycleHooks: '+error.message+'-------'+stack);
    }
}