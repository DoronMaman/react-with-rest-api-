import FormParking from "../../components/Form/formParking";
import { useNavigate } from "react-router-dom";

function NewParking() {
  const navigate = useNavigate();
  function addParking(parkingData) {
    fetch(
      "https://app-parking-a9328-default-rtdb.firebaseio.com/parking.json",
      {
        method: "POST",
        body: JSON.stringify(parkingData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => navigate("/"));
  }
  return <FormParking onAddParking={addParking} />;
}

export default NewParking;
