import { fetchExamSessions } from "../utils/api";
import { useEffect, useState } from "react";
import ExamCard from "./ExamCard";
import FilterModal from "./FilterModal";

export default function ExamList(){
  const [ examSessions, setExamSessions ] = useState([]);
  const [ originalExamSessions, setOriginalExamSessions ] = useState([]);
  const [ hideFilterModal, setHideFilterModal ] = useState(true);
  const [ filtersObject, setFiltersObject ] = useState({
    date: "",
    name: "",
    location: "",
  });
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchExamSessions()
      .then(examSessionsData => {
        setIsLoading(false);
        setExamSessions(examSessionsData)
        setOriginalExamSessions(examSessionsData);
      });
  }, [])

  useEffect(() => {
    setExamSessions(originalExamSessions);
    if (filtersObject.date !== "") {
      setExamSessions((currentSessions) => {
        return currentSessions.filter((session) =>
          session.Date.slice(0, 10) === filtersObject.date ? session : null
        );
      });
    }

    if (filtersObject.name !== "") {
      setExamSessions((currentSessions) => {
        return currentSessions.filter((session) =>
          session.CandidateName === filtersObject.name ? session : null
        );
      });
    }

    if (filtersObject.location !== "") {
      setExamSessions((currentSessions) => {
        return currentSessions.filter((session) =>
          session.LocationName === filtersObject.location ? session : null
        );
      });
    } 
  }, [filtersObject])

  if (isLoading) return <p className="Loading">Loading Sessions</p>;

  return (
    <main className="ExamList">
      <div>
        <h2>Upcoming Sessions</h2>
        <FilterModal
          hide={hideFilterModal}
          setHide={setHideFilterModal}
          setFiltersObject={setFiltersObject}
        />
        <div className="FilterContainer">
          <button
            className="FilterButton"
            onClick={() => setHideFilterModal(false)}
          >
            👁 Show Filters
          </button>
          <button
            className="FilterButton"
            onClick={() => setExamSessions(originalExamSessions)}
          >
            ↻ Reset Filters
          </button>
        </div>
      </div>
      <div id="SessionList">
        {examSessions.length ? (
          examSessions.map((session) => (
            <ExamCard session={session} key={session.id} />
          ))
        ) : (
          <p>No sessions to display...</p>
        )}
      </div>
    </main>
  );
}