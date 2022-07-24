import axios from "axios";
import React, { useEffect, useState } from "react";
import "./List.css";

const ListKabKota = ({
  provinsi,
  filterKota,
  setKota,
  setIsKota,
  provinsiID,
}) => {
  const [data, setData] = useState();

  const kotaFiltered =
    data &&
    data.filter((x) => x.name.includes(filterKota.charAt(0).toUpperCase()));

  useEffect(() => {
    const getKotaApi = async () => {
      axios
        .get(
          `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${provinsiID}.json`
        )
        .then((response) => setData(response.data));
    };
    getKotaApi();
  }, [data, provinsiID]);

  return (
    <div className="kota-container">
      {kotaFiltered &&
        kotaFiltered.map((item) => (
          <li
            key={item.id}
            onClick={() => {
              setKota(item.name);
              setIsKota(false);
            }}
          >
            {item.name}
          </li>
        ))}
    </div>
  );
};

export default ListKabKota;
