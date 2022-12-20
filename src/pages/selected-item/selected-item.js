import FavoritesContext from "../../store/parking-context";
import CardList from "../../components/card/cardList";
import { useContext } from "react";

function SelectedItem() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.itemSelect.length === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = <CardList meetups={favoritesCtx.itemSelect} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}
export default SelectedItem;
