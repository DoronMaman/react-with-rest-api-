import { useContext } from "react";
import classes from "./favoriteParking.module.css";
import FavoritesContext from "../../store/parking-context";
import CardList from "../../components/card/cardList";

function FavoritesParkingPage() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = (
      <p className={classes.textStyle}>
        You got no favorites yet. Start adding some?
      </p>
    );
  } else {
    content = <CardList meetups={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1 className={classes.textStyle}>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesParkingPage;
