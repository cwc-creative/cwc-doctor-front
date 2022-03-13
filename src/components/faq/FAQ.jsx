import React from 'react'

import HomeDoctor from '../../assets/images/home-doctor.jpg'
import HomeDivider from '../../assets/images/home-divider.png'
import WidgetAccordionItem from '../widget-accordion-item/WidgetAccordionItem'
import WidgetAccordion from '../widget-accordion/WidgetAccordion'
import WidgetBlock from '../widget-block/WidgetBlock'
import WidgetImage from '../widget-image/WidgetImage'
import WidgetRow from '../widget-row/WidgetRow'
import WidgetRowColumn from '../widget-row__column/WidgetRowColumn'
import WidgetSpacer from '../widget-spacer/WidgetSpacer'
import WidgetText from '../widget-text/WidgetText'

const FAQ = () => {
  return (
    <WidgetBlock top="large" dataSpacing="laaa" anchorName="f.a.q">
        <WidgetRow classes="row-fixed moto-justify-content_center">
            <WidgetRowColumn classes="col-sm-6">
                <WidgetText top="small" dataSpacing="saaa">
                    <h2 className="moto-text_system_6">
                        Foire Aux Questions
                    </h2>
                </WidgetText>
                <WidgetImage data_widget_id="wid_1561719650_79ec1344b" align="left">
                    <span className="moto-widget-image-link">
                        <img
                            data-src="/src/assets/images/home-divider.png"
                            className="moto-widget-image-picture lazyloaded"
                            data-id="145"
                            title=""
                            alt=""
                            src={HomeDivider}
                        />
                    </span>
                </WidgetImage> 
                <WidgetAccordion id="wid_1561719664_s9z0bs1hd">
                    <WidgetAccordionItem 
                        id="wid_1561719675_f9zaq83fc" 
                        dataParentId="wid_1561719664_s9z0bs1hd" 
                        headerText={`Puis-je faire appel à mon médecin ou à tout autre médecin de mon choix ?`}
                        contentText={
                            `Borem ipsum dolor sit amet, conse ctetur
                            adipper isicing elit, sed do eiusmod
                            tempor incididunt ae ut labore et dolore
                            magnae. It is a long established fact
                            that a reader will be distracted by the
                            readable content.`
                        }
                        classes="moto-widget-accordion__item_open"
                        displayContent="block"
                        widgetTextId="wid_1561719703_gxd8e87ed"
                    />
                    <WidgetAccordionItem 
                        id="wid_1561719954_5303m7etw" 
                        dataParentId="wid_1561719664_s9z0bs1hd" 
                        headerText={`Puis-je faire appel à mon médecin ou à tout autre médecin de mon choix ?`}
                        contentText={
                            `Borem ipsum dolor sit amet, conse ctetur
                            adipper isicing elit, sed do eiusmod
                            tempor incididunt ae ut labore et dolore
                            magnae. It is a long established fact
                            that a reader will be distracted by the
                            readable content.`
                        }
                        widgetTextId="wid_1561719954_j83k74i1z"
                    />
                    <WidgetAccordionItem 
                        id="wid_1561719973_3vkyy77sg" 
                        dataParentId="wid_1561719664_s9z0bs1hd" 
                        headerText={`Comment mes frais médicaux sont-ils payés ?`}
                        contentText={
                            `Borem ipsum dolor sit amet, conse ctetur
                            adipper isicing elit, sed do eiusmod
                            tempor incididunt ae ut labore et dolore
                            magnae. It is a long established fact
                            that a reader will be distracted by the
                            readable content.`
                        }
                        widgetTextId="wid_1561719973_ymnpav4a9"
                    />
                </WidgetAccordion>
                <WidgetSpacer data_widget_id="wid_1561720088_wxk0cs32n" top="large" dataSpacing="laaa" visibleOn="tablet" spacerHeight="0px" />                 
            </WidgetRowColumn>

            <WidgetRowColumn classes="col-sm-6" 
                styles={{ 
                    backgroundImage: `url(${HomeDoctor})`,
                    backgroundPosition: 'top',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}
                dataBgPosition="top"
            >
                <WidgetSpacer data_widget_id="wid_1561720125_yjaipbwlr" spacerHeight="400px" />
            </WidgetRowColumn>
        </WidgetRow>
    </WidgetBlock>
  )
}

export default FAQ