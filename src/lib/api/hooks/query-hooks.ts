import { useQuery } from "@tanstack/react-query";
import { getAllCharacters, getAllStaff, getAllStudents } from "../api";

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

export { useGetAllCharacters, useGetAllStudents, useGetALlStaff };
