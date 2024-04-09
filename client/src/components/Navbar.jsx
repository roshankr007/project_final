import { IconButton } from "@mui/material";
import { Search, Person, Menu } from "@mui/icons-material";
import variables from "../styles/variables.scss";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../styles/Navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import { setLogout } from "../redux/state";


const Navbar = () => {
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const [search, setSearch] = useState("")

  const navigate = useNavigate()

  return (
    <div className="navbar">
      <a href="/">
        <img src="../../assets/logo/final_logo1.png" alt="logo" />     
      </a>


      {/* <a href="/">
        <img src="../../assets/logo/logo_text1.png" alt="logo" />     
      </a> */}

      {/* this div is for search option */}
      <div className="navbar_search">
        <input type="text" placeholder="Search..."
        value={search} 
        onChange={(e) => setSearch(e.target.value)}
        />

        <IconButton diabled={search === ""}>
          <Search  
            sx={{ color: variables.pinkred }} 
            onChange = {() => {navigate(`/properties/search/${search}`)}}
            />
        </IconButton>
      </div>

        {/*this div is for navbar - become a seller option*/}
      <div className="navbar_right">
        {user ? (
          <a href="/create-listing" className="Seller">
            Become A Seller
          </a>
        ) : (
          <a href="/login" className="Seller">
            Become A Seller
          </a>
        )}

      <button
        className="navbar_right_account"
        onClick={() => setDropdownMenu(!dropdownMenu)}
        >
        <Menu sx={{ color: variables.darkgrey }} />
        {!user ? (
          <Person sx={{ color: variables.darkgrey }} />
        ) : (
          <img
            src={`http:localhost:3001/${user.profileImagePath.replace(
              "public",
              ""
            )}`}
            alt="profile photo"
            style={{ objectFit: "cover", borderRadius: "50%" }}
          />
        )}
      </button>

              {/*if you are not a user , give option to login and sign in */}
      {dropdownMenu && !user && (
        <div className="navbar_right_accountmenu">
          <Link to="/login">Log in</Link>
          <Link to="/register">Sign up</Link>
        </div>
      )}

      {/* if the user is an logged in person , show other details like wishlist etc  */}
      {dropdownMenu && user && (
        <div className="navbar_right_accountmenu">
          <Link to=""> Wishlist</Link>
          <Link to="">Your Items</Link>
          {/* //from client->user.js */}
          <Link to="">Leased Items</Link>
          <Link to="">Purchased Items</Link>
          <Link to="/create-listing">Become A seller</Link>

          <Link to="/login" onClick={() => {
            dispatch(setLogout());
            }}
            >
            Log Out
          </Link>
        </div>
      )}
      </div>
    </div>
  );
};



export default Navbar;

// let box= document.querySelector('.navbar_right_accountmenu');
// let list = document.querySelector('.create-listing');

// list.addEventListener('click', ()=>{
//   box.style.transform = scale(0);
