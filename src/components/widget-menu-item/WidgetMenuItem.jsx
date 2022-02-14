import React from 'react';

const WidgetMenuItem = ({hasSubmenu, children}) => {
  return <li className={`moto-widget-menu-item ${hasSubmenu ? 'moto-widget-menu-item-has-submenu':''}`}>
            {children}
        </li>;
};

export default WidgetMenuItem;
