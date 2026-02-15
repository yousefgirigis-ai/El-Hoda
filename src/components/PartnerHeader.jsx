import React from "react";
import { Link } from "react-router-dom";

const PartnerHeader = ({ partner }) => {
  return (
    <Link
      to={`/partners/${partner.slug}`}
      className="flex justify-center mb-12 relative z-10"
    >
      <div className="w-48 h-48 flex items-center justify-center bg-white rounded-2xl shadow-md">
        <img
          src={`/${partner.img}`}
          alt={partner.name}
          className="w-32 h-32 object-contain"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/150x150/F3F4F6/374151?text=${encodeURIComponent(
              partner.name
            )}`;
          }}
        />
      </div>
    </Link>
  );
};

export default PartnerHeader;
