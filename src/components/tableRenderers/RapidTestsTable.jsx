import React from "react";
import HighlightText from "../HighlightText";

const RapidTestsTable = ({ models, searchTerm }) => {
  if (!models || models.length === 0) return null;

  const hasSpecimenType = models.some((m) => m.specs?.specimenType);
  const hasDetection = models.some((m) => m.specs?.detection);
  const hasKitFormat = models.some((m) => m.specs?.kitFormat);
  const hasPackageSize = models.some((m) => m.specs?.packageSize);

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

            {hasSpecimenType && (
              <th className="px-4 py-2 text-left font-semibold text-gray-700 border-b">
                Specimen Type
              </th>
            )}

            {hasDetection && (
              <th className="px-4 py-2 text-left font-semibold text-gray-700 border-b">
                Cut-off Concentration
              </th>
            )}

            {hasKitFormat && (
              <th className="px-4 py-2 text-left font-semibold text-gray-700 border-b">
                Kit Format
              </th>
            )}

            {hasPackageSize && (
              <th className="px-4 py-2 text-left font-semibold text-gray-700 border-b">
                Package Size
              </th>
            )}
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

              {hasSpecimenType && (
                <td className="px-4 py-2 border-b text-gray-700">
                  {model.specs?.specimenType && (
                    <HighlightText
                      text={model.specs.specimenType}
                      searchTerm={searchTerm}
                    />
                  )}
                </td>
              )}

              {hasDetection && (
                <td className="px-4 py-2 border-b text-gray-700">
                  {model.specs?.detection && (
                    <HighlightText
                      text={model.specs.detection}
                      searchTerm={searchTerm}
                    />
                  )}
                </td>
              )}

              {hasKitFormat && (
                <td className="px-4 py-2 border-b text-gray-700">
                  {model.specs?.kitFormat && (
                    <HighlightText
                      text={model.specs.kitFormat}
                      searchTerm={searchTerm}
                    />
                  )}
                </td>
              )}

              {hasPackageSize && (
                <td className="px-4 py-2 border-b text-gray-700">
                  {model.specs?.packageSize && (
                    <HighlightText
                      text={model.specs.packageSize}
                      searchTerm={searchTerm}
                    />
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RapidTestsTable;
