import { atom } from 'recoil';

const inputValueState = atom({
    key: 'inputValue',
    default: ''
})

export { inputValueState };