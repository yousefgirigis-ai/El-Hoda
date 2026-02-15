import React from "react";
import {
  hasDetailedReagents,
  isPackagingData,
} from "../../utils/dataTypeUtils";
import HighlightText from "../HighlightText";

const ReagentsTable = ({ reagents, searchTerm }) => {
  if (!reagents || reagents.length === 0) return null;

  // Dymind style - detailed reagents with all fields
  if (hasDetailedReagents(reagents)) {
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
                Analyte
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
            {reagents.map((reagent, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-4 py-2 border-b text-gray-800 font-medium">
                  <HighlightText
                    text={reagent.productName}
                    searchTerm={searchTerm}
                  />
                </td>
                <td className="px-4 py-2 border-b text-gray-600 font-mono text-xs">
                  <HighlightText
                    text={reagent.catalogNumber}
                    searchTerm={searchTerm}
                  />
                </td>
                <td className="px-4 py-2 border-b text-gray-700">
                  <HighlightText
                    text={reagent.analyte}
                    searchTerm={searchTerm}
                  />
                </td>
                <td className="px-4 py-2 border-b text-gray-700">
                  <HighlightText
                    text={reagent.reagentForm}
                    searchTerm={searchTerm}
                  />
                </td>
                <td className="px-4 py-2 border-b text-gray-700">
                  <HighlightText
                    text={reagent.packSize}
                    searchTerm={searchTerm}
                  />
                </td>
                <td className="px-4 py-2 border-b text-gray-700">
                  <HighlightText
                    text={reagent.shelfLife}
                    searchTerm={searchTerm}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  // Oxy Pharm packaging style
  if (isPackagingData(reagents)) {
    return (
      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full text-sm border border-gray-200 rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left font-semibold text-gray-700 border-b">
                Product Description
              </th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700 border-b">
                Product Code
              </th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700 border-b">
                Package Contents
              </th>
            </tr>
          </thead>
          <tbody>
            {reagents.map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-4 py-2 border-b text-gray-800 font-medium">
                  <HighlightText
                    text={item.productDescription}
                    searchTerm={searchTerm}
                  />
                </td>
                <td className="px-4 py-2 border-b text-gray-600 font-mono text-xs">
                  <HighlightText
                    text={item.productCode}
                    searchTerm={searchTerm}
                  />
                </td>
                <td className="px-4 py-2 border-b text-gray-700">
                  <HighlightText
                    text={item.packageContents}
                    searchTerm={searchTerm}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  // NeoMedica style - simple reagents without detailed fields
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
              Pack Size
            </th>
          </tr>
        </thead>
        <tbody>
          {reagents.map((item, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td className="px-4 py-2 border-b text-gray-800 font-medium">
                <HighlightText text={item.product} searchTerm={searchTerm} />
              </td>
              <td className="px-4 py-2 border-b text-gray-600 font-mono text-xs">
                <HighlightText text={item.catalog} searchTerm={searchTerm} />
              </td>
              <td className="px-4 py-2 border-b text-gray-700">
                <HighlightText text={item.size} searchTerm={searchTerm} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReagentsTable;
