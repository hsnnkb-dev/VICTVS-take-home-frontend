export default function ExamCard({ExamSession}) {

  return (
    <section>
      <p>{ExamSession.id}</p>
      <p>{ExamSession.Title}</p>
      <p>{ExamSession.Description}</p>
      <p>{ExamSession.CandidateId}</p>
      <p>{ExamSession.CandidateName}</p>
      <p>{ExamSession.Date}</p>
      <p>{ExamSession.LocationName}</p>
      <p>{ExamSession.Latitude}</p>
      <p>{ExamSession.Longitude}</p>
    </section>
  );
}