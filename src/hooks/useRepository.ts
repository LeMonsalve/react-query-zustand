import { useQuery } from "@tanstack/react-query";
import api from "../api/github";
import {Repository} from "./types";

const fetchRepositories = async () => {
  const { data } = await api.get<Repository[]>('/users/lemonsalve/repos')

  return data
}

export const useFetchRepositories = () => {
  return useQuery(['repositories'], fetchRepositories)
}