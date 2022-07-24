import React, { useState } from "react";
import tourguide from "../data/tourguide";
import ContactModal from "../Modal/ContactModal";
import "./List.css";
import { Link } from "react-router-dom";

const TourGuideList = () => {
  const [isContact, setIsContact] = useState(false);
  const [guideName, setGuideName] = useState("");

  return (
    <>
      {isContact && <div className="blur"></div>}
      <div className="tour-guide-container">
        {tourguide.map((item) => (
          <div className="tour-guide-list" key={item.id}>
            <div className="image-box">
              <img src={item.image} alt="" />
            </div>
            <div className="guide">
              <div className="wrapper">
                <h3 className="guide-name">{item.nama},</h3>
                <p className="guide-city">{item.kota}</p>
              </div>
              <p className="guide-province">{item.provinsi}</p>
              <div className="button-group">
                <Link to={`/tour-guide/${item.id}`}>
                  <button type="button" className="contact">
                    See Profile
                  </button>
                </Link>
                <button
                  onClick={() => {
                    setGuideName(item.nama);
                    setIsContact(!isContact);
                  }}
                  className="contact"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {isContact && (
        <ContactModal setIsContact={setIsContact} guideName={guideName} />
      )}
    </>
  );
};

export default TourGuideList;
