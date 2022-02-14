import React from 'react';

const WidgetCallback = () => {
  return <div
      data-moto-widget-callback=""
      className="moto-widget-callback moto-widget-callback_closed moto-preset-default"
    >
      <div className="moto-widget-callback__wrapper">
        <div
          className="moto-widget-callback__open-button moto-widget-callback__thumbnail-wrapper moto-widget-callback__thumbnail-wrapper_icon"
        >
          <div
            className="moto-widget-callback__overlay moto-widget-callback__overlay_open-button"
          ></div>
          <div
            className="moto-widget-callback__thumbnail moto-widget-callback__thumbnail_icon fa fa-fw fa-phone"
          ></div>
        </div>
        <div
          className="moto-widget-callback__body moto-widget-callback__body_more-details-enabled"
          style={{ display: 'none' }}
        >
          <div
            className="moto-widget-callback__agent moto-widget-callback__thumbnail-wrapper moto-widget-callback__thumbnail-wrapper_icon"
          >
            <div
              className="moto-widget-callback__thumbnail moto-widget-callback__thumbnail_icon fa fa-fw fa-user-circle-o"
            ></div>
          </div>
          <div className="moto-widget-callback__description moto-widget-text">
            <p className="moto-text_system_8" style={{ textAlign: 'center' }}>
              John Smith
            </p>
            <p className="moto-text_system_10" style={{ textAlign: 'center' }}>
              <span className="moto-color2_3">agent</span>
            </p>
            <p className="moto-text_normal" style={{ textAlign: 'center' }}>
              <a className="moto-link" data-action="call" href="tel:+112233445566"
                ><span className="fa"></span> +112233445566</a
              >
            </p>
          </div>
          <div className="moto-widget-callback__more-details-wrapper">
            <hr className="moto-widget-callback__more-details-divider" />
            <div className="moto-widget-callback__more-details">
              <div className="moto-widget-callback__more-details-item">
                <div
                  className="moto-widget-callback__overlay moto-widget-callback__overlay_link"
                ></div>
                <a
                  href="https://t.me/#"
                  className="moto-widget-callback__link moto-widget-callback__link-telegram_chat"
                  title="Telegram"
                  target="_blank"
                ></a>
              </div>
              <div className="moto-widget-callback__more-details-item">
                <div
                  className="moto-widget-callback__overlay moto-widget-callback__overlay_link"
                ></div>
                <a
                  href="https://wa.me/#"
                  className="moto-widget-callback__link moto-widget-callback__link-whatsapp_chat"
                  title="WhatsApp"
                  target="_blank"
                ></a>
              </div>
              <div className="moto-widget-callback__more-details-item">
                <div
                  className="moto-widget-callback__overlay moto-widget-callback__overlay_link"
                ></div>
                <a
                  href="https://m.me/#"
                  className="moto-widget-callback__link moto-widget-callback__link-fb_messenger_chat"
                  title="Facebook Messenger"
                  target="_blank"
                ></a>
              </div>
              <div className="moto-widget-callback__more-details-item">
                <div
                  className="moto-widget-callback__overlay moto-widget-callback__overlay_link"
                ></div>
                <a
                  href="skype:#?chat"
                  className="moto-widget-callback__link moto-widget-callback__link-skype_chat"
                  title="Skype (Chat)"
                  target="_blank"
                ></a>
              </div>
            </div>
          </div>
          <div className="moto-widget-callback__more-details-button-wrapper">
            <i
              className="moto-widget-callback__more-details-button fa fa-angle-down"
            ></i>
          </div>
          <div className="moto-widget-callback__close-button">×</div>
        </div>
      </div>
    </div>;
};

export default WidgetCallback;
