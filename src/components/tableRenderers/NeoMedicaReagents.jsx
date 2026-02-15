import React from "react";
import { Package } from "lucide-react";
import { ReagentsTable } from "./index.jsx";
import HighlightText from "../HighlightText.jsx";

const NeoMedicaReagents = ({ models, searchTerm }) => {
  if (!models || models.length === 0) return null;

  return (
    <div className="space-y-6">
      {models.map((model, mIdx) => (
        <div
          key={mIdx}
          className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm"
        >
          {/* Model header */}
          <div className="flex items-start gap-6 mb-4">
            <img
              src={`/${model.img}`}
              alt={model.name}
              className="w-32 h-24 object-contain bg-white rounded-lg p-2 shadow border"
              onError={(e) => {
                e.target.src = `https://placehold.co/150x100/EEE/555?text=${encodeURIComponent(
                  model.name || "Reagents"
                )}`;
              }}
            />
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900">
                <HighlightText text={model.name} searchTerm={searchTerm} />
              </h3>
            </div>
          </div>

          {/* Reagents list - check if using detailed reagents or simple items */}
          {model.reagents && model.reagents.length > 0 ? (
            <div className="mt-4">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Package size={16} />
                Reagents:
              </h4>
              <ReagentsTable
                reagents={model.reagents}
                searchTerm={searchTerm}
              />
            </div>
          ) : model.items && model.items.length > 0 ? (
            <div className="mt-4">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Package size={16} />
                Reagents:
              </h4>
              <ReagentsTable reagents={model.items} searchTerm={searchTerm} />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default NeoMedicaReagents;
