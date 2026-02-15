import React from "react";
import { ControlsTable } from "./tableRenderers";

const ControlsCalibrators = ({ controlsCalibrators }) => {
  return (
    <div className="relative z-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Controls & Calibrators
      </h2>

      <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-6">
        <p className="text-green-800 leading-relaxed">
          {controlsCalibrators.description}
        </p>
        {controlsCalibrators.compatibilityNote && (
          <div className="mt-3 p-3 bg-green-100 rounded-lg">
            <p className="text-green-700 text-sm">
              <strong>Compatibility:</strong> {controlsCalibrators.compatibilityNote}
            </p>
          </div>
        )}
        {controlsCalibrators.stability && (
          <div className="mt-2 p-3 bg-green-100 rounded-lg">
            <p className="text-green-700 text-sm">
              <strong>Stability:</strong> {controlsCalibrators.stability}
            </p>
          </div>
        )}
        {controlsCalibrators.storageCondition && (
          <div className="mt-2 p-3 bg-green-100 rounded-lg">
            <p className="text-green-700 text-sm">
              <strong>Storage:</strong> {controlsCalibrators.storageCondition}
            </p>
          </div>
        )}
      </div>

      <ControlsTable controls={controlsCalibrators.products} />
    </div>
  );
};

export default ControlsCalibrators;