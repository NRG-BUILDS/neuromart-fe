// Code Editor Component
import Editor from '@monaco-editor/react';

const CodeEditor = () => {
  const handleEditorChange = (value: string | undefined) => {
    console.log('Code:', value);
  };
  return (
    <>
      <div style={{ height: '500px' }}>
        <Editor
          height="500px"
          defaultLanguage="python"
          defaultValue="// Start coding!"
          onChange={handleEditorChange}
          theme="vs-dark"
        />
      </div>
    </>
  );
};

export default CodeEditor;
