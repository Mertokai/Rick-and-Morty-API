import React, { useEffect, useState } from "react";
import Cards from "../components/Cards/Cards";
import InputGroup from "../components/Filter/Category/InputGroup";

const Location = () => {
  let [id, setID] = useState(1);
  let [info, setInfo] = useState([]);
  let [results, setResults] = useState([]);
  let { name, type, dimension } = info;
  let api = `https://rickandmortyapi.com/api/location/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);
      let a = await Promise.all(
        data.residents.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  });
  return (
    <div className="container">
      <div className="row mb-4 ">
        <h1 className="text-center">
          Dimension :{" "}
          <span className="text-primary">
            {dimension === "" ? "Unknown" : dimension}
          </span>
        </h1>
        <h5 className="text-center">
          Type :{" "}
          <span className="text-primary">{type === "" ? "Unknown" : type}</span>
        </h5>
        <h6 className="text-center">
          Type :{" "}
          <span className="text-primary">{type === "" ? "Unknown" : type}</span>
        </h6>
        <h5 className="text-center">
          {/* Air Date:{air_date === "" ? "Unknown" : air_date} */}
        </h5>
      </div>
      <div className="row">
        <div className="col-3">
          <h4>Dimension</h4>
          <InputGroup setID={setID} name="Location" total={126} />
        </div>
        <div className="col-8">
          <div className="row">
            <Cards page="/location/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
