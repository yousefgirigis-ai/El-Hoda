import {
  Beaker,
  Droplet,
  TestTube2,
  Zap,
  Wind,
  Droplets,
  TestTube,
  Shield,
  Heart,
  Activity,
  Box,
} from "lucide-react";

export const getCategoryIcon = (category) => {
  if (category.includes("Manual / Semi-Automatic Kits")) {
    return <Beaker className="text-blue-600" />;
  } else if (category.includes("Blood Grouping")) {
    return <Droplet className="text-red-600" />;
  } else if (category.includes("Latex Slide")) {
    return <TestTube2 className="text-purple-600" />;
  } else if (category.includes("Full Automation Kits")) {
    return <Zap className="text-green-600" />;
  } else if (
    category.includes("Decontamination") ||
    category.includes("Disinfection")
  ) {
    return <Wind className="text-red-600" />;
  } else if (category.includes("Bio-Disinfectants")) {
    return <Droplets className="text-blue-600" />;
  } else if (category.includes("Diffusion")) {
    return <Zap className="text-green-600" />;
  } else if (category.includes("Drugs of Abuse")) {
    return <TestTube className="text-orange-600" />;
  } else if (
    category.includes("COVID") ||
    category.includes("Infectious Disease")
  ) {
    return <Shield className="text-red-600" />;
  } else if (category.includes("Fertility")) {
    return <Droplets className="text-pink-600" />;
  } else if (category.includes("Cardiac")) {
    return <Heart className="text-red-600" />;
  } else if (category.includes("Tumor")) {
    return <Activity className="text-purple-600" />;
  } else if (category.includes("Allergy")) {
    return <Wind className="text-yellow-600" />;
  }
  return <Box className="text-red-600" />;
};
