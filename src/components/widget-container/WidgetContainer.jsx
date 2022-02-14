import React from 'react';

const WidgetContainer = ({children, dataBgPosition, containerContentId}) => {
  return <div
            className={`moto-widget moto-widget-container moto-container_content_${containerContentId}`}
            data-widget="container"
            data-container="container"
            data-css-name={`moto-container_content_${containerContentId}`}
            data-bg-position={dataBgPosition}>
          {children}
        </div>;
};

export default WidgetContainer;
