import {useFetchRepositories} from "./hooks/useRepository";
import {Repository} from "./hooks/types";
import Card from "./components/Card";
import {useFavoriteReposStore} from "./store/favoriteRepos";

const HelloWorld = () => {

  const { favoriteReposIds } = useFavoriteReposStore()
  const { data, isLoading } = useFetchRepositories()

  if ( isLoading ) return <div>Loading...</div>

  return (
    <div>
      {
        data?.map((repository: Repository) => (
          <Card key={ repository.id }
                repository={ repository }
                isFavorite={ favoriteReposIds.includes( repository.id ) } />
        ))
      }
    </div>
  )
}

export default HelloWorld
