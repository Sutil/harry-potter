import { CharacterCard } from "@/components/CharacterCard";
import { Container } from "@/components/Container";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetAllCharacters } from "@/lib/api/hooks/query-hooks";
import { AlertCircle } from "lucide-react";
import { Link } from "react-router";

export const CharactersPage: React.FC = () => {
  const { isLoading, isError, data } = useGetAllCharacters();

  return (
    <Container>
      <h1 className="text-2xl font-bold">Characters</h1>

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
          <AlertDescription>Error loading characters</AlertDescription>
        </Alert>
      )}

      {data && (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
          {data.map((character) => (
            <Link key={character.id} to="/todo">
              <CharacterCard character={character} />
            </Link>
          ))}
        </div>
      )}
    </Container>
  );
};
