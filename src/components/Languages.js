import React from "react";
import '../styles/stream.css'


const Languages = (props) => {

    const { inputText, closeSideBar } = props

    const langauages = [
        "Akan",
        "English",
        "Hausa",
        "Multilingual",
    ]


    const languageDisplay = langauages.map((name) => {
        return (
            <ul className="navlinks" key={name}>
                <li onClick={() => { inputText(name); closeSideBar(); }}>{name}</li>
            </ul>
        )
    })


    return (
        <>
            {languageDisplay}
        </>
    )
}

export default Languages
