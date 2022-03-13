import React, { useState } from 'react';
import WidgetText from '../widget-text/WidgetText';

const WidgetAccordionItem = ({id, dataParentId, headerText, contentText, displayContent, widgetTextId}) => {
    const [showText, setShowText] = useState(false);

    let classes, class2 = '';

    if (showText) {
        classes = 'moto-widget-accordion__item_open';
        displayContent = 'block';     
    } else {
        classes = 'moto-entertainment__playing_disabled moto-before-in-viewport_content-invisible';
        class2 = 'moto-entertainment__animation_disabled';
        displayContent = 'none';
    }
  
    return <div
            id={id}
            onClick={() => setShowText(!showText) }
            data-parent-id={dataParentId}
            className={`moto-widget moto-widget-accordion__item moto-widget_with-content-editor moto-widget-accordion__item_collapse-icon-right ${classes}`}
            data-widget="accordion.item"
        >
            <div
                className="moto-widget-accordion__header"
                data-widget-id={id}
            >
                <span className="moto-widget-accordion__header-item moto-widget-accordion__header-title">
                    {headerText}
                </span>
                <span
                    className="moto-widget-accordion__header-item moto-widget-accordion__collapse-icon fa fa-fw"
                    aria-hidden="true"
                ></span>
            </div>
            <div
                className="moto-widget__content-wrapper moto-widget-accordion__content-wrapper"
                style={{ display: displayContent ? displayContent : 'none' }}
            >
                <div
                    id={`${id}__content`}
                    className={`moto-widget__content moto-widget-accordion__content moto-entertainment__animation_ignore-visibility ${class2}`}
                >
                    <WidgetText dataWidgetId={widgetTextId} dataSpacing="aaaa">
                        <p className="moto-text_normal">
                            {contentText}
                        </p>
                    </WidgetText>
                    
                </div>
            </div>
        </div>;
};

export default WidgetAccordionItem;
