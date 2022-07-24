import React, { useEffect, useState } from "react";
import tourguide from "../data/tourguide";
import ContactModal from "../Modal/ContactModal";
import { Link, useSearchParams } from "react-router-dom";

const SeacrhList = () => {
  const [isContact, setIsContact] = useState(false);
  const [guideName, setGuideName] = useState("");
  const [provinsi, setProvinsi] = useState();
  const [gender, setGender] = useState();
  const [kota, setKota] = useState();
  const [searchParams] = useSearchParams();

  const data = tourguide.filter((x) => x.provinsi.toUpperCase() === provinsi);

  useEffect(() => {
    setProvinsi(searchParams.get("provinsi"));
    setKota(searchParams.get("kota"));
    setGender(searchParams.get("gender"));
  }, [provinsi, kota, gender, searchParams]);
  return (
    <>
      {isContact && <div className="blur"></div>}
      <div className="tour-guide-container ">
        {data.length > 1 ? (
          data.map((item) => (
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
          ))
        ) : (
          <div className="tour-guide-list ">
            <div className="image-box">
              <img src="" alt="no data" />
            </div>
            <div className="guide">
              <div className="wrapper">
                <h3 className="guide-name">Nodata</h3>
                <p className="guide-city"></p>
              </div>
              <p className="guide-province">{""}</p>
              <div className="button-group">
                <Link to={`/#`}>
                  <button type="button" className="contact">
                    See Profile
                  </button>
                </Link>
                <button className="contact">Contact</button>
              </div>
            </div>
          </div>
        )}
      </div>
      {isContact && (
        <ContactModal setIsContact={setIsContact} guideName={guideName} />
      )}
    </>
  );
};

export default SeacrhList;
