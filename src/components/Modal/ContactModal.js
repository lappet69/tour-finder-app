import React from "react";
import "./Modal.css";
const ContactModal = ({ guideName, setIsContact }) => {
  console.log(guideName);
  return (
    <div className="contact-modal-container">
      <form>
        <div className="form-group">
          <label htmlFor="to">To :</label>
          <input type={"text"} value={guideName} readOnly placeholder="" />
        </div>
        <div className="form-group">
          <label htmlFor="from">From :</label>
          <input type={"text"} placeholder="your name" />
        </div>
        <div className="form-group">
          <label htmlFor="name">Message</label>
          <textarea placeholder="Your message"></textarea>
        </div>
        <div className="button-group">
          <button onClick={() => setIsContact(false)} type="submit">
            Back
          </button>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};

export default ContactModal;
