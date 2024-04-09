import {BrowserRouter, Routes,Route} from "react-router-dom"
import './App.css';
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { CreateListing } from "./pages/CreateListing";
import ListingDetails from "./pages/ListingDetails";
import TripList from "./pages/TripList";

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="/create-listing" element={<CreateListing />}/>
        <Route path="/products/:listingId" element={<ListingDetails />}/>
        <Route path="/:userId/purchased" element={<TripList/>}/>
      </Routes>
      </BrowserRouter>   
    </div>
  );
}

export default App;
