import Parking from "../../images/parking1.webp";
import classes from "./cardItem.module.css";
import { useContext, useState } from "react";
import FavoritesContext from "../../store/parking-context";
import IconLike from "../../images/like.webp";
import IconUnlike from "../../images/unlike.webp";
import DeleteItem from "../../images/862px-Delete-button.svg.png";
import Modal from "../Modal/Modal";
import Backdrop from "../Modal/Backdrop";

function Card(props) {
  const [modalIsOpenCard, setModalIsOpenCard] = useState(false);

  function cancelModal() {
    setModalIsOpenCard(false);
  }
  function confirmModal() {
    setModalIsOpenCard(false);
    favoritesCtx.removeParking(props.id);
  }

  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    favoritesCtx.checkLike(props.id);

    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  function deleteItemHandler() {
    setModalIsOpenCard(true);

    fetch(
      "https://app-parking-a9328-default-rtdb.firebaseio.com/parking/" +
        props.id +
        ".json",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  return (
    <div className="card card-style">
      {modalIsOpenCard && <Modal onCancel={cancelModal} onOk={confirmModal} />}
      {modalIsOpenCard && <Backdrop onCancel={cancelModal} />}

      <img className="card-img-top " src={Parking} alt="" />

      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <div className={classes.wrapper}>
          <div onClick={toggleFavoriteStatusHandler}>
            <img
              className={classes.imgFavorite}
              src={props.like ? IconLike : IconUnlike}
              alt=""
            />
          </div>

          <div onClick={deleteItemHandler}>
            <img
              className={classes.imgFavoriteDelete}
              src={DeleteItem}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
