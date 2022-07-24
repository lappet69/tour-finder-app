import { useEffect, useState } from "react";
import ListKabKota from "../List/RegionList";
import ListProvinsi from "../List/ProvinceList";
import { createSearchParams, useNavigate } from "react-router-dom";
import "./FormFind.css";

const FormFind = () => {
  const [isProvinsi, setIsProvinsi] = useState(false);
  const [isKota, setIsKota] = useState(false);
  const [provinsi, setProvinsi] = useState("");
  const [provinsiID, setProvinsiID] = useState("");
  const [kota, setKota] = useState("");
  const [gender, setGender] = useState("");
  const [errorMessage, setErrorMessage] = useState();

  const history = useNavigate();
  const handleSumbit = (e) => {
    if (!provinsi || !kota) setErrorMessage("Hmmm i need more information");

    e.preventDefault();
    history({
      pathname: `/tour-guide/search`,
      search: `?${createSearchParams({ provinsi, kota, gender })}`,
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setErrorMessage("");
    }, 3000);
  }, [errorMessage]);
  console.log(errorMessage);
  return (
    <div className="form-find-container">
      {errorMessage && <p className="error">{errorMessage}</p>}
      <form onSubmit={handleSumbit} method="get">
        <div className="select-container">
          <label htmlFor="provinsi">Provinsi</label>
          <input
            type="text"
            value={provinsi}
            onChange={(e) => setProvinsi(e.target.value)}
            onClick={() => setIsProvinsi(!isProvinsi)}
            placeholder="Pilih Provinsi"
          />
          {isProvinsi && (
            <ListProvinsi
              filterProvinsi={provinsi}
              setProvinsi={setProvinsi}
              setProvinsiID={setProvinsiID}
              setIsProvinsi={setIsProvinsi}
            />
          )}
        </div>
        <div className="select-container">
          <label htmlFor="kabkota">Kabupaten/Kota</label>
          {!provinsi ? (
            <input
              type="text"
              readOnly
              value={kota}
              // onChange={(e) => setKota(e.target.value)}
              // onClick={() => setIsKota(!isKota)}
              placeholder="Pilih Kabupaten/Kota"
            />
          ) : (
            <input
              type="text"
              value={kota}
              onChange={(e) => setKota(e.target.value)}
              onClick={() => setIsKota(!isKota)}
              placeholder="Pilih Kabupaten/Kota"
            />
          )}

          {isKota && provinsi && (
            <ListKabKota
              provinsiID={provinsiID}
              filterKota={kota}
              setKota={setKota}
              setIsKota={setIsKota}
            />
          )}
        </div>
        <div className="select-container">
          <label htmlFor="">Pemandu Gender</label>
          <select
            onChange={(e) => setGender(e.target.value)}
            name="tour_gender"
            value={gender}
            id="province"
          >
            <option value="">Select</option>
            <option value="pria">Pria</option>
            <option value="wanita">Wanita</option>
          </select>
          <button className="button-find" type="submit">
            FIND
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormFind;
