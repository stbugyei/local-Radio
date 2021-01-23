import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import useLocalStorage from "../components/useLocalStorage"
import FavouriteCard from "../cards/FavouriteCard";
import '../styles/favourite.css'

const FavouriteList = () => {

    const [favList, setFavList] = useState([]);
    const [favoriteList, setFavoriteList] = useLocalStorage("favoritList", []);

    const favTally = () => {
        let myStations = [];

        if (favoriteList.length !== null) {
            myStations.push(favoriteList.length)
        }
        const tally = (((parseFloat(myStations))))
        return tally
    }


    useEffect(() => {

        const fetchRadioData = async () => {
            const radioResponse = await JSON.parse(localStorage.getItem('favoritList'));
            if (radioResponse) {
                setFavList(radioResponse);
            }
        }

        fetchRadioData()

    }, [])

    //====== Create false/empty route to update localStorage on item remove  ======
    const history = useHistory();

    const reload = () => {
        let currentPath = window.location.pathname;
        history.replace('/favoritelist');//fake path
        setTimeout(() => {
            history.replace(currentPath)
        }, 0)
    }

    //====== Removing items from localStorage  ======
    const removeFromStorage = (radiostation) => {
        const newList = favoriteList.filter((item) => item.id !== radiostation.id)
        setFavoriteList(newList);
        reload();
    }

    //======= Navigation functions =========
    const handleClick = () => {
        history.goBack();
    }

    const radioStationCard = favList.map((fm) => {
        if (!favList) { return '' }

        return (
            <div className="radio-list__favcard" key={fm.id}>
                <FavouriteCard
                    fm={fm}
                    removeFromStorage={removeFromStorage}
                />
            </div>
        )
    })


    //====== Printing singular and Plural forms of the word(item)  ======
    const items = () => {
        if (favTally() === 1) {
            return <>item</>
        } else {
            return <>items</>
        }
    }

    return (
        <div className="fav-list__container">

            <ul className="fav-caption">
                <li className="fav-caption__text"><h2>My Favourites</h2></li>
                {favTally() === 0 ? <li><h2>You have No Favourites!</h2></li> : <li><h2>You have <button className="btn-store__fav1">{favTally()}</button> {items()} in Favourites!</h2></li>}
            </ul>

            <button className="fav-back" onClick={handleClick}><i className="fas fa-arrow-left"></i><span className="back-text">Go Back</span>  </button>

            <div className="fav-list__cardwrapper">
                {(favList) ? <>{radioStationCard}</> : ''}
            </div>
        </div>
    )
}

export default FavouriteList
