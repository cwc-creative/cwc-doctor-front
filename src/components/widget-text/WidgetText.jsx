import React from 'react';

const WidgetText = ({top, bottom, right, left, dataWidgetId, dataSpacing, children}) => {
  return <div
            className={`moto-widget moto-widget-text moto-preset-default moto-spacing-top-${top ? top : 'auto'} moto-spacing-right-${right ? right : 'auto'} moto-spacing-bottom-${bottom ? bottom : 'auto'} moto-spacing-left-${left ? left : 'auto'}`}
            data-widget-id={dataWidgetId}
            data-widget="text"
            data-preset="default"
            data-spacing={dataSpacing}
            data-visible-on="mobile-v"
            data-animation=""
        >
            <div className="moto-widget-text-content moto-widget-text-editable">
                {children}
                {/* <p className="moto-text_system_1">
                    <a
                    target="_self"
                    data-action="page"
                    data-id="1"
                    className="moto-link"
                    href="/"
                    >ty<span className="moto-color3_3">MA'JANGA</span></a>
                </p>
                <p className="moto-text_system_2">
                    <a
                        target="_self"
                        href="/"
                        data-action="page"
                        data-id="1"
                        className="moto-link"
                    ></a>
                </p> */}
            </div>
        </div>;
};

export default WidgetText;
