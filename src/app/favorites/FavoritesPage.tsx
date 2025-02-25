import { CharacterCard } from "@/components/CharacterCard";
import { Container } from "@/components/Container";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetAllCharacters } from "@/lib/api/hooks/query-hooks";
import { useFavorites } from "@/lib/hooks/useFavorites";
import { Character } from "@/lib/models/character.model";
import { AlertCircle } from "lucide-react";
import { Link } from "react-router";

export const FavoritesPage: React.FC = () => {
  const { isLoading, isError, data } = useGetAllCharacters();
  const { favorites: favoritesId } = useFavorites();

  const favorites: Character[] =
    data?.filter((student) => favoritesId?.includes(student.id)) ?? [];

  return (
    <Container>
      <h1 className="text-2xl font-bold">Favorites</h1>

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

      {favorites && favorites.length === 0 && (
        <Alert variant="default" className="mt-4">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>No favorites</AlertTitle>
          <AlertDescription>
            You don't have any favorite characters yet! Go to{" "}
            <Link to="/" className="text-primary">
              {" "}
              home page{" "}
            </Link>{" "}
            and select some characters as favorite.
          </AlertDescription>
        </Alert>
      )}

      {favorites && favorites.length > 0 && (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
          {favorites.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      )}
    </Container>
  );
};
