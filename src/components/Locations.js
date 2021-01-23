import React from 'react'
import '../styles/stream.css'

const Locations = (props) => {

    const { inputText, closeSideBar } = props

    const locations = [
        "Accra",
        "Bogoso",
        "Cape Coast",
        "Donkorkrom",
        "Ho",
        "Kasoa",
        "Koforidua",
        "Kumasi",
        "Nkrofro",
        "Somanya",
        "Sunyani",
        "Swedru",
        "Takoradi",
        "Tamale",
        "Tarkwa",
        "Tema",
        "USA",
        "Unknown",
    ]


    const locationDisplay = locations.map((name) => {
        return (
            <ul className="navlinks" key={name}>
                <li onClick={() => { inputText(name); closeSideBar(); }}>{name}</li>
            </ul>
        )
    })

    return (
        <>
            {locationDisplay}
        </>
    )
}

export default Locations
