import React from "react";
import { useCode } from "@/lib/context/CodeContext"; // Adjust the path as necessary

const CodeArea = () => {
  const { codeLines } = useCode();

  return (
    <div className="">
      <h4>Code:</h4>
      <pre className="bg-transparent p-2 rounded">
        {codeLines.map((line: any, index: any) => (
          <a key={index} className="rounded bg-blue-100 justify-center align-middle flex w-fit px-2"><span className="pr-2 text-lime-700">{index + 1}</span> {line}</a>
        ))}
      </pre>
    </div>  
  );
};

export default CodeArea;
