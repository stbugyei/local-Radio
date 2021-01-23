import React from 'react'
import { IoIosHeart } from 'react-icons/io';
import vinyl from "../images/vinyl.jpg"
import equalizer from "../images/equalizer.gif"
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import '../styles/playerview.css'
import Popular from '../components/Popular';

const PlayerViewCard = (props) => {

    const { name, stream, website, description, Frequency, icon, location, language, genre, handleClick, handleFavourite, animateStream, colorToggle, addToStorage, singleView, setError, genreDot, popularSelected } = props

    return (
        <>
            <div className="content-recommend">
                <div className="player-content">
                    <div className="logo1">
                        <li className="logo1-text">StBugyei☻</li>
                        <li><span style={{ color: ' orangered' }}>Bruce</span> Online Streaming Radio</li>
                    </div>
                    <div className="player-nav">
                        <li className="logo1-btn" onClick={handleClick}><i className="fas fa-arrow-left"></i> Go Home</li>
                        <li className="logo1-btn" onClick={handleFavourite}>Favourites</li>
                    </div>
                    <div className="player-content__items">
                        <div className="player-icon" >
                            <img src={icon} alt="icon" />
                        </div>
                        <div className="player-text">
                            <li className="player-text__items"><div>{name}</div> {Frequency === '' ? '' : <div> <span>{Frequency}</span> <span style={{ color: 'orangered' }}>MHz</span></div>} <div className="player-text__anime" style={animateStream()}><img src={equalizer} alt="icon" /></div></li>
                            <li className="player-text__genre">{genre.replace(/,/g, ` ${genreDot()}`)}</li>
                            <li className="player-text__items"><span>{location}</span> <span><a href={website} target="_blank" rel="noopener noreferrer"><i className="fas fa-globe-africa"></i> website</a></span>
                                <span>
                                    {colorToggle.length !== 0 ? (

                                        <button className="btn-store__active" onClick={() => addToStorage(singleView)} >
                                            <IoIosHeart style={{ color: 'orangered', fontSize: '20px', transition: 'all .4s' }} />
                                        </button>
                                    ) : (
                                            <button className="btn-store" onClick={() => addToStorage(singleView)}>
                                                <IoIosHeart style={{ color: 'white', fontSize: '20px', transition: 'all .4s' }} />
                                            </button>)
                                    }
                                </span>
                            </li>
                        </div>
                    </div>

                    <div className="player-container">
                        <div className="player-spin" style={animateStream()}><img src={vinyl} alt="icon" /></div>
                        <AudioPlayer
                            autoPlay
                            src={stream}
                            onPlay={e => setError(true)}
                        />
                    </div>
                </div>

                <div className="player-description">
                    {description === '' ? '' :
                        <li>
                            <h3>Description</h3>
                            <p>{description}</p>
                        </li>}
                    <li>
                        <h3>Language</h3>
                        <p>{language}</p>
                    </li>
                </div>
            </div>

            <div className="player-recommended__annex">
                <h3>Recommended</h3>
                <Popular popularSelected={popularSelected} />
            </div>
        </>
    )
}

export default PlayerViewCard
