import { useQuery } from "@tanstack/react-query";
import { getAllCharacters } from "../api";

const getAllCharactersQueryKey = ["getAllCharacters"] as const;

const useGetAllCharacters = () => {
  return useQuery({
    queryKey: getAllCharactersQueryKey,
    queryFn: getAllCharacters,
  });
};

export { useGetAllCharacters };
