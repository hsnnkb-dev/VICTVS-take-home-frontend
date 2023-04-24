import { Link } from 'react-router-dom';

export default function Navigation() {
   
  return (
    <nav className="Navigation">
      <section className="MainLinks">
        <Link className={"Link"} to="/">
          Home
        </Link>
        <Link className={"Link"} to="/Sessions">
          Sessions
        </Link>
      </section>
    </nav>
  );
}