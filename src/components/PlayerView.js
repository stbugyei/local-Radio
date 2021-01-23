import React, { useState } from "react";
import { withRouter, useHistory, useParams } from "react-router-dom";
import streamInfor from '../components/streamsInfo'
import useLocalStorage from "../components/useLocalStorage"
import PlayerViewCard from "../cards/PlayerViewCard";
import 'react-h5-audio-player/lib/styles.css';
import '../styles/playerview.css'


const PlayerView = (props) => {

    const { popularSelected } = props

    const [error, setError] = useState(false);
    const [favoriteList, setFavoriteList] = useLocalStorage("favoritList", []);

    const { id } = useParams();
    //const streamInData = props.location.state.streamInfor
    const singleView = streamInfor.find(radiostation => radiostation.id === id);
    const { name, stream, website, description, Frequency, icon, location, language, genre } = singleView;


    //======= Display Spinner and Equalizer functions =========
    const animateStream = () => {
        if (error === false) {
            return { display: 'none' }
        }
    }

    //======= Navigation functions =========
    const history = useHistory();
    const handleClick = () => {
        history.push("/")
    }

    //======= Navigation functions =========
    const handleFavourite = () => {
        history.push("/favouriteList")
    }

    //====== Adding dots to seperate genre function ====== 
    const genreDot = () => {
        return (
            <span>&#8226;</span>
        ).props.children
    }

    //====== Adding items to localStorage  ====== 
    const addToStorage = (radio) => {
        if (!favoriteList.some(fav => fav.id === radio.id)) {
            setFavoriteList([...favoriteList, radio])

        } else {
            const newList = favoriteList.filter((item) => item.id !== radio.id)
            setFavoriteList(newList)
        }
    }

    const colorToggle = favoriteList.filter(data => data.id === id)

    return (
        <div className="player-wrapper">
            <PlayerViewCard
                name={name} stream={stream} website={website} description={description} Frequency={Frequency} icon={icon} location={location} language={language} genre={genre} colorToggle={colorToggle} addToStorage={addToStorage} handleClick={handleClick} animateStream={animateStream} singleView={singleView} error={error} setError={setError} genreDot={genreDot} handleFavourite={handleFavourite} popularSelected={popularSelected}
            />
        </div>
    )
}

export default withRouter(PlayerView)
