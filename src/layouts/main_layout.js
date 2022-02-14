import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="page">
        <section
          id="section-content"
          className="content page-1 moto-section"
          data-widget="section"
          data-container="section"
        >
          {children}
        </section>
      </div>
      {/* <Header />
      {children}
      <Footer /> */}
    </>
  );
};

export default MainLayout;
