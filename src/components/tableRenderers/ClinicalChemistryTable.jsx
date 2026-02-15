import React from "react";
import HighlightText from "../HighlightText";

const ClinicalChemistryTable = ({ models, searchTerm }) => {
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
              Method
            </th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700 border-b">
              Reagent Form
            </th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700 border-b">
              Pack Size
            </th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700 border-b">
              Kit Content
            </th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700 border-b">
              Shelf Life
            </th>
          </tr>
        </thead>
        <tbody>
          {models.map((model, index) => (
            <React.Fragment key={index}>
              {model.packaging ? (
                model.packaging.map((pack, packIndex) => (
                  <tr
                    key={`${index}-${packIndex}`}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    {packIndex === 0 && (
                      <>
                        <td
                          rowSpan={model.packaging.length}
                          className="px-4 py-2 border-b text-gray-600 font-mono text-xs align-top"
                        >
                          <HighlightText
                            text={model.catalog}
                            searchTerm={searchTerm}
                          />
                        </td>
                        <td
                          rowSpan={model.packaging.length}
                          className="px-4 py-2 border-b text-gray-800 font-medium align-top"
                        >
                          <HighlightText
                            text={model.model}
                            searchTerm={searchTerm}
                          />
                        </td>
                        <td
                          rowSpan={model.packaging.length}
                          className="px-4 py-2 border-b text-gray-700 align-top"
                        >
                          <HighlightText
                            text={model.specs?.method}
                            searchTerm={searchTerm}
                          />
                        </td>
                        <td
                          rowSpan={model.packaging.length}
                          className="px-4 py-2 border-b text-gray-700 align-top"
                        >
                          <HighlightText
                            text={model.specs?.reagentForm}
                            searchTerm={searchTerm}
                          />
                        </td>
                      </>
                    )}
                    <td className="px-4 py-2 border-b text-gray-700">
                      <HighlightText
                        text={pack.packSize}
                        searchTerm={searchTerm}
                      />
                    </td>
                    <td className="px-4 py-2 border-b text-gray-700">
                      <HighlightText
                        text={pack.kitContent}
                        searchTerm={searchTerm}
                      />
                    </td>
                    {packIndex === 0 && (
                      <td
                        rowSpan={model.packaging.length}
                        className="px-4 py-2 border-b text-gray-700 align-top"
                      >
                        <HighlightText
                          text={model.specs?.shelfLife}
                          searchTerm={searchTerm}
                        />
                      </td>
                    )}
                  </tr>
                ))
              ) : (
                <tr className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-2 border-b text-gray-600 font-mono text-xs">
                    <HighlightText
                      text={model.catalog}
                      searchTerm={searchTerm}
                    />
                  </td>
                  <td className="px-4 py-2 border-b text-gray-800 font-medium">
                    <HighlightText text={model.model} searchTerm={searchTerm} />
                  </td>
                  <td className="px-4 py-2 border-b text-gray-700">
                    <HighlightText
                      text={model.specs?.method}
                      searchTerm={searchTerm}
                    />
                  </td>
                  <td className="px-4 py-2 border-b text-gray-700">
                    <HighlightText
                      text={model.specs?.reagentForm}
                      searchTerm={searchTerm}
                    />
                  </td>
                  <td className="px-4 py-2 border-b text-gray-700">-</td>
                  <td className="px-4 py-2 border-b text-gray-700">-</td>
                  <td className="px-4 py-2 border-b text-gray-700">
                    <HighlightText
                      text={model.specs?.shelfLife}
                      searchTerm={searchTerm}
                    />
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClinicalChemistryTable;
