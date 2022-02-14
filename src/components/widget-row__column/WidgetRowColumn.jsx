import React from 'react';

const WidgetRowColumn = ({dataWidgetId, classes, top, bottom, right, left, dataSpacing, dataBgPosition, styles, children}) => {
  return <div 
            data-widget-id={dataWidgetId}
            className={`moto-widget moto-widget-row__column moto-cell ${classes} moto-spacing-top-${top ? top : 'auto'} moto-spacing-right-${right ? right : 'auto'} moto-spacing-bottom-${bottom ? bottom : 'auto'} moto-spacing-left-${left ? left : 'auto'}`}
            data-widget="row.column"
            data-container="container"
            data-spacing={dataSpacing ? dataSpacing : "aaaa"}
            data-bg-position={dataBgPosition ? dataBgPosition : "left top"}
            style={styles}>
            {children}
        </div>;
};

export default WidgetRowColumn;
