import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronRight,
  Sparkles,
  Shield,
  Award,
  Droplets,
  Beaker,
  FlaskRound,
  ShieldAlert,
  Download,
  X,
  FileText,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const InfectionControlResearch = () => {
  const oxyPharmCatalogs = [
    {
      label: "Glosair Brochure",
      fileId: "18AHq6J-5_CGdSYZa1tlAfS06yqbLXKOT",
    },
    {
      label: "SANIVAP",
      fileId: "1tf5gEMaFeunrAHcDvO6UzBh0DFMMQPCh",
    },
    {
      label: "AIREL QUETIN",
      fileId: "1tmmENEDPp58ej3YrEtiLffv-egxsi3mJ",
    },
    {
      label: "OXYPHARM",
      fileId: "1tJn63W8wWo6kYwGMu1htZ13AlY3ySgYK",
    },
    {
      label: "NOCO TECH",
      fileId: "1knlm-pvIvwlMhPIuciSI4wgDsFeAdvcW",
    },
  ];

  const navigate = useNavigate();
  const [, setIsAtTop] = React.useState(true);
  const [activePartner, setActivePartner] = React.useState(null);
  const [selectedPartner, setSelectedPartner] = React.useState(null);
  const [isPortfolioModalOpen, setIsPortfolioModalOpen] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);
  const partnerRefs = React.useRef({});

  React.useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Trigger entrance animation
    setTimeout(() => setIsVisible(true), 100);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackToPartners = () => {
    navigate("/#partners");
  };

  const handlePartnerIconClick = (partnerName) => {
    const target = partnerRefs.current[partnerName];
    if (!target) return;

    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const openPortfolioModal = (partner) => {
    setSelectedPartner(partner);
    setIsPortfolioModalOpen(true);
  };

  const closePortfolioModal = () => {
    setIsPortfolioModalOpen(false);
    setSelectedPartner(null);
  };

  const triggerDriveDownload = (fileId) => {
    const link = document.createElement("a");
    link.href = `https://drive.google.com/uc?export=download&id=${fileId}`;
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownload = (partnerName) => {
    if (partnerName === "Medentech") {
      triggerDriveDownload("1LN04yJHPnbiG5YC9xoF0YfvsXhuq1HFD");

      setTimeout(() => {
        closePortfolioModal();
      }, 1000);

      return;
    }

    if (partnerName === "ParaSure" || partnerName === "GHP International") {
      triggerDriveDownload("1pb6wlbfz3MLHwEpbHhVtZQgVlmzfaRZW");

      setTimeout(() => {
        closePortfolioModal();
      }, 1000);

      return;
    }

    // Create a filename from the partner name
    const filename = `${partnerName.replace(/\s+/g, '_')}_Portfolio.pdf`;
    
    // Create a dummy PDF content (in real implementation, this would be an actual PDF file)
    // For demo purposes, we'll create a text file instead
    const content = `${partnerName} Portfolio\n\nThis is a sample portfolio document for ${partnerName}.\nIn a production environment, this would be an actual PDF file.`;
    
    const blob = new Blob([content], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
    
    // Close popup after download starts
    setTimeout(() => {
      closePortfolioModal();
    }, 1000);
  };

  // Direct partner data with updated image file names
  const infectionControlPartners = [
    {
      name: "Oxy'Pharm",
      title: "Leader in Automated Bio-Disinfection",
      description:
        "Providing automated, 100% biodegradable airborne disinfection and steam cleaning solutions for eco-responsible healthcare environments.",
      category: "Automated Bio-Disinfection",
      expertise: "Eco-Responsible Disinfection",
      img: "/oxy-pharm.png",
      slug: "oxy-pharm",
    },
    {
      name: "Medentech",
      title: "Global Standard in Disinfection Tablets",
      description:
        "Manufacturing high-level, broad-spectrum effervescent tablets used globally for hospital-grade surface infection control.",
      category: "Disinfection Tablets",
      expertise: "Surface Infection Control",
      img: "/medntech.png",
      slug: "medentech",
    },
    {
      name: "ParaSure",
      title: "Expert in Sterility Assurance",
      description:
        "Delivering innovative monitoring solutions and process challenge devices to verify cleaning and sterilization efficacy in clinical settings.",
      category: "Sterility Assurance",
      expertise: "Sterilization Monitoring",
      img: "/parasure.png",
      slug: "parasure",
    },
    {
      name: "GHP International",
      title: "Leader in Advanced Decontamination Solutions",
      description:
        "Providing first-in-class sterility assurance and enzymatic cleaning systems designed for high-standard medical reprocessing.",
      category: "Advanced Decontamination",
      expertise: "Enzymatic Cleaning Systems",
      img: "/ghp-international.png",
      slug: "ghp-international",
    },
    {
      name: "AMS",
      title: "Expert in Specialized Research Services",
      description:
        "Providing high-level scientific expertise and research services to support the evolving needs of the global clinical sector.",
      category: "Research Services",
      expertise: "Clinical Research & Development",
      img: "/ams-red.png",
      slug: "ams",
    },
  ];

  // Map partners with icons and gradients - ALL UPDATED TO RED THEME
  const mappedPartners = infectionControlPartners.map((partner) => {
    let icon = null;
    let gradient = "from-red-600 to-red-700"; // Standardized to red gradient

    switch (partner.name) {
      case "Oxy'Pharm":
        icon = <Droplets className="w-6 h-6" />;
        gradient = "from-red-600 to-red-700";
        break;
      case "Medentech":
        icon = <Beaker className="w-6 h-6" />;
        gradient = "from-red-600 to-red-700";
        break;
      case "ParaSure":
        icon = <ShieldAlert className="w-6 h-6" />;
        gradient = "from-red-600 to-red-700";
        break;
      case "GHP International":
        icon = <Shield className="w-6 h-6" />;
        gradient = "from-red-600 to-red-700";
        break;
      case "AMS":
        icon = <FlaskRound className="w-6 h-6" />;
        gradient = "from-red-600 to-red-700";
        break;
      default:
        break;
    }

    return {
      ...partner,
      icon,
      gradient,
      color: gradient.split(" ")[2] || "from-red-600 to-red-700",
    };
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const cardHoverVariants = {
    initial: { scale: 1, y: 0 },
    hover: {
      scale: 1.02,
      y: -8,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const popupVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8, 
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen bg-gradient-to-b from-gray-50 via-white to-red-50 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-red-200/20 to-red-200/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            y: [0, 30, 0],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-r from-rose-200/10 to-pink-200/5 rounded-full blur-3xl"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,white_30%,transparent_50%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-36">
        {/* Breadcrumb/Path - Non-clickable */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <span className="text-gray-600">Home</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-600">Partners</span>
            <ChevronRight className="w-4 h-4" />
            <span className="font-medium text-gray-900">
              Infection Control & Research
            </span>
          </nav>
        </motion.div>

        {/* Back to Partners Button (Top) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-10 flex justify-start"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleBackToPartners}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-3 rounded-xl font-bold hover:shadow-xl transition-all duration-300 shadow-lg"
          >
            <ChevronRight className="w-5 h-5 rotate-180" />
            Back to Home
          </motion.button>
        </motion.div>

        {/* Trusted Partners Section at the Top */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 rounded-3xl shadow-2xl overflow-hidden p-8 lg:p-12">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.2),transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.15),transparent_50%)]" />
            </div>

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600/20 to-red-500/20 backdrop-blur-sm border border-red-500/30 px-5 py-2.5 rounded-full mb-6"
              >
                <Sparkles className="w-4 h-4 text-red-300" />
                <span className="text-sm font-semibold text-white">
                  Infection Control Excellence Partners
                </span>
                <Award className="w-4 h-4 text-amber-300 ml-1" />
              </motion.div>

              <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
                <div className="flex-1">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-3xl md:text-4xl font-bold mb-6 text-white"
                  >
                    Our Infection Control & Research Partners
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-red-100 text-lg max-w-2xl leading-relaxed"
                  >
                    Partnering with global leaders in sterilization,
                    decontamination, and scientific research to ensure the
                    highest standards of healthcare safety.
                  </motion.p>
                </div>

                {/* Partner Logos - Centered on mobile */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex-1"
                >
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center"
                  >
                    {mappedPartners.map((p, i) => (
                      <motion.div
                        key={i}
                        variants={itemVariants}
                        whileHover={{ scale: 1.1, rotateY: 10 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handlePartnerIconClick(p.name)}
                        className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center hover:bg-white/10 transition-all duration-300 cursor-pointer w-full max-w-[140px] sm:max-w-none"
                      >
                        <div className="w-20 h-20 relative flex items-center justify-center bg-white rounded-xl p-4 mb-3 shadow-lg">
                          <img
                            src={p.img}
                            alt={p.name}
                            className="max-w-full max-h-full object-contain"
                            onError={(e) => {
                              e.target.style.display = "none";
                              e.target.parentElement.innerHTML = `<div class="text-gray-900 text-sm font-medium text-center">${p.name}</div>`;
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="text-gray-900">INFECTION CONTROL & </span>
              <motion.span
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="text-transparent bg-gradient-to-r from-red-600 via-red-500 to-red-600 bg-[length:200%_auto] bg-clip-text"
              >
                RESEARCH
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed"
            >
              Pioneers in sterilization, decontamination, and scientific
              research for healthcare safety and excellence
            </motion.p>
          </div>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20"
        >
          {mappedPartners.map((partner, index) => (
            <motion.div
              key={index}
              ref={(el) => {
                partnerRefs.current[partner.name] = el;
              }}
              variants={itemVariants}
              whileHover="hover"
              initial="initial"
              animate="initial"
              className="relative group scroll-mt-32"
            >
              <motion.div
                variants={cardHoverVariants}
                className="relative bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Gradient Accent */}
                <div
                  className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${partner.gradient}`}
                />

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/0 group-hover:to-white/5 transition-all duration-500" />

                <div className="relative p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-4 items-start">
                      {/* Logo Container with Animation */}
                      <motion.div
                        whileHover={{ rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-lg" />
                        <div className="relative w-24 h-24 flex items-center justify-center p-4">
                          <img
                            src={partner.img}
                            alt={partner.name}
                            className="max-w-full max-h-full object-contain"
                            onError={(e) => {
                              e.target.style.display = "none";
                              e.target.parentElement.innerHTML = `<div class="text-gray-900 font-bold text-center">${partner.name.split(" ")[0]}</div>`;
                            }}
                          />
                        </div>
                      </motion.div>

                      <div className="pt-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-gray-900">
                            {partner.name}
                          </h3>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 20,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className={`w-3 h-3 rounded-full bg-gradient-to-br ${partner.gradient}`}
                          />
                        </div>

                        <div className="flex items-center gap-2 mb-2">
                          <div
                            className={`p-1.5 rounded-lg bg-gradient-to-br ${partner.gradient} bg-opacity-10`}
                          >
                            {partner.icon}
                          </div>
                          <span className="text-sm font-medium text-gray-600">
                            {partner.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Expertise Badge - Updated to match LaboratoryDiagnostics */}
                    <div
                      className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${partner.gradient} text-white text-xs font-bold`}
                    >
                      {partner.expertise}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-lg text-gray-900 mb-3 leading-snug">
                      {partner.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {partner.description}
                    </p>
                  </div>

                  {/* Interactive Button - Updated to match LaboratoryDiagnostics */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => openPortfolioModal(partner)}
                    onMouseEnter={() => setActivePartner(index)}
                    onMouseLeave={() => setActivePartner(null)}
                    className="w-full py-3 rounded-xl font-medium text-white bg-gradient-to-r from-red-600 to-black hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Learn More About {partner.name}</span>
                    <motion.div
                      animate={{ x: activePartner === index ? 5 : 0 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </motion.div>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Download Popup Modal - Enhanced to match LaboratoryDiagnostics */}
      <AnimatePresence>
        {isPortfolioModalOpen && selectedPartner && (
          <>
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={closePortfolioModal}
            />
            
            <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
              <motion.div
                variants={popupVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 pointer-events-auto overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${selectedPartner.gradient} px-6 py-4 flex items-center justify-between`}>
                  <div className="flex items-center gap-3">
                    <FileText className="w-6 h-6 text-white" />
                    <h3 className="text-xl font-bold text-white">Company Portfolio</h3>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={closePortfolioModal}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gray-100 rounded-xl p-3 flex items-center justify-center">
                      <img
                        src={selectedPartner.img}
                        alt={selectedPartner.name}
                        className="max-w-full max-h-full object-contain"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.parentElement.innerHTML = `<div class="text-gray-900 font-bold text-center">${selectedPartner.name.split(" ")[0]}</div>`;
                        }}
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900">{selectedPartner.name}</h4>
                      <p className="text-sm text-gray-600">{selectedPartner.expertise}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">
                    Download the complete portfolio for {selectedPartner.name} to learn more about their products, services, and innovative solutions.
                  </p>

                  {selectedPartner.name === "Oxy'Pharm" ? (
                    <div className="space-y-3">
                      {oxyPharmCatalogs.map((catalog) => (
                        <motion.button
                          key={catalog.fileId}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => triggerDriveDownload(catalog.fileId)}
                          className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white py-3 px-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          <Download className="w-4 h-4" />
                          {catalog.label}
                        </motion.button>
                      ))}

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={closePortfolioModal}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-300"
                      >
                        Close
                      </motion.button>
                    </div>
                  ) : (
                    <div className="flex gap-3">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleDownload(selectedPartner.name)}
                        className="flex-1 bg-gradient-to-r from-red-600 to-red-500 text-white py-3 px-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        Download Portfolio
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={closePortfolioModal}
                        className="px-4 py-3 border border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-300"
                      >
                        Cancel
                      </motion.button>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default InfectionControlResearch;
