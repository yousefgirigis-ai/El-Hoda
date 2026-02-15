import React from "react";
import HighlightText from "../HighlightText";

const FullAutomationTable = ({ models, searchTerm }) => {
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
              R1 Volume
            </th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700 border-b">
              R2 Volume
            </th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700 border-b">
              Tests/Kit
            </th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700 border-b">
              μl/Test
            </th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700 border-b">
              Stability
            </th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700 border-b">
              Shelf Life
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
                  text={model.specs?.r1Volume}
                  searchTerm={searchTerm}
                />
              </td>
              <td className="px-4 py-2 border-b text-gray-700">
                <HighlightText
                  text={model.specs?.r2Volume}
                  searchTerm={searchTerm}
                />
              </td>
              <td className="px-4 py-2 border-b text-gray-700">
                <HighlightText
                  text={model.specs?.testsPerKit}
                  searchTerm={searchTerm}
                />
              </td>
              <td className="px-4 py-2 border-b text-gray-700">
                <HighlightText
                  text={model.specs?.ulPerTest}
                  searchTerm={searchTerm}
                />
              </td>
              <td className="px-4 py-2 border-b text-gray-700">
                <HighlightText
                  text={model.specs?.stability}
                  searchTerm={searchTerm}
                />
              </td>
              <td className="px-4 py-2 border-b text-gray-700">
                <HighlightText
                  text={model.specs?.shelfLife}
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

export default FullAutomationTable;
