import { Link, Outlet } from "react-router";

const Home: React.FC = () => {
  return (
    <div>
      <header>
        <Link to="/students">Studends</Link>
      </header>
      <Outlet />
    </div>
  );
};

export default Home;
