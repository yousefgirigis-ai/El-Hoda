import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowUp,
  ArrowDown,
  ChevronRight,
  X,
  Menu,
  ChevronDown,
  Info,
  Beaker,
  TestTube,
  Droplets,
  Thermometer,
  Filter,
  Wrench,
  FileText,
  RefreshCw,
  Package,
  Clock,
  BarChart3,
  Shield,
  Users,
  Headphones,
  CheckCircle,
  Search,
  Filter as FilterIcon,
  AlertCircle,
  Zap,
} from "lucide-react";

const HematologyReagentsTable = () => {
  const navigate = useNavigate();
  const [isAtTop, setIsAtTop] = useState(true);
  const [activeCategory, setActiveCategory] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState([]);
  const [activeTab, setActiveTab] = useState("products");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle URL parameters for direct category navigation
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const categoryId = params.get("category");

    if (categoryId) {
      const category = hematologyCategories.find(
        (cat) => cat.id === categoryId,
      );
      if (category) {
        setActiveCategory(category);
        setExpandedCategories([categoryId]);
        setActiveTab("products");

        // Update URL
        const url = new URL(window.location);
        url.searchParams.set("category", categoryId);
        window.history.pushState({}, "", url);
      }
    }
  }, []);

  useEffect(() => {
    if (activeCategory && activeCategory.tableData) {
      const products = activeCategory.tableData.rows.filter(
        (row) => !row.isHeader,
      );
      if (searchTerm) {
        const filtered = products.filter(
          (product) =>
            product.productName
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            product.catalogNumber
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            product.analyte.toLowerCase().includes(searchTerm.toLowerCase()),
        );
        setFilteredProducts(filtered);
      } else {
        setFilteredProducts(products);
      }
    }
  }, [searchTerm, activeCategory]);

  const handleBackToHome = () => {
    navigate("/products/ivd");
  };

  const handleScrollAction = () => {
    window.scrollTo({
      top: isAtTop ? document.documentElement.scrollHeight : 0,
      behavior: "smooth",
    });
  };

  const toggleCategory = (categoryId) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId],
    );
  };

  const handleCategoryClick = (category) => {
    if (activeCategory?.id === category.id) {
      toggleCategory(category.id);
    } else {
      setActiveCategory(category);
      setExpandedCategories([category.id]);
      setActiveTab("products");
      setSearchTerm("");

      // Update URL
      const url = new URL(window.location);
      url.searchParams.set("category", category.id);
      window.history.pushState({}, "", url);
    }
    setIsMobileMenuOpen(false);

    // Scroll to top of content on mobile
    if (window.innerWidth < 1024) {
      document
        .querySelector(".lg\\:w-2\\/3")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const clearSelection = () => {
    setActiveCategory(null);
    setActiveTab("products");
    setSearchTerm("");

    // Clear URL parameters
    const url = new URL(window.location);
    url.searchParams.delete("category");
    window.history.pushState({}, "", url);
  };

  // Hematology Reagents Categories with table data
  const hematologyCategories = [
    {
      id: "neomedica",
      name: "1) Neomedica ® Hematology Reagents",
      description: "For Phoenix analyzers (5-Diff, 3-Diff, with Autoloader)",
      icon: Beaker,
      color: "from-red-400 to-red-600",
      bgColor: "bg-red-50",
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
      color: "from-red-400 to-red-600",
      bgColor: "bg-red-50",
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
      color: "from-red-400 to-red-600",
      bgColor: "bg-red-50",
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
      color: "from-red-400 to-red-600",
      bgColor: "bg-red-50",
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
      color: "from-red-400 to-red-600",
      bgColor: "bg-red-50",
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
      color: "from-red-400 to-red-600",
      bgColor: "bg-red-50",
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
      color: "from-red-400 to-red-600",
      bgColor: "bg-red-50",
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
      color: "from-red-400 to-red-600",
      bgColor: "bg-red-50",
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
      color: "from-red-400 to-red-600",
      bgColor: "bg-red-50",
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
      color: "from-red-400 to-red-600",
      bgColor: "bg-red-50",
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
      color: "from-red-400 to-red-600",
      bgColor: "bg-red-50",
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

  const renderCategoryDetails = (category) => {
    if (!category) return null;

    const tabs = [
      { id: "products", label: "Products", icon: Package },
      { id: "specifications", label: "Specifications", icon: BarChart3 },
      { id: "notes", label: "Notes & Info", icon: Info },
      { id: "compatibility", label: "Compatibility", icon: Shield },
    ];

    const renderTabContent = () => {
      switch (activeTab) {
        case "products":
          return (
            <div className="space-y-6">
              {/* Search and Filter */}
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search products, catalog numbers, or analytes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <FilterIcon className="w-4 h-4" />
                  <span>
                    {searchTerm
                      ? filteredProducts.length
                      : category.tableData.rows.filter((row) => !row.isHeader)
                          .length}{" "}
                    products
                  </span>
                </div>
              </div>

              {/* Products Table */}
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                      <tr>
                        {category.tableData.headers.map((header, index) => (
                          <th
                            key={index}
                            scope="col"
                            className="px-6 py-4 text-left text-xs font-bold text-gray-900 uppercase tracking-wider"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {category.tableData.rows.map((row, rowIndex) => {
                        if (row.isHeader) {
                          return (
                            <tr
                              key={rowIndex}
                              className="bg-gradient-to-r from-red-50 to-red-50"
                            >
                              <td
                                colSpan={category.tableData.headers.length}
                                className="px-6 py-4 text-sm font-bold text-red-900 uppercase"
                              >
                                {row.productName}
                              </td>
                            </tr>
                          );
                        }

                        // Only show non-header rows that match search
                        if (searchTerm && !filteredProducts.includes(row)) {
                          return null;
                        }

                        return (
                          <tr
                            key={rowIndex}
                            className="hover:bg-gray-50 transition-colors duration-150"
                          >
                            <td className="px-6 py-4 text-sm font-medium text-gray-900">
                              {row.productName}
                            </td>
                            <td className="px-6 py-4">
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
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

              {searchTerm && filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    No products found
                  </h3>
                  <p className="text-gray-600">
                    No products match your search criteria. Try a different
                    term.
                  </p>
                </div>
              )}
            </div>
          );

        case "specifications":
          return (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Technical Specifications
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-red-50 to-red-50 rounded-xl border border-red-200 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <Package className="w-5 h-5 text-red-600" />
                    </div>
                    <h4 className="font-bold text-gray-900">Reagent Form</h4>
                  </div>
                  <p className="text-gray-700">
                    All reagents are liquid stable formulations for maximum
                    convenience and reduced waste.
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
                    according to manufacturer's instructions.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-red-50 rounded-xl border border-red-200 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-red-600" />
                    </div>
                    <h4 className="font-bold text-gray-900">
                      Quality Standards
                    </h4>
                  </div>
                  <p className="text-gray-700">
                    Manufactured under ISO 13485 standards with comprehensive
                    quality control testing.
                  </p>
                </div>
              </div>

              {/* Specifications Table */}
              <div className="mt-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Key Specifications
                </h4>
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-bold text-gray-900 uppercase">
                          Parameter
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-bold text-gray-900 uppercase">
                          Specification
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 font-medium text-gray-900">
                          Reagent Form
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                            Liquid Stable
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium text-gray-900">
                          Shelf Life
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                            18-24 Months
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium text-gray-900">
                          On-board Stability
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800">
                            Up to 60 Days
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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

              {/* Check if there are any notes or additional info */}
              {category.tableData?.note ||
              category.tableData?.additionalInfo ? (
                <>
                  {category.tableData.note && (
                    <div className="bg-gradient-to-br from-red-50 to-red-50 rounded-xl border border-red-200 p-6">
                      <div className="flex items-start gap-4">
                        <AlertCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2">
                            Important Note
                          </h4>
                          <p className="text-gray-700">
                            {category.tableData.note}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {category.tableData.additionalInfo && (
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 p-6">
                      <div className="flex items-start gap-4">
                        <Info className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2">
                            Additional Information
                          </h4>
                          <p className="text-gray-700">
                            {category.tableData.additionalInfo}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full mb-4">
                    <FileText className="w-8 h-8 text-gray-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">
                    No notes available
                  </h4>
                  <p className="text-gray-500 max-w-md mx-auto">
                    There are no additional notes or information for this
                    product.
                  </p>
                </div>
              )}
            </div>
          );

        case "compatibility":
          return (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Instrument Compatibility
              </h3>

              <div className="bg-gradient-to-br from-red-50 to-red-50 rounded-xl border border-red-200 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      Compatible Analyzers
                    </h4>
                    <p className="text-gray-700 mb-4">{category.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {category.description
                        .split("For ")[1]
                        ?.split(/[.,]/)
                        .map(
                          (analyzer, index) =>
                            analyzer.trim() && (
                              <div
                                key={index}
                                className="flex items-center gap-2"
                              >
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span className="text-gray-700">
                                  {analyzer.trim()}
                                </span>
                              </div>
                            ),
                        )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3">
                    Technical Support
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <Headphones className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>
                        24/7 technical support for compatibility issues
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Users className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>
                        Application specialists available for instrument setup
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>
                        Comprehensive product documentation and application
                        notes
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );

        default:
          return null;
      }
    };

    return (
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-600 p-6 text-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <category.icon className="w-5 h-5" />
                <span className="text-sm font-semibold">
                  {category.name.split(") ")[0]}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">
                {category.name.split(") ")[1]}
              </h2>
              <p className="text-red-100 mt-2">{category.description}</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold">
                  {category.totalProducts}
                </div>
                <div className="text-sm text-red-200">Products</div>
              </div>
              <div className="hidden md:block">
                <div className="text-sm font-medium">
                  Liquid Stable Formulation
                </div>
                <div className="text-xs text-red-200">Ready to use</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="border-b border-gray-200">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex items-center gap-2 px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors
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
    );
  };

  const renderEmptyState = () => (
    <div className="flex flex-col items-center justify-center min-h-[500px] bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 text-center border border-gray-200">
      <div className="w-24 h-24 bg-gradient-to-br from-red-100 to-red-100 rounded-full flex items-center justify-center mb-6">
        <Beaker className="w-12 h-12 text-red-600" />
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Hematology Reagents Catalog
      </h2>

      <p className="text-lg text-gray-600 max-w-md mb-8">
        Select a brand from the sidebar to view detailed reagent specifications,
        compatibility information, and technical data.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-6 max-w-lg w-full">
        <div className="flex items-center gap-3 mb-4">
          <Info className="w-5 h-5 text-red-600" />
          <h3 className="font-semibold text-gray-900">Available Brands:</h3>
        </div>

        <div className="space-y-3 text-left">
          {hematologyCategories.slice(0, 5).map((category, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                <category.icon className="w-4 h-4 text-red-600" />
              </div>
              <div>
                <div className="font-medium text-gray-900">
                  {category.name.split(") ")[1]}
                </div>
                <p className="text-sm text-gray-600">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-red-50/30 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb/Path */}
        <div className="mb-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <button
              onClick={handleBackToHome}
              className="hover:text-[#E81729] transition-colors"
            >
              Home
            </button>
            <ChevronRight className="w-4 h-4" />
            <span className="font-medium text-gray-900">
              Hematology Reagents
            </span>
          </nav>
        </div>

        {/* Hero */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-gray-900 via-black to-red-900 rounded-3xl shadow-2xl p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
                  <Beaker className="w-4 h-4 text-white" />
                  <span className="text-sm font-semibold text-white">
                    Hematology Reagents Catalog
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  <span className="text-white">HEMATOLOGY </span>
                  <span className="text-transparent bg-gradient-to-r from-white to-red-500 bg-clip-text">
                    REAGENTS & CONTROLS
                  </span>
                </h1>

                <p className="text-gray-300 text-lg max-w-3xl mb-8">
                  Complete catalog of hematology reagents for all major brands
                  including Sysmex, Abbott, Beckman Coulter, Mindray, URIT,
                  Dymind, and more. Includes diluents, lysing agents, cleaners,
                  and quality controls.
                </p>

                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={handleBackToHome}
                    className="inline-flex items-center gap-3 bg-white text-gray-900 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition"
                  >
                    ← Back to IVD
                  </button>
                  <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="lg:hidden inline-flex items-center gap-3 bg-white/20 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/30 transition"
                  >
                    <Menu className="w-5 h-5" />
                    Browse Brands
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content with Sidebar */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div
            className={`lg:w-1/3 ${isMobileMenuOpen ? "block" : "hidden lg:block"}`}
          >
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sticky top-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Brands & Categories
                </h2>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-3">
                {hematologyCategories.map((category) => {
                  const isExpanded = expandedCategories.includes(category.id);
                  const isActiveCategory = activeCategory?.id === category.id;
                  return (
                    <div
                      key={category.id}
                      className={`rounded-xl transition-all duration-300 ${
                        isActiveCategory
                          ? "bg-gradient-to-r from-red-50 to-red-50 border-2 border-red-300 shadow-md"
                          : "hover:bg-gray-50 border border-gray-100 hover:border-gray-200"
                      }`}
                    >
                      <button
                        onClick={() => handleCategoryClick(category)}
                        className="w-full text-left p-4"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center ${category.bgColor}`}
                          >
                            <category.icon
                              className={`w-6 h-6 ${
                                isActiveCategory
                                  ? "text-red-700"
                                  : "text-gray-700"
                              }`}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-gray-900 mb-1 line-clamp-2">
                              {category.name.includes(") ")
                                ? category.name.split(") ")[1]
                                : category.name}
                            </h3>
                            <p className="text-xs text-gray-600 line-clamp-2">
                              {category.description}
                            </p>
                          </div>
                          <ChevronDown
                            className={`w-5 h-5 transition-transform flex-shrink-0 ${
                              isExpanded ? "rotate-180" : ""
                            } ${
                              isActiveCategory
                                ? "text-red-600"
                                : "text-gray-400"
                            }`}
                          />
                        </div>
                      </button>

                      {/* Expanded content */}
                      {isExpanded && isActiveCategory && (
                        <div className="px-4 pb-4">
                          <div className="mt-3 text-sm text-gray-700">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <Package className="w-4 h-4 text-red-600" />
                                <span className="font-medium">
                                  {category.totalProducts} products
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Shield className="w-4 h-4 text-green-500" />
                                <span className="text-xs text-gray-600">
                                  CE Certified
                                </span>
                              </div>
                            </div>
                            <p className="text-xs text-gray-600">
                              Click tabs above to explore products and
                              specifications
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Clear Selection Button */}
              {activeCategory && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button
                    onClick={clearSelection}
                    className="w-full text-center p-3 border border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition-colors text-base"
                  >
                    Clear Selection
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:w-2/3">
            {activeCategory
              ? renderCategoryDetails(activeCategory)
              : renderEmptyState()}
          </div>
        </div>
      </div>

      {/* Scroll Button */}
      <button
        onClick={handleScrollAction}
        className="fixed bottom-8 right-8 p-4 bg-white border border-gray-200 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 z-40"
        aria-label={isAtTop ? "Scroll down" : "Scroll to top"}
      >
        {isAtTop ? (
          <ArrowDown className="w-5 h-5 text-gray-700" />
        ) : (
          <ArrowUp className="w-5 h-5 text-gray-700" />
        )}
      </button>
    </section>
  );
};

export default HematologyReagentsTable;
