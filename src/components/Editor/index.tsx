import React, { Dispatch, FC, SetStateAction } from 'react';
import { Controlled as TextEditor } from 'react-codemirror2';
import 'codemirror/mode/javascript/javascript';

interface EditorProps {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
}

const Editor: FC<EditorProps> = ({ text, setText }) => {
  return (
    <TextEditor
      value={text}
      options={{
        lineNumbers: true,
        mode: 'javascript',
        theme: 'material',
        tabSize: 2,
      }}
      onBeforeChange={(editor, data, value) => {
        setText(value);
      }}
    />
  );
};

export default Editor;
