import "./_style.scss";
import React from "react";
import PropTypes from "prop-types";

import GlobalHeader from "~/components/03_organisms/GlobalHeader";
import GlobalFooter from "~/components/03_organisms/GlobalFooter";

const GlobalLayout = ({ children }) => (
  <>
    <GlobalHeader />
    <div className="content">{children}</div>
    <GlobalFooter />
  </>
);

GlobalLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default GlobalLayout;
