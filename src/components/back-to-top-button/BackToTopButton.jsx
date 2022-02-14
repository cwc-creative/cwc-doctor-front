import React from 'react';

const BackToTopButton = () => {
  return <div
      data-moto-back-to-top-button=""
      className="moto-back-to-top-button animated moto-back-to-top-button_visible"
    >
      <a ng-click="toTop($event)" className="moto-back-to-top-button-link">
        <span className="moto-back-to-top-button-icon fa"></span>
      </a>
    </div>;
};

export default BackToTopButton;
