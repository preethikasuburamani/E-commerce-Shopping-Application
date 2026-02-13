import "./Header.css";
import { IoMenu } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {

  let navigate = useNavigate()
   return (
    <div className="headerContainer">
      {/* Left Menu Icon */}
      <h1 className="menuIcon" onClick={()=>navigate("/")}>LOGO</h1>

      {/* Search Box */}
      <div className="searchContainer">
        <input className="searchInput" type="text" placeholder="search" />
        <FaSearch className="searchIcon" />
      </div>

      {/* Cart Icon */}
      <h1 className="cartIcon" onClick={()=>{navigate("/cart")}}><FaCartShopping /></h1>

      <p className="signin" onClick={()=>navigate("/signin")}>Signin</p>
    </div>
    
  );
};

export default Header;