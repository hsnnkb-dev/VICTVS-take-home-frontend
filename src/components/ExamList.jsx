import { fetchAuthToken, fetchExamSessions } from "../utils/api";
import { useEffect, useState } from "react";
import ExamCard from "./ExamCard";
import FilterModal from "./FilterModal";

export default function ExamList(){
  const [ examSessions, setExamSessions ] = useState([]);
  const [ hideFilterModal, setHideFilterModal ] = useState(true);

  useEffect(() => {
    fetchExamSessions()
      .then(examSessionsData => setExamSessions(examSessionsData));
  }, [])

  return (
    <main className="ExamList">
      <div>
        <h2>Upcoming Sessions</h2>
        <FilterModal hide={hideFilterModal} setHide={setHideFilterModal} />
        <button
          className="FilterButton"
          onClick={() => setHideFilterModal(false)}
        >
          Show Filters
        </button>
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