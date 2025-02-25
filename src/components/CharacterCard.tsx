import { Character } from "@/lib/models/character.model";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Link } from "react-router";
import { useFavorites } from "@/lib/hooks/useFavorites";
import { Star } from "lucide-react";
import { Button } from "./ui/button";

export const CharacterCard: React.FC<{ character: Character }> = ({
  character,
}) => {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();

  return (
    <div className="w-full p-5 rounded-lg border hover:scale-105 transition-transform">
      {isFavorite(character.id) ? (
        <Button
          size="icon"
          variant="ghost"
          onClick={() => removeFavorite(character.id)}
        >
          <Star fill="yellow" />
        </Button>
      ) : (
        <Button
          size="icon"
          variant="ghost"
          onClick={() => addFavorite(character.id)}
        >
          <Star />
        </Button>
      )}
      <Link
        to={`/character/${character.id}`}
        className=""
        data-testid={`character-card-${character.name}`}
      >
        <Avatar className="w-full h-52 rounded-md object-cover">
          <AvatarImage
            className="w-auto h-auto object-cover"
            src={character.image}
            alt={character.name}
          />
          <AvatarFallback className="rounded-md">
            <span className="text-xs">{character.name}</span>
          </AvatarFallback>
        </Avatar>

        <div className="mt-2">
          <h2 className="h-10 leading-4 text-md font-bold">{character.name}</h2>

          <p className="text-sm text-gray-600 h-6">{character.house}</p>
          <p className="text-sm text-gray-600 h-6">
            {character.hogwartsStudent && "Student"}
            {character.hogwartsStaff && "Staff"}
          </p>
        </div>
      </Link>
    </div>
  );
};
