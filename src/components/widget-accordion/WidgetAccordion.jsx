import React, { useState } from 'react';

const WidgetAccordion = (props) => {

    const [clicked, setClicked] = useState(false)
    

  return <div id={props.id}
            className="moto-widget moto-widget-accordion moto-widget_interactive moto-preset-default moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto moto-disabling_row-fixed set-row-gutter-0"
            data-widget="accordion"
            data-preset="default"
            data-close-others="" onClick={() => setClicked(!clicked) }>
                <div
                    id={`${props.id}__content`}
                    className="moto-widget-accordion__wrapper"
                >
                    {props.children}
                </div>
        </div>;
};

export default WidgetAccordion;
