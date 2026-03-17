import { LightningElement,track } from 'lwc';
import { ZodiacUtil } from './zodiacUtil';

export default class KnowYourZodiac extends LightningElement {
    showZodiac = false;
    userName;
    userDateOfBirth;
    zodiacSign;
    zodiacTrait;
    @track zodiacProfile = {};

    connectedCallback() {
        // Component initialized
    }

    handleDateChange(event) {
        this.userDateOfBirth = event.target.value;
    }

    handleNameChange(event) {
        this.userName = event.target.value;
    }

    getZodiacDetails() {
        if (!this.userName || !this.userDateOfBirth) {
            return;
        }
        const userDateOfBirth = new Date(this.userDateOfBirth);
        const month = userDateOfBirth.getMonth() + 1; // getMonth() returns 0-11
        const day = userDateOfBirth.getDate();

        this.zodiacProfile = ZodiacUtil.getZodiacByDate(month, day);
        if (this.zodiacProfile) {
            this.showZodiac = true;
            this.zodiacSign = this.zodiacProfile.name;
            this.zodiacTrait = this.zodiacProfile.trait;
        }
    }
}
