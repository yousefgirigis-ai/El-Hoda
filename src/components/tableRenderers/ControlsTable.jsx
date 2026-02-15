import React from "react";
import HighlightText from "../HighlightText";

const ControlsTable = ({ controls, searchTerm }) => {
  if (!controls || controls.length === 0) return null;

  return (
    <div className="mt-4 overflow-x-auto">
      <table className="min-w-full text-sm border border-gray-200 rounded-lg">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left font-semibold text-gray-700 border-b">
              Product Name
            </th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700 border-b">
              Catalog Number
            </th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700 border-b">
              Control Level
            </th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700 border-b">
              Reagent Form
            </th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700 border-b">
              Pack Size
            </th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700 border-b">
              Shelf Life
            </th>
          </tr>
        </thead>
        <tbody>
          {controls.map((control, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td className="px-4 py-2 border-b text-gray-800 font-medium">
                <HighlightText
                  text={control.productName}
                  searchTerm={searchTerm}
                />
              </td>
              <td className="px-4 py-2 border-b text-gray-600 font-mono text-xs">
                <HighlightText
                  text={control.catalogNumber}
                  searchTerm={searchTerm}
                />
              </td>
              <td className="px-4 py-2 border-b text-gray-700">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    control.controlLevel === "Normal"
                      ? "bg-green-100 text-green-800"
                      : control.controlLevel === "Low"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  <HighlightText
                    text={control.controlLevel}
                    searchTerm={searchTerm}
                  />
                </span>
              </td>
              <td className="px-4 py-2 border-b text-gray-700">
                <HighlightText
                  text={control.reagentForm}
                  searchTerm={searchTerm}
                />
              </td>
              <td className="px-4 py-2 border-b text-gray-700">
                <HighlightText
                  text={control.packSize}
                  searchTerm={searchTerm}
                />
              </td>
              <td className="px-4 py-2 border-b text-gray-700">
                <HighlightText
                  text={control.shelfLife}
                  searchTerm={searchTerm}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ControlsTable;
