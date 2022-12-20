import { Link } from "react-router-dom";
import navBarStyle from "./navBar.module.css";
import { useState } from "react";
import Modal from "../Modal/Modal";
import Backdrop from "../Modal/Backdrop";
import FavoritesContext from "../../store/parking-context";
import { useContext } from "react";

function NavBar() {
  const favoritesCtx = useContext(FavoritesContext);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function exitParking() {
    setModalIsOpen(true);
  }
  function cancelModal() {
    setModalIsOpen(false);
  }
  return (
    <header className={navBarStyle.header}>
      <div className={navBarStyle.logo}>Israel Parking</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Parking</Link> /
          </li>

          <li>
            <Link to="/newParking"> New Parking</Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favorites
              <span className={navBarStyle.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
          <li>
            <button className="btn btn-danger" onClick={exitParking}>
              Exit Parking
            </button>
          </li>
        </ul>
      </nav>
      {modalIsOpen && <Modal onCancel={cancelModal} onOk={cancelModal} />}
      {modalIsOpen && <Backdrop onCancel={cancelModal} />}
    </header>
  );
}

export default NavBar;
