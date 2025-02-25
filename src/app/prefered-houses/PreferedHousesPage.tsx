import { Container } from "@/components/Container";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetAllCharacters } from "@/lib/api/hooks/query-hooks";
import { usePreferedHouses } from "@/lib/hooks/usePreferedHouses";
import { AlertCircle, Star } from "lucide-react";
import { Link } from "react-router";

export const PreferedHousesPage: React.FC = () => {
  const { isLoading, isError, data } = useGetAllCharacters();
  const houses = Array.from(
    new Set<string>(
      data?.map((character) => character.house).filter((house) => !!house) ?? []
    )
  );

  const { isPreferedHouse, addPreferedHouse, removePreferedHouse } =
    usePreferedHouses();

  return (
    <Container>
      <h1 className="text-2xl font-bold">Prefered Houses</h1>

      {isLoading && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <Skeleton key={index} className="w-full h-56" />
          ))}
        </div>
      )}

      {isError && (
        <Alert variant="destructive" className="mt-4">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>Error loading prefered houses</AlertDescription>
        </Alert>
      )}

      {houses && (
        <div className="flex flex-col mt-4">
          {houses.map((house) => (
            <div className="flex gap-5 items-center leading-10" key={house}>
              {isPreferedHouse(house) ? (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removePreferedHouse(house)}
                >
                  <Star fill="yellow" />
                </Button>
              ) : (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => addPreferedHouse(house)}
                >
                  <Star />
                </Button>
              )}
              <Link to={`/house/${house}`} className="text-primary">
                {house}
              </Link>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
};
