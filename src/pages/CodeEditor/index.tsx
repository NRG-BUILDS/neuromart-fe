// Code Editor Component
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Editor from '@monaco-editor/react';
import { useState } from 'react';

const CodeEditor = () => {
  const [editorLanguage, setEditorLanguage] = useState('python');
  const [tab, setTab] = useState('editor');
  const handleEditorChange = (value: string | undefined) => {
    console.log('Code:', value);
  };
  return (
    <>
      <main className="p-4">
        <div className="flex flex-col lg:flex-row justify-start lg:justify-between gap-4 mb-4">
          <Select
            defaultValue={editorLanguage}
            onValueChange={(e) => setEditorLanguage(e)}
          >
            <SelectTrigger className="w-fit bg-primary text-white rounded-full">
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="python">Python</SelectItem>
              <SelectItem value="javascript">Javascript</SelectItem>
              <SelectItem value="rust">Rust</SelectItem>
              <SelectItem value="go">Go</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex items-center justify-between w-full lg:w-auto lg:justify-start gap-2 text-sm">
            <div className="flex bg-secondary rounded-full p-0.5">
              <Button
                onClick={() => setTab('editor')}
                data-state={tab === 'editor' ? 'active' : 'inactive'}
                className="bg-transparent data-[state=active]:bg-purple-500"
              >
                Code Editor
              </Button>
              <Button
                onClick={() => setTab('output')}
                data-state={tab === 'output' ? 'active' : 'inactive'}
                className="bg-transparent lg:-ml-3 data-[state=active]:bg-purple-500"
              >
                Output
              </Button>
            </div>
            <Button
              onClick={() => setTab('output')}
              data-state={tab === 'output' ? 'active' : 'inactive'}
              className=""
            >
              Run
            </Button>
          </div>
        </div>
        <div
          style={{ minHeight: '500px' }}
          className="lg:rounded-2xl overflow-clip border border-white/30"
        >
          {tab === 'editor' ? (
            <Editor
              height="500px"
              defaultLanguage={editorLanguage}
              defaultValue="// Start coding!"
              onChange={handleEditorChange}
              theme="vs-dark"
            />
          ) : (
            <div className="flex items-center justify-center">
              <p>Output goes here </p>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default CodeEditor;
