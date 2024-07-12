import React, { createContext, useContext, useState } from "react";

interface Variable {
  name: string;
  type: string;
}

interface CodeContextType {
  codeLines: string[];
  variables: Variable[];
  addVariable: (variable: Variable) => void;
  editVariable: (index: number, newName: string) => void;
  deleteVariable: (index: number) => void;
  addCodeLine: (codeLine: string) => void;
}

const CodeContext = createContext<CodeContextType | undefined>(undefined);

export const CodeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [variables, setVariables] = useState<Variable[]>([]);
  const [codeLines, setCodeLines] = useState<string[]>([]);

  const addVariable = (variable: Variable) => {
    setVariables((prev) => [...prev, variable]);
  };

  const editVariable = (index: number, newName: string) => {
    setVariables((prev) =>
      prev.map((variable, i) =>
        i === index ? { ...variable, name: newName } : variable
      )
    );
  };

  const deleteVariable = (index: number) => {
    setVariables((prev) => prev.filter((_, i) => i !== index));
  };

  const addCodeLine = (codeLine: string) => {
    setCodeLines((prev) => [...prev, codeLine]);
  };

  return (
    <CodeContext.Provider value={{ codeLines, variables, addVariable, editVariable, deleteVariable, addCodeLine }}>
      {children}
    </CodeContext.Provider>
  );
};

export const useCode = () => {
  const context = useContext(CodeContext);
  if (!context) {
    throw new Error("useCode must be used within a CodeProvider");
  }
  return context;
};
