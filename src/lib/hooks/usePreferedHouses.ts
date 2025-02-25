import { useLocalStorage } from "@uidotdev/usehooks";

export const usePreferedHouses = () => {
  const [preferedHouses, setPreferedHouses] = useLocalStorage<string[]>(
    "preferedHouses",
    []
  );

  const addPreferedHouse = (house: string) => {
    if (!preferedHouses.includes(house)) {
      setPreferedHouses((current) => [...current, house]);
    }
  };

  const removePreferedHouse = (house: string) => {
    if (preferedHouses.includes(house)) {
      setPreferedHouses((current) => {
        const newpreferedHouses = current.filter((ph) => ph !== house);
        return newpreferedHouses;
      });
    }
  };

  const isPreferedHouse = (house: string) => {
    return preferedHouses.includes(house);
  };

  return {
    preferedHouses,
    addPreferedHouse,
    removePreferedHouse,
    isPreferedHouse,
  };
};
