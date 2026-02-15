import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  ArrowLeft,
  Building2,
  Package,

} from "lucide-react";

const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine the current context based on the current path
  const isProductPage = location.pathname.includes("/product");
  const isPartnerPage = location.pathname.includes("/partner");

  // Get product data from location state if available
  const product = location.state?.product;
  const partner = location.state?.partner;

  const handleBackClick = () => {
    if (isProductPage) {
      // If we have partner data, navigate back to that partner's page
      if (location.state?.fromPartner) {
        navigate(`/partner/${location.state.fromPartner}`, {
          state: { scrollTo: "products" },
        });
      } else {
        // Otherwise navigate to home with products section highlighted
        navigate("/", { state: { scrollTo: "products" } });
      }
    } else if (isPartnerPage) {
      // Navigate to home with partners section highlighted
      navigate("/", { state: { scrollTo: "partners" } });
    } else {
      // Default fallback
      navigate(-1);
    }
  };



  // Determine button text and icon based on context
  const getButtonConfig = () => {
    if (isProductPage) {
      return {
        text: "Back to Products",
        icon: (
          <Package
            size={18}
            className="text-white group-hover:text-red-100 transition-colors"
          />
        ),
        breadcrumb: product?.title
          ? product.title.replace(/_/g, " ")
          : "Product Details",
      };
    } else if (isPartnerPage) {
      return {
        text: "Back to Partners",
        icon: (
          <Building2
            size={18}
            className="text-white group-hover:text-red-100 transition-colors"
          />
        ),
        breadcrumb: partner?.name || "Partner Details",
      };
    } else {
      return {
        text: "Go Back",
        icon: (
          <ArrowLeft
            size={18}
            className="text-white group-hover:text-red-100 transition-colors"
          />
        ),
        breadcrumb: "Previous Page",
      };
    }
  };

  const config = getButtonConfig();

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <button
          onClick={handleBackClick}
          className="group flex items-center gap-3 w-fit px-5 py-3 bg-[#E81729] text-white hover:bg-[#d71920] hover:text-white border border-[#E81729] hover:border-[#d71920] transition-all duration-300 rounded-xl shadow-sm hover:shadow-md active:scale-95"
        >
          <div className="flex items-center gap-2">
            <ArrowLeft
              size={16}
              className="text-white group-hover:-translate-x-0.5 transition-all"
            />
            {config.icon}
          </div>
          <span className="font-semibold">{config.text}</span>
        </button>


      </div>

    </div>
  );
};

export default BackButton;
