import React from 'react'
import { withRouter, Link } from "react-router-dom";
import streamInfor from '../components/streamsInfo'
import Header from '../components/Header'
import '../styles/stream.css'

const HomeCard = (props) => {

    const { text, query, onInputChange, queriedStream, isopen } = props

    let initialData = streamInfor.filter(radiostations => (radiostations.name)).sort(() => Math.random() - 0.5).slice(0, 5);

     //========== Onclick function to move the page to the top ===========//
     const scrollTotop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }) }

    const searchDisplay = queriedStream.map((name) => {
        return (

            <div className={isopen ? 'stream-content__card1' : 'stream-content__card'} key={name.id} onClick={scrollTotop}>
                <Link key={name.id} to={{
                    pathname: `/stream/${name.id}`,
                    state: { streamInfor }
                }}>
                    <h3>{name.name}</h3>
                    <div className="stream-content" style={{ height: isopen ? '85px' : 'undefined' }}>
                        <div className="stream-content__hex">
                            <div className="stream-poster">
                                <img src={name.icon} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="stream-content__text">
                        <li>  {name.location === '' ? <span>Nan</span> : <span>{name.location} </span>} {name.Frequency === '' ? <span>Nan</span> : <span className="stream-content__freq">{name.Frequency}</span>}
                        </li>
                    </div>
                </Link>
            </div>
        )
    })

    const initialDisplay = initialData.map((name) => {
        return (

            <div className={isopen ? 'stream-content__card1' : 'stream-content__card'} key={name.id} onClick={scrollTotop}>
                <Link key={name.id} to={{
                    pathname: `/stream/${name.id}`,
                    state: { streamInfor }
                }}>
                    <h3>{name.name}</h3>

                    <div className="stream-content" style={{ height: isopen ? '85px' : 'undefined' }}>
                        <div className="stream-content__hex">
                            <div className="stream-poster">
                                <img src={name.icon} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="stream-content__text">
                        <li><span>{name.location} </span> <span className="stream-content__freq">{name.Frequency}</span></li>
                    </div>
                </Link>
            </div>
        )
    })


    return (

        <>
            <Header text={text} query={query} onInputChange={onInputChange} isopen={isopen} />
            <div className="stream-container">
                {query === "undefined" ? <>{initialDisplay} </> : <>{query === "" ? <>{initialDisplay} </> : <>{searchDisplay} </>}</>}
            </div>
        </>
    )
}

export default withRouter(HomeCard)
