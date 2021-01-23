import React from 'react'
import '../styles/stream.css'

const Genre = (props) => {
    const { inputText, closeSideBar } = props

    const genre = [
        "Arts",
        "Entertainment",
        "Gospel",
        "Music",
        "News",
        "Politics",
        "Sport",
        "Talk",
        "Top 40",
        "Variety"
    ]


    const genreDisplay = genre.map((name) => {
        return (
            <ul className="navlinks" key={name} >
                <li onClick={() => { inputText(name); closeSideBar(); }}>{name}</li>
            </ul>
        )
    })

    return (
        <>
            {genreDisplay}
        </>
    )
}

export default Genre
