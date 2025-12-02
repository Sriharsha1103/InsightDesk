import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Section from './Section';
import Footer from './Footer';
import '../assets/css/layout.css';

// eslint-disable-next-line react/prop-types
function MainLayout({ children }) {
  console.log(children)
  return (
    <div className="layout-container">
      <Header />
      <div className="layout-main">
        <Sidebar />
        <Section>
          <div>Test</div>
          {children}</Section>
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
