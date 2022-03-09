import React from 'react';
import WidgetTabsHeader from '../widget-tabs-header/WidgetTabsHeader';
import WidgetTabsItem from '../widget-tabs-item/WidgetTabsItem';

const WidgetTabs = ({id}) => {
    return <div id={id}
            className="moto-widget moto-widget_interactive moto-widget-tabs moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto moto-preset-2 moto-widget-tabs_type-horizontal moto-disabling_row-fixed set-row-gutter-0"
            data-widget="tabs"
            data-preset="2">
            <div className="moto-widget-tabs__wrapper">
                {/* <div
                    className="moto-widget-tabs__headers-wrapper moto-widget-tabs__headers-wrapper_icon-left moto-widget-tabs__headers-wrapper_headers-center"
                    style={{ width: "auto" }}
                >
                    <WidgetTabsHeader device="desktop" dataTab="wid_1561974481_hte37m5di" icon="fa-medkit" title="DIALYSE" opened={true} />
                    <WidgetTabsHeader device="desktop" dataTab="wid_1561974481_85wn4ntcr" icon="fa-thumbs-up" title={`SUCCÈS DES TRAITEMENTS`} />
                    <WidgetTabsHeader device="desktop" dataTab="wid_1561974481_ribjm3w93" icon="fa-certificate" title={`DOCTEURS CÉRTIFIÉS`} />
            
                </div> */}
                <div
                    id="wid_1561974481_eg30e3qsd__content"
                    className="moto-widget-tabs__items-wrapper"
                >
                    <WidgetTabsItem id="wid_1561974481_hte37m5di" dataParentId="wid_1561974481_eg30e3qsd" />
                </div>
            </div>
        </div>;
};

export default WidgetTabs;
