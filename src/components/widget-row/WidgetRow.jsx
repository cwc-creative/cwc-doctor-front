import React from 'react';
import Anchor from '../anchor/Anchor';

const WidgetRow = ({ 
    dataWidgetId, 
    classes, 
    top,
    right,
    bottom,
    left,
    dataGridType, 
    dataWidget, 
    dataVisibleOn, 
    dataSpacing, 
    dataBgPosition, 
    dataBgImage, 
    styles, 
    anchorName,
    children
}) => {
  return <div
            data-widget-id={dataWidgetId}
            className={`moto-widget moto-widget-row ${classes} moto-spacing-top-${top ? top : 'auto'} moto-spacing-right-${right ? right : 'auto'} moto-spacing-bottom-${bottom ? bottom : 'auto'} moto-spacing-left-${left ? left : 'auto'}`}
            data-grid-type={dataGridType ? dataGridType : "sm"}
            data-widget={dataWidget ? dataWidget : "row"}
            data-visible-on={dataVisibleOn}
            data-spacing={dataSpacing ? dataSpacing : "aaaa"}
            data-bg-position={dataBgPosition ? dataBgPosition : "left top"}
            data-bg-image={dataBgImage}
            style={styles}
        >
            {/* <a class="moto-anchor" name="team"></a> */}

            {anchorName && <Anchor name={anchorName} />}

            <div className="container-fluid">
            <div className="row" data-container="container">
                {children}
            </div>
            </div>
        </div>;
};

export default WidgetRow;
