import React, { useEffect, useState } from 'react';

const BackToTopButton = () => {

  
  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  return <div
        data-moto-back-to-top-button=""
        className="moto-back-to-top-button animated moto-back-to-top-button_visible"
      >
        <a ng-click="toTop($event)" className="moto-back-to-top-button-link" onClick={scrollToTop}>
          <span className="moto-back-to-top-button-icon fa"></span>
        </a>
      </div>;
  
  
};

export default BackToTopButton;
