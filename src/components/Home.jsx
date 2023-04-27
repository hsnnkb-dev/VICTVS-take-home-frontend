export default function Home() {

  return (
    <main className="Home">
      <h2>Introduction</h2>
      <section className="IntroductionText">
        <p>This Exam Scheduler was made as part of a technical test.</p>
        <p>
          It allows a user to view a list of exam sessions (sorted in
          chronological order).
        </p>
        <p>
          It also features a filter modal, which also allows the user to filter
          exam sessions by date, candidate name, and or exam location.
        </p>
        <p>
          The application also features a map so you can view exam sessions on
          the globe.
        </p>
        <p>
          The design was inspired by the VICTVS V3 and MyExam applications. Get
          started by navigating using the links above!
        </p>
      </section>
    </main>
  );
}