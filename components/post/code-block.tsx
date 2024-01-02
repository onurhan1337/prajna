import "prismjs/themes/prism-tomorrow.css";

import Refractor from "react-refractor";
import js from "refractor/lang/javascript";
import ts from "refractor/lang/typescript";
import jsx from "refractor/lang/jsx";
import { CopyButton } from "./copy-button";

Refractor.registerLanguage(js);
Refractor.registerLanguage(jsx);
Refractor.registerLanguage(ts);

type codeTypes = {
  value: {
    code: string;
    key: string;
    language: string;
    filename?: string;
  };
};

export default function CodeBlock({ value }: codeTypes) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg my-4">
      <div className="flex items-center justify-between px-6 py-4 bg-stone-900 text-white">
        <div className="font-bold text-md text-stone-200">{value.filename}</div>
        <CopyButton text={value.code} />
      </div>
      <div className="px-6 py-4 bg-stone-800 text-white">
        <Refractor
          language={value.language}
          value={value.code}
          key={value.key}
        />
      </div>
    </div>
  );
}
