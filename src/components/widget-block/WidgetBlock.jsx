import React from 'react';
import Anchor from '../anchor/Anchor';

const WidgetBlock = ({children, top, bottom, right, left, dataSpacing, styles, dataBgImage, dataBgPosition, anchorName, extraClass}) => {
  return <div
          className={`moto-widget moto-widget-block ${extraClass} moto-spacing-top-${top ? top : 'auto'} moto-spacing-right-${right ? right : 'auto'} moto-spacing-bottom-${bottom ? bottom : 'auto'} moto-spacing-left-${left ? left : 'auto'}`}
          data-widget="block"
          data-spacing={dataSpacing ? dataSpacing : "aaaa"}
          style={styles}
          data-bg-image={dataBgImage}
          data-bg-position={dataBgPosition ? dataBgPosition : "left top"}
        >

          {anchorName && <Anchor name={anchorName} />}
          
          <div className="container-fluid">
            <div className="row">
              <div className="moto-cell col-sm-12" data-container="container">

                {children}
             
              </div>
            </div>
          </div>
        </div>;
};

export default WidgetBlock;
