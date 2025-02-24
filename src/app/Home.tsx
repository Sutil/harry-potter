import { Outlet } from "react-router";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto">
      <header>
        <h1 className="text-3xl font-bold text-center">Harry Potter</h1>
      </header>

      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
