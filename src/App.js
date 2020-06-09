import React from 'react';
import './App.css';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import InputA from './components/InputA';
import InputB from './components/InputB';

function App() {
  return (
    <RecoilRoot>
      <h1>Input A</h1>
      <InputA />
      <br />
      <h1>Input B</h1>
      <InputB />
    </RecoilRoot>
  );
}

export default App;
