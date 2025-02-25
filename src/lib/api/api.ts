import { QueryClient } from "@tanstack/react-query";
import { Character } from "../models/character.model";
import axios from "axios";

const api = axios.create({
  baseURL: "https://hp-api.onrender.com/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

const getAllCharacters = async (): Promise<Character[]> =>
  api.get<Character[]>("/characters").then((response) => response.data);

const getCharacterById = async (id: string): Promise<Character> =>
  api.get<Character[]>(`/character/${id}`).then((response) => response.data[0]);

const getAllStudents = async (): Promise<Character[]> =>
  api
    .get<Character[]>("/characters/students")
    .then((response) => response.data);

const getAllStaff = async (): Promise<Character[]> =>
  api.get<Character[]>("/characters/staff").then((response) => response.data);

export {
  queryClient,
  getAllCharacters,
  getCharacterById,
  getAllStudents,
  getAllStaff,
};
