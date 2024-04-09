import { useEffect, useState } from "react";
import "../styles/List.scss";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import ListingCard from "../components/ListingCard";
// import Footer from "../components/Footer"
import { setTripList } from "../redux/state";  //equivalent of setTripList

const TripList = () => {
  const [loading, setLoading] = useState(true);
  const userId = useSelector((state) => state.user._id);
  const tripList = useSelector((state) => state.user.tripList);

  const dispatch = useDispatch();




  const getTripList = async () => {
    //fetch the api 
    try {
      const response = await fetch(
        `http://localhost:3001/users/${userId}/purchased`, //
        {
          method: "GET",
        }
      );

      const data = await response.json();
      dispatch(setTripList(data));     //
      setLoading(false);
    } catch (err) {
      console.log("Fetch Purchased List failed!", err.message);
    }
  };

  useEffect(() => {
    getTripList();
  }, []);






  return loading ? (
    <Loader />
  ) : (
    <>
      <Navbar />
      <h1 className="title-list">Your Purchased Items</h1>
      <div className="list">
        {tripList?.map(({ listingId, hostId, totalPrice, booking=true }) => (
          <ListingCard
            listingId={listingId._id}
            // creator={hostId._id}
            listingPhotoPaths={listingId.listingPhotoPaths}
            city={listingId.city}
            province={listingId.province}
            country={listingId.country}
            category={listingId.category}

            totalPrice={totalPrice}
            booking={booking}
          />
        ))} 
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default TripList;