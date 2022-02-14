import React from 'react';

const WidgetImage = ({data_widget_id, preset, top, bottom, right, left, align, children}) => {
  return <div
            data-widget-id={data_widget_id}
            className={`moto-widget moto-widget-image moto-preset-${preset ? preset : 'default'} moto-align-${align} moto-spacing-top-${top ? top : 'auto'} moto-spacing-right-${right ? right : 'auto'} moto-spacing-bottom-${bottom ? bottom : 'auto'} moto-spacing-left-${left ? left : 'auto'}`}
            data-widget="image"
        >
            {children}
            {/* <a
            href="/"
            data-action="page"
            className="moto-widget-image-link moto-link"
            >
            <img
                data-src="assets/images/home-logo.png"
                className="moto-widget-image-picture lazyloaded"
                data-id="154"
                title=""
                alt=""
                src={src}
            />
            </a> */}
        </div>;
};

export default WidgetImage;
