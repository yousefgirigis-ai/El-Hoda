import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

/* ================= COMMON ================= */
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import ScrollRevealBackground from "./components/common/ScrollRevealBackground";
import BackgroundPattern from "./components/common/BackgroundPattern";

/* ================= SECTIONS ================= */
import HeroSection from "./components/sections/HeroSection";

import AboutSection from "./components/sections/AboutSection";
import AboutOverview from "./components/sections/AboutOverview";
import PartnersSection from "./components/sections/PartnersSection";
import BlogSection from "./components/sections/BlogSection";
import ContactSection from "./components/sections/ContactSection";

/* ================= PARTNERS PAGE ================= */
import Partners from "./components/sections/Partners";
import LaboratoryDiagnostics from "./components/sections/partners/LaboratoryDiagnostics";
import InfectionControlResearch from "./components/sections/partners/InfectionControlResearch";
import ClinicalChemistryHematology from "./components/sections/partners/ClinicalChemistryHematology";

/* ================= ABOUT SECTION COMPONENTS ================= */
import CorporateHistory from "./components/sections/CorporateHistoryOverview";
import CorporateIdentity from "./components/sections/CorporateIdentity";
import HeadquartersOperations from "./components/sections/HeadquartersOperations";
import GovernmentPartnerships from "./components/sections/GovernmentPartnerships";
import CorporateCitizenship from "./components/sections/CorporateCitizenship";
import ProductsServices from "./components/sections/ProductsServices";
import ValueProposition from "./components/sections/ValueProposition";

/* ================= CORE VALUES COMPONENTS ================= */
import CoreValues1 from "./components/sections/CoreValuesOverview";

/* ================= SERVICE COMPONENTS ================= */
import QualityManagementCompliance from "./pages/services/QualityManagementCompliance";
import TechnicalEngineeringServices from "./pages/services/TechnicalEngineeringServices";
import ApplicationSupportTraining from "./pages/services/ApplicationSupportTraining";

/* ================= PAGES ================= */
import PartnerDetails from "./pages/PartnerDetails";
import ProductDetailPage from "./pages/ProductDetailPage";
import CompanyDetailPage from "./components/sections/CompanyDetailPage";

/* ================= UI ================= */
import { Toaster } from "react-hot-toast";
import "./components/ui/animations.css";

/* ================= PRODUCTS ================= */
import ElhodaProducts from "./components/sections/Product/ElhodaProducts";
import RapidTestProducts from "./components/sections/Product/RapidTestProducts";
import IVDReagentsTable from "./components/sections/Product/IVDProductsComponent";
import HematologyReagentsTable from "./components/sections/Product/HematologyReagentsTable";
import HematologyInstrumentation from "./components/sections/Product/HematologyInstrumentation";
import IPCProductsTable from "./components/sections/Product/IPCProductTable";
import ProductsSection from "./components/sections/Product/ProductsSection";
import EventDetails from "./components/sections/Event/EventDetails";
import AnnualEvents from "./components/sections/Event/AnnualEvents";
import OneTimeEvents from "./components/sections/Event/OneTimeEvents";

/* =========================================================
   SCROLL TO TOP COMPONENT
========================================================= */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on every route change
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // Also handle hash/anchor scrolling
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -80;
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [pathname]);

  return null;
};

