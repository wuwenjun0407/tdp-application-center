import { Directive } from 'vue';
export const focus: Directive = {
    mounted(el: HTMLInputElement) {
        (el.querySelector('input') as HTMLInputElement).focus();
    }
};
