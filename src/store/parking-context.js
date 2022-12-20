import { createContext, useState } from "react";

const ParkingContext = createContext({
  favorites: [],
  itemSelect: [],
  allParking: {},
  totalFavorites: 0,
  addFavorite: (favoriteParking) => {},
  removeFavorite: (mparkingId) => {},
  itemIsFavorite: (parkingId) => {},
  addItemSelect: (parking) => {},
  loadParking: (parkings) => {},
  checkLike: (icon) => {},
  removeParking: (parking) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);
  const [userItem, setUserItems] = useState([]);
  const [allParking, setAllParking] = useState([]);

  function addFavoriteHandler(favoriteParking) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteParking);
    });
  }
  function checkLike(id) {
    allParking.forEach((parking) => {
      parking.id === id && parking.like !== false
        ? (parking["like"] = false)
        : (parking["like"] = true);
    });
    setAllParking(allParking);
  }

  function loadParkingHandler(parkings) {
    const parking = parkings.props.map((parking) => ({
      ...parking,
      like: "false",
    }));
    setAllParking(parking);
  }
  function addItemSelectHandler(userItemSelected) {
    setUserItems((parkingItem) => {
      return parkingItem.concat(userItemSelected);
    });
  }

  function removeFavoriteHandler(parkingId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((parking) => parking.id !== parkingId);
    });
  }
  function removeParkingHandler(parkingId) {
    setAllParking((prevUserFavorites) => {
      return prevUserFavorites.filter((parking) => parking.id !== parkingId);
    });
  }

  function itemIsFavoriteHandler(parkingId) {
    return userFavorites.some((parking) => parking.id === parkingId);
  }

  const context = {
    favorites: userFavorites,
    itemSelect: userItem,
    totalFavorites: userFavorites.length,
    allParking: allParking,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
    addItemSelect: addItemSelectHandler,
    loadParking: loadParkingHandler,
    checkLike: checkLike,
    removeParking: removeParkingHandler,
  };

  return (
    <ParkingContext.Provider value={context}>
      {props.children}
    </ParkingContext.Provider>
  );
}

export default ParkingContext;
