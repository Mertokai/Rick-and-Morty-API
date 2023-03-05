import React from "react";
import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";

const Filters = ({ setPageNumber, setStatus, setGender, setSpecies }) => {
  let clear = () => {
    //optional part
    // setPageNumber("");
    // setStatus("");
    // setGender("");
    // setSpecies("");
    window.location.reload(false);
  };
  return (
    <div className="col-3">
      <div className="text-center fw-bold fs-4 mb-4">Filter</div>
      <div
        onClick={clear}
        style={{ cursor: "pointer" }}
        className="text-center text-primary text-decoration-underline"
      >
        Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        <Gender setGender={setGender} setPageNumber={setPageNumber} />
        <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
        <Status setPageNumber={setPageNumber} setStatus={setStatus} />
      </div>
    </div>
  );
};

export default Filters;
