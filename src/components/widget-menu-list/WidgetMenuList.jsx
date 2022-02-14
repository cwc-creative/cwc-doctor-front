import React from 'react';

const WidgetMenuList = ({children}) => {
  return <ul className="moto-widget-menu-list moto-widget-menu-list_horizontal">
      {children}
  </ul>;
};

export default WidgetMenuList;
