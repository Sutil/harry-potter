import { NavMenu } from "@/components/NavMenu";
import { Outlet } from "react-router";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-5">
      <header className="flex justify-between sticky top-0 p-4 z-10 bg-background">
        <NavMenu />

        <h1 className="text-3xl font-bold text-center">Harry Potter</h1>
      </header>

      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
