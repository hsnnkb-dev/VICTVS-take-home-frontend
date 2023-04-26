import { useState } from 'react';

export default function FilterModal(props) {
  const [ filterDate, setFilterDate ] = useState("");
  const [ filterName, setFilterName ] = useState("");
  const [ filterLocation, setFilterLocation ] = useState("");

  if (props.hide) {
    return null;
  }

  const handleAddFilters = (filterDate, filterName, filterLocation) => {
    const params = { date: "", name: "", location: "" };
    const dateRegEx = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;

    if (dateRegEx.test(filterDate)) {
      params.date = filterDate;
    } else {
      console.log("Date is of the wrong format, try yyyy-mm-dd!")
    }

    if (filterName !== "") { 
      params.name = filterName;
    }
    if (filterLocation !== "") {
      params.location = filterLocation;
    }
    props.setFiltersObject(params);
  };

  return (
    <div className="FilterModal">
      <div className="ModalContent">
        <div className="ModalHeader">
          <h4 className="ModalTitle">
            Filter Exam Sessions
          </h4>
        </div>
        <div className="ModalBody">
          <div className="FilterField">
            <label htmlFor="datetime">Date</label>
            <input
              type="datetime"
              name="datetime"
              id="datetime-field"
              value={filterDate}
              onInput={(event) => setFilterDate(event.target.value)}
            />
          </div>
          <div className="FilterField">
            <label htmlFor="candidate-name">Candidate Name</label>
            <input
              type="text"
              name="candidate-name"
              value={filterName}
              onInput={(event) => setFilterName(event.target.value)}
            />
          </div>
          <div className="FilterField">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              name="location"
              value={filterLocation}
              onInput={(event) => setFilterLocation(event.target.value)}
            />
          </div>
          <div className="ButtonField">
            <button
              className="FilterButton"
              id="AddFilterButton"
              onClick={() =>
                handleAddFilters(filterDate, filterName, filterLocation)
              }
            >
              + Add Filters
            </button>
          </div>
        </div>
        <div className="ModalFooter">
          <button
            className="Button"
            onClick={() => props.setHide(true)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}