/* =========================================================
   LAYOUT COMPONENTS WITH SCROLL TO TOP
========================================================= */
const LayoutWrapper = ({ children, className = "bg-white" }) => {
  useEffect(() => {
    // Additional safety scroll for initial load
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <div className={`font-sans min-h-screen antialiased ${className}`}>
      <ScrollRevealBackground />
      <Header />
      <main className={className.includes("bg-[#E1E8F0]") ? "pt-24" : ""}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

/* =========================================================
   HOME PAGE
========================================================= */
const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle scroll to specific section from state
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        const yOffset = -80;
        const y =
          section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="font-sans min-h-screen antialiased bg-white">
      <ScrollRevealBackground />
      <Header />
      <main>
        <section id="hero" aria-label="Hero">
          <HeroSection />
        </section>
        <BackgroundPattern className="relative w-full">
          <section id="about" aria-label="About">
            <AboutSection />
          </section>
          <section id="blog" aria-label="Blog">
            <BlogSection />
          </section>
          <section id="partners" aria-label="Partners">
            <PartnersSection />
          </section>
          <section id="contact" aria-label="Contact">
            <ContactSection />
          </section>
        </BackgroundPattern>
      </main>
      <Footer />
    </div>
  );
};

/* =========================================================
   PARTNER SECTION PAGES LAYOUT
========================================================= */
const PartnerSectionLayout = ({ children }) => {
  return <LayoutWrapper>{children}</LayoutWrapper>;
};

/* =========================================================
   ABOUT SECTION PAGES LAYOUT
========================================================= */
const AboutSectionLayout = ({ children }) => {
  return <LayoutWrapper className="bg-[#E1E8F0]">{children}</LayoutWrapper>;
};

/* =========================================================
   SERVICE PAGES LAYOUT
========================================================= */
const ServicePageLayout = ({ children }) => {
  return <LayoutWrapper>{children}</LayoutWrapper>;
};

/* =========================================================
   PRODUCTS PAGES LAYOUT
========================================================= */
const ProductsPageLayout = ({ children }) => {
  return <LayoutWrapper>{children}</LayoutWrapper>;
};

/* =========================================================
   APP ROUTER
========================================================= */
const App = () => {
  return (
    <Router>
      {/* GLOBAL SCROLL TO TOP */}
      <ScrollToTop />

      {/* GLOBAL TOASTER */}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            border: "1px solid #22c55e",
            padding: "16px",
            color: "#fff",
            background: "#22c55e",
          },
          iconTheme: {
            primary: "#fff",
            secondary: "#22c55e",
          },
        }}
      />

      <Routes>
        {/* events */}
        <Route
          path="/events/annual"
          element={
            <LayoutWrapper>
              <AnnualEvents />
            </LayoutWrapper>
          }
        />
        <Route
          path="/events/one-time"
          element={
            <LayoutWrapper>
              <OneTimeEvents />
            </LayoutWrapper>
          }
        />
        <Route
          path="/events/:slug"
          element={
            <LayoutWrapper>
              <EventDetails />
            </LayoutWrapper>
          }
        />

        {/* HOME */}
        <Route path="/" element={<HomePage />} />

        {/* ABOUT OVERVIEW */}
        <Route
          path="/about/overview"
          element={
            <LayoutWrapper>
              <AboutOverview />
            </LayoutWrapper>
          }
        />

        {/* PARTNERS PAGES */}
        <Route
          path="/partners"
          element={
            <LayoutWrapper>
              <Partners />
            </LayoutWrapper>
          }
        />
        <Route
          path="/partners/laboratory"
          element={
            <PartnerSectionLayout>
              <LaboratoryDiagnostics />
            </PartnerSectionLayout>
          }
        />
        <Route
          path="/partners/clinical"
          element={
            <PartnerSectionLayout>
              <ClinicalChemistryHematology />
            </PartnerSectionLayout>
          }
        />
        <Route
          path="/partners/infection"
          element={
            <PartnerSectionLayout>
              <InfectionControlResearch />
            </PartnerSectionLayout>
          }
        />

        {/* INDIVIDUAL ABOUT SECTIONS */}
        <Route
          path="/about/history"
          element={
            <AboutSectionLayout>
              <CorporateHistory />
            </AboutSectionLayout>
          }
        />
        <Route
          path="/about/identity"
          element={
            <AboutSectionLayout>
              <CorporateIdentity />
            </AboutSectionLayout>
          }
        />
        <Route
          path="/about/operations"
          element={
            <AboutSectionLayout>
              <HeadquartersOperations />
            </AboutSectionLayout>
          }
        />
        <Route
          path="/about/partnerships"
          element={
            <AboutSectionLayout>
              <GovernmentPartnerships />
            </AboutSectionLayout>
          }
        />
        <Route
          path="/about/citizenship"
          element={
            <AboutSectionLayout>
              <CorporateCitizenship />
            </AboutSectionLayout>
          }
        />
        <Route
          path="/about/products"
          element={
            <AboutSectionLayout>
              <ProductsServices />
            </AboutSectionLayout>
          }
        />
        <Route
          path="/about/value"
          element={
            <AboutSectionLayout>
              <ValueProposition />
            </AboutSectionLayout>
          }
        />

        {/* CORE VALUES PAGE */}
        <Route
          path="/about/values"
          element={
            <AboutSectionLayout>
              <CoreValues1 />
            </AboutSectionLayout>
          }
        />

        {/* COMPANY DETAILS */}
        <Route
          path="/company/:slug"
          element={
            <LayoutWrapper>
              <CompanyDetailPage />
            </LayoutWrapper>
          }
        />

        {/* SERVICE PAGES */}
        <Route
          path="/services/quality-management-compliance"
          element={
            <ServicePageLayout>
              <QualityManagementCompliance />
            </ServicePageLayout>
          }
        />
        <Route
          path="/services/application-support-training"
          element={
            <ServicePageLayout>
              <ApplicationSupportTraining />
            </ServicePageLayout>
          }
        />
        <Route
          path="/services/technical-engineering"
          element={
            <ServicePageLayout>
              <TechnicalEngineeringServices />
            </ServicePageLayout>
          }
        />

        {/* PRODUCTS PAGES */}
        <Route
          path="/products"
          element={
            <ProductsPageLayout>
              <ElhodaProducts />
            </ProductsPageLayout>
          }
        />

        <Route
          path="/products/ivd"
          element={
            <ProductsPageLayout>
              <IVDReagentsTable />
            </ProductsPageLayout>
          }
        />

        <Route
          path="/products/hematology-reagents"
          element={
            <ProductsPageLayout>
              <HematologyReagentsTable />
            </ProductsPageLayout>
          }
        />
        <Route
          path="/products/hematology-instrumentation"
          element={
            <ProductsPageLayout>
              <HematologyInstrumentation />
            </ProductsPageLayout>
          }
        />

        <Route
          path="/products/medical-consumables"
          element={
            <ProductsPageLayout>
              <ProductsSection />
            </ProductsPageLayout>
          }
        />

        <Route
          path="/products/ipc"
          element={
            <ProductsPageLayout>
              <IPCProductsTable />
            </ProductsPageLayout>
          }
        />
        <Route
          path="/products/rapid-test"
          element={
            <ProductsPageLayout>
              <RapidTestProducts />
            </ProductsPageLayout>
          }
        />

        {/* PRODUCT DETAILS */}
        <Route
          path="/product/:productId"
          element={
            <LayoutWrapper>
              <ProductDetailPage />
            </LayoutWrapper>
          }
        />

        {/* PARTNER DETAILS */}
        <Route
          path="/partners/:slug"
          element={
            <LayoutWrapper>
              <PartnerDetails />
            </LayoutWrapper>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
