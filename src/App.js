import React, { Component } from 'react';
import './App.css';
import Header from './layout/Header.js';
import IntroSection from './layout/IntroSection.js';
import MockupSection from './layout/MockupSection.js';
import MockupSection2 from './layout/MockupSection2.js';
import FeaturesSection from './layout/FeaturesSection.js';
import RiderSection from './layout/RiderSection.js';
import DriverSection from './layout/DriverSection.js';
import DashboardSection from './layout/DashboardSection.js';
import MoreFeauturesSection from './layout/MoreFeauturesSection.js';
import PricingSection from './layout/PricingSection.js';
import DownloadSection from './layout/DownloadSection.js';
import ContactSection from './layout/ContactSection.js';
import Footer from './layout/Footer.js';

class App extends Component {
  render() {
    return (
      <div >

        <Header />
        <IntroSection />
        <MockupSection />
        <MockupSection2 />
        <FeaturesSection />
        <RiderSection />
        <DriverSection />
        <DashboardSection />
        <MoreFeauturesSection />
        <PricingSection />
        <DownloadSection />
        <ContactSection />
        <Footer />
      </div>
    );
  }
}

export default App;
