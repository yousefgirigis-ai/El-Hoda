import React from "react";
import BlogSection from "../components/sections/BlogSection";

const EventsPage = ({ type, title, subtitle }) => {
  return (
    <BlogSection
      filterType={type}
      title={title}
      subtitle={subtitle}
      highlight={null}
      sectionId={null}
    />
  );
};

export default EventsPage;
