import React from "react";
import Fade from 'react-reveal/Fade';
 
const Contact = () => {
  return (
    <div className="contact-section">
      <Fade left>
        <div className='form-card'>
          <form name="contact" method="post">
            <input type="hidden" name="form-name" value="contact" />
            <div className='input-container'>
              <label>Name:
                <div>
                  <input type="text" name="name"/>
                </div>
              </label>
            </div>
            <div className='input-container'>
              <label>Email:
                <div>
                  <input type="email" name="email"/>
                </div>
              </label>
            </div>
            <div className='input-container'>
              <label>Message:
                <div>
                  <textarea name="message"></textarea>
                </div>
              </label>
            </div>
              <button type="submit">Send</button>
          </form>
        </div>
      </Fade>
    </div>
  )
};
 
export default Contact;