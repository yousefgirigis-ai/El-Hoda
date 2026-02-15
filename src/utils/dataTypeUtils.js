// Check if reagents have detailed structure (Dymind style)
export const hasDetailedReagents = (reagents) => {
  return (
    reagents && reagents[0] && reagents[0].productName && reagents[0].analyte
  );
};

// Check if it's packaging data (Oxy Pharm style)
export const isPackagingData = (data) => {
  return data && data[0] && data[0].productCode && data[0].packageContents;
};

// Check if it's clinical chemistry data (DiaSure style)
export const isClinicalChemistryData = (models) => {
  return models && models[0] && models[0].packaging && models[0].specs?.method;
};

// Check if it's full automation data (DiaSure style)
export const isFullAutomationData = (models) => {
  return models && models[0] && models[0].specs?.r1Volume;
};

// Check if it's multi-panel test data
export const isMultiPanelTestData = (models) => {
  return models && models[0] && models[0].specs?.panelConfiguration;
};

// Check if it's rapid test data (DiaSure blue style)
export const isRapidTestData = (models) => {
  return models && models[0] && models[0].specs?.specimenType;
};
