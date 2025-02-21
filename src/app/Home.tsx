import { Link, Outlet } from "react-router";
import { useGetAllCharacters } from "../lib/api/hooks/query-hooks";

const Home: React.FC = () => {
  const { data } = useGetAllCharacters();

  console.log(data);

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
