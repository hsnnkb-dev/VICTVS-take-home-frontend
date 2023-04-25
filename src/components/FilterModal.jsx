import { useState } from 'react';

export default function FilterModal(props) {
  const [ filterDate, setFilterDate ] = useState("");
  const [ filterName, setFilterName ] = useState("");
  const [ filterLocation, setFilterLocation ] = useState("");
  const [ filtersObject, setFiltersObject ] = useState({date: '', name: '', location: ''})

  if (props.hide) {
    return null;
  }

  const handleAddFilters = (filterDate, filterName, filterLocation) => {
    const params = { date: "", name: "", location: "" };
    if (filterDate !== "") params.date = filterDate;
    if (filterName !== "") params.name = filterName;
    if (filterLocation !== "") params.location = filterLocation;
    setFiltersObject(params);
  };

  return (
    <div className="FilterModal">
      <div className="ModalContent">
        <div className="ModalHeader">
          <h4 className="ModalTitle">
            Filter Sessions (date, candidate, location)
          </h4>
        </div>
        <div className="ModalBody">
          <div className="FilterField">
            <label htmlFor="datetime">Date</label>
            <input
              type="datetime"
              name="datetime"
              id="datetime-field"
              onInput={(event) => setFilterDate(event.target.value)}
            />
          </div>
          <div className="FilterField">
            <label htmlFor="candidate-name">Candidate Name</label>
            <input
              type="text"
              name="candidate-name"
              onInput={(event) => setFilterName(event.target.value)}
            />
          </div>
          <div className="FilterField">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              name="location"
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
            onClick={() => {
              props.setHide(true);
              console.log(filtersObject);
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}