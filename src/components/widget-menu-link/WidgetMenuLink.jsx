import React from 'react';

const WidgetMenuLink = ({href, linkLevel, linkText, linkSubmenu}) => {
  return <a
        href={href}
        data-action="page"
        className={`moto-widget-menu-link moto-widget-menu-link-level-${linkLevel} moto-widget-menu-link-${linkSubmenu ? 'submenu':'active'} moto-link`}
    >
        {linkText}
        {     
            linkSubmenu ? <span className="fa moto-widget-menu-link-arrow"></span> : '' 
        }
    </a>;
};

export default WidgetMenuLink;
