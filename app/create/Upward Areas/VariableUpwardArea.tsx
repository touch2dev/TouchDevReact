import React, { ChangeEvent, useState } from "react";
import { useCode } from "@/lib/context/CodeContext";
import { toast } from "react-toastify";

interface Variable {
  name: string;
  type: string;
}

const VariableUpwardArea = () => {
  const { variables, addVariable, editVariable, deleteVariable, addCodeLine } = useCode();
  const [newVariableName, setNewVariableName] = useState<string>("");
  const [newVariableType, setNewVariableType] = useState<string>("string");
  const [showInput, setShowInput] = useState<boolean>(false);
  const [selectedVariable, setSelectedVariable] = useState<string>("");
  const [variableValue, setVariableValue] = useState<string>("");
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [editVariableName, setEditVariableName] = useState<string>("");

  const handleAddVariable = () => {
    if (newVariableName.trim() !== "") {
      if (variables.some((variable) => variable.name === newVariableName)) {
        toast.error("Variable already assigned");
        return;
      }
      addVariable({ name: newVariableName, type: newVariableType });
      setNewVariableName("");
      setNewVariableType("string");
      setShowInput(false); // Hide input after adding the variable
    }
  };

  const handleEditVariable = (index: number) => {
    if (editVariableName.trim() !== "") {
      if (variables.some((variable) => variable.name === editVariableName)) {
        toast.error("Variable already assigned");
        return;
      }
      editVariable(index, editVariableName);
      setIsEditing(null);
      setEditVariableName("");
    }
  };

  const handleDeleteVariable = (index: number) => {
    deleteVariable(index);
  };

  const handleAddToCode = () => {
    if (selectedVariable) {
      addCodeLine(`set ${selectedVariable} = ${variableValue}`);
    }
  };

  const handleVariableChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedVariable(event.target.value);
  };

  const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setVariableValue(event.target.value);
  };

  return (
    <div className="container mx-auto">
      <div className="flex">
        <div className="flex-1 mr-4">
          <>
            <button
              className="bg-gray-500 text-white p-2 rounded"
              onClick={() => setShowInput(true)}
            >
              Make a Variable
            </button>
            {showInput && (
              <div className="mt-2">
                <input
                  type="text"
                  value={newVariableName}
                  onChange={(e) => setNewVariableName(e.target.value)}
                  className="p-1 border rounded"
                  placeholder="Enter variable name"
                />
                <select
                  value={newVariableType}
                  onChange={(e) => setNewVariableType(e.target.value)}
                  className="ml-2 p-1 border rounded"
                >
                  <option value="string">Text</option>
                  <option value="float">Number</option>
                    <option value="bool">True/False</option>
                    {/* <option value="list">List</option>
                    <option value="dict">Dictionary</option> */}
                  {/* Add more types as needed */}
                </select>
                <button
                  className="bg-blue-500 text-white p-1 ml-2 rounded mt-1"
                  onClick={handleAddVariable}
                >
                  Add
                </button>
              </div>
            )}
            <div id="variables" className="mt-2">
              <h3>Variables:</h3>
              <div className="overflow-y-auto max-h-24">
                {variables.map((variable, index) => (
                  <li key={index} className="flex items-center">
                    {isEditing === index ? (
                      <>
                        <input
                          type="text"
                          value={editVariableName}
                          onChange={(e) => setEditVariableName(e.target.value)}
                          className="p-1 border rounded text-s"
                          placeholder="Enter new variable name"
                        />
                        <button
                          className="bg-green-500 text-white p-1 ml-2 rounded text-xs"
                          onClick={() => handleEditVariable(index)}
                        >
                          Save
                        </button>
                        <button
                          className="bg-red-500 text-white p-1 ml-2 rounded text-xs"
                          onClick={() => {
                            setIsEditing(null);
                            setEditVariableName("");
                          }}
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        {variable.name}
                        <button
                          className="bg-yellow-500 text-white p-1 ml-2 rounded text-xs"
                          onClick={() => {
                            setIsEditing(index);
                            setEditVariableName(variable.name);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-500 text-white p-1 ml-2 rounded text-xs"
                          onClick={() => handleDeleteVariable(index)}
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </li>
                ))}
              </div>
            </div>
          </>
        </div>
        {!showInput && variables.length != 0 && (
          <div className="flex-1">
            {variables.length > 0 && (
              <div className="mt-4">
                <div className="flex items-center mt-2">
                  <select
                    className="p-1 border rounded"
                    onChange={handleVariableChange}
                    value={selectedVariable}
                  >
                    <option value="">Select Variable</option>
                    {variables.map((variable, index) => (
                      <option key={index} value={variable.name}>
                        {variable.name}
                      </option>
                    ))}
                  </select>
                  <span className="ml-2">=</span>
                  <input
                    type="text"
                    className="ml-2 p-1 border rounded"
                    placeholder="Enter value"
                    onChange={handleValueChange}
                  />
                </div>
              </div>
            )}
            <div className="mt-4">
              <button
                className="bg-green-500 text-white p-2 rounded mt-2"
                onClick={handleAddToCode}
              >
                Add Variable to Code
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VariableUpwardArea;
