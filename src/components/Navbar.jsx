import fullLogo from "../assets/HobbyCueLogo.png"
import searchIcon from "../assets/SearchLogo.png"
import saved from "../assets/Saved.png"
import notif from "../assets/notificationsLogo.png"
import cart from "../assets/CartLogo.png"
import explore from "../assets/ExploreIcon.png"
import downArrow from "../assets/downArrowLogo.png"
import hobbies from "../assets/HobbiesLogo.png"
import menuIcon from "../assets/menuBlock.png" 
import "../styles/NavBar.css"
import { useState, useEffect, useRef } from 'react';
const Navbar = () => {
    const [showExploreDropdown, setShowExploreDropdown] = useState(false);
    const exploreRef = useRef(null);

    const toggleExploreDropdown = () => {
        setShowExploreDropdown(!showExploreDropdown);
    };

    useEffect(() => {
        if (showExploreDropdown && exploreRef.current) {
            const exploreRect = exploreRef.current.getBoundingClientRect();
            const dropdown = document.querySelector('.ExploreDropdown');
            if (dropdown) {
                dropdown.style.left = `${exploreRect.left}px`;
                dropdown.style.top = `${exploreRect.bottom}px`;
                dropdown.style.transform = 'none';
            }
        }
    }, [showExploreDropdown]);
    return (
        <div className="NavbarContainer">
            <div className="NBMain">
                <div className="NBLogo">
                    <img src={fullLogo} alt="logo" />
                </div>
                <div className="SearchBar">
                    <div className="searchtext">
                        <input type="text" placeholder="Search Here.." />
                    </div>
                    <div className="searchimage">
                        <img src={searchIcon} alt="search" />
                    </div>
                </div>
                <div className="ExpHobbies">
                    <div className="Explore"  onClick={toggleExploreDropdown}>
                        <img src={explore} alt="explore" />
                        <span>Explore</span>
                        <img src={downArrow} alt="down arrow" />
                    </div>
                    <div className="Hobbies">
                        <img src={hobbies} alt="hobbies" />
                        <span>Hobbies</span>
                        <img src={downArrow} alt="down arrow" />
                    </div>
                </div>
                <div className="snc">
                    <img src={saved} alt="saved" className="hide-mobile" />
                    <img src={notif} alt="notifications" />
                    <img src={cart} alt="cart" className="hide-mobile" />
                </div>
                <div className="signinButton hide-mobile">
                    <button>Sign in</button>
                </div>
                <div className="menuIcon show-mobile">
                    <img src={menuIcon} alt="menu" />
                </div>
                {showExploreDropdown && (
                <div className="ExploreDropdown">
                    <ul>
                    <li>People - Community</li>
                    <li>Places - Venues</li>
                    <li>Programs - Events</li>
                    <li>Products - Store</li>
                    <li>Blogs</li>
                    </ul>
                </div>
                )}
            </div>
      </div>
    )
  }

export default Navbar