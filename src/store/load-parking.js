import { useEffect, useContext } from "react";
import FavoritesContext from "./parking-context";

function LoadParking(props) {
  const parkingContext = useContext(FavoritesContext);

  useEffect(() => {
    parkingContext.loadParking(props);
  }, [props]);
}
export default LoadParking;
