import React from "react";
import HighlightText from "../HighlightText";

const MultiPanelTestsTable = ({ models, searchTerm }) => {
  if (!models || models.length === 0) return null;

  return (
    <div className="mt-4 overflow-x-auto">
      <table className="min-w-full text-sm border border-gray-200 rounded-lg">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left font-semibold text-gray-700 border-b">
              Catalog No.
            </th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700 border-b">
              Product Name
            </th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700 border-b">
              Panel Configuration
            </th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700 border-b">
              Analyte List
            </th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700 border-b">
              Specimen Type
            </th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700 border-b">
              Kit Format
            </th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700 border-b">
              Package Size
            </th>
          </tr>
        </thead>
        <tbody>
          {models.map((model, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td className="px-4 py-2 border-b text-gray-600 font-mono text-xs">
                <HighlightText text={model.catalog} searchTerm={searchTerm} />
              </td>
              <td className="px-4 py-2 border-b text-gray-800 font-medium">
                <HighlightText text={model.model} searchTerm={searchTerm} />
              </td>
              <td className="px-4 py-2 border-b text-gray-700">
                <HighlightText
                  text={model.specs?.panelConfiguration || "-"}
                  searchTerm={searchTerm}
                />
              </td>
              <td className="px-4 py-2 border-b text-gray-700">
                <div className="max-w-xs text-xs">
                  <HighlightText
                    text={model.specs?.analyteList || "-"}
                    searchTerm={searchTerm}
                  />
                </div>
              </td>
              <td className="px-4 py-2 border-b text-gray-700">
                <HighlightText
                  text={model.specs?.specimenType || "-"}
                  searchTerm={searchTerm}
                />
              </td>
              <td className="px-4 py-2 border-b text-gray-700">
                <HighlightText
                  text={model.specs?.kitFormat || "-"}
                  searchTerm={searchTerm}
                />
              </td>
              <td className="px-4 py-2 border-b text-gray-700">
                <HighlightText
                  text={model.specs?.packageSize || "-"}
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

export default MultiPanelTestsTable;
