import { Link, Outlet } from "react-router";

const Home: React.FC = () => {
  return (
    <div>
      <header>
        <Link to="/students" className="text-3xl font-bold">
          Studends
        </Link>
      </header>
      <Outlet />
    </div>
  );
};

export default Home;
