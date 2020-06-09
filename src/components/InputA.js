import React, { Component } from 'react';

import { useRecoilState } from 'recoil';
import { inputValueState } from '../store';

class InputA extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const [value,setValue] = useRecoilState(inputValueState);
        return(
            <input value={value} onChange={e => setValue(e.target.value)} />
        )
    }
}

// const InputA = () => {
//     const [value,setValue] = useRecoilState(inputValueState);
//     return <input value={value} onChange={e => setValue(e.target.value)}/>
// }

export default InputA;