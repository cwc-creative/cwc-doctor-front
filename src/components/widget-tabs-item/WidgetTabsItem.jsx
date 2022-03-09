import React from 'react';
import WidgetTabsContent from '../widget-tabs-content/WidgetTabsContent';
import WidgetTabsHeader from '../widget-tabs-header/WidgetTabsHeader';
import HomeSpeciality1 from '../../assets/images/home-speciality1.jpg';
import WidgetImage from '../widget-image/WidgetImage';
import WidgetRow from '../widget-row/WidgetRow';
import WidgetRowColumn from '../widget-row__column/WidgetRowColumn';
import WidgetSpacer from '../widget-spacer/WidgetSpacer';
import WidgetText from '../widget-text/WidgetText';

const WidgetTabsItem = ({id, dataParentId}) => {
  return <div
        id={id}
        data-parent-id={dataParentId}
        className="moto-widget moto-widget-tabs__item moto-widget_with-content-editor"
        data-widget="tabs.item"
        >

        <WidgetTabsHeader device="mobile" dataTab="wid_1561974481_hte37m5di" icon="fa-medkit" title="TECHNOLOGIE MODERNE" opened={true}  />
        
        <WidgetTabsContent id="wid_1561974481_hte37m5di__content">

            <WidgetSpacer data_widget_id="wid_1561974481_rjwulujia" top="small" visibleOn="desktop" dataSpacing="saaa" />

                <WidgetRow dataWidgetId="wid_1561974481_ghogbfl3q"
                    classes="row-gutter-0 moto-justify-content_center moto-bg-color5_5 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                    dataGridType="sm"
                    dataWidget="row"
                    dataVisibleOn="mobile-v"
                    dataSpacing="aaaa"
                    styles={{ backgroundPosition: 'left top' }}
                >
                    <WidgetRowColumn dataWidgetId="wid_1561974481_ym1ftcnz1" classes="col-sm-6" styles={{ backgroundPosition: 'left top' }}>
                        <WidgetImage data_widget_id="wid_1561974481_47don989d">
                            <span
                                className="moto-widget-image-link"
                            >
                            <img
                                data-src="/src/assets/images/home-speciality1.jpg"
                                className="moto-widget-image-picture lazyloaded"
                                data-id="156"
                                title=""
                                alt=""
                                src={HomeSpeciality1}
                            />
                            </span>
                        </WidgetImage>
                    </WidgetRowColumn>

                    <WidgetRowColumn dataWidgetId="wid_1561974481_i895g7s0y" classes="col-sm-6" top="small" bottom="medium" dataSpacing="mama" styles={{ backgroundPosition: 'left top' }}>
                            <WidgetText dataWidgetId="wid_1561974481_z0ndxnj42" dataSpacing="asas" right="small" left="small">
                                <h3 className="moto-text_system_8">
                                    Dialyse
                                </h3>
                                <p className="moto-text_normal">
                                    &nbsp;
                                </p>
                                <p className="moto-text_normal">
                                    Borem ipsum dolor sit amet,
                                    conse ctetur adipper isicing
                                    elit, sed do eiusmod tempor
                                    incididunt ae ut labore et
                                    dolore magnae. It is a long
                                    established fact that a reader
                                    will be distracted by the
                                    readable content of a page
                                    when looking at its layout
                                    tempor incididunt.
                                </p>
                                <p className="moto-text_system_13">
                                    &nbsp;
                                </p>
                                <ul>
                                    <li className="moto-text_system_13">Rapport Mensuel &amp; Annuel</li>
                                    <li className="moto-text_system_13">Assistance Exclusive Pour Les Membres Premium
                                    </li>
                                    <li className="moto-text_system_13">Remises &amp; Mises à jour</li>
                                    <li className="moto-text_system_13">Membres Premium</li>
                                </ul>
                        </WidgetText>
                    </WidgetRowColumn>
                </WidgetRow>
        </WidgetTabsContent>
        </div>;
};

export default WidgetTabsItem;
