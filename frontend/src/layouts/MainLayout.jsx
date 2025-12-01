import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Section from './Section';
import Footer from './Footer';
import '../assets/css/layout.css';

function MainLayout({ children }) {
  return (
    <div className="layout-container">
      <Header />
      <div className="layout-main">
        <Sidebar />
        <Section>{children}</Section>
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
