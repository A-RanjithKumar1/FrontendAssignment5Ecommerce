import { FilterContext } from "../App";
import { useContext } from "react";
const filterval = (filter, setfilter, id) => {
  if (filter.indexOf(id) === -1) {
    setfilter([...filter, id]);
    document.getElementById(id).style.borderBottom = "solid green 2px";
  } else {
    let temp = [...filter];
    temp.splice(filter.indexOf(id), 1);
    setfilter(temp);
    document.getElementById(id).style.borderBottom = "solid white 2px";
  }
};
const Sidebar = () => {
  const { filter, setfilter } = useContext(FilterContext);
  console.log(filter);
  return (
    <>
      <div className="Filters">
        <div className="brands">
          <h2>BRANDS</h2>
          <ul>
            <li>
              <h4
                id="Fossil"
                onClick={() => filterval(filter, setfilter, "Fossil")}
              >
                Fossil
              </h4>
            </li>
            <li>
              <h4
                id="Casio"
                onClick={() => filterval(filter, setfilter, "Casio")}
              >
                Casio
              </h4>
            </li>
            <li>
              <h4
                id="Timex"
                onClick={() => filterval(filter, setfilter, "Timex")}
              >
                Timex
              </h4>
            </li>
            <li>
              <h4
                id="Fastrack"
                onClick={() => filterval(filter, setfilter, "Fastrack")}
              >
                FastTrack
              </h4>
            </li>
          </ul>
        </div>
        <div className="type">
          <h2>TYPE</h2>
          <ul>
            <li>
              <h4>Analog</h4>
            </li>
            <li>
              <h4>Digital</h4>
            </li>
          </ul>
        </div>
        <div className="price">
          <h2>PRICE</h2>
          <p>
            <button>0-1000</button>
          </p>
          <p>
            <button>1000-2000</button>
          </p>
          <p>
            <button>2000-3000</button>
          </p>
          <p>
            <button>3000-5000</button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
