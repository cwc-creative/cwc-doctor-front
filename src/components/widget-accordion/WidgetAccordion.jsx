import React from 'react';

const WidgetAccordion = ({id, children}) => {
  return <div id={id}
            className="moto-widget moto-widget-accordion moto-widget_interactive moto-preset-default moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto moto-disabling_row-fixed set-row-gutter-0"
            data-widget="accordion"
            data-preset="default"
            data-close-others="">
                <div
                    id={`${id}__content`}
                    className="moto-widget-accordion__wrapper"
                >
                    {children}
                </div>
        </div>;
};

export default WidgetAccordion;
