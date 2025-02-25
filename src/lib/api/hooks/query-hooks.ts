import { useQuery } from "@tanstack/react-query";
import {
  getAllCharacters,
  getAllStaff,
  getAllStudents,
  getCharacterById,
} from "../api";

const getAllCharactersQueryKey = ["getAllCharacters"] as const;

const useGetAllCharacters = () => {
  return useQuery({
    queryKey: getAllCharactersQueryKey,
    queryFn: getAllCharacters,
  });
};

const useGetAllStudents = () => {
  return useQuery({
    queryKey: ["getAllStudents"],
    queryFn: getAllStudents,
  });
};

const useGetALlStaff = () => {
  return useQuery({
    queryKey: ["getAllStaff"],
    queryFn: getAllStaff,
  });
};

const useGetCharacterById = (id: string) => {
  return useQuery({
    queryKey: ["getCharacterById", id],
    queryFn: () => getCharacterById(id),
  });
};

export {
  useGetAllCharacters,
  useGetAllStudents,
  useGetALlStaff,
  useGetCharacterById,
};
