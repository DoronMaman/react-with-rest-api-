import { useContext } from "react";
import FavoritesContext from "../../store/parking-context";
import CardList from "../../components/card/cardList";

function AllParkingC() {
  const parkingContext = useContext(FavoritesContext);

  return <CardList meetups={parkingContext.allParking} />;
}
export default AllParkingC;
