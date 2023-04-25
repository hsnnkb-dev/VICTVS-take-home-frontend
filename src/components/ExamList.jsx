import { fetchAuthToken, fetchExamSessions } from "../utils/api";
import { useEffect, useState } from "react";

export default function ExamList(){
  const [ examSessions, setExamSessions ] = useState([]);

  useEffect(() => {
    fetchExamSessions()
      .then(examSessionsData => setExamSessions(examSessionsData));
  }, [])

  return (
    <main>
      <button onClick={() => fetchAuthToken()}>Click Me</button>

      <button onClick={() => console.log(examSessions)}>Click Me 2</button>
    </main>
  );
}