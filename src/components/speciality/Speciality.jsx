import React from 'react'


import HomeBg1 from '../../assets/images/cwc-doctor-home-bg1.png'
import WidgetBlock from '../widget-block/WidgetBlock'
import WidgetImage from '../widget-image/WidgetImage'
import WidgetRow from '../widget-row/WidgetRow'
import WidgetRowColumn from '../widget-row__column/WidgetRowColumn'
import WidgetTabs from '../widget-tabs/WidgetTabs'
import WidgetText from '../widget-text/WidgetText'

import HomeDivider from '../../assets/images/home-divider.png'
import Team from '../team/Team'

const Speciality = () => {
  return (
    <WidgetBlock styles={{ 
            backgroundImage: `url(${HomeBg1})`,
            backgroundPosition: 'bottom',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover' }}
            dataBgImage="cwc-doctor-home-bg1.png"
            dataBgPosition="bottom">

        <WidgetRow classes="row-fixed"
            top="large"
            dataSpacing="laaa"
            anchorName="speciality">
            <WidgetRowColumn classes="col-sm-12">
                <WidgetText dataSpacing="aaaa">
                    <h2
                        className="moto-text_system_6"
                        style={{ textAlign: 'center' }}
                    >
                        Quelle est notre spécialité
                    </h2>
                </WidgetText>
                <WidgetImage data_widget_id="wid_1561974481_d70q9bsf7" align="center" top="small">
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

                <WidgetTabs id="wid_1561974481_eg30e3qsd" />

            </WidgetRowColumn>
        </WidgetRow>
        
        <Team />

    </WidgetBlock>
  )
}

export default Speciality