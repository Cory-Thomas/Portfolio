import React from "react";
 
const Contact = () => {
  return (
    <div className="contact-section">
        <form name="contact" method="post" data-netlify-recaptcha="true">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>Name:&nbsp;
              <input type="text" name="name"/>
            </label>
          </p>
          <p>
            <label>Email:&nbsp;
              <input type="email" name="email"/>
            </label>
          </p>
          <p>
            <label>Message:&nbsp;
              <textarea name="message"></textarea>
            </label>
          </p>
          <div data-netlify-recaptcha="true"></div>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
    </div>
  )
};
 
export default Contact;