import React from 'react'
import HomeCard from '../cards/HomeCard'
import Sidebar from './Sidebar'
import Toggle from "./Toggle";
import Close from "../humburger/Close";
import Menu from "../humburger/Menu";


const Home = (props) => {

    const { isopen, handleToggle, closeSideBar } = Toggle();

    const {  popularSelected, inputText, text, onInputChange, queriedStream, query } = props

    return (
        <div className="home-wrapper">
            <div className={isopen ? 'sidebar-wrapper__active' : 'sidebar-wrapper'}> <Sidebar popularSelected={popularSelected} inputText={inputText} text={text} closeSideBar={closeSideBar} query={query} />
            </div>
            <>
                <div className={isopen ? 'hamburger-annex' : 'hamburger'} onClick={handleToggle}>
                    {isopen ? <Close /> : <Menu />}
                </div>
                <div className={isopen ? 'stream-wrapper__active' : 'stream-wrapper'}>
                    <HomeCard text={text} query={query} onInputChange={onInputChange} queriedStream={queriedStream} isopen={isopen} popularSelected={popularSelected}/>
                </div>
            </>
        </div>
    )
}

export default Home
