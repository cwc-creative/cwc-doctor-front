import React from 'react';

const WidgetTabsHeader = ({device, dataTab, icon, title, opened}) => {
  return <div
            className={`moto-widget-tabs__header moto-widget-tabs__header_${device} ${opened ? 'moto-widget-tabs__header_opened' : ''}`}
            data-tab={dataTab}
        >
            <span className="moto-widget-tabs__header-item moto-widget-tabs__header-icon">
                <span
                    className={`fa fa-fw ${icon}`}
                    aria-hidden="true"
                ></span>
            </span>
            <span className="moto-widget-tabs__header-item moto-widget-tabs__header-title">
                {title}
            </span>
        </div>;
};

export default WidgetTabsHeader;
