import React from 'react';

const WidgetMenu = ({data_widget_id, children}) => {
  return <div data-widget-id={data_widget_id}
            className="moto-widget moto-widget-menu moto-preset-default moto-align-right moto-align-center_mobile-h moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
            data-preset="default"
            data-widget="menu">
      {children}
  </div>;
};

export default WidgetMenu;
