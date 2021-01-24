import React from "react";
import { Link } from "react-router-dom";
import Toggle from "../components/Toggle";
import { IoTrashOutline } from 'react-icons/io5';
import '../styles/favourite.css'


const FavouriteCard = (props) => {

    const { removeFromStorage, fm } = props
    const { isopen, handleToggle } = Toggle();

    return (

        <>
            <button className={isopen ? 'exit-favactive' : 'btn-stored__favactive'} onClick={handleToggle}>
                <IoTrashOutline style={{ color: 'salmon', fontSize: '20px', fontWeight: 'bold', transition: 'all .4s' }} />
            </button>

            <div className={isopen ? 'confirm' : 'confirm-annex'}>
                <div className="popup">
                    <ul className="alert-box">
                        <li> <button className="btn-close" onClick={handleToggle}>&times;</button></li>
                    </ul>

                    <ul className="popup-content">
                        <li><p>Remove</p></li>
                        <li>
                            <p>{fm.name}?</p>
                        </li>
                    </ul>

                    <button className="btn-yes" onClick={() => removeFromStorage(fm)}>Yes</button>
                </div>
            </div>

            <div className="fav-list__poster">
                <img src={fm.icon} alt="icon" />
            </div>

            <div className="fav-title__discover">
                <div>
                    <p className='fav-title'> {fm.name} </p>
                </div>

                <Link to={{ pathname: `/stream/${fm.id}` }}>
                    <button className="fav-btn__discover"> Listen Live </button>
                </Link>
            </div>
        </>
    )
}

export default FavouriteCard
