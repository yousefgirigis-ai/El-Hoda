import React from "react";
import {
  isClinicalChemistryData,
  isFullAutomationData,
  isMultiPanelTestData,
  isRapidTestData,
} from "../utils/dataTypeUtils";
import {
  ClinicalChemistryTable,
  FullAutomationTable,
  MultiPanelTestsTable,
  InfectiousDiseaseTable,
  RapidTestsTable,
  NeoMedicaReagents,
} from "./tableRenderers";
import ModelCard from "./ModelCard";

const CategoryContent = ({ category, partner, searchTerm }) => {
  if (isClinicalChemistryData(category.models)) {
    return (
      <ClinicalChemistryTable
        models={category.models}
        searchTerm={searchTerm}
      />
    );
  } else if (isFullAutomationData(category.models)) {
    return (
      <FullAutomationTable models={category.models} searchTerm={searchTerm} />
    );
  } else if (isMultiPanelTestData(category.models)) {
    return (
      <MultiPanelTestsTable models={category.models} searchTerm={searchTerm} />
    );
  } else if (category.category.includes("Infectious Disease")) {
    return (
      <InfectiousDiseaseTable
        models={category.models}
        searchTerm={searchTerm}
      />
    );
  } else if (isRapidTestData(category.models)) {
    return <RapidTestsTable models={category.models} searchTerm={searchTerm} />;
  } else if (category.category.includes("Reagents")) {
    return (
      <NeoMedicaReagents models={category.models} searchTerm={searchTerm} />
    );
  } else {
    return category.models.map((model, mIdx) => (
      <ModelCard
        key={mIdx}
        model={model}
        partner={partner}
        searchTerm={searchTerm}
      />
    ));
  }
};

export default CategoryContent;
