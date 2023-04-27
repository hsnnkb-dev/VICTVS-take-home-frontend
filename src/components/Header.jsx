import Navigation from "./Navigation";

export default function Header() {


  return (
    <header className="Header">
      <div>
        <h1>victvs</h1> <br />
        <span>Exam Scheduler</span>
      </div>

      <Navigation />
    </header>
  );
}