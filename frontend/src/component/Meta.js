import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
const Meta = ({ title, description, keywords }) => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keyword" content={keywords} />
        </Helmet>
      </HelmetProvider>
    </div>
  );
};
Meta.defaultProps = {
  title: "Welcome to Bhala Shop",
  keywords: "cheap electronics",
  description: "We sell cheap elecronics",
};
export default Meta;
