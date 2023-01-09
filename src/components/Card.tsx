import {Repository} from "../hooks/types";
import {useFavoriteReposStore} from "../store/favoriteRepos";

type CardProps = {
  repository: Repository
  isFavorite: boolean
}

const Card = ({ repository, isFavorite }: CardProps) => {

  const store = useFavoriteReposStore()

  const toggleFavorite = () => !isFavorite ? store.addFavoriteRepo( repository.id ) : store.removeFavoriteRepo( repository.id )

  return (
    <div>
      <h1>Name: { repository.name }</h1>
      <button onClick={ toggleFavorite } >
        {
          isFavorite ? 'dislike' : 'like'
        }
      </button>
    </div>
  );
};

export default Card;
