import React from 'react';

const WidgetDivider = ({dataWidgetId}) => {
  return <div
            data-widget-id={dataWidgetId}
            className="moto-widget moto-widget-divider moto-preset-default moto-align-left moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
            data-widget="divider_horizontal"
            data-preset="default"
            >
            <hr
                className="moto-widget-divider-line"
                style={{
                    maxWidth: '100%',
                    width: '100%'
                }}
            />
        </div>;
};

export default WidgetDivider;
