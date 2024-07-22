"use client";

import React, { useState, useCallback } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

const CodeEditor: React.FC = () => {
    const [code, setCode] = useState<string>('const a = 5;\n' +
        'const b = 10;\n' +
        'a + b');
    const [result, setResult] = useState<string | null>(null);


    const runCode = () => {
        try {
            // Use eval with caution. It is important to handle code execution safely.
            const output = eval(code);
            setResult(String(output));
        } catch (error) {
            setResult(`Error: ${error.message}`);
        }
    };

    return (
        <div className="flex h-screen">
            <div className="relative flex-1 p-4">
                <CodeMirror
                    value={code}
                    height="200px"
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value) => setCode(value)}
                />
                <button
                    className="absolute top-4 right-4 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
                    onClick={runCode}
                >
                    Run Code
                </button>
            </div>
            <div className="flex-1 p-4 bg-gray-100 border-l border-gray-300">
                <pre className="whitespace-pre-wrap break-words">{result}</pre>
            </div>
        </div>
    );
};

export default CodeEditor;
