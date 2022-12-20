import { useState, useEffect } from "react";
import LoadParking from "../../store/load-parking";
import AllParkingC from "./allParkingC";

function AllParking() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedParkingss, setLoadedParkings] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://app-parking-a9328-default-rtdb.firebaseio.com/parking.json")
      .then((response) => response.json())
      .then((data) => {
        const parkingsData = [];

        for (const key in data) {
          const parkingData = {
            id: key,
            ...data[key],
          };

          parkingsData.push(parkingData);
        }

        setIsLoading(false);
        setLoadedParkings(parkingsData);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <div>
      <LoadParking props={loadedParkingss} />
      <AllParkingC />
    </div>
  );
}

export default AllParking;
