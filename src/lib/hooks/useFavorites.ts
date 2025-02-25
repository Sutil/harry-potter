import { useLocalStorage } from "@uidotdev/usehooks";

export const useFavorites = () => {
  const [favorites, setFavorites] = useLocalStorage<string[]>("favorites", []);

  const addFavorite = (id: string) => {
    if (!favorites.includes(id)) {
      setFavorites((current) => [...current, id]);
    }
  };

  const removeFavorite = (id: string) => {
    if (favorites.includes(id)) {
      setFavorites((current) => {
        const newFavorites = current.filter((favorite) => favorite !== id);
        return newFavorites;
      });
    }
  };

  const isFavorite = (id: string) => {
    return favorites.includes(id);
  };

  return { favorites, addFavorite, removeFavorite, isFavorite };
};
