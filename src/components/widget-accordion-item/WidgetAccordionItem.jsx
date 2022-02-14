import React from 'react';
import WidgetText from '../widget-text/WidgetText';

const WidgetAccordionItem = ({id, dataParentId, headerText, contentText, classes, displayContent, widgetTextId}) => {
  return <div
            id={id}
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
                    className="moto-widget__content moto-widget-accordion__content"
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
