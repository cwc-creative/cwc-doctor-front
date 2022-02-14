import React from 'react';

const WidgetTabsContent = ({id, children}) => {
  return <div
            className="moto-widget__content-wrapper moto-widget-tabs__content-wrapper"
            style={{ display: 'block' }}
        >
            <div id={id} className="moto-widget__content moto-widget-tabs__content">
                {children}
            </div>
        </div>;
};

export default WidgetTabsContent;
