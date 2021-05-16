import React from 'react'
import BannerContact from '../../../components/frontend/Banner/BannerContact'

const ContactPage = () => {
    return (
        <div>
            <BannerContact /> 
            <div className="site-main main-container no-sidebar">
  <div className="section-042">
    <div className="container">
      <div className="row">
        <div className="col-md-12 offset-xl-1 col-xl-10 col-lg-12">
          <div className="row">
            <div className="col-md-6">
              <h4 className="az_custom_heading">WP SHOP THEME</h4>
              <p>3100 West Cary Street Richmond, Virginia 23221<br />
                P: 804.355.4383 F: 804.367.7901</p>
              <h4 className="az_custom_heading">Store Hours</h4>
              <p>Monday-Saturday 11am-7pm ET<br />
                Sunday 11am-6pm ET</p>
              <h4 className="az_custom_heading">Specialist Hours</h4>
              <p>Monday-Friday 9am-5pm ET</p>
            </div>
            <div className="col-md-6">
              <div role="form" className="wpcf7">
                <form className="wpcf7-form">
                  <p><label> Name *<br />
                      <span className="wpcf7-form-control-wrap your-name">
                        <input name="your-name" defaultValue size={40} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" type="text" /></span>
                    </label></p>
                  <p><label> Email *<br />
                      <span className="wpcf7-form-control-wrap your-email">
                        <input name="your-email" defaultValue size={40} className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" type="email" /></span>
                    </label></p>
                  <p><label> Your Message *<br />
                      <span className="wpcf7-form-control-wrap your-message">
                        <textarea name="your-message" cols={40} rows={10} className="wpcf7-form-control wpcf7-textarea" defaultValue={""} /></span>
                    </label></p>
                  <p><input defaultValue="Send" className="wpcf7-form-control wpcf7-submit" type="submit" /></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


        </div>
    )
}

export default ContactPage
