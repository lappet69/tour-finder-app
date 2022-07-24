import provinsi from "../data/provinsi";
import "./List.css";

const ListProvinsi = ({
  filterProvinsi,
  setProvinsi,
  setIsProvinsi,
  setProvinsiID,
}) => {
  const provinsiFiltered = provinsi.filter((x) => {
    return x.name.includes(filterProvinsi.charAt(0).toUpperCase());
  });
  return (
    <div className="list-container">
      {provinsiFiltered.map((item) => (
        <li
          onClick={() => {
            setProvinsi(item.name);
            setIsProvinsi(false);
            setProvinsiID(item.id);
          }}
          key={item.id}
        >
          {item.name}
        </li>
      ))}
    </div>
  );
};

export default ListProvinsi;
