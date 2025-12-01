import React from 'react';

function Section({ children }) {
  return <section className="layout-section">{children || 'Section'}</section>;
}

export default Section;
