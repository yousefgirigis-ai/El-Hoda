export const getImagePath = (model, partner) => {
  if (!model.img)
    return `https://placehold.co/200x150/EEE/555?text=${encodeURIComponent(
      model.model || "Device"
    )}`;

  // For Oxy Pharm, use the oxy-pharm directory
  if (partner.slug === "oxy-pharm") {
    return `/partners/oxy-pharm/${model.img}`;
  }

  // For NeoMedica, use neomedica directory
  if (partner.slug === "neomedica") {
    return `/partners/neomedica/${model.img}`;
  }

  // For DiaSure, use dia-sure directory
  if (partner.slug === "dia-sure" || partner.slug === "dia-sure-red") {
    return `/partners/dia-sure/${model.img}`;
  }

  // Default fallback
  return `/partners/${partner.slug}/${model.img}`;
};
