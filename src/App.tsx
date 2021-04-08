import React, { useState } from 'react';
import Editor from './components/Editor';
import Preview from './components/Editor/Preview';

const App = () => {
  const [input, setInput] = useState('');
  const [ouput, oinput] = useState('');
  return (
    <div>
      <h1>Make JS</h1>
      <Editor text={input} setText={setInput} />
      <Preview input={input} />
    </div>
  );
};

export default App;
