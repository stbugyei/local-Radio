import React, { useState } from "react";
import Form from "./Form";
import CurrentDate from "./CurrentDate";
import { IoSearchSharp, IoCloseSharp } from "react-icons/io5";
import flag from "../images/flag.png"
import '../styles/sidebar.css'
import '../styles/header.css'



const Header = (props) => {

    const { onInputChange, query } = props

    const { localTime } = CurrentDate();

    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => {
        setIsExpanded(!isExpanded)
    }


    return (
        <div className="header-wrapper">
            <div className="header-banner">
                {/* <div className="logo" >StBugyei☻</div> */}
                <div className="logo" > <span style={{ color: 'orangered' }}>Bruce</span> Radio</div>

                {query === 'undefined' || query === '' ? '' : <div className="header-title__search" ><span style={{ color: 'orangered' }}>{query}</span> <span>Radio Station</span></div>}

                <div className="title-search">
                    <span className="title-search1"> <span style={{ color: 'orangered' }}>Bruce</span> Online Streaming Radio</span> <button className={isExpanded ? 'title-search__btn1' : 'title-search__btn'} onClick={handleExpand}> {isExpanded ? <IoCloseSharp style={{ fontSize: '22px', color: 'red' }} /> : <IoSearchSharp style={{ fontSize: '22px' }} />}</button>
                </div>

                <div className={isExpanded ? 'form-wrapper__content' : 'showform'} onChange={onInputChange}>
                    <Form />
                </div>
            </div>

            <div className="header-main">
                <div className="header-main__text">
                    <ul>
                        <li>
                            <h1 className="header-main__text1">Popular online streaming radio</h1>
                            <h1>and Fm stations in Ghana.</h1>
                        </li>

                        <li className="header-main__p">
                            <p>Enjoy some of the finest radio programs from Ghana.</p>
                            <p className="header-main__p2"> Search or browse from the menu to select the station of interest.</p>
                        </li>

                        <li className="flag-date">
                            <div>
                                <span className="ghana-flag"><img src={flag} alt="icon" /></span><span className="date">{localTime}</span>
                            </div>
                        </li>
                    </ul>

                </div>
                <div className="header-main__image"></div>
            </div>
        </div>
    )
}

export default Header

