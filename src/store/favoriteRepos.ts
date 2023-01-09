import create from "zustand"
import {persist} from "zustand/middleware";

type favoriteReposState = {
  favoriteReposIds: number[],
  addFavoriteRepo: (id: number) => void,
  removeFavoriteRepo: (id: number) => void
}

export const useFavoriteReposStore = create(persist<favoriteReposState>(
  (setState) => ({
    favoriteReposIds: [],
    addFavoriteRepo: ( id: number ) => setState((state) => ({
      favoriteReposIds: [...state.favoriteReposIds, id]
    })),
    removeFavoriteRepo: ( id: number ) => setState((state) => ({
      favoriteReposIds: state.favoriteReposIds.filter((repoId) => repoId !== id)
    }))
  }),{
    name: 'favorite-repos'
  }
))