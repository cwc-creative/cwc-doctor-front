import React from 'react';
import './WidgetSpacer.css';

const WidgetSpacer = ({ data_widget_id, top, bottom, right, left, visibleOn, dataSpacing, spacerHeight }) => {
  return <div
            data-widget-id={data_widget_id}
            className={`moto-widget moto-widget-spacer moto-preset-default moto-spacing-top-${top ? top : 'auto'} moto-spacing-right-${right ? right : 'auto'} moto-spacing-bottom-${bottom ? bottom : 'auto'} moto-spacing-left-${left ? left : 'auto'} moto-visible-on_${visibleOn}`}
            data-widget="spacer"
            data-preset="default"
            data-spacing={dataSpacing ? dataSpacing : "aaaa"}
            data-visible-on={visibleOn ? visibleOn : "mobile-v"}
        >
            <div
                className="moto-widget-spacer-block"
                style={{ height: spacerHeight ? spacerHeight : "10px" }}
            ></div>
        </div>;
};

export default WidgetSpacer;
