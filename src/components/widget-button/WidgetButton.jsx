import React from 'react';

const WidgetButton = ({dataWidgetId, preset, align, top, children}) => {
  return <div data-widget-id={dataWidgetId}
        className={`moto-widget moto-widget-button moto-preset-${preset ? preset : 'default'} moto-preset-provider-default moto-align-${align ? align : 'left'} moto-align-center_mobile-h moto-spacing-top-${top ? top : 'small'} moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto`}
        data-widget="button">
            {children}
        </div>;
};

export default WidgetButton;
