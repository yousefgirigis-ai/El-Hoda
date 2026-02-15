import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowUp,
  ArrowDown,
  ChevronRight,
  X,
  Menu,
  Info,
  Table,
  Package,
  Grid,
  List,
  Microscope,
  Beaker,
  Cpu,
  Filter,
  ChevronLeft,
  Home,
  Folder,
  Layers,
  Database,
  Zap,
  Shield,
  Thermometer,
  Droplets,
  Heart,
  Pill,
  Stethoscope,
  Activity,
  Search,
  Clock,
  BarChart3,
  AlertCircle,
  FileText,
  TestTube,
  Wrench,
  RefreshCw,
  Settings,
  Users,
  Headphones,
  CheckCircle,
  Wifi,
  Check,
} from "lucide-react";
import { ivdCategories } from "../../../data/constants";

const IVDReagentsTable = () => {
  const navigate = useNavigate();
  const [isAtTop, setIsAtTop] = useState(true);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState([]);
  const [, setExpandedSubcategories] = useState([]);
  const [expandedTables, setExpandedTables] = useState({});
  const [showMedicalConsumables, setShowMedicalConsumables] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [viewMode, setViewMode] = useState("table");
  const sidebarRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Hematology specific states
  const [activeHematologyTab, setActiveHematologyTab] = useState("products");
  const [searchTerm, setSearchTerm] = useState("");
  const [, setFilteredHematologyProducts] = useState([]);

  // Hematology Instrumentation states
  const [activeHematologyInstrument, setActiveHematologyInstrument] =
    useState(null);
  const [activeInstrumentTab, setActiveInstrumentTab] = useState("overview");
  const [imageModal, setImageModal] = useState({
    open: false,
    src: "",
    alt: "",
  });

  // Color schemes for different categories
  const colorSchemes = {
    "clinical-chemistry-instrumentation": {
      gradient: "from-indigo-500 to-purple-600",
      light: "bg-indigo-50",
      border: "border-indigo-200",
      text: "text-indigo-700",
      icon: "text-indigo-600",
    },
    "clinical-chemistry-reagents": {
      gradient: "from-red-500 to-red-600",
      light: "bg-red-50",
      border: "border-red-200",
      text: "text-red-700",
      icon: "text-red-600",
    },
    "general-purpose-reagents": {
      gradient: "from-emerald-500 to-teal-600",
      light: "bg-emerald-50",
      border: "border-emerald-200",
      text: "text-emerald-700",
      icon: "text-emerald-600",
    },
    "elhoda-auto": {
      gradient: "from-amber-500 to-orange-600",
      light: "bg-amber-50",
      border: "border-amber-200",
      text: "text-amber-700",
      icon: "text-amber-600",
    },
    "medical-consumables": {
      gradient: "from-indigo-500 to-purple-600",
      light: "bg-indigo-50",
      border: "border-indigo-200",
      text: "text-indigo-700",
      icon: "text-indigo-600",
    },
    "hematology-reagents": {
      gradient: "from-rose-500 to-pink-600",
      light: "bg-rose-50",
      border: "border-rose-200",
      text: "text-rose-700",
      icon: "text-rose-600",
    },
    "hematology-instrumentation": {
      gradient: "from-red-500 to-red-600",
      light: "bg-red-50",
      border: "border-red-200",
      text: "text-red-700",
      icon: "text-red-600",
    },
    "clinical-chemistry": {
      gradient: "from-red-500 to-red-600",
      light: "bg-red-50",
      border: "border-red-200",
      text: "text-red-700",
      icon: "text-red-600",
    },
    serology: {
      gradient: "from-green-500 to-emerald-600",
      light: "bg-green-50",
      border: "border-green-200",
      text: "text-green-700",
      icon: "text-green-600",
    },
    "immuno-turbidimetry": {
      gradient: "from-purple-500 to-violet-600",
      light: "bg-purple-50",
      border: "border-purple-200",
      text: "text-purple-700",
      icon: "text-purple-600",
    },
    "blood-groups-hemostasis": {
      gradient: "from-red-500 to-rose-600",
      light: "bg-red-50",
      border: "border-red-200",
      text: "text-red-700",
      icon: "text-red-600",
    },
    default: {
      gradient: "from-red-500 to-red-600",
      light: "bg-red-50",
      border: "border-red-200",
      text: "text-red-700",
      icon: "text-red-600",
    },
  };

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (mobile && viewMode === "table") {
        setViewMode("cards");
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [viewMode]);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filter hematology products when search term changes
  useEffect(() => {
    if (activeSubcategory && activeSubcategory.tableData) {
      const products = activeSubcategory.tableData.rows.filter(
        (row) => !row.isHeader,
      );
      if (searchTerm) {
        const filtered = products.filter(
          (product) =>
            product.productName
              ?.toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            product.catalogNumber
              ?.toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            product.analyte?.toLowerCase().includes(searchTerm.toLowerCase()),
        );
        setFilteredHematologyProducts(filtered);
      } else {
        setFilteredHematologyProducts(products);
      }
    }
  }, [searchTerm, activeSubcategory]);

  const handleBackToProducts = () => {
    navigate("/products");
  };

  const handleScrollAction = () => {
    window.scrollTo({
      top: isAtTop ? document.documentElement.scrollHeight : 0,
      behavior: "smooth",
    });
  };

  const preserveScroll = (ref, updateFn) => {
    const el = ref.current;
    const top = el ? el.scrollTop : 0;
    updateFn();
    if (el) {
      requestAnimationFrame(() => {
        el.scrollTop = top;
      });
    }
  };

  // Handle individual hematology brand click
  const handleHematologyBrandClick = (brand) => {
    setActiveCategory({
      id: "hematology-reagents",
      name: "IV. HEMATOLOGY REAGENTS",
      description: "Complete range of hematology reagents for all major brands",
      icon: Droplets,
      color: "from-rose-500 to-pink-600",
      bgColor: "bg-gradient-to-r from-rose-100 to-pink-100",
      type: "hematology",
    });
    setActiveSubcategory(brand);
    setActiveHematologyInstrument(null);
    setExpandedCategories(["hematology-reagents"]);
    setActiveHematologyTab("products");
    setSearchTerm("");

    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  // Handle hematology instrument click
  const handleHematologyInstrumentClick = (instrument) => {
    setActiveCategory({
      id: "hematology-instrumentation",
      name: "V. HEMATOLOGY INSTRUMENTATION",
      description:
        "Complete range of hematology analyzers from 3-part to 6-part differential",
      icon: Cpu,
      color: "from-red-500 to-red-600",
      bgColor: "bg-gradient-to-r from-red-100 to-red-100",
      type: "hematology-instrumentation",
    });
    setActiveHematologyInstrument(instrument);
    setActiveSubcategory(null);
    setExpandedCategories(["hematology-instrumentation"]);
    setActiveInstrumentTab("overview");

    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  const handleSubcategoryClick = (category, subcategory) => {
    setActiveCategory(category);
    setActiveSubcategory(subcategory);
    setActiveHematologyInstrument(null);
    if (!expandedCategories.includes(category.id)) {
      setExpandedCategories([category.id]);
    }
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
    setExpandedTables({});
    setShowMedicalConsumables(false);
  };

  const handleInstrumentClick = (category, instrument) => {
    setActiveCategory(category);
    setActiveSubcategory(instrument);
    setActiveHematologyInstrument(null);
    if (!expandedCategories.includes(category.id)) {
      setExpandedCategories([category.id]);
    }
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
    setExpandedTables({});
    setShowMedicalConsumables(false);
  };

  const handleSubSubcategoryClick = (category, subcategory, subSubcategory) => {
    setActiveCategory(category);
    setActiveSubcategory(subSubcategory);
    setActiveHematologyInstrument(null);
    if (!expandedCategories.includes(category.id)) {
      setExpandedCategories([category.id]);
    }
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
    setExpandedTables({});
    setShowMedicalConsumables(false);
  };

  const toggleTable = (tableId) => {
    setExpandedTables((prev) => ({
      ...prev,
      [tableId]: !prev[tableId],
    }));
  };

  const getCategoryColors = (categoryId) => {
    return colorSchemes[categoryId] || colorSchemes.default;
  };

  // Enhanced category icons with more variety
  const enhancedIcons = {
    biochemistry: Beaker,
    immunoassay: Shield,
    coagulation: Droplets,
    urinalysis: Thermometer,
    hormones: Activity,
    "tumor-markers": Zap,
    cardiac: Heart,
    diabetes: Folder,
    "drug-monitoring": Pill,
    microbiology: Microscope,
    molecular: Cpu,
    hematology: Stethoscope,
    general: Package,
    "auto-analyzer": Database,
    consumables: Layers,
  };

  // Hematology categories data
  const hematologyCategories = [
    {
      id: "neomedica",
      name: "1) Neomedica ® Hematology Reagents",
      description: "For Phoenix analyzers (5-Diff, 3-Diff, with Autoloader)",
      icon: Beaker,
      color: "from-rose-400 to-rose-600",
      bgColor: "bg-rose-50",
      totalProducts: 15,
      tableData: {
        headers: [
          "Product Name",
          "Catalog Number",
          "Analyte",
          "Reagent Form",
          "Pack Size",
          "Shelf Life",
        ],
        rows: [
          {
            productName: "Phoenix NNC-51/NNC-5500 (5-Diff) Reagents",
            catalogNumber: "",
            analyte: "",
            reagentForm: "",
            packSize: "",
            shelfLife: "",
            isHeader: true,
          },
          {
            productName: "Neo-U-Diluent",
            catalogNumber: "HM-51-DIL",
            analyte: "Diluent",
            reagentForm: "Liquid Stable",
            packSize: "20L",
            shelfLife: "24 Months",
          },
          {
            productName: "Neo-Lyser-WHP",
            catalogNumber: "HM-51-LYS",
            analyte: "Lysing Agent",
            reagentForm: "Liquid Stable",
            packSize: "1L",
            shelfLife: "18 Months",
          },
          {
            productName: "Neo-Cleaner",
            catalogNumber: "HM-51-CLR",
            analyte: "Cleaner",
            reagentForm: "Liquid Stable",
            packSize: "20L",
            shelfLife: "18 Months",
          },
          {
            productName: "Neo-U-Sheath",
            catalogNumber: "HM-51-SH",
            analyte: "Cleaner",
            reagentForm: "Liquid Stable",
            packSize: "20L",
            shelfLife: "18 Months",
          },
          {
            productName: "Neo-Probe Cleaner",
            catalogNumber: "HM-51-PRB",
            analyte: "Cleaner",
            reagentForm: "Liquid Stable",
            packSize: "50mL",
            shelfLife: "19 Months",
          },
          {
            productName: "Phoenix NCC-51(5-Diff) with Autoloader Reagents",
            catalogNumber: "",
            analyte: "",
            reagentForm: "",
            packSize: "",
            shelfLife: "",
            isHeader: true,
          },
          {
            productName: "Neo-Diluent E",
            catalogNumber: "HM-51-A-DIL",
            analyte: "Diluent",
            reagentForm: "Liquid Stable",
            packSize: "20L",
            shelfLife: "24 Months",
          },
          {
            productName: "Neo-Lyse E-WHP",
            catalogNumber: "HM-51-A-LYS",
            analyte: "Lysing Agent",
            reagentForm: "Liquid Stable",
            packSize: "1L",
            shelfLife: "18 Months",
          },
          {
            productName: "Neo-Cleaner E",
            catalogNumber: "HM-51-A-CLR",
            analyte: "Cleaner",
            reagentForm: "Liquid Stable",
            packSize: "20L",
            shelfLife: "18 Months",
          },
          {
            productName: "Neo-Sheath E",
            catalogNumber: "HM-51-A-SH",
            analyte: "Cleaner",
            reagentForm: "Liquid Stable",
            packSize: "20L",
            shelfLife: "18 Months",
          },
          {
            productName: "Neo-Rinse E",
            catalogNumber: "HM-51-A-RIN",
            analyte: "Cleaner",
            reagentForm: "Liquid Stable",
            packSize: "100mL",
            shelfLife: "18 Months",
          },
          {
            productName: "Phoenix NNC-3300(3-Diff) Reagents",
            catalogNumber: "",
            analyte: "",
            reagentForm: "",
            packSize: "",
            shelfLife: "",
            isHeader: true,
          },
          {
            productName: "Neo Diluent C",
            catalogNumber: "HM-3300-DIL",
            analyte: "Diluent",
            reagentForm: "Liquid Stable",
            packSize: "20 L/Ctn (2 x 10 L)",
            shelfLife: "24 Months",
          },
          {
            productName: "Neo Lyse C",
            catalogNumber: "HM-3300-LYS",
            analyte: "Lysing Agent",
            reagentForm: "Liquid Stable",
            packSize: "1 L/Bottle",
            shelfLife: "18 Months",
          },
          {
            productName: "Neo Detergent/Cleaner C",
            catalogNumber: "HM-3300-CLR",
            analyte: "Cleaner",
            reagentForm: "Liquid Stable",
            packSize: "20L",
            shelfLife: "18 Months",
          },
        ],
        note: "Note: All liquid stable reagents have an on-board stability of up to 60 days (60 days after opening) when stored according to manufacturer's instructions on the analyzer.",
      },
    },
    {
      id: "urit",
      name: "2) URIT ® Hematology Reagents",
      description: "For URIT 3000, 5500 series and other models",
      icon: Beaker,
      color: "from-rose-400 to-rose-600",
      bgColor: "bg-rose-50",
      totalProducts: 12,
      tableData: {
        headers: [
          "Product Name",
          "Catalog Number",
          "Analyte",
          "Reagent Form",
          "Pack Size",
          "Shelf Life",
        ],
        rows: [
          {
            productName: "URIT 3000, 3000 plus, 3010, 2900, 2900 plus",
            catalogNumber: "",
            analyte: "",
            reagentForm: "",
            packSize: "",
            shelfLife: "",
            isHeader: true,
          },
          {
            productName: "Neo Diluent 4",
            catalogNumber: "N121105",
            analyte: "Diluent",
            reagentForm: "Liquid Stable",
            packSize: "20 L",
            shelfLife: "24 Months",
          },
          {
            productName: "Neo Lyse 4",
            catalogNumber: "N121202",
            analyte: "Lysing Agent",
            reagentForm: "Liquid Stable",
            packSize: "1 L",
            shelfLife: "18 Months",
          },
          {
            productName: "Neo Cleaner 4",
            catalogNumber: "N121305",
            analyte: "Cleaner",
            reagentForm: "Liquid Stable",
            packSize: "20 L",
            shelfLife: "18 Months",
          },
          {
            productName: "Neo-CE-Clean",
            catalogNumber: "N11400",
            analyte: "Cleaner",
            reagentForm: "Liquid Stable",
            packSize: "100 mL",
            shelfLife: "18 Months",
          },
          {
            productName: "Neo-Probe Cleaner",
            catalogNumber: "N114100",
            analyte: "Cleaner",
            reagentForm: "Liquid Stable",
            packSize: "100 mL",
            shelfLife: "18 Months",
          },
          {
            productName: "URIT 5500, 5250, 5160, 5380",
            catalogNumber: "",
            analyte: "",
            reagentForm: "",
            packSize: "",
            shelfLife: "",
            isHeader: true,
          },
          {
            productName: "Neo Diluent F",
            catalogNumber: "N123145",
            analyte: "Sample Dilution & Cell Sizing",
            reagentForm: "Liquid Stable",
            packSize: "20 L",
            shelfLife: "24 Months",
          },
          {
            productName: "Neo Detergent F",
            catalogNumber: "N123105",
            analyte: "System Cleaning & De-proteinization",
            reagentForm: "Liquid Stable",
            packSize: "20 L",
            shelfLife: "18 Months",
          },
          {
            productName: "Neo Sheath F",
            catalogNumber: "N123125",
            analyte: "Hydrodynamic Focusing",
            reagentForm: "Liquid Stable",
            packSize: "20 L",
            shelfLife: "18 Months",
          },
          {
            productName: "Neo Lyse F",
            catalogNumber: "N123212",
            analyte: "WBC Differentiation & RBC Lysis",
            reagentForm: "Liquid Stable",
            packSize: "1 L",
            shelfLife: "18 Months",
          },
          {
            productName: "Neo-U-Stain",
            catalogNumber: "N117222",
            analyte: "Reticulocyte (RET) Staining",
            reagentForm: "Liquid Stable",
            packSize: "4 mL (RET tube)",
            shelfLife: "18 Months",
          },
          {
            productName: "Neo-Probe Cleaner",
            catalogNumber: "N114100",
            analyte: "Sample Probe Intensive Cleaning",
            reagentForm: "Liquid Stable",
            packSize: "100 mL",
            shelfLife: "18 Months",
          },
        ],
      },
    },
    {
      id: "dymind",
      name: "3) Dymind ® Hematology Reagents",
      description: "For DH800, DH615, DH76, DF55, DH33 analyzers",
      icon: TestTube,
      color: "from-rose-400 to-rose-600",
      bgColor: "bg-rose-50",
      totalProducts: 23,
      tableData: {
        headers: [
          "Product Name",
          "Catalog Number",
          "Analyte",
          "Reagent Form",
          "Pack Size",
          "Shelf Life",
        ],
        rows: [
          {
            productName: "DH800 AL (8-Diff) Reagents",
            catalogNumber: "",
            analyte: "",
            reagentForm: "",
            packSize: "",
            shelfLife: "",
            isHeader: true,
          },
          {
            productName: "D-80LD",
            catalogNumber: "DH800-D-80LD",
            analyte: "Diluent",
            reagentForm: "Liquid Stable",
            packSize: "4L",
            shelfLife: "24 Months",
          },
          {
            productName: "D-80FD (22mL)",
            catalogNumber: "DH800-D-80FD-22ML",
            analyte: "Diluent",
            reagentForm: "Liquid Stable",
            packSize: "22mL",
            shelfLife: "24 Months",
          },
          {
            productName: "D-80FD (42mL)",
            catalogNumber: "DH800-D-80FD-42ML",
            analyte: "Diluent",
            reagentForm: "Liquid Stable",
            packSize: "42mL",
            shelfLife: "24 Months",
          },
          {
            productName: "D-80DR (500mL)",
            catalogNumber: "DH800-D-80DR-500ML",
            analyte: "Diluent",
            reagentForm: "Liquid Stable",
            packSize: "500mL",
            shelfLife: "24 Months",
          },
          {
            productName: "D-80DR (1L)",
            catalogNumber: "DH800-D-80DR-1L",
            analyte: "Diluent",
            reagentForm: "Liquid Stable",
            packSize: "1L",
            shelfLife: "24 Months",
          },
          {
            productName: "CLE-P Cleanser (4mL*10)",
            catalogNumber: "DH800-CLE-P-4MLx10",
            analyte: "Cleaner",
            reagentForm: "Liquid Stable",
            packSize: "4mL*10",
            shelfLife: "18 Months",
          },
          {
            productName: "CLE-P Cleanser (50mL)",
            catalogNumber: "DH800-CLE-P-50ML",
            analyte: "Cleaner",
            reagentForm: "Liquid Stable",
            packSize: "50mL",
            shelfLife: "18 Months",
          },
          {
            productName: "DH615 with RET (6-Diff) Reagents",
            catalogNumber: "",
            analyte: "",
            reagentForm: "",
            packSize: "",
            shelfLife: "",
            isHeader: true,
          },
          {
            productName: "DIL-N",
            catalogNumber: "DH615-DIL-N",
            analyte: "Diluent",
            reagentForm: "Liquid Stable",
            packSize: "20L",
            shelfLife: "24 Months",
          },
          {
            productName: "DIN-R (500mL)",
            catalogNumber: "DH615-DIN-R-500ML",
            analyte: "Diluent",
            reagentForm: "Liquid Stable",
            packSize: "500mL",
            shelfLife: "24 Months",
          },
          {
            productName: "LYN-D (500mL)",
            catalogNumber: "DH615-LYN-D-500ML",
            analyte: "Lysing Agent",
            reagentForm: "Liquid Stable",
            packSize: "500mL",
            shelfLife: "18 Months",
          },
          {
            productName: "LYN-G (500mL)",
            catalogNumber: "DH615-LYN-G-500ML",
            analyte: "Lysing Agent",
            reagentForm: "Liquid Stable",
            packSize: "500mL",
            shelfLife: "18 Months",
          },
          {
            productName: "CLE-P Cleanser (50ML)",
            catalogNumber: "DH615-CLE-P-50ML",
            analyte: "Cleaner",
            reagentForm: "Liquid Stable",
            packSize: "50ml",
            shelfLife: "18 Months",
          },
          {
            productName: "DH 76 AL (5-Diff) Reagents",
            catalogNumber: "",
            analyte: "",
            reagentForm: "",
            packSize: "",
            shelfLife: "",
            isHeader: true,
          },
          {
            productName: "DIL-A Diluent",
            catalogNumber: "DH76-DIL-A",
            analyte: "Diluent",
            reagentForm: "Liquid Stable",
            packSize: "20L",
            shelfLife: "24 Months",
          },
          {
            productName: "LYA-1 Lyse",
            catalogNumber: "DH76-LYA-1",
            analyte: "Lysing Agent",
            reagentForm: "Liquid Stable",
            packSize: "500ml",
            shelfLife: "18 Months",
          },
          {
            productName: "DF 55 (5-Diff) Reagents -s/s",
            catalogNumber: "",
            analyte: "",
            reagentForm: "",
            packSize: "",
            shelfLife: "",
            isHeader: true,
          },
          {
            productName: "DIL-C Diluent",
            catalogNumber: "DF55-DIL-C",
            analyte: "Diluent",
            reagentForm: "Liquid Stable",
            packSize: "20L",
            shelfLife: "24 Months",
          },
          {
            productName: "LYC-1 Lyse",
            catalogNumber: "DF55-LYC-1",
            analyte: "Lysing Agent",
            reagentForm: "Liquid Stable",
            packSize: "200mL",
            shelfLife: "18 Months",
          },
          {
            productName: "DH33 (3-Diff) Reagents",
            catalogNumber: "",
            analyte: "",
            reagentForm: "",
            packSize: "",
            shelfLife: "",
            isHeader: true,
          },
          {
            productName: "DIL-E Diluent",
            catalogNumber: "DH33-DIL-E",
            analyte: "Diluent",
            reagentForm: "Liquid Stable",
            packSize: "20L",
            shelfLife: "24 Months",
          },
          {
            productName: "LYE-1 Lyse",
            catalogNumber: "DH33-LYE-1",
            analyte: "Lysing Agent",
            reagentForm: "Liquid Stable",
            packSize: "500 ml",
            shelfLife: "18 Months",
          },
          {
            productName: "CEL-P Cleanser",
            catalogNumber: "DH33-CEL-P",
            analyte: "Cleaner",
            reagentForm: "Liquid Stable",
            packSize: "50mL",
            shelfLife: "18 Months",
          },
        ],
        note: "Note: All liquid stable reagents have an on-board stability of up to 60 days (60 days after opening) when stored according to manufacturer's instructions on the analyzer.",
      },
    },
    {
      id: "sysmex",
      name: "4) Sysmex ® Hematology Reagents",
      description: "For XT, XE, XS, KX series analyzers",
      icon: Droplets,
      color: "from-rose-400 to-rose-600",
      bgColor: "bg-rose-50",
      totalProducts: 13,
      tableData: {
        headers: [
          "Product Name",
          "Catalog Number",
          "Analyte",
          "Reagent Form",
          "Pack Size",
          "Shelf Life",
        ],
        rows: [
          {
            productName:
              "Reagents for SYSMEX hematology analyzers XT-1800i/2000i",
            catalogNumber: "",
            analyte: "",
            reagentForm: "",
            packSize: "",
            shelfLife: "",
            isHeader: true,
          },
          {
            productName: "Neo-Diluent-ST",
            catalogNumber: "HM-SYS-DIL-ST",
            analyte: "Diluent",
            reagentForm: "Liquid Stable",
            packSize: "20L",
            shelfLife: "24 Months",
          },
          {
            productName: "Neo-SLS Lyser",
            catalogNumber: "HM-SYS-LYS-SLS",
            analyte: "Lysing Agent",
            reagentForm: "Liquid Stable",
            packSize: "500ml",
            shelfLife: "18 Months",
          },
          {
            productName: "Neo-4DS-Lyser",
            catalogNumber: "HM-SYS-LYS-4DS",
            analyte: "Lysing Agent",
            reagentForm: "Liquid Stable",
            packSize: "500mL",
            shelfLife: "18 Months",
          },
          {
            productName: "Neo-FB-Lyser",
            catalogNumber: "HM-SYS-LYS-FB",
            analyte: "Lysing Agent",
            reagentForm: "Liquid Stable",
            packSize: "5L",
            shelfLife: "20 Months",
          },
          {
            productName: "Neo-CeIN-Cleaner",
            catalogNumber: "HM-SYS-CLR-C",
            analyte: "Cleaner",
            reagentForm: "Liquid Stable",
            packSize: "100 mL",
            shelfLife: "18 Months",
          },
          {
            productName:
              "Reagents for SYSMEX hematology analyzers XE-2100, XS-800i/1000I",
            catalogNumber: "",
            analyte: "",
            reagentForm: "",
            packSize: "",
            shelfLife: "",
            isHeader: true,
          },
          {
            productName: "Neo-Diluent-ST",
            catalogNumber: "HM-SYS-DIL-ST2",
            analyte: "Diluent",
            reagentForm: "Liquid Stable",
            packSize: "20L",
            shelfLife: "24 Months",
          },
          {
            productName: "Neo-SLS Lyser",
            catalogNumber: "HM-SYS-LYS-SLS2",
            analyte: "Lysing Agent",
            reagentForm: "Liquid Stable",
            packSize: "500ml",
            shelfLife: "18 Months",
          },
          {
            productName:
              "Reagents for SYSMEX hematology analyzers KX-21, POCH 100i, XP 300",
            catalogNumber: "",
            analyte: "",
            reagentForm: "",
            packSize: "",
            shelfLife: "",
            isHeader: true,
          },
          {
            productName: "Neo-Diluent-ST",
            catalogNumber: "HM-SYS-DIL-ST2",
            analyte: "Diluent",
            reagentForm: "Liquid Stable",
            packSize: "20L",
            shelfLife: "24 Months",
          },
          {
            productName: "Neo-Lyser-WH",
            catalogNumber: "HM-SYS-LYS-WH",
            analyte: "Lysing Agent",
            reagentForm: "Liquid Stable",
            packSize: "500mL",
            shelfLife: "18 Months",
          },
          {
            productName: "Neo-CeIN-Cleaner",
            catalogNumber: "HM-SYS-CLR-C2",
            analyte: "Cleaner",
            reagentForm: "Liquid Stable",
            packSize: "100 mL",
            shelfLife: "18 Months",
          },
        ],
        note: "Note: All liquid stable reagents have an on-board stability of up to 60 days (60 days after opening) when stored according to manufacturer's instructions on the analyzer.",
      },
    },
    {
      id: "abx",
      name: "5) ABX / Horiba ® Hematology Reagents",
      description: "For MICROS, PENTRA series analyzers",
      icon: Filter,
      color: "from-rose-400 to-rose-600",
      bgColor: "bg-rose-50",
      totalProducts: 10,
      tableData: {
        headers: [
          "Product Name",
          "Catalog Number",
          "Analyte",
          "Reagent Form",
          "Pack Size",
          "Shelf Life",
        ],
        rows: [
          {
            productName:
              "Reagents for ABX HORIBA hematology analyzers MICROS 60, MICROS ES60, 45/OT18, BAYER ADVIA 60/ Horiba LC550",
            catalogNumber: "",
            analyte: "",
            reagentForm: "",
            packSize: "",
            shelfLife: "",
            isHeader: true,
          },
          {
            productName: "Neo Diluent-M",
            catalogNumber: "HM-ABX-DIL-M",
            analyte: "Diluent",
            reagentForm: "Liquid Stable",
            packSize: "20L",
            shelfLife: "24 Months",
          },
          {
            productName: "Neo M-Lyse",
            catalogNumber: "HM-ABX-LYS-M",
            analyte: "Lysing Agent",
            reagentForm: "Liquid Stable",
            packSize: "1L",
            shelfLife: "18 Months",
          },
          {
            productName: "Neo-Cleaner -M",
            catalogNumber: "HM-ABX-CLR-M",
            analyte: "Cleaner",
            reagentForm: "Liquid Stable",
            packSize: "1L",
            shelfLife: "18 Months",
          },
          {
            productName: "Neo-Cleaner-C",
            catalogNumber: "HM-ABX-CLR-C",
            analyte: "Cleaner",
            reagentForm: "Liquid Stable",
            packSize: "500mL",
            shelfLife: "18 Months",
          },
          {
            productName:
              "Reagents for ABX HORIBA hematology analyzers PENTRA60, PENTRA80",
            catalogNumber: "",
            analyte: "",
            reagentForm: "",
            packSize: "",
            shelfLife: "",
            isHeader: true,
          },
          {
            productName: "Neo-Diluent-P",
            catalogNumber: "HM-PEN-DIL",
            analyte: "Diluent",
            reagentForm: "Liquid Stable",
            packSize: "20L",
            shelfLife: "24 Months",
          },
          {
            productName: "Neo-a-Lyse",
            catalogNumber: "HM-PEN-LYS-A",
            analyte: "Lysing Agent",
            reagentForm: "Liquid Stable",
            packSize: "400 mL",
            shelfLife: "18 Months",
          },
          {
            productName: "Neo-EO-Lyse",
            catalogNumber: "HM-PEN-LYS-EO",
            analyte: "Lysing Agent",
            reagentForm: "Liquid Stable",
            packSize: "1L",
            shelfLife: "18 Months",
          },
          {
            productName: "Neo-BA-Lyse2",
            catalogNumber: "HM-PEN-LYS-BA2",
            analyte: "Lysing Agent",
            reagentForm: "Liquid Stable",
            packSize: "1L",
            shelfLife: "18 Months",
          },
          {
            productName: "Neo-Cleaner-P",
            catalogNumber: "HM-PEN-CLR-P",
            analyte: "Cleaner",
            reagentForm: "Liquid Stable",
            packSize: "1L",
            shelfLife: "18 Months",
          },
        ],
      },
    },
    {
      id: "nihon-kohden",
      name: "6) Nihon Kohden ® Hematology Reagents",
      description: "For MEK series analyzers",
      icon: Thermometer,
      color: "from-rose-400 to-rose-600",
      bgColor: "bg-rose-50",
      totalProducts: 4,
      tableData: {
        headers: [
          "Product Name",
          "Catalog Number",
          "Analyte",
          "Reagent Form",
          "Pack Size",
          "Shelf Life",
        ],
        rows: [
          {
            productName:
              "Reagents for NIHON KOHDEN hematology analyzers MEK-6318, 6400, 6420, 6410, 6510, 6500",
            catalogNumber: "",
            analyte: "",
            reagentForm: "",
            packSize: "",
            shelfLife: "",
            isHeader: true,
          },
          {
            productName: "Neo-Diluent NK",
            catalogNumber: "HM-NK-DIL",
            analyte: "Diluent",
            reagentForm: "Liquid Stable",
            packSize: "20L",
            shelfLife: "24 Months",
          },
          {
            productName: "Neo-Rinse NK",
            catalogNumber: "HM-NK-RIN",
            analyte: "Cleaner",
            reagentForm: "Liquid Stable",
            packSize: "5L",
            shelfLife: "18 Months",
          },
          {
            productName: "Neo-Lysis NK",
            catalogNumber: "HM-NK-LYS",
            analyte: "Lysing Agent",
            reagentForm: "Liquid Stable",
            packSize: "500mL",
            shelfLife: "18 Months",
          },
          {
            productName: "Neo-Cleanac NK",
            catalogNumber: "HM-NK-CLN",
            analyte: "Cleaner",
            reagentForm: "Liquid Stable",
            packSize: "5L",
            shelfLife: "18 Months",
          },
        ],
      },
    },
    {
      id: "abbott",
      name: "7) Abbott ® Hematology Reagents",
      description: "For CD series analyzers",
      icon: Wrench,
      color: "from-rose-400 to-rose-600",
      bgColor: "bg-rose-50",
      totalProducts: 6,
      tableData: {
        headers: [
          "Product Name",
          "Catalog Number",
          "Analyte",
          "Reagent Form",
          "Pack Size",
          "Shelf Life",
        ],
        rows: [
          {
            productName:
              "Reagents for ABBOTT hematology analyzers CD3000, CD3500, CD3700",
            catalogNumber: "",
            analyte: "",
            reagentForm: "",
            packSize: "",
            shelfLife: "",
            isHeader: true,
          },
          {
            productName: "Neo-Diluent CD5",
            catalogNumber: "HM-CD-DIL",
            analyte: "Diluent",
            reagentForm: "Liquid Stable",
            packSize: "20L",
            shelfLife: "24 Months",
          },
          {
            productName: "Neo-WIC/HGB Lyse",
            catalogNumber: "HM-CD-LYS",
            analyte: "Lysing Agent",
            reagentForm: "Liquid Stable",
            packSize: "5L",
            shelfLife: "18 Months",
          },
          {
            productName: "Neo-Detergent CD5",
            catalogNumber: "HM-CD-DET",
            analyte: "Cleaner",
            reagentForm: "Liquid Stable",
            packSize: "20L",
            shelfLife: "18 Months",
          },
          {
            productName: "Neo-Sheath",
            catalogNumber: "HM-CD-SH",
            analyte: "Cleaner",
            reagentForm: "Liquid Stable",
            packSize: "20L",
            shelfLife: "18 Months",
          },
          {
            productName: "Neo-EZ-Cleaner",
            catalogNumber: "HM-CD-EZ",
            analyte: "Cleaner",
            reagentForm: "Liquid Stable",
            packSize: "50mL",
            shelfLife: "18 Months",
          },
        ],
      },
    },
    {
      id: "beckman",
      name: "8) Beckman Coulter ® Hematology Reagents",
      description: "For LH, GENS, STKS, HmX, MAXM analyzers",
      icon: RefreshCw,
      color: "from-rose-400 to-rose-600",
      bgColor: "bg-rose-50",
      totalProducts: 5,
      tableData: {
        headers: [
          "Product Name",
          "Catalog Number",
          "Analyte",
          "Reagent Form",
          "Pack Size",
          "Shelf Life",
        ],
        rows: [
          {
            productName:
              "Reagents for BECKMAN COULTER hematology analyzers LH-750, GENS-S, STKS, HmX, MAXM",
            catalogNumber: "",
            analyte: "",
            reagentForm: "",
            packSize: "",
            shelfLife: "",
            isHeader: true,
          },
          {
            productName: "Neo-Isotonic Diluent",
            catalogNumber: "HM-BC-DIL",
            analyte: "Diluent",
            reagentForm: "Liquid Stable",
            packSize: "20L",
            shelfLife: "24 Months",
          },
          {
            productName: "Neo-Lyse Diff",
            catalogNumber: "HM-BC-LYS-D",
            analyte: "Lysing Agent",
            reagentForm: "Liquid Stable",
            packSize: "1L",
            shelfLife: "18 Months",
          },
          {
            productName: "Neo-Lyse Pack",
            catalogNumber: "HM-BC-LYS-P",
            analyte: "Lysing Agent",
            reagentForm: "Liquid Stable",
            packSize: "1900mL+500mL",
            shelfLife: "18 Months",
          },
          {
            productName: "Neo-E-Cleaner",
            catalogNumber: "HM-BC-E-CLR",
            analyte: "Cleaner",
            reagentForm: "Liquid Stable",
            packSize: "5L",
            shelfLife: "18 Months",
          },
        ],
        note: "Note: All liquid stable reagents have an on-board stability of up to 60 days (60 days after opening) when stored according to manufacturer's instructions on the analyzer.",
      },
    },
    {
      id: "mindray",
      name: "9) Mindray ® Hematology Reagents",
      description: "For BC series analyzers",
      icon: Beaker,
      color: "from-rose-400 to-rose-600",
      bgColor: "bg-rose-50",
      totalProducts: 6,
      tableData: {
        headers: [
          "Product Name",
          "Catalog Number",
          "Analyte",
          "Reagent Form",
          "Pack Size",
          "Shelf Life",
        ],
        rows: [
          {
            productName:
              "Reagents for MINDRAY hematology analyzers BC 3000, BC 3000+, BC 2800, BC 2600, BC 2300, BC 3200, BC 3600",
            catalogNumber: "",
            analyte: "",
            reagentForm: "",
            packSize: "",
            shelfLife: "",
            isHeader: true,
          },
          {
            productName: "Neo- Diluent BC3",
            catalogNumber: "HM-MDR-DIL-3",
            analyte: "Diluent",
            reagentForm: "Liquid Stable",
            packSize: "20L",
            shelfLife: "24 Months",
          },
          {
            productName: "Neo-Rinse & HGB Ref",
            catalogNumber: "HM-MDR-RIN",
            analyte: "Lysing Agent",
            reagentForm: "Liquid Stable",
            packSize: "20L",
            shelfLife: "18 Months",
          },
          {
            productName: "Neo-Lyse BC3",
            catalogNumber: "HM-MDR-LYS-3",
            analyte: "Lysing Agent",
            reagentForm: "Liquid Stable",
            packSize: "500mL",
            shelfLife: "18 Months",
          },
          {
            productName: "Neo-CE-Clean",
            catalogNumber: "HM-MDR-CE-CLR",
            analyte: "Cleaner",
            reagentForm: "Liquid Stable",
            packSize: "100 mL",
            shelfLife: "18 Months",
          },
          {
            productName: "Neo-Probe Cleaner",
            catalogNumber: "HM-MDR-PB-CLR",
            analyte: "Cleaner",
            reagentForm: "Liquid Stable",
            packSize: "100 mL",
            shelfLife: "18 Months",
          },
        ],
      },
    },
    {
      id: "orphee",
      name: "10) Orphee ® Hematology Reagents",
      description: "For MYTHIC 18 analyzer",
      icon: Beaker,
      color: "from-rose-400 to-rose-600",
      bgColor: "bg-rose-50",
      totalProducts: 3,
      tableData: {
        headers: [
          "Product Name",
          "Catalog Number",
          "Analyte",
          "Reagent Form",
          "Pack Size",
          "Shelf Life",
        ],
        rows: [
          {
            productName:
              "Reagents for ORPHEE hematology analyzers ORPHEE MYTHIC 18",
            catalogNumber: "",
            analyte: "",
            reagentForm: "",
            packSize: "",
            shelfLife: "",
            isHeader: true,
          },
          {
            productName: "Neo-Diluent-MT",
            catalogNumber: "HM-ORP-DIL",
            analyte: "Diluent",
            reagentForm: "Liquid Stable",
            packSize: "20L",
            shelfLife: "24 Months",
          },
          {
            productName: "Neo-MT-Lyse",
            catalogNumber: "HM-ORP-LYS",
            analyte: "Lysing Agent",
            reagentForm: "Liquid Stable",
            packSize: "1L",
            shelfLife: "18 Months",
          },
          {
            productName: "Neo-Cleaner-MT",
            catalogNumber: "HM-ORP-CLR",
            analyte: "Cleaner",
            reagentForm: "Liquid Stable",
            packSize: "1L",
            shelfLife: "18 Months",
          },
        ],
        note: "Note: All liquid stable reagents have an on-board stability of up to 60 days (60 days after opening) when stored according to manufacturer's instructions on the analyzer.",
      },
    },
    {
      id: "calibrators",
      name: "Calibrators and Controls",
      description: "Hematology controls and calibrators for all major brands",
      icon: FileText,
      color: "from-rose-400 to-rose-600",
      bgColor: "bg-rose-50",
      totalProducts: 3,
      tableData: {
        headers: [
          "Product Name",
          "Catalog Number",
          "Control Level",
          "Reagent Form",
          "Pack Size",
          "Shelf Life",
        ],
        rows: [
          {
            productName: "Neo Control N",
            catalogNumber: "HM-C-N",
            analyte: "Normal",
            reagentForm: "Liquid Stable",
            packSize: "1×3 ml, 3×3 ml, 6×3 ml, 12×3 ml",
            shelfLife: "3 Months",
          },
          {
            productName: "Neo Control L",
            catalogNumber: "HM-C-L",
            analyte: "Low",
            reagentForm: "Liquid Stable",
            packSize: "1×3 ml, 3×3 ml, 6×3 ml, 12×3 ml",
            shelfLife: "3 Months",
          },
          {
            productName: "Neo Control H",
            catalogNumber: "HM-C-H",
            analyte: "High",
            reagentForm: "Liquid Stable",
            packSize: "1×3 ml, 3×3 ml, 6×3 ml, 12×3 ml",
            shelfLife: "3 Months",
          },
        ],
        note: "Compatibility Note: Our hematology controls and calibrators are validated for compatibility with a wide range of 3-part and 5-part hematology analyzers used on the worldwide market, including but not limited to Abbott, ABX, Nihon Kohden, Sysmex, Beckman Coulter, Mindray, URIT, and Hycel. For detailed information on specific instrument compatibility, please consult the product insert.",
        additionalInfo:
          "Stability: All liquid stable reagents have an on-board stability of up to 28 days (28 days after opening) when stored according to manufacturer's instructions on the analyzer. Storage condition: Storage in Refrigerator.",
      },
    },
  ];

  const hematologyInstrumentationCategories = [
    {
      id: "3-diff",
      name: "1) 3-diff Hematology Analyzers",
      description: "Compact analyzers for basic CBC with 3-part differential",
      icon: Cpu,
      color: "from-red-400 to-red-600",
      bgColor: "bg-red-50",
      instruments: [
        {
          id: "bh-70p",
          name: "BH-70P Automated Hematology Analyzer",
          model: "BH-70P",
          category: "3-diff",
          image: "bh-70p.jpg",
          overview:
            "The BH-70P is a high-performance, compact 3-part differential analyzer designed for efficiency and precision in the laboratory. By utilizing a double-chamber system, it achieves a high throughput while maintaining a low footprint and cost-effective reagent consumption.",
          features: [
            "High Efficiency: Delivers up to 72 tests per hour using a double-chamber design.",
            "Cost-Effective: Operates on a streamlined 2-reagent system (Diluent and Lyse) to minimize overhead.",
            "Intuitive Interface: Features a large 10.4-inch color touchscreen for easy navigation and workflow management.",
            "Massive Storage: Internal memory holds up to 1,000,000 results, including full histograms.",
            "Advanced Connectivity: Full LIS/HIS integration via HL7 protocol and 6 USB ports for external peripherals.",
            "Reliable Technology: Uses proven Electrical Impedance and Photoelectric Colorimetry for clinical accuracy.",
          ],
          reagentSystem: [
            "Open System: Offers flexibility in reagent sourcing.",
            "Minimal Consumables: Only requires Diluent and Lyse, reducing the complexity of inventory.",
            "Certified Quality: Fully compliant with CE Mark, ISO 9001, and ISO 13485 standards.",
          ],
          support: [
            "Elhoda Service: Includes professional installation, user training, and nationwide technical support.",
          ],
          specifications: {
            measurementPrinciples: {
              "WBC/RBC/PLT": "Electrical Impedance",
              HGB: "Photoelectric Colorimetry",
            },
            throughput: "Up to 72 tests per hour",
            parameters: {
              WBC: ["WBC", "LYM#", "MID#", "GRAN#", "LYM%", "MID%", "GRAN%"],
              RBC: [
                "RBC",
                "HGB",
                "HCT",
                "MCV",
                "MCH",
                "MCHC",
                "RDW-CV",
                "RDW-SD",
              ],
              PLT: ["PLT", "MPV", "PDW-SD", "PDW-CV", "PCT", "P-LCR", "P-LCC"],
            },
            histograms: 3,
            sampleVolume: {
              "Whole Blood": "8.5 µL",
              "Pre-diluted": "20 µL",
            },
            apertureDiameter: "WBC: 100 µm",
            dataManagement: {
              storage: "1,000,000 results",
              qcModes: ["L-J", "X", "X-R", "X-B"],
            },
            display: '10.4" TFT Touchscreen (800 × 600)',
            interfaces: ["RS232", "6 × USB ports", "HL7 protocol support"],
            physicalSpecs: "Size: 380 × 305 × 395 mm",
            power: "AC 100–240V; Built-in 57 mm thermal printer",
          },
        },
      ],
    },
    {
      id: "5-diff",
      name: "2) 5-diff Hematology Analyzers",
      description:
        "Advanced analyzers for comprehensive CBC with 5-part differential",
      icon: Activity,
      color: "from-red-400 to-red-600",
      bgColor: "bg-red-50",
      instruments: [
        {
          id: "bh-5160",
          name: "BH-5160 Automated Hematology Analyzer (5-Part Diff)",
          model: "BH-5160",
          category: "5-diff",
          image: "BH-5160.jpg",
          overview:
            "The BH-5160 represents a significant step up in diagnostic capability for medium-to-high workload laboratories. Unlike standard 3-part systems, the BH-5160 provides a true 5-part differential, precisely separating white blood cells into Neutrophils, Lymphocytes, Monocytes, Eosinophils, and Basophils. It combines advanced laser flow cytometry with a compact bench-top design to deliver clinical accuracy with optimized operating costs.",
          features: [
            "Precision WBC Differentiation: Utilizes Laser Flow Cytometry to provide accurate separation of all five leukocyte types.",
            "Advanced Graphics: Offers 2D and 3D scattergrams for more detailed WBC classification compared to simple histograms.",
            "Operational Efficiency: Designed for continuous laboratory operation with high-speed processing and a large color touchscreen.",
            "Smart Design: Compact footprint with a front-access design for easy maintenance and an intelligent alarm system for real-time monitoring.",
            "Seamless Integration: Fully compatible with LIS/HIS environments using the HL7 protocol, featuring LAN and USB connectivity.",
            "Economic Performance: Optimized for low reagent consumption and compatible with open reagent systems.",
          ],
          reagentSystem: [
            "Reagent Flexibility: Supports an open reagent system with dedicated consumables for maximum stability.",
          ],
          support: [
            "Reliability: Includes real-time system monitoring and comprehensive preventive maintenance programs.",
            "Elhoda Support: Professional installation, comprehensive user training, and nationwide technical service coverage.",
          ],
          specifications: {
            measurementPrinciples: {
              "WBC Diff": "Laser Flow Cytometry",
              "RBC/PLT": "Electrical Impedance",
              HGB: "Colorimetric Method",
            },
            parameters: {
              WBC: ["WBC", "LYM#%", "MON#%", "NEU#%", "EOS#%", "BAS#%"],
              RBC: [
                "RBC",
                "HGB",
                "HCT",
                "MCV",
                "MCH",
                "MCHC",
                "RDW-CV",
                "RDW-SD",
              ],
              PLT: ["PLT", "MPV", "PDW", "PCT", "P-LCR"],
            },
            graphics: "3 Histograms (WBC/RBC/PLT) + 2D/3D Scattergrams",
            sampleModes: ["Whole blood", "Pre-diluted modes supported"],
            dataManagement:
              "Large internal memory for results, histograms, and scattergrams",
            display: "Large color touchscreen interface",
            connectivity: [
              "USB",
              "LAN (Ethernet)",
              "RS232",
              "LIS/HIS (HL7) compatible",
            ],
            qualityControl:
              "Multi-level QC, Levey-Jennings charts, Auto/Manual calibration",
            compliance: ["CE Mark", "ISO 9001", "ISO 13485"],
          },
        },
        {
          id: "ph-51ncc",
          name: "PH-51NCC (BH-5390) Advanced Automated Hematology Analyzer",
          model: "PH-51NCC / BH-5390",
          category: "5-diff",
          image: "PH-51NCC.jpg",
          overview:
            "The PH-51NCC (BH-5390) is a sophisticated 5-part differential analyzer engineered for laboratories that prioritize high analytical precision and intelligent automation. Utilizing advanced laser flow cytometry and an optimized fluidics architecture, it delivers rapid, high-stability CBC + DIFF results. Its design balances a high-throughput workload with a compact, bench-top footprint, making it a reliable centerpiece for medium-to-high volume clinical settings.",
          features: [
            "Precision Cytometry: Employs Multi-angle Laser Scatter to ensure precise leukocyte classification.",
            "Intelligent Workflow: Features a high-capacity internal memory and a large color touchscreen with intuitive software.",
            "High-Volume Reliability: Designed for continuous routine operation with stable optical systems and robust fluidics.",
            "Total Connectivity: Full LIS/HIS integration via HL7 protocol across multiple interfaces (LAN, USB, RS232).",
            "Smart Maintenance: Equipped with an intelligent alarm diagnostic system and a front-access design.",
          ],
          reagentSystem: [
            "Economic Operation: Optimized fluidics lead to exceptionally low reagent consumption per test.",
            "Open System: Supports dedicated open-system reagents, providing procurement flexibility.",
          ],
          support: [
            "Elhoda Support: Professional installation, comprehensive user training, and nationwide technical service coverage.",
          ],
          specifications: {
            measurementPrinciples: {
              "WBC Differential": "Laser Flow Cytometry",
              "RBC/PLT": "Electrical Impedance",
              HGB: "Colorimetric Method",
            },
            parameters:
              "Complete CBC + 5-Part DIFF including advanced platelet indices",
            graphics:
              "3 Histograms (WBC/RBC/PLT) + Multi-angle Scattergrams for WBC differentiation",
            sampleHandling: "Supports Whole Blood and Pre-diluted modes",
            dataStorage:
              "High-capacity internal memory with full graphical records",
            display: "Large color touchscreen interface",
            connectivity: [
              "USB",
              "LAN (Ethernet)",
              "RS232",
              "LIS compatible (HL7 Protocol)",
            ],
            qualityControl:
              "Multi-level QC programs with Levey-Jennings charts; Auto/Manual calibration",
            hardwareDesign:
              "Compact benchtop analyzer with built-in or external printer support",
            compliance: ["CE Mark", "ISO 9001", "ISO 13485"],
          },
        },
      ],
    },
    {
      id: "6-diff",
      name: "3) 6-diff Hematology Analyzers",
      description:
        "Premium analyzers with advanced parameters and body fluid analysis",
      icon: Microscope,
      color: "from-red-400 to-red-600",
      bgColor: "bg-red-50",
      instruments: [
        {
          id: "bh-6810",
          name: "BH-6180 Advanced Hematology Analyzer (6-Part Differential)",
          model: "BH-6180",
          category: "6-diff",
          image: "BH-6180.jpg",
          overview:
            "The BH-6180 is a flagship-tier diagnostic platform designed for high-volume hospitals and reference laboratories. While it provides a 'True 5-Part Differential,' it is categorized as a 6-part capable system due to its ability to report IMG (#,%) (Immature Granulocytes) and RET (Reticulocytes), offering a much deeper clinical insight into bone marrow activity and infection markers than standard analyzers. It combines advanced laser flow cytometry with high-end visualization tools, including 3D stereograms, to provide superior diagnostic confidence.",
          features: [
            "Advanced Parameter Suite: Provides 37 reportable parameters including Reticulocytes (RET), Immature Platelet Fraction (IPF), and Nucleated Red Blood Cells (NRBC).",
            "Body Fluid Analysis: Includes a dedicated mode for testing Body Fluids (WBC-BF, RBC-BF, etc.), essential for specialized clinical diagnostics.",
            "3D Visualization: Utilizes 3D Stereograms alongside 2D scattergrams to visualize cell populations from multiple angles for better abnormality detection.",
            "Research Depth: Offers 50 research parameters, providing data on cell morphology and platelet clumps for complex clinical studies.",
            "High Throughput: Engineered for high-speed, continuous processing to handle heavy daily workloads.",
          ],
          reagentSystem: [
            "Optimized Consumables: Uses dedicated URIT hematology reagents with an open-system option.",
            "Continuous Monitoring: The system performs constant self-diagnostics and includes an intelligent alarm system.",
            "Comprehensive QC: Features multi-level QC programs, Levey-Jennings charts, and both automatic and manual calibration.",
          ],
          support: [
            "Elhoda Support: Professional installation, comprehensive user training, and nationwide technical service coverage.",
          ],
          specifications: {
            measurementPrinciples: {
              "WBC/DIFF/RET": "Laser Flow Cytometry",
              "RBC/PLT": "Electrical Impedance",
              HGB: "Colorimetric Method",
            },
            reportableParameters:
              "37 Total: Includes WBC Diff, NRBC, RET (HFR, MFR, LFR), IRF, IPF, RHE, and Immature Granulocytes (IMG)",
            researchParameters:
              "50 Total: Includes HPC, HFC, NLR, PLR, and specialized cell morphology indices",
            bodyFluidMode:
              "7 Reportable parameters (WBC-BF, RBC-BF, MN, PMN, etc.)",
            graphics:
              "3 Histograms + 5 Scattergrams + 3 specialized 3D Stereograms",
            dataStorage:
              "Ultra-high capacity memory for patient results, histograms, and scattergrams",
            connectivity:
              "Full LIS/HIS integration (HL7); LAN, USB, and RS232 interfaces",
            operation: "Large color touchscreen with an intuitive, modern UI",
            configuration: "Large bench-top or floor-standing configuration",
          },
        },
      ],
    },
  ];
  // Clear hematology selection
  const clearHematologySelection = () => {
    setActiveSubcategory(null);
    setSearchTerm("");
  };

  // Clear hematology instrument selection
  const clearHematologyInstrumentSelection = () => {
    setActiveHematologyInstrument(null);
    setActiveInstrumentTab("overview");
  };

  const hematologyReagentsCategory = {
    id: "hematology-reagents",
    name: "IV. HEMATOLOGY REAGENTS",
    description: "Complete range of hematology reagents for all major brands",
    icon: Droplets,
    color: "from-rose-500 to-pink-600",
    bgColor: "bg-gradient-to-r from-rose-100 to-pink-100",
    type: "hematology",
    brands: hematologyCategories,
  };

  const hematologyInstrumentationCategory = {
    id: "hematology-instrumentation",
    name: "V. HEMATOLOGY INSTRUMENTATION",
    description:
      "Complete range of hematology analyzers from 3-part to 6-part differential",
    icon: Cpu,
    color: "from-red-500 to-red-600",
    bgColor: "bg-gradient-to-r from-red-100 to-red-100",
    type: "hematology-instrumentation",
    subcategories: hematologyInstrumentationCategories,
  };

  // Combine all categories
  const allCategories = [
    ...ivdCategories.map((cat) => ({
      ...cat,
      icon: enhancedIcons[cat.icon] || cat.icon,
      bgColor: `bg-gradient-to-r ${getCategoryColors(cat.id).light}`,
    })),
    hematologyReagentsCategory,
    hematologyInstrumentationCategory,
  ];

  // Enhanced renderTableAsCards with better colors
  const renderTableAsCards = (tableData, tableName, tableId) => {
    const isExpanded = expandedTables[tableId];
    const colors = getCategoryColors(
      activeSubcategory?.id || activeCategory?.id,
    );

    return (
      <div key={tableId} className="mb-6">
        <button
          onClick={() => toggleTable(tableId)}
          className={`w-full bg-gradient-to-r ${colors.light} border-2 ${colors.border} rounded-2xl p-4 flex items-center justify-between transition-all hover:shadow-lg active:scale-[0.98] hover:translate-y-[-2px]`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`p-3 rounded-xl ${isExpanded ? colors.light : "bg-white"} shadow-sm`}
            ></div>
            <div className="text-left">
              <h3 className="font-bold text-gray-900 text-lg">{tableName}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span
                  className={`text-sm px-3 py-1 ${colors.light} ${colors.text} rounded-full font-medium`}
                >
                  {tableData.rows.length} items
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Table className={`w-6 h-6 ${colors.icon}`} />
          </div>
        </button>

        {isExpanded && (
          <div className="mt-4 space-y-4 animate-fadeIn">
            {tableData.rows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="bg-gradient-to-r from-white to-gray-50 rounded-2xl border border-gray-200 p-4 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {row.product && (
                  <div className="mb-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-gray-900 text-lg">
                        {row.product}
                      </h4>
                      {row.tests && (
                        <span
                          className={`text-sm ${colors.light} ${colors.text} px-3 py-1 rounded-full font-medium`}
                        >
                          {row.tests} tests
                        </span>
                      )}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-3">
                  {row.method && (
                    <div className="bg-white p-3 rounded-lg border border-gray-100">
                      <p className="text-xs text-gray-500 uppercase font-semibold">
                        Method
                      </p>
                      <p className="font-medium text-gray-900 mt-1">
                        {row.method}
                      </p>
                    </div>
                  )}

                  {row.packSize && (
                    <div className="bg-white p-3 rounded-lg border border-gray-100">
                      <p className="text-xs text-gray-500 uppercase font-semibold">
                        Pack Size
                      </p>
                      <p className="font-medium text-gray-900 mt-1">
                        {row.packSize}
                      </p>
                    </div>
                  )}

                  {row.type && (
                    <div className="bg-white p-3 rounded-lg border border-gray-100">
                      <p className="text-xs text-gray-500 uppercase font-semibold">
                        Type
                      </p>
                      <p className="font-medium text-gray-900 mt-1">
                        {row.type}
                      </p>
                    </div>
                  )}

                  {row.shelfLife && (
                    <div className="bg-white p-3 rounded-lg border border-gray-100">
                      <p className="text-xs text-gray-500 uppercase font-semibold">
                        Shelf Life
                      </p>
                      <p className="font-medium text-gray-900 mt-1">
                        {row.shelfLife}
                      </p>
                    </div>
                  )}

                  {row.r1 && (
                    <div className="bg-white p-3 rounded-lg border border-gray-100">
                      <p className="text-xs text-gray-500 uppercase font-semibold">
                        R1 Size
                      </p>
                      <p className="font-medium text-gray-900 mt-1">{row.r1}</p>
                    </div>
                  )}

                  {row.r2 && (
                    <div className="bg-white p-3 rounded-lg border border-gray-100">
                      <p className="text-xs text-gray-500 uppercase font-semibold">
                        R2 Size
                      </p>
                      <p className="font-medium text-gray-900 mt-1">{row.r2}</p>
                    </div>
                  )}
                </div>

                {row.note && (
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <div className="flex items-start gap-2">
                      <Info
                        className={`w-4 h-4 ${colors.icon} mt-0.5 flex-shrink-0`}
                      />
                      <p className="text-sm text-gray-600">{row.note}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  // Path generation helper
  const getBreadcrumbPath = () => {
    const paths = [{ name: "Products", path: "/products" }];

    if (activeCategory) {
      paths.push({
        name: activeCategory.name.split(". ")[1] || activeCategory.name,
        path: `/products/${activeCategory.id}`,
      });
    }

    if (activeSubcategory) {
      paths.push({
        name: activeSubcategory.name.split(". ")[1] || activeSubcategory.name,
        path: `/products/${activeCategory.id}/${activeSubcategory.id}`,
      });
    }

    if (activeHematologyInstrument) {
      paths.push({
        name:
          activeHematologyInstrument.name.split(". ")[1] ||
          activeHematologyInstrument.name,
        path: `/products/${activeCategory.id}/${activeHematologyInstrument.id}`,
      });
    }

    return paths;
  };

  const renderCollapsibleTable = (tableData, tableName, tableId) => {
    if (isMobile && viewMode === "cards") {
      return renderTableAsCards(tableData, tableName, tableId);
    }

    const isExpanded = expandedTables[tableId];
    const colors = getCategoryColors(
      activeSubcategory?.id || activeCategory?.id,
    );

    return (
      <div
        key={tableId}
        className="border border-gray-200 rounded-xl overflow-hidden mb-4 shadow-sm hover:shadow-md transition-shadow"
      >
        <button
          onClick={() => toggleTable(tableId)}
          className={`w-full ${colors.light} hover:bg-gradient-to-r ${colors.light} p-4 flex items-center justify-between transition-colors`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`p-2 rounded-lg ${isExpanded ? colors.light : "bg-white"} shadow-sm`}
            ></div>
            <div className="text-left">
              <h3 className="font-bold text-gray-900 text-sm md:text-base">
                {tableName}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span
                  className={`text-xs px-2 py-1 ${colors.light} ${colors.text} rounded-full font-medium`}
                >
                  {tableData.rows.length} items
                </span>
                <span className="text-xs text-gray-500 hidden sm:inline">
                  Click to {isExpanded ? "collapse" : "expand"}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Table className={`w-5 h-5 ${colors.icon}`} />
          </div>
        </button>

        {isExpanded && (
          <div className="animate-fadeIn">
            {isMobile && (
              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-b border-amber-200 p-3">
                <div className="flex items-center gap-2 text-amber-800 text-sm">
                  <Info className="w-4 h-4 flex-shrink-0" />
                  <span>Swipe horizontally to view full table</span>
                </div>
              </div>
            )}

            <div className="overflow-x-auto">
              <div className="min-w-[600px]">
                <table className="w-full divide-y divide-gray-200">
                  <thead className={`${colors.light}`}>
                    <tr>
                      {tableData.headers.map((header, index) => (
                        <th
                          key={index}
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider border-r border-gray-300 last:border-r-0 whitespace-nowrap"
                        >
                          {header}
                        </th>
                      ))}
                      {tableData.rows.some((row) => row.note) && (
                        <th className="px-4 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider whitespace-nowrap">
                          NOTES
                        </th>
                      )}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {tableData.rows.map((row, rowIndex) => (
                      <tr
                        key={rowIndex}
                        className={`hover:bg-gray-50 transition-colors ${
                          rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                        }`}
                      >
                        {tableData.headers.map((header, colIndex) => {
                          let cellContent = "";

                          switch (header) {
                            case "PRODUCT":
                              cellContent = row.product || "";
                              break;
                            case "METHOD":
                              cellContent = row.method || "";
                              break;
                            case "PACK SIZE":
                              cellContent = row.packSize || "";
                              break;
                            case "TEST/KIT":
                              cellContent = row.tests || "";
                              break;
                            case "Shelf Life":
                              cellContent = row.shelfLife || "";
                              break;
                            case "TYPE":
                              cellContent = row.type || "";
                              break;
                            case "R1 Size":
                              cellContent = row.r1 || "";
                              break;
                            case "R2 Size":
                              cellContent = row.r2 || "";
                              break;
                            default:
                              cellContent =
                                row[
                                  header.toLowerCase().replace(/[^a-z]/g, "")
                                ] || "";
                          }

                          return (
                            <td
                              key={colIndex}
                              className="px-4 py-3 text-sm text-gray-900 border-r border-gray-200 last:border-r-0 whitespace-nowrap"
                            >
                              {cellContent}
                            </td>
                          );
                        })}
                        {tableData.rows.some((r) => r.note) && (
                          <td className="px-4 py-3 text-sm text-gray-600 max-w-xs">
                            {row.note && (
                              <div className="flex items-start">
                                <Info
                                  className={`w-4 h-4 ${colors.icon} mr-2 mt-0.5 flex-shrink-0`}
                                />
                                <span className="break-words">{row.note}</span>
                              </div>
                            )}
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Add a new renderInstrument function
  const renderInstrument = (instrument) => {
    const colors = getCategoryColors("clinical-chemistry-instrumentation");

    return (
      <div key={instrument.id} className="space-y-6 md:space-y-8">
        {/* Instrument Header */}
        <div
          className={`rounded-2xl p-4 md:p-6 mb-6 ${colors.light} border ${colors.border} shadow-lg`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className={`p-3 rounded-xl bg-gradient-to-r ${colors.gradient} shadow-md`}
            >
              <instrument.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                {instrument.name}
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                {instrument.description}
              </p>
            </div>
          </div>

          {/* Instrument Image (if available) */}
          {instrument.image && (
            <div className="mb-6 rounded-xl overflow-hidden shadow-lg">
              <div className="bg-white p-6 flex items-center justify-center">
                <div className="relative w-full h-48 md:h-64 flex items-center justify-center">
                  <img
                    src={`/${instrument.image}`}
                    alt={instrument.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Features Section */}
          {instrument.features && instrument.features.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Zap className={`w-5 h-5 ${colors.icon}`} />
                Key Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {instrument.features.map((feature, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg border ${colors.border} bg-white/70`}
                  >
                    <div className="flex items-start gap-2">
                      <div className={`p-1 rounded ${colors.light}`}>
                        <Check className={`w-4 h-4 ${colors.icon}`} />
                      </div>
                      <p className="text-sm text-gray-700">{feature}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Specifications Section */}
          {instrument.specifications && (
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Table className={`w-5 h-5 ${colors.icon}`} />
                Specifications
              </h3>
              <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                <table className="w-full divide-y divide-gray-200">
                  <thead className={`${colors.light}`}>
                    <tr>
                      {instrument.specifications.headers.map(
                        (header, index) => (
                          <th
                            key={index}
                            scope="col"
                            className="px-4 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider border-r border-gray-300 last:border-r-0 whitespace-nowrap"
                          >
                            {header}
                          </th>
                        ),
                      )}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {instrument.specifications.rows.map((row, rowIndex) => (
                      <tr
                        key={rowIndex}
                        className={`hover:bg-gray-50 transition-colors ${
                          rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                        }`}
                      >
                        <td className="px-4 py-3 text-sm font-medium text-gray-900 border-r border-gray-200 whitespace-nowrap">
                          {row.feature}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900 whitespace-pre-line">
                          {row.specification}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Render hematology instrumentation content
  const renderHematologyInstrumentationContent = () => {
    const colors = getCategoryColors("hematology-instrumentation");

    // If no specific instrument is selected, show overview
    if (!activeHematologyInstrument) {
      return (
        <div className="space-y-6 md:space-y-8">
          <div
            className={`rounded-2xl p-4 md:p-6 mb-6 ${colors.light} border ${colors.border} shadow-lg`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`p-3 rounded-xl bg-gradient-to-r ${colors.gradient} shadow-md`}
              >
                <Cpu className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                  HEMATOLOGY INSTRUMENTATION
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  Complete range of hematology analyzers from compact 3-part
                  differential to advanced 6-part differential with body fluid
                  analysis.
                </p>
              </div>
            </div>

            <div className="bg-white/70 rounded-xl p-4 border border-white/50 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Info className={`w-4 h-4 md:w-5 md:h-5 ${colors.icon}`} />
                <p className="text-sm text-gray-600">
                  Select an analyzer model to view detailed specifications
                </p>
              </div>

              {isMobile && (
                <div className="space-y-2">
                  <button
                    onClick={() => setIsMobileMenuOpen(true)}
                    className={`w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r ${colors.gradient} text-white px-4 py-3 rounded-xl font-bold hover:shadow-lg transition`}
                  >
                    <Menu className="w-5 h-5" />
                    Browse Analyzer Models
                  </button>
                </div>
              )}
            </div>

            {/* Display category cards */}
            <div className="mt-6 grid grid-cols-1 gap-6">
              {hematologyInstrumentationCategories.map((category) => (
                <div
                  key={category.id}
                  className="bg-gradient-to-r from-white to-gray-50 border-2 border-gray-200 rounded-2xl p-6 transition-all hover:shadow-lg"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-xl ${colors.light} shadow-sm`}>
                      <category.icon className={`w-6 h-6 ${colors.icon}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-xl">
                        {category.name.split(") ")[1] || category.name}
                      </h3>
                      <p className="text-gray-600 mt-1">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    {category.instruments.map((instrument) => (
                      <button
                        key={instrument.id}
                        onClick={() =>
                          handleHematologyInstrumentClick(instrument)
                        }
                        className="text-left p-4 bg-white border border-gray-200 rounded-xl hover:border-red-300 hover:shadow-md transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                            <Cpu className="w-5 h-5 text-red-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900">
                              {instrument.name}
                            </h4>
                            <p className="text-sm text-gray-600 mt-1">
                              Model: {instrument.model}
                            </p>
                          </div>
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        </div>
                        <div className="mt-3 flex items-center gap-2">
                          <span className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded-full">
                            {category.id.replace("-", " ").toUpperCase()}
                          </span>
                          <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                            {instrument.features.length} Key Features
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    // Render instrument details
    const renderInstrumentDetails = () => {
      if (!activeHematologyInstrument) return null;

      const tabs = [
        { id: "overview", label: "Overview", icon: Info },
        { id: "features", label: "Key Features", icon: Zap },
        { id: "specs", label: "Technical Specs", icon: Settings },
        { id: "reagents", label: "Reagent System", icon: Droplets },
        { id: "support", label: "Support", icon: Headphones },
      ];

      const renderTabContent = () => {
        switch (activeInstrumentTab) {
          case "overview":
            return (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Overview
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {activeHematologyInstrument.overview}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-red-50 p-4 rounded-xl">
                    <div className="text-red-600 font-bold text-lg">
                      Category
                    </div>
                    <div className="text-gray-900 font-medium">
                      {activeHematologyInstrument.category.toUpperCase()}{" "}
                      Analyzer
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl">
                    <div className="text-green-600 font-bold text-lg">
                      Model
                    </div>
                    <div className="text-gray-900 font-medium">
                      {activeHematologyInstrument.model}
                    </div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-xl">
                    <div className="text-purple-600 font-bold text-lg">
                      Type
                    </div>
                    <div className="text-gray-900 font-medium">
                      {activeHematologyInstrument.category === "3-diff"
                        ? "3-Part Differential"
                        : activeHematologyInstrument.category === "5-diff"
                          ? "5-Part Differential"
                          : "6-Part Differential"}
                    </div>
                  </div>
                </div>
              </div>
            );

          case "features":
            return (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Key Features & Advanced Capabilities
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeHematologyInstrument.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:border-red-300 transition-colors"
                    >
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-red-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );

          case "specs":
            return (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Technical Specifications
                </h3>
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 p-6">
                  <div className="space-y-6">
                    {Object.entries(
                      activeHematologyInstrument.specifications,
                    ).map(([key, value]) => {
                      if (typeof value === "object" && !Array.isArray(value)) {
                        return (
                          <div
                            key={key}
                            className="border-b border-gray-200 pb-4 last:border-0"
                          >
                            <h4 className="font-semibold text-gray-900 mb-2 capitalize text-lg">
                              {key}
                            </h4>
                            <div className="space-y-2">
                              {Object.entries(value).map(
                                ([subKey, subValue]) => (
                                  <div
                                    key={subKey}
                                    className="flex justify-between py-2 hover:bg-gray-50 px-2 rounded"
                                  >
                                    <span className="text-gray-600 font-medium">
                                      {subKey}:
                                    </span>
                                    <span className="font-medium text-gray-900">
                                      {subValue}
                                    </span>
                                  </div>
                                ),
                              )}
                            </div>
                          </div>
                        );
                      } else if (Array.isArray(value)) {
                        return (
                          <div
                            key={key}
                            className="border-b border-gray-200 pb-4 last:border-0"
                          >
                            <h4 className="font-semibold text-gray-900 mb-2 capitalize text-lg">
                              {key}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {value.map((item, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:border-red-400 hover:bg-red-50 transition-colors"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        );
                      } else {
                        return (
                          <div
                            key={key}
                            className="flex justify-between items-center border-b border-gray-200 pb-4 last:border-0 py-2 hover:bg-gray-50 px-2 rounded"
                          >
                            <span className="font-semibold text-gray-900 capitalize text-lg">
                              {key}:
                            </span>
                            <span className="text-gray-700 text-right font-medium">
                              {value}
                            </span>
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
            );

          case "reagents":
            return activeHematologyInstrument.reagentSystem &&
              activeHematologyInstrument.reagentSystem.length > 0 ? (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Reagent System & Quality Management
                </h3>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-emerald-200 p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activeHematologyInstrument.reagentSystem.map(
                      (item, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-4 bg-white/80 rounded-xl border border-emerald-100 hover:border-emerald-300 transition-colors"
                        >
                          <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <Droplets className="w-4 h-4 text-emerald-600" />
                          </div>
                          <span className="text-gray-700 font-medium">
                            {item}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  No Reagent Information Available
                </h3>
                <p className="text-gray-600">
                  Reagent system details are not available for this instrument.
                </p>
              </div>
            );

          case "support":
            return activeHematologyInstrument.support &&
              activeHematologyInstrument.support.length > 0 ? (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Service & Support
                </h3>
                <div className="bg-gradient-to-br from-red-50 to-red-50 rounded-xl border border-red-200 p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activeHematologyInstrument.support.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 bg-white/80 rounded-xl border border-red-100 hover:border-red-300 transition-colors"
                      >
                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Headphones className="w-4 h-4 text-red-600" />
                        </div>
                        <span className="text-gray-700 font-medium">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Compliance Section */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-red-600" />
                    Compliance & Global Support
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 border border-gray-200">
                        <Users className="w-6 h-6 text-red-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Professional Training
                      </h4>
                      <p className="text-sm text-gray-600">
                        Comprehensive user training and certification
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 border border-gray-200">
                        <Wifi className="w-6 h-6 text-green-500" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        24/7 Technical Support
                      </h4>
                      <p className="text-sm text-gray-600">
                        Nationwide service coverage with rapid response
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 border border-gray-200">
                        <Shield className="w-6 h-6 text-purple-500" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Quality Certified
                      </h4>
                      <p className="text-sm text-gray-600">
                        CE Mark, ISO 9001, ISO 13485 compliant
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  No Support Information Available
                </h3>
                <p className="text-gray-600">
                  Support details are not available for this instrument.
                </p>
              </div>
            );

          default:
            return null;
        }
      };

      return (
        <div className="space-y-6 md:space-y-8">
          {/* Back button for mobile */}
          {isMobile && (
            <div className="flex flex-col gap-3">
              <button
                onClick={clearHematologyInstrumentSelection}
                className={`flex items-center gap-2 ${colors.text} font-medium p-3 ${colors.light} rounded-xl w-full border ${colors.border}`}
              >
                <ChevronLeft className="w-4 h-4" />
                Back to Hematology Analyzers
              </button>
            </div>
          )}

          {/* Breadcrumb for desktop */}
          <div className="hidden md:block bg-gradient-to-r from-gray-50 to-white rounded-2xl p-4 mb-6 shadow-sm">
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              <button
                onClick={clearHematologyInstrumentSelection}
                className="hover:text-red-600 transition-colors"
              >
                HEMATOLOGY INSTRUMENTATION
              </button>
              <ChevronRight className="w-4 h-4" />
              <span className="font-medium text-gray-900">
                {activeHematologyInstrument.name}
              </span>
            </nav>
          </div>

          {/* Instrument Details Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            {/* Header with Image */}
            <div className="relative h-64 md:h-80 overflow-hidden bg-white">
              <img
                src={`/${activeHematologyInstrument.image}`}
                alt={activeHematologyInstrument.name}
                className="w-full h-full object-contain p-4 bg-white"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                    {activeHematologyInstrument.model}
                  </div>
                  <div className="px-3 py-1 bg-red-600/80 backdrop-blur-sm rounded-full text-sm font-medium">
                    {activeHematologyInstrument.category} Analyzer
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  {activeHematologyInstrument.name}
                </h2>
              </div>
            </div>

            {/* Tabs Navigation */}
            <div className="border-b border-gray-200">
              <div className="flex overflow-x-auto">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeInstrumentTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveInstrumentTab(tab.id)}
                      className={`
                        flex items-center gap-2 px-6 py-4 text-sm font-medium whitespace-nowrap
                        ${
                          isActive
                            ? "text-red-600 border-b-2 border-red-600 bg-red-50/50"
                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                        }
                      `}
                    >
                      <Icon className="w-4 h-4" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-6">{renderTabContent()}</div>
          </div>
        </div>
      );
    };

    return renderInstrumentDetails();
  };

  // Render hematology content
  const renderHematologyContent = () => {
    const colors = getCategoryColors("hematology-reagents");

    // Tabs for hematology brand details
    const hematologyTabs = [
      { id: "products", label: "Products", icon: Package },
      { id: "specifications", label: "Specifications", icon: BarChart3 },
      { id: "notes", label: "Notes & Info", icon: Info },
    ];

    const renderHematologyTabContent = () => {
      switch (activeHematologyTab) {
        case "products":
          return (
            <div className="space-y-6">
              {/* Search and Back Button */}
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <button
                  onClick={clearHematologySelection}
                  className={`flex items-center gap-2 ${colors.text} font-medium p-3 ${colors.light} rounded-xl border ${colors.border} w-full md:w-auto`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back to Hematology Brands
                </button>

                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search products, catalog numbers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Products Table */}
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                      <tr>
                        {activeSubcategory.tableData.headers.map(
                          (header, index) => (
                            <th
                              key={index}
                              scope="col"
                              className="px-6 py-4 text-left text-xs font-bold text-gray-900 uppercase tracking-wider"
                            >
                              {header}
                            </th>
                          ),
                        )}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {activeSubcategory.tableData.rows.map((row, rowIndex) => {
                        if (row.isHeader) {
                          return (
                            <tr
                              key={rowIndex}
                              className="bg-gradient-to-r from-rose-50 to-pink-50"
                            >
                              <td
                                colSpan={
                                  activeSubcategory.tableData.headers.length
                                }
                                className="px-6 py-4 text-sm font-bold text-rose-900 uppercase"
                              >
                                {row.productName}
                              </td>
                            </tr>
                          );
                        }

                        // Filter logic if search term exists
                        if (searchTerm) {
                          const searchLower = searchTerm.toLowerCase();
                          const matches =
                            row.productName
                              ?.toLowerCase()
                              .includes(searchLower) ||
                            row.catalogNumber
                              ?.toLowerCase()
                              .includes(searchLower) ||
                            row.analyte?.toLowerCase().includes(searchLower);
                          if (!matches) return null;
                        }

                        return (
                          <tr
                            key={rowIndex}
                            className="hover:bg-gray-50 transition-colors"
                          >
                            <td className="px-6 py-4 text-sm font-medium text-gray-900">
                              {row.productName}
                            </td>
                            <td className="px-6 py-4">
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-rose-100 text-rose-800">
                                {row.catalogNumber}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-700">
                              {row.analyte}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-700">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                {row.reagentForm}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-700">
                              {row.packSize}
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-green-600">
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                {row.shelfLife}
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          );

        case "specifications":
          return (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Technical Specifications
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl border border-rose-200 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center">
                      <Package className="w-5 h-5 text-rose-600" />
                    </div>
                    <h4 className="font-bold text-gray-900">Reagent Form</h4>
                  </div>
                  <p className="text-gray-700">
                    All reagents are liquid stable formulations for maximum
                    convenience.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-green-600" />
                    </div>
                    <h4 className="font-bold text-gray-900">Stability</h4>
                  </div>
                  <p className="text-gray-700">
                    On-board stability: Up to 60 days after opening when stored
                    properly.
                  </p>
                </div>
              </div>
            </div>
          );

        case "notes":
          return (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Important Notes & Information
              </h3>

              {activeSubcategory.tableData?.note && (
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl border border-rose-200 p-6">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-rose-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">
                        Important Note
                      </h4>
                      <p className="text-gray-700">
                        {activeSubcategory.tableData.note}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );

        default:
          return null;
      }
    };

    // If no specific brand is selected, show overview
    if (!activeSubcategory) {
      return (
        <div className="space-y-6 md:space-y-8">
          <div
            className={`rounded-2xl p-4 md:p-6 mb-6 ${colors.light} border ${colors.border} shadow-lg`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`p-3 rounded-xl bg-gradient-to-r ${colors.gradient} shadow-md`}
              >
                <Droplets className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                  HEMATOLOGY REAGENTS
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  Complete catalog of hematology reagents for all major brands
                  including Sysmex, Abbott, Beckman Coulter, Mindray, URIT,
                  Dymind, and more.
                </p>
              </div>
            </div>

            <div className="bg-white/70 rounded-xl p-4 border border-white/50 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Info className={`w-4 h-4 md:w-5 md:h-5 ${colors.icon}`} />
                <p className="text-sm text-gray-600">
                  Select a brand to view detailed reagent specifications
                </p>
              </div>

              {isMobile && (
                <div className="space-y-2">
                  <button
                    onClick={() => setIsMobileMenuOpen(true)}
                    className={`w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r ${colors.gradient} text-white px-4 py-3 rounded-xl font-bold hover:shadow-lg transition`}
                  >
                    <Menu className="w-5 h-5" />
                    Browse Hematology Brands
                  </button>
                </div>
              )}
            </div>

            {/* Display brand cards */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {hematologyCategories.map((brand) => (
                <button
                  key={brand.id}
                  onClick={() => handleHematologyBrandClick(brand)}
                  className={`bg-gradient-to-r from-white to-gray-50 border-2 ${colors.border} rounded-2xl p-6 text-left transition-all hover:shadow-lg hover:translate-y-[-2px] active:scale-[0.98]`}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`p-3 rounded-xl ${colors.light} shadow-sm`}>
                      <brand.icon className={`w-6 h-6 ${colors.icon}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-lg">
                        {brand.name.split(") ")[1] || brand.name}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {brand.description}
                      </p>
                    </div>
                    <ChevronRight className={`w-5 h-5 ${colors.icon}`} />
                  </div>
                  <div className="flex items-center gap-2 mt-4">
                    <span
                      className={`text-xs px-3 py-1 ${colors.light} ${colors.text} rounded-full font-medium`}
                    >
                      {brand.totalProducts} products
                    </span>
                    <span className="text-xs px-3 py-1 bg-rose-100 text-rose-700 rounded-full font-medium">
                      Liquid Stable
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      );
    }

    // If a specific brand is selected, show its details
    return (
      <div className="space-y-6 md:space-y-8">
        {/* Back button for mobile */}
        {isMobile && (
          <div className="flex flex-col gap-3">
            <button
              onClick={clearHematologySelection}
              className={`flex items-center gap-2 ${colors.text} font-medium p-3 ${colors.light} rounded-xl w-full border ${colors.border}`}
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Hematology Brands
            </button>
          </div>
        )}

        {/* Breadcrumb for desktop */}
        <div className="hidden md:block bg-gradient-to-r from-gray-50 to-white rounded-2xl p-4 mb-6 shadow-sm">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <button
              onClick={() => {
                setActiveSubcategory(null);
                setActiveHematologyTab("products");
              }}
              className="hover:text-rose-600 transition-colors"
            >
              HEMATOLOGY REAGENTS
            </button>
            <ChevronRight className="w-4 h-4" />
            <span className="font-medium text-gray-900">
              {activeSubcategory.name.split(") ")[1] || activeSubcategory.name}
            </span>
          </nav>
        </div>

        {/* Brand Header */}
        <div
          className={`rounded-2xl p-4 md:p-6 mb-6 ${colors.light} border ${colors.border} shadow-lg`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 md:p-3 rounded-lg bg-white/50 shadow-sm">
              <activeSubcategory.icon
                className={`w-5 h-5 md:w-6 md:h-6 ${colors.icon}`}
              />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                {activeSubcategory.name}
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                {activeSubcategory.description}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center gap-2">
              <Package className={`w-4 h-4 md:w-5 md:h-5 ${colors.icon}`} />
              <span className="text-xs md:text-sm text-gray-600">
                {activeSubcategory.totalProducts} products
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className={`w-4 h-4 md:w-5 md:h-5 ${colors.icon}`} />
              <span className="text-xs md:text-sm text-gray-600">
                CE Certified
              </span>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="border-b border-gray-200">
          <div className="flex overflow-x-auto">
            {hematologyTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeHematologyTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveHematologyTab(tab.id)}
                  className={`
                    flex items-center gap-2 px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors
                    ${
                      isActive
                        ? "text-rose-600 border-b-2 border-rose-600 bg-rose-50/50"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
          {renderHematologyTabContent()}
        </div>
      </div>
    );
  };

  const renderTable = () => {
    if (showMedicalConsumables) {
      const colors = getCategoryColors("medical-consumables");

      return (
        <div className="space-y-8">
          <div
            className={`bg-gradient-to-r ${colors.light} rounded-2xl p-4 md:p-6 mb-6 border ${colors.border} shadow-sm`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 md:p-3 rounded-lg bg-white/50 shadow-sm">
                <Layers className={`w-5 h-5 md:w-6 md:h-6 ${colors.icon}`} />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                  MEDICAL CONSUMABLES
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  Complete range of clinical and laboratory consumables
                  including microbiology supplies, tubes, liquid handling
                  products, and clinical disposables
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center gap-2">
                <Grid className={`w-4 h-4 md:w-5 md:h-5 ${colors.icon}`} />
                <span className="text-xs md:text-sm text-gray-600">
                  {activeCategory?.subcategories?.length || 4} categories
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Package className={`w-4 h-4 md:w-5 md:h-5 ${colors.icon}`} />
                <span className="text-xs md:text-sm text-gray-600">
                  15+ products
                </span>
              </div>
            </div>
          </div>

          {/* <ProductsSection /> */}
        </div>
      );
    }

    if (!activeCategory) return renderEmptyState();

    // Check if we're in hematology reagents
    if (activeCategory?.id === "hematology-reagents") {
      return renderHematologyContent();
    }

    // Check if we're in hematology instrumentation
    if (activeCategory?.id === "hematology-instrumentation") {
      return renderHematologyInstrumentationContent();
    }

    // Handle Clinical Chemistry Instrumentation category
    if (activeCategory?.id === "clinical-chemistry-instrumentation") {
      const colors = getCategoryColors("clinical-chemistry-instrumentation");

      // If no specific instrument is selected, show the category overview
      if (!activeSubcategory) {
        return (
          <div className="space-y-6 md:space-y-8">
            <div
              className={`rounded-2xl p-4 md:p-6 mb-6 ${colors.light} border ${colors.border} shadow-lg`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-r ${colors.gradient} shadow-md`}
                >
                  <activeCategory.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                    {activeCategory.name}
                  </h2>
                  <p className="text-gray-600 text-sm md:text-base">
                    {activeCategory.description}
                  </p>
                </div>
              </div>

              <div className="bg-white/70 rounded-xl p-4 border border-white/50 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Info className={`w-4 h-4 md:w-5 md:h-5 ${colors.icon}`} />
                  <p className="text-sm text-gray-600">
                    Select an analyzer model to view detailed specifications
                  </p>
                </div>

                {isMobile && (
                  <div className="space-y-2">
                    <button
                      onClick={() => setIsMobileMenuOpen(true)}
                      className={`w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r ${colors.gradient} text-white px-4 py-3 rounded-xl font-bold hover:shadow-lg transition`}
                    >
                      <Menu className="w-5 h-5" />
                      Browse Analyzer Models
                    </button>
                    {activeCategory.subcategories &&
                      activeCategory.subcategories.length > 0 && (
                        <div className="text-center">
                          <p className="text-sm text-gray-600">
                            {activeCategory.subcategories.length} models
                            available
                          </p>
                        </div>
                      )}
                  </div>
                )}
              </div>

              {/* Display instrument cards in desktop view */}
              {!isMobile && activeCategory.subcategories && (
                <div className="mt-6 grid grid-cols-1 gap-4">
                  {activeCategory.subcategories.map((instrument) => (
                    <button
                      key={instrument.id}
                      onClick={() =>
                        handleInstrumentClick(activeCategory, instrument)
                      }
                      className={`bg-gradient-to-r from-white to-gray-50 border-2 ${colors.border} rounded-2xl p-6 text-left transition-all hover:shadow-lg hover:translate-y-[-2px] active:scale-[0.98]`}
                    >
                      <div className="flex items-center gap-4 mb-3">
                        <div
                          className={`p-3 rounded-xl ${colors.light} shadow-sm`}
                        >
                          <instrument.icon
                            className={`w-6 h-6 ${colors.icon}`}
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 text-lg">
                            {instrument.name.split(". ")[1] || instrument.name}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">
                            {instrument.description}
                          </p>
                        </div>
                        <ChevronRight className={`w-5 h-5 ${colors.icon}`} />
                      </div>
                      {instrument.features && (
                        <div className="mt-3">
                          <p className="text-xs text-gray-500 mb-2">
                            Key highlights:
                          </p>
                          <ul className="space-y-1">
                            {instrument.features
                              .slice(0, 2)
                              .map((feature, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2"
                                >
                                  <div
                                    className={`p-0.5 rounded ${colors.light}`}
                                  >
                                    <ChevronRight
                                      className={`w-3 h-3 ${colors.icon}`}
                                    />
                                  </div>
                                  <span className="text-xs text-gray-600 line-clamp-2">
                                    {feature}
                                  </span>
                                </li>
                              ))}
                          </ul>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {renderEmptyState(true)}
          </div>
        );
      }

      // If a specific instrument is selected, render it
      return renderInstrument(activeSubcategory);
    }

    // Handle main category view (Clinical Chemistry Reagents)
    if (activeCategory && !activeSubcategory && !activeHematologyInstrument) {
      const colors = getCategoryColors(activeCategory.id);

      return (
        <div className="space-y-6 md:space-y-8">
          <div
            className={`rounded-2xl p-4 md:p-6 mb-6 ${colors.light} border ${colors.border} shadow-lg`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`p-3 rounded-xl bg-gradient-to-r ${colors.gradient} shadow-md`}
              >
                <activeCategory.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                  {activeCategory.name}
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  {activeCategory.description}
                </p>
              </div>
            </div>

            <div className="bg-white/70 rounded-xl p-4 border border-white/50 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Info className={`w-4 h-4 md:w-5 md:h-5 ${colors.icon}`} />
                <p className="text-sm text-gray-600">
                  Select a subcategory to view detailed reagent tables
                </p>
              </div>
              {isMobile && (
                <div className="space-y-2">
                  <button
                    onClick={() => setIsMobileMenuOpen(true)}
                    className={`w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r ${colors.gradient} text-white px-4 py-3 rounded-xl font-bold hover:shadow-lg transition`}
                  >
                    <Menu className="w-5 h-5" />
                    Browse Subcategories
                  </button>
                  {activeCategory.subcategories &&
                    activeCategory.subcategories.length > 0 && (
                      <div className="text-center">
                        <p className="text-sm text-gray-600">
                          {activeCategory.subcategories.length} subcategories
                          available
                        </p>
                      </div>
                    )}
                </div>
              )}
            </div>
          </div>

          {renderEmptyState(true)}
        </div>
      );
    }

    // Handle subcategory view (General Purpose Reagents or ELHODA Auto-Analyzer Series Reagents)
    if (
      activeSubcategory &&
      activeSubcategory.id === "general-purpose-reagents"
    ) {
      const colors = getCategoryColors(activeSubcategory.id);

      return (
        <div className="space-y-6 md:space-y-8">
          {isMobile && (
            <div className="flex flex-col gap-3">
              <button
                onClick={() => setActiveSubcategory(null)}
                className={`flex items-center gap-2 ${colors.text} font-medium p-3 ${colors.light} rounded-xl w-full border ${colors.border}`}
              >
                <ChevronLeft className="w-4 h-4" />
                Back to{" "}
                {activeCategory.name.split(". ")[1] || activeCategory.name}
              </button>
            </div>
          )}

          <div className="hidden md:block bg-gradient-to-r from-gray-50 to-white rounded-2xl p-4 mb-6 shadow-sm">
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              <button
                onClick={() => setActiveSubcategory(null)}
                className={`hover:${colors.text} transition-colors`}
              >
                {activeCategory.name}
              </button>
              <ChevronRight className="w-4 h-4" />
              <span className="font-medium text-gray-900">
                {activeSubcategory.name}
              </span>
            </nav>
          </div>

          <div
            className={`rounded-2xl p-4 md:p-6 mb-6 ${colors.light} border ${colors.border} shadow-sm`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 md:p-3 rounded-lg bg-white/50 shadow-sm">
                {activeSubcategory.icon ? (
                  <activeSubcategory.icon
                    className={`w-5 h-5 md:w-6 md:h-6 ${colors.icon}`}
                  />
                ) : (
                  <Table className={`w-5 h-5 md:w-6 md:h-6 ${colors.icon}`} />
                )}
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                  {activeSubcategory.name}
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  {activeSubcategory.description}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center gap-2">
                <List className={`w-4 h-4 md:w-5 md:h-5 ${colors.icon}`} />
                <span className="text-xs md:text-sm text-gray-600">
                  {activeSubcategory.subcategories?.length || 0} categories
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Grid className={`w-4 h-4 md:w-5 md:h-5 ${colors.icon}`} />
                <span className="text-xs md:text-sm text-gray-600">
                  {activeSubcategory.subcategories
                    ? activeSubcategory.subcategories.reduce(
                        (total, subcat) =>
                          total + (subcat.tableData?.rows.length || 0),
                        0,
                      )
                    : 0}{" "}
                  items
                </span>
              </div>
            </div>
          </div>

          {isMobile && viewMode === "table" && (
            <div
              className={`${colors.light} border ${colors.border} rounded-xl p-3 shadow-sm`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Info className={`w-4 h-4 ${colors.icon}`} />
                  <span className={`text-sm ${colors.text}`}>
                    Select a category below to view detailed tables
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Render the sub-subcategories as clickable cards, not tables */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeSubcategory.subcategories?.map((subSubcategory) => {
              const subSubColors = getCategoryColors(subSubcategory.id);

              return (
                <button
                  key={subSubcategory.id}
                  onClick={() =>
                    handleSubSubcategoryClick(
                      activeCategory,
                      activeSubcategory,
                      subSubcategory,
                    )
                  }
                  className={`bg-gradient-to-r from-white to-gray-50 border-2 ${subSubColors.border} rounded-2xl p-6 text-left transition-all hover:shadow-lg hover:translate-y-[-2px] active:scale-[0.98]`}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div
                      className={`p-3 rounded-xl ${subSubColors.light} shadow-sm`}
                    >
                      {subSubcategory.icon ? (
                        <subSubcategory.icon
                          className={`w-6 h-6 ${subSubColors.icon}`}
                        />
                      ) : (
                        <Table className={`w-6 h-6 ${subSubColors.icon}`} />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-lg">
                        {subSubcategory.name.split(". ")[1] ||
                          subSubcategory.name}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {subSubcategory.description}
                      </p>
                    </div>
                    <ChevronRight className={`w-5 h-5 ${subSubColors.icon}`} />
                  </div>
                  <div className="flex items-center gap-2 mt-4">
                    <span
                      className={`text-xs px-3 py-1 ${subSubColors.light} ${subSubColors.text} rounded-full font-medium`}
                    >
                      {subSubcategory.subcategories?.length || 0} tables
                    </span>
                    {subSubcategory.tableData && (
                      <span
                        className={`text-xs px-3 py-1 ${subSubColors.light} ${subSubColors.text} rounded-full font-medium`}
                      >
                        {subSubcategory.tableData.rows.length} items
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      );
    }

    // Handle subcategory view for ELHODA AUTO-ANALYZER SERIES REAGENTS
    if (activeSubcategory && activeSubcategory.id === "elhoda-auto") {
      const colors = getCategoryColors(activeSubcategory.id);

      return (
        <div className="space-y-6 md:space-y-8">
          {isMobile && (
            <div className="flex flex-col gap-3">
              <button
                onClick={() => setActiveSubcategory(null)}
                className={`flex items-center gap-2 ${colors.text} font-medium p-3 ${colors.light} rounded-xl w-full border ${colors.border}`}
              >
                <ChevronLeft className="w-4 h-4" />
                Back to{" "}
                {activeCategory.name.split(". ")[1] || activeCategory.name}
              </button>
            </div>
          )}

          <div className="hidden md:block bg-gradient-to-r from-gray-50 to-white rounded-2xl p-4 mb-6 shadow-sm">
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              <button
                onClick={() => setActiveSubcategory(null)}
                className={`hover:${colors.text} transition-colors`}
              >
                {activeCategory.name}
              </button>
              <ChevronRight className="w-4 h-4" />
              <span className="font-medium text-gray-900">
                {activeSubcategory.name}
              </span>
            </nav>
          </div>

          <div
            className={`rounded-2xl p-4 md:p-6 mb-6 ${colors.light} border ${colors.border} shadow-sm`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 md:p-3 rounded-lg bg-white/50 shadow-sm">
                {activeSubcategory.icon ? (
                  <activeSubcategory.icon
                    className={`w-5 h-5 md:w-6 md:h-6 ${colors.icon}`}
                  />
                ) : (
                  <Table className={`w-5 h-5 md:w-6 md:h-6 ${colors.icon}`} />
                )}
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                  {activeSubcategory.name}
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  {activeSubcategory.description}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center gap-2">
                <List className={`w-4 h-4 md:w-5 md:h-5 ${colors.icon}`} />
                <span className="text-xs md:text-sm text-gray-600">
                  {activeSubcategory.subcategories?.length || 0} tables
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Grid className={`w-4 h-4 md:w-5 md:h-5 ${colors.icon}`} />
                <span className="text-xs md:text-sm text-gray-600">
                  {activeSubcategory.subcategories
                    ? activeSubcategory.subcategories.reduce(
                        (total, subcat) =>
                          total + (subcat.tableData?.rows.length || 0),
                        0,
                      )
                    : 0}{" "}
                  items
                </span>
              </div>
            </div>
          </div>

          {isMobile && viewMode === "table" && (
            <div
              className={`${colors.light} border ${colors.border} rounded-xl p-3 shadow-sm`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Info className={`w-4 h-4 ${colors.icon}`} />
                  <span className={`text-sm ${colors.text}`}>
                    Swipe horizontally to view full table
                  </span>
                </div>
                <Filter className={`w-4 h-4 ${colors.icon}`} />
              </div>
            </div>
          )}

          {/* Render the tables directly for ELHODA (since they don't have further subcategories) */}
          <div className="space-y-4 md:space-y-6">
            {activeSubcategory.subcategories?.map((subcat) => {
              if (!subcat.tableData) return null;
              return renderCollapsibleTable(
                subcat.tableData,
                subcat.name,
                subcat.id,
              );
            })}
          </div>
        </div>
      );
    }

    // Handle sub-subcategory view (e.g., CLINICAL CHEMISTRY, SEROLOGY, etc.)
    if (
      activeSubcategory &&
      [
        "clinical-chemistry",
        "serology",
        "immuno-turbidimetry",
        "blood-groups-hemostasis",
      ].includes(activeSubcategory.id)
    ) {
      const colors = getCategoryColors(activeSubcategory.id);

      return (
        <div className="space-y-6 md:space-y-8">
          {isMobile && (
            <div className="flex flex-col gap-3">
              <button
                onClick={() => {
                  // Go back to General Purpose Reagents
                  const generalPurposeCategory =
                    activeCategory.subcategories?.find(
                      (sub) => sub.id === "general-purpose-reagents",
                    );
                  if (generalPurposeCategory) {
                    setActiveSubcategory(generalPurposeCategory);
                  } else {
                    setActiveSubcategory(null);
                  }
                }}
                className={`flex items-center gap-2 ${colors.text} font-medium p-3 ${colors.light} rounded-xl w-full border ${colors.border}`}
              >
                <ChevronLeft className="w-4 h-4" />
                Back to General Purpose Reagents
              </button>
            </div>
          )}

          <div className="hidden md:block bg-gradient-to-r from-gray-50 to-white rounded-2xl p-4 mb-6 shadow-sm">
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              <button
                onClick={() => setActiveSubcategory(null)}
                className="hover:text-red-600 transition-colors"
              >
                {activeCategory.name}
              </button>
              <ChevronRight className="w-4 h-4" />
              <button
                onClick={() => {
                  const generalPurposeCategory =
                    activeCategory.subcategories?.find(
                      (sub) => sub.id === "general-purpose-reagents",
                    );
                  if (generalPurposeCategory) {
                    setActiveSubcategory(generalPurposeCategory);
                  }
                }}
                className="hover:text-emerald-600 transition-colors"
              >
                General Purpose Reagents
              </button>
              <ChevronRight className="w-4 h-4" />
              <span className="font-medium text-gray-900">
                {activeSubcategory.name}
              </span>
            </nav>
          </div>

          <div
            className={`rounded-2xl p-4 md:p-6 mb-6 ${colors.light} border ${colors.border} shadow-sm`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 md:p-3 rounded-lg bg-white/50 shadow-sm">
                {activeSubcategory.icon ? (
                  <activeSubcategory.icon
                    className={`w-5 h-5 md:w-6 md:h-6 ${colors.icon}`}
                  />
                ) : (
                  <Table className={`w-5 h-5 md:w-6 md:h-6 ${colors.icon}`} />
                )}
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                  {activeSubcategory.name}
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  {activeSubcategory.description}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center gap-2">
                <List className={`w-4 h-4 md:w-5 md:h-5 ${colors.icon}`} />
                <span className="text-xs md:text-sm text-gray-600">
                  {activeSubcategory.subcategories?.length || 0} tables
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Grid className={`w-4 h-4 md:w-5 md:h-5 ${colors.icon}`} />
                <span className="text-xs md:text-sm text-gray-600">
                  {activeSubcategory.subcategories
                    ? activeSubcategory.subcategories.reduce(
                        (total, subcat) =>
                          total + (subcat.tableData?.rows.length || 0),
                        0,
                      )
                    : 0}{" "}
                  items
                </span>
              </div>
            </div>
          </div>

          {isMobile && viewMode === "table" && (
            <div
              className={`${colors.light} border ${colors.border} rounded-xl p-3 shadow-sm`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Info className={`w-4 h-4 ${colors.icon}`} />
                  <span className={`text-sm ${colors.text}`}>
                    Swipe horizontally to view full table
                  </span>
                </div>
                <Filter className={`w-4 h-4 ${colors.icon}`} />
              </div>
            </div>
          )}

          {/* Render the tables for this specific category */}
          <div className="space-y-4 md:space-y-6">
            {activeSubcategory.subcategories?.map((subcat) => {
              if (!subcat.tableData) return null;
              return renderCollapsibleTable(
                subcat.tableData,
                subcat.name,
                subcat.id,
              );
            })}
          </div>
        </div>
      );
    }

    return renderEmptyState();
  };

  const renderEmptyState = (categorySelected = false) => (
    <div className="flex flex-col items-center justify-center min-h-[400px] md:min-h-[500px] bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 md:p-8 text-center border-2 border-dashed border-gray-200">
      <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-red-100 to-red-100 rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-lg">
        <Package className="w-8 h-8 md:w-12 md:h-12 text-red-600" />
      </div>

      <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
        {categorySelected ? "Select a Subcategory" : "Explore Our Products"}
      </h2>

      <p className="text-gray-600 max-w-md mb-6 md:mb-8 text-sm md:text-lg">
        {categorySelected
          ? "Please select a subcategory from the sidebar to view detailed tables."
          : "Select a category to browse our comprehensive range of clinical diagnostic reagents."}
      </p>

      {isMobile && !categorySelected && (
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="w-full max-w-sm bg-gradient-to-r from-red-600 to-red-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition shadow-md"
        >
          <div className="flex items-center justify-center gap-3">
            <Menu className="w-5 h-5" />
            Browse All Categories
          </div>
        </button>
      )}
      {imageModal.open && (
        <div className="fixed inset-0 z-[80] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <button
            onClick={() => setImageModal({ open: false, src: "", alt: "" })}
            className="absolute inset-0"
            aria-label="Close image viewer"
          />
          <div className="relative z-10 max-w-5xl w-full">
            <button
              onClick={() => setImageModal({ open: false, src: "", alt: "" })}
              className="absolute -top-4 -right-4 bg-white text-gray-900 w-10 h-10 rounded-full shadow-lg flex items-center justify-center"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="bg-white rounded-2xl p-4 shadow-2xl">
              <img
                src={imageModal.src}
                alt={imageModal.alt}
                className="w-full max-h-[80vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderSidebarSubcategories = (category) => {
    if (!expandedCategories.includes(category.id)) return null;
    const colors = getCategoryColors(category.id);

    // Special handling for hematology reagents
    if (category.id === "hematology-reagents") {
      return (
        <div className="mt-2 space-y-2">
          {hematologyCategories.map((brand) => {
            const isBrandActive = activeSubcategory?.id === brand.id;
            return (
              <button
                key={brand.id}
                onClick={() =>
                  preserveScroll(sidebarRef, () =>
                    handleHematologyBrandClick(brand),
                  )
                }
                className={`w-full text-left p-3 rounded-xl transition-all ${
                  isBrandActive
                    ? `bg-gradient-to-r ${colors.light} border-l-4 ${colors.border} shadow-sm`
                    : "hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center ${colors.light} shadow-sm`}
                    >
                      <brand.icon className="w-4 h-4 md:w-5 md:h-5 text-rose-700" />
                    </div>
                    <div className="text-left flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 text-sm md:text-base">
                        {brand.name.split(") ")[1] || brand.name}
                      </h4>
                      <p className="text-xs text-gray-500 line-clamp-1">
                        {brand.description}
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform flex-shrink-0 ${
                      isBrandActive ? colors.icon : "text-gray-400"
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>
      );
    }

    // Special handling for hematology instrumentation
    if (category.id === "hematology-instrumentation") {
      return (
        <div className="mt-2 space-y-2">
          {hematologyInstrumentationCategories.map((instrumentCategory) => {
            const isCategoryExpanded = expandedCategories.includes(
              instrumentCategory.id,
            );
            const hasActiveInstrumentInCategory =
              activeHematologyInstrument &&
              activeHematologyInstrument.category === instrumentCategory.id;

            return (
              <div key={instrumentCategory.id}>
                <button
                  onClick={() =>
                    preserveScroll(sidebarRef, () => {
                      if (isCategoryExpanded) {
                        setExpandedCategories((prev) =>
                          prev.filter((id) => id !== instrumentCategory.id),
                        );
                      } else {
                        setExpandedCategories((prev) => [
                          ...prev,
                          instrumentCategory.id,
                        ]);
                      }
                    })
                  }
                  className={`w-full text-left p-3 rounded-xl transition-all flex items-center justify-between ${
                    hasActiveInstrumentInCategory
                      ? `bg-gradient-to-r ${colors.light} border-l-4 ${colors.border} shadow-sm`
                      : "hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center ${instrumentCategory.bgColor} shadow-sm`}
                    >
                      <instrumentCategory.icon className="w-4 h-4 md:w-5 md:h-5 text-red-700" />
                    </div>
                    <div className="text-left flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 text-sm md:text-base">
                        {instrumentCategory.name.split(") ")[1] ||
                          instrumentCategory.name}
                      </h4>
                      <p className="text-xs text-gray-500 line-clamp-1">
                        {instrumentCategory.description}
                      </p>
                    </div>
                  </div>
                </button>

                {isCategoryExpanded && (
                  <div className="ml-8 mt-2 space-y-2">
                    {instrumentCategory.instruments.map((instrument) => {
                      const isInstrumentActive =
                        activeHematologyInstrument?.id === instrument.id;
                      return (
                        <button
                          key={instrument.id}
                          onClick={() =>
                            preserveScroll(sidebarRef, () =>
                              handleHematologyInstrumentClick(instrument),
                            )
                          }
                          className={`w-full text-left p-2 rounded-lg transition-all flex items-center justify-between ${
                            isInstrumentActive
                              ? `bg-gradient-to-r ${colors.light} border-l-2 ${colors.border}`
                              : "hover:bg-gray-50"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-6 h-6 rounded-lg flex items-center justify-center ${
                                isInstrumentActive
                                  ? colors.light
                                  : "bg-gray-100"
                              }`}
                            >
                              <Cpu
                                className={`w-3 h-3 ${
                                  isInstrumentActive
                                    ? colors.icon
                                    : "text-gray-400"
                                }`}
                              />
                            </div>
                            <span
                              className={`text-xs ${
                                isInstrumentActive ? "font-medium" : ""
                              } text-gray-900`}
                            >
                              {instrument.model}
                            </span>
                          </div>
                          {isInstrumentActive && (
                            <div className="w-2 h-2 bg-red-500 rounded-full" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      );
    }

    // Handle other categories (Clinical Chemistry Reagents, etc.)
    return (
      <div className="mt-2 space-y-2">
        {category.subcategories?.map((subcategory) => {
          const isSubActive = activeSubcategory?.id === subcategory.id;

          return (
            <div key={subcategory.id}>
              <button
                onClick={() =>
                  preserveScroll(sidebarRef, () => {
                    if (category.id === "clinical-chemistry-instrumentation") {
                      handleInstrumentClick(category, subcategory);
                    } else {
                      handleSubcategoryClick(category, subcategory);
                    }
                  })
                }
                className={`w-full text-left p-3 rounded-xl transition-all ${
                  isSubActive
                    ? `bg-gradient-to-r ${colors.light} border-l-4 ${colors.border} shadow-sm`
                    : "hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center ${
                        subcategory.bgColor
                      } shadow-sm`}
                    >
                      {subcategory.icon ? (
                        <subcategory.icon className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
                      ) : category.id ===
                        "clinical-chemistry-instrumentation" ? (
                        <Cpu className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
                      ) : (
                        <Table className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
                      )}
                    </div>
                    <div className="text-left flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 text-sm md:text-base">
                        {subcategory.name.split(". ")[1] || subcategory.name}
                      </h4>
                      <p className="text-xs text-gray-500 line-clamp-1">
                        {subcategory.description}
                      </p>
                    </div>
                  </div>
                  {/* <ChevronRight
                    className={`w-4 h-4 transition-transform flex-shrink-0 ${
                      isSubActive ? colors.icon : "text-gray-400"
                    }`}
                  /> */}
                </div>
              </button>

              {/* Render third-level categories for General Purpose Reagents only */}
              {isSubActive &&
                subcategory.id === "general-purpose-reagents" &&
                subcategory.subcategories?.length > 0 && (
                  <div className="ml-8 mt-2 space-y-2 border-l-2 border-gray-200 pl-3">
                    {subcategory.subcategories.map((subSubcategory) => {
                      const isSubSubActive =
                        activeSubcategory?.id === subSubcategory.id;
                      const subSubColors = getCategoryColors(subSubcategory.id);

                      return (
                        <button
                          key={subSubcategory.id}
                          onClick={() =>
                            preserveScroll(sidebarRef, () =>
                              handleSubSubcategoryClick(
                                category,
                                subcategory,
                                subSubcategory,
                              ),
                            )
                          }
                          className={`w-full text-left p-2 rounded-lg transition-all ${
                            isSubSubActive
                              ? `bg-gradient-to-r ${subSubColors.light} border-l-2 ${subSubColors.border}`
                              : "hover:bg-gray-50"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-6 h-6 rounded-lg flex items-center justify-center ${subSubColors.light}`}
                            >
                              {subSubcategory.icon ? (
                                <subSubcategory.icon
                                  className={`w-3 h-3 ${subSubColors.icon}`}
                                />
                              ) : (
                                <Table
                                  className={`w-3 h-3 ${subSubColors.icon}`}
                                />
                              )}
                            </div>
                            <span
                              className={`text-xs ${
                                isSubSubActive ? "font-medium" : ""
                              } text-gray-900`}
                            >
                              {subSubcategory.name.split(". ")[1] ||
                                subSubcategory.name}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
            </div>
          );
        })}
      </div>
    );
  };

  const breadcrumbPaths = getBreadcrumbPath();

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-red-50/30 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-red-500/10 to-red-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        {/* Mobile Header Bar */}
        {isMobile && (
          <div className="flex items-center justify-between mb-6 bg-white/90 backdrop-blur-lg rounded-2xl p-4 shadow-lg border border-gray-200">
            <button
              onClick={handleBackToProducts}
              className="flex items-center gap-2 text-[#E81729] font-medium hover:text-[#c01525] transition"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Products</span>
            </button>
            <div className="flex items-center gap-3">
              {activeCategory && (
                <span className="text-sm font-medium text-gray-700 truncate max-w-[150px]">
                  {activeCategory.name.split(". ")[1] || activeCategory.name}
                </span>
              )}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 bg-gradient-to-r from-red-600 to-red-600 text-white rounded-xl shadow-md hover:shadow-lg transition"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        )}

        {/* Enhanced Breadcrumb for Desktop */}
        {!isMobile && (
          <div className="mb-6 md:mb-8">
            <nav className="flex items-center space-x-2 text-sm text-gray-600 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-gray-200">
              {breadcrumbPaths.map((item, index) => (
                <React.Fragment key={item.path}>
                  {index > 0 && (
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  )}
                  {index === breadcrumbPaths.length - 1 ? (
                    <span className="font-bold text-gray-900 px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-50 rounded-lg">
                      {item.name}
                    </span>
                  ) : (
                    <button
                      onClick={() => {
                        if (item.path === "/products") {
                          handleBackToProducts();
                        } else if (
                          item.path.includes(activeCategory?.id) &&
                          (activeSubcategory || activeHematologyInstrument)
                        ) {
                          if (activeCategory?.id === "hematology-reagents") {
                            clearHematologySelection();
                          } else if (
                            activeCategory?.id === "hematology-instrumentation"
                          ) {
                            clearHematologyInstrumentSelection();
                          } else {
                            setActiveSubcategory(null);
                          }
                        }
                      }}
                      className="hover:text-red-600 transition-colors px-3 py-1 hover:bg-red-50 rounded-lg"
                    >
                      {item.name}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </nav>
          </div>
        )}
        <div className="mt-20 mb-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <span className="text-gray-600">Home</span>
            <ChevronRight className="w-4 h-4" />
            <span className="font-semibold text-gray-900">ELHODA Products</span>
            <ChevronRight className="w-4 h-4" />
            <span className="font-semibold text-gray-900">
              In Vitro Diagnostics (IVD)
            </span>
          </nav>
        </div>
        {/* Enhanced Hero */}
        <div className="mb-8 md:mb-12">
          <div className="bg-gradient-to-br from-gray-900 via-black to-red-900 rounded-3xl shadow-2xl p-6 md:p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-purple-500/10" />
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-4 md:mb-6">
                    <Database className="w-3 h-3 md:w-4 md:h-4 text-white" />
                    <span className="text-xs md:text-sm font-semibold text-white">
                      Complete Diagnostic Catalog
                    </span>
                  </div>

                  <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                    <span className="text-transparent bg-gradient-to-r from-white via-red-200 to-red-300 bg-clip-text">
                      IVD REAGENTS &
                    </span>
                    <br />
                    <span className="text-transparent bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text">
                      MEDICAL CONSUMABLES
                    </span>
                  </h1>

                  <p className="text-gray-300 text-sm md:text-lg max-w-3xl mb-6 md:mb-8 bg-black/20 backdrop-blur-sm p-4 rounded-xl">
                    Comprehensive catalog of In Vitro Diagnostic reagents
                    organized in tabular format. Browse through Clinical
                    Chemistry Reagents, including General Purpose Reagents and
                    ELHODA Auto-Analyzer Series Reagents.
                  </p>

                  <div className="flex flex-wrap gap-3 md:gap-4">
                    <button
                      onClick={handleBackToProducts}
                      className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-white to-gray-100 text-gray-900 px-4 py-2.5 md:px-6 md:py-3 rounded-xl font-bold hover:shadow-lg transition text-sm md:text-base shadow-md"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Back to Products
                    </button>
                    {!isMobile && (
                      <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-bold hover:bg-white/30 transition shadow-md"
                      >
                        <Menu className="w-5 h-5" />
                        Browse Categories
                      </button>
                    )}
                  </div>
                </div>

                <div className="hidden lg:flex items-center justify-center">
                  <div className="relative">
                    <div className="w-48 h-48 bg-gradient-to-r from-red-500/20 to-purple-500/20 rounded-full blur-xl" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Package className="w-32 h-32 text-white/30" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMobile && isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 lg:hidden">
            <div
              className="absolute inset-0"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div className="absolute left-0 right-0 bottom-0 top-20 bg-gradient-to-b from-white to-gray-50 rounded-t-3xl overflow-hidden shadow-2xl">
              <div ref={mobileMenuRef} className="p-6 h-full overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Categories
                    </h2>
                    <p className="text-gray-600 text-sm">
                      Browse our product catalog
                    </p>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl shadow-sm hover:shadow-md"
                  >
                    <X className="w-6 h-6 text-gray-700" />
                  </button>
                </div>

                {activeCategory && (
                  <div className="mb-6 p-4 bg-gradient-to-r from-red-50 to-red-50 rounded-2xl border border-red-200 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-red-600 font-medium">
                          Selected Category:
                        </p>
                        <p className="font-bold text-gray-900">
                          {activeCategory.name.split(". ")[1] ||
                            activeCategory.name}
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          preserveScroll(mobileMenuRef, () => {
                            setActiveCategory(null);
                            setActiveSubcategory(null);
                            setActiveHematologyInstrument(null);
                            setExpandedCategories([]);
                            setExpandedSubcategories([]);
                            setExpandedTables({});
                            setShowMedicalConsumables(false);
                          })
                        }
                        className="text-sm bg-gradient-to-r from-red-50 to-red-100 text-red-600 hover:text-red-700 px-3 py-1 rounded-lg"
                      >
                        Clear
                      </button>
                    </div>
                  </div>
                )}

                <div className="space-y-3">
                  {allCategories.map((category) => {
                    const isExpanded = expandedCategories.includes(category.id);
                    const isActive = activeCategory?.id === category.id;
                    const colors = getCategoryColors(category.id);

                    return (
                      <div
                        key={category.id}
                        className={`rounded-2xl transition-all duration-300 shadow-sm ${
                          isActive
                            ? `border-2 ${colors.border} ${colors.light}`
                            : "border border-gray-200 hover:border-gray-300 hover:shadow-md"
                        }`}
                      >
                        <button
                          onClick={() =>
                            preserveScroll(mobileMenuRef, () => {
                              // Direct toggle logic for sidebar
                              const isExpanded = expandedCategories.includes(
                                category.id,
                              );
                              const isActive =
                                activeCategory?.id === category.id;

                              if (isActive && isExpanded) {
                                // Clicking an already expanded category should collapse it
                                setExpandedCategories((prev) =>
                                  prev.filter((id) => id !== category.id),
                                );
                                setActiveSubcategory(null);
                                setActiveHematologyInstrument(null);
                              } else {
                                // Clicking a collapsed or different category should expand it
                                setActiveCategory(category);
                                setActiveSubcategory(null);
                                setActiveHematologyInstrument(null);
                                setExpandedCategories((prev) => {
                                  // Keep only this category expanded
                                  if (prev.includes(category.id)) {
                                    return prev;
                                  }
                                  return [category.id];
                                });
                              }

                              // Special handling for specific categories
                              if (category.id === "medical-consumables") {
                                setShowMedicalConsumables(true);
                              } else {
                                setShowMedicalConsumables(false);
                              }
                            })
                          }
                          className="w-full text-left p-4"
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-12 h-12 rounded-xl flex items-center justify-center ${category.bgColor} shadow-sm`}
                            >
                              <category.icon
                                className={`w-6 h-6 ${
                                  isActive ? colors.icon : "text-gray-700"
                                }`}
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-bold text-gray-900 text-sm mb-1 line-clamp-2">
                                {category.name.split(". ")[1] || category.name}
                              </h3>
                              <p className="text-xs text-gray-600 line-clamp-2">
                                {category.description}
                              </p>
                            </div>
                          </div>
                        </button>

                        {isExpanded &&
                          category.id !== "hematology-reagents" &&
                          category.id !== "medical-consumables" &&
                          category.id !== "hematology-instrumentation" && (
                            <div className="px-4 pb-4">
                              <div className="border-t border-gray-200 mt-3 pt-3">
                                <h4 className="text-sm font-medium text-gray-700 mb-3">
                                  Subcategories
                                </h4>
                                <div className="space-y-2">
                                  {category.subcategories?.map(
                                    (subcategory) => (
                                      <button
                                        key={subcategory.id}
                                        onClick={() =>
                                          preserveScroll(mobileMenuRef, () =>
                                            category.id ===
                                            "clinical-chemistry-instrumentation"
                                              ? handleInstrumentClick(
                                                  category,
                                                  subcategory,
                                                )
                                              : handleSubcategoryClick(
                                                  category,
                                                  subcategory,
                                                ),
                                          )
                                        }
                                        className={`w-full text-left p-3 rounded-xl transition-colors ${
                                          activeSubcategory?.id ===
                                          subcategory.id
                                            ? `bg-gradient-to-r ${colors.light} border-l-4 ${colors.border}`
                                            : "hover:bg-gray-50"
                                        }`}
                                      >
                                        <div className="flex items-center gap-3">
                                          <div
                                            className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                                              subcategory.bgColor ||
                                              "bg-gray-100"
                                            } shadow-sm`}
                                          >
                                            {subcategory.icon ? (
                                              <subcategory.icon className="w-5 h-5 text-gray-700" />
                                            ) : category.id ===
                                              "clinical-chemistry-instrumentation" ? (
                                              <Cpu className="w-5 h-5 text-gray-700" />
                                            ) : (
                                              <Table className="w-5 h-5 text-gray-700" />
                                            )}
                                          </div>
                                          <div className="text-left flex-1">
                                            <h5 className="font-medium text-gray-900 text-sm">
                                              {subcategory.name.split(
                                                ". ",
                                              )[1] || subcategory.name}
                                            </h5>
                                            <p className="text-xs text-gray-500">
                                              {subcategory.description}
                                            </p>
                                          </div>
                                          <ChevronRight className="w-4 h-4 text-gray-400" />
                                        </div>
                                      </button>
                                    ),
                                  )}
                                </div>
                              </div>
                            </div>
                          )}
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full text-center p-4 bg-gradient-to-r from-gray-900 to-black text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition"
                  >
                    Close Menu
                  </button>
                  {(activeCategory ||
                    activeSubcategory ||
                    activeHematologyInstrument) && (
                    <button
                      onClick={() => {
                        setActiveCategory(null);
                        setActiveSubcategory(null);
                        setActiveHematologyInstrument(null);
                        setExpandedCategories([]);
                        setExpandedSubcategories([]);
                        setExpandedTables({});
                        setShowMedicalConsumables(false);
                      }}
                      className="w-full text-center p-4 border-2 border-gray-300 text-gray-700 font-bold rounded-2xl hover:bg-gray-50 transition"
                    >
                      Clear All Selections
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Content with Enhanced Sidebar */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          <div className="hidden lg:block lg:w-1/3">
            <div
              ref={sidebarRef}
              className="bg-gradient-to-b from-white to-gray-50 rounded-2xl border border-gray-200 shadow-lg p-6 sticky top-8 max-h-[calc(100vh-4rem)] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Categories
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Browse product catalog
                  </p>
                </div>
                <Folder className="w-6 h-6 text-gray-400" />
              </div>

              {(activeCategory ||
                activeSubcategory ||
                activeHematologyInstrument) && (
                <div className="mb-6 p-4 bg-gradient-to-r from-red-50 to-red-50 rounded-2xl border border-red-200 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-red-700">
                      Current Selection:
                    </span>
                    <button
                      onClick={() => {
                        setActiveCategory(null);
                        setActiveSubcategory(null);
                        setActiveHematologyInstrument(null);
                        setExpandedCategories([]);
                        setExpandedSubcategories([]);
                        setExpandedTables({});
                        setShowMedicalConsumables(false);
                      }}
                      className="text-sm bg-gradient-to-r from-red-50 to-red-100 text-red-600 hover:text-red-700 px-3 py-1 rounded-lg"
                    >
                      Clear All
                    </button>
                  </div>
                  <div className="space-y-1">
                    {activeCategory && (
                      <p className="text-gray-900 font-bold">
                        {activeCategory.name.split(". ")[1] ||
                          activeCategory.name}
                      </p>
                    )}
                    {activeSubcategory && (
                      <p className="text-gray-700 text-sm">
                        →{" "}
                        {activeSubcategory.name.split(". ")[1] ||
                          activeSubcategory.name}
                      </p>
                    )}
                    {activeHematologyInstrument && (
                      <p className="text-gray-700 text-sm">
                        → {activeHematologyInstrument.name}
                      </p>
                    )}
                  </div>
                </div>
              )}

              <div className="space-y-4">
                {allCategories.map((category) => {
                  // const isExpanded = expandedCategories.includes(category.id);
                  const isActive = activeCategory?.id === category.id;
                  const colors = getCategoryColors(category.id);

                  return (
                    <div
                      key={category.id}
                      className={`rounded-2xl transition-all duration-300 shadow-sm ${
                        isActive
                          ? `border-2 ${colors.border} ${colors.light}`
                          : "border border-gray-200 hover:border-gray-300 hover:shadow-md"
                      }`}
                    >
                      <button
                        onClick={() =>
                          preserveScroll(sidebarRef, () => {
                            // Direct toggle logic for sidebar
                            const isExpanded = expandedCategories.includes(
                              category.id,
                            );
                            const isActive = activeCategory?.id === category.id;

                            if (isActive && isExpanded) {
                              // Clicking an already expanded category should collapse it
                              setExpandedCategories((prev) =>
                                prev.filter((id) => id !== category.id),
                              );
                              setActiveSubcategory(null);
                              setActiveHematologyInstrument(null);
                            } else {
                              // Clicking a collapsed or different category should expand it
                              setActiveCategory(category);
                              setActiveSubcategory(null);
                              setActiveHematologyInstrument(null);
                              setExpandedCategories((prev) => {
                                // Keep only this category expanded
                                if (prev.includes(category.id)) {
                                  return prev;
                                }
                                return [category.id];
                              });
                            }

                            // Special handling for specific categories
                            if (category.id === "medical-consumables") {
                              setShowMedicalConsumables(true);
                            } else {
                              setShowMedicalConsumables(false);
                            }
                          })
                        }
                        className="w-full text-left p-4"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-14 h-14 rounded-xl flex items-center justify-center ${category.bgColor} shadow-md`}
                          >
                            <category.icon
                              className={`w-7 h-7 ${
                                isActive ? colors.icon : "text-gray-700"
                              }`}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-gray-900 mb-1 line-clamp-2">
                              {category.name.split(". ")[1] || category.name}
                            </h3>
                            <p className="text-xs text-gray-600 line-clamp-2">
                              {category.description}
                            </p>
                          </div>
                        </div>
                      </button>

                      {category.id !== "hematology-reagents" &&
                        category.id !== "medical-consumables" &&
                        renderSidebarSubcategories(category)}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">{renderTable()}</div>
        </div>
      </div>
      {/* Enhanced Scroll Button */}
      {(!isMobile || !isMobileMenuOpen) && (
        <button
          onClick={handleScrollAction}
          className={`fixed right-8 z-[60] p-4 bg-white/95 backdrop-blur-sm text-brand-black border border-gray-200/60 rounded-2xl shadow-2xl hover:bg-brand-red hover:text-white transition-all duration-300 group hover:shadow-brand-red/30 hover:scale-110 ${
            isMobile ? "bottom-24" : "bottom-8"
          }`}
          aria-label={isAtTop ? "Scroll down" : "Scroll to top"}
        >
          {isAtTop ? (
            <ArrowDown
              size={24}
              className="group-hover:translate-y-1 transition-transform"
            />
          ) : (
            <ArrowUp
              size={24}
              className="group-hover:-translate-y-1 transition-transform"
            />
          )}
        </button>
      )}
      {/* Enhanced Mobile Bottom Navigation */}
      {isMobile && !isMobileMenuOpen && (
        <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white to-white/95 border-t border-gray-300 p-4 z-30 lg:hidden shadow-2xl backdrop-blur-lg">
          <div className="flex items-center justify-around">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="flex flex-col items-center gap-1 text-red-600 hover:text-red-700 transition"
            >
              <div className="p-2 bg-gradient-to-r from-red-50 to-red-50 rounded-xl">
                <Menu className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium">Categories</span>
            </button>
            <button
              onClick={handleBackToProducts}
              className="flex flex-col items-center gap-1 text-gray-700 hover:text-gray-900 transition"
            >
              <div className="p-2 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl">
                <Home className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium">Products</span>
            </button>
            {(activeCategory ||
              activeSubcategory ||
              activeHematologyInstrument) && (
              <button
                onClick={() => {
                  setActiveCategory(null);
                  setActiveSubcategory(null);
                  setActiveHematologyInstrument(null);
                  setExpandedCategories([]);
                  setExpandedSubcategories([]);
                  setExpandedTables({});
                  setShowMedicalConsumables(false);
                }}
                className="flex flex-col items-center gap-1 text-rose-600 hover:text-rose-700 transition"
              >
                <div className="p-2 bg-gradient-to-r from-rose-50 to-red-50 rounded-xl">
                  <X className="w-5 h-5" />
                </div>
                <span className="text-xs font-medium">Clear</span>
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default IVDReagentsTable;
