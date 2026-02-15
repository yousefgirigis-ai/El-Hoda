import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { partners } from "../data/constants";
import BackButton from "../components/BackButton";
import PartnerHeader from "../components/PartnerHeader";
import AboutSection from "../components/AboutSection";
import ProductCategories from "../components/ProductCategories";
import ControlsCalibrators from "../components/ControlsCalibrators";
import UniversalReagents from "../components/tableRenderers/UniversalReagents";
// import HeroBanner from "../components/HeroBanner";

const PartnerDetails = () => {
  const { slug } = useParams();
  const [openCategory, setOpenCategory] = useState(null);
  const [openUniversalBrand, setOpenUniversalBrand] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const partner = partners.find((p) => p.slug === slug);

  if (!partner) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Partner Not Found</h1>
        <Link
          to="/#partners"
          className="text-red-600 underline mt-4 text-lg inline-block"
        >
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br  pt-0 pb-28">
      {/* <HeroBanner partner={partner} /> */}

      <div className="max-w-6xl mx-auto px-6 mt-8">
        <BackButton />
      </div>

      <div className="max-w-6xl mx-auto mt-10 px-6">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-br from-red-100 to-pink-100 rounded-full opacity-60 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-50 rounded-full opacity-40 blur-3xl" />

          <PartnerHeader partner={partner} />
          <AboutSection partner={partner} />

          {partner.products && (
            <ProductCategories
              products={partner.products}
              openCategory={openCategory}
              setOpenCategory={setOpenCategory}
              partner={partner}
            />
          )}

          {partner.universalReagents && (
            <UniversalReagents
              universalReagents={partner.universalReagents}
              openUniversalBrand={openUniversalBrand}
              setOpenUniversalBrand={setOpenUniversalBrand}
            />
          )}

          {partner.controlsCalibrators && (
            <ControlsCalibrators
              controlsCalibrators={partner.controlsCalibrators}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PartnerDetails;
