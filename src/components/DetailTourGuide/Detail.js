import React, { useState } from "react";
import tourguide from "../data/tourguide";
import { useParams } from "react-router-dom";
import { IoLocation } from "react-icons/io5";
import { MdOutlineTour } from "react-icons/md";
import "./Detail.css";

export const Detail = () => {
  const { paramsID } = useParams();
  const guide = tourguide.filter((item) => item.id === Number(paramsID));

  const [isBio, setIsBio] = useState(true);
  const [isTour, setIsTour] = useState(false);

  return (
    <>
      <div className="guide-detail-container">
        {guide.map((item) => (
          <div className="tour-guide-detail" key={item.id}>
            <div className="image-detail">
              <img src={item.image} alt="" />
            </div>
            <div className="box-guide">
              <h3 className="detail-name">{item.nama}</h3>
              <div className="location">
                <IoLocation className="icons" />
                <p className="guide-detail-location">
                  {item.kota},<small>{item.provinsi}</small>
                </p>
              </div>

              <div className="b">
                <button
                  className={isBio ? "active" : ""}
                  onClick={() => {
                    setIsBio(true);
                    setIsTour(!isTour);
                  }}
                >
                  Bio
                </button>
                <button
                  className={isTour ? "active" : ""}
                  onClick={() => {
                    setIsBio(false);
                    setIsTour(true);
                  }}
                >
                  Tour Attraction
                </button>
              </div>
              <div className="box-bio">
                {isBio && <p className="bio">{item.bio}</p>}
                {isTour && (
                  <div className="box-tour-attraction ">
                    {item.objek_wisata?.map((item) => (
                      <li key={item} className="">
                        <MdOutlineTour className="" />
                        {item}
                      </li>
                    ))}
                  </div>
                )}
              </div>
              <div className="button-group">{/* <button>Rent</button> */}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
