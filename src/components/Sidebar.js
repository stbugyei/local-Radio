import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Genre from "./Genre";
import Languages from "./Languages";
import Locations from "./Locations";
import Popular from "./Popular";
import '../styles/sidebar.css'


const Sidebar = (props) => {

    const { popularSelected, inputText, closeSideBar } = props

    const [isActive, setIsActive] = useState('');

    //========= Active nav style function ========
    const activeColor = (e) => {
        setIsActive(e.target.textContent)
    }

    //======= Navigation functions =========
    const history = useHistory();
    const handleClick = () => {
        history.push("/favouriteList")
    }

    return (
        <div className="side-wrapper__container">
            <input type="radio" id="expand" name="menu" value="expand" />
            <input type="radio" id="expand1" name="menu" value="expand1" />
            <input type="radio" id="expand2" name="menu" value="expand2" />

            <div className="menu-bruce">
                <li className="menu-bruce__spinner"></li>
                <li className="bruce-menu__text"><strong>Menu</strong></li>
            </div>

            <label htmlFor="expand">
                <h3 className={isActive !== 'Genre' ? 'undefined' : 'active'} onClick={activeColor}><i className="fas fa-podcast"></i><span className="menu-text1">Genre</span> <span className="caret1"><i className="fas fa-caret-right"></i></span>  </h3>
            </label>
            <div className="close">
                <Genre inputText={inputText} closeSideBar={closeSideBar} />
            </div>

            <label htmlFor="expand1">
                <h3 className={isActive !== 'Language' ? 'undefined' : 'active'} onClick={activeColor}><i className="fas fa-language"></i> <span className="menu-text">Language</span> <span className="caret2"><i className="fas fa-caret-right"></i></span></h3>
            </label>
            <div className="close1">
                <Languages inputText={inputText} closeSideBar={closeSideBar} />
            </div>

            <label htmlFor="expand2">
                <h3 className={isActive !== 'Location' ? 'undefined' : 'active'} onClick={activeColor}><i className="fas fa-map-marker-alt"></i> <span className="menu-text">Location</span> <span className="caret3"><i className="fas fa-caret-right"></i></span></h3>
            </label>
            <div className="close2">
                <Locations inputText={inputText} closeSideBar={closeSideBar} />
            </div>

            <h3 onClick={handleClick}><i className="fas fa-heart"></i> <span className="menu-text3">Favourite</span></h3>

            <p className="menu-text4">Recommended</p>

            <Popular popularSelected={popularSelected} closeSideBar={closeSideBar} />

        </div>
    )
}

export default Sidebar
