import React from 'react'
import { Link } from "react-router-dom";
import '../styles/stream.css'

const Popular = (props) => {

    const { popularSelected } = props

    const popularDisplay = popularSelected.map((name) => {
        return (

            <div className="popular__card" key={name.id}>
                <Link key={name.id} to={`/stream/${name.id}`}>
                    <span className="popular-poster">
                        <img src={name.icon} alt="" />
                    </span>

                    <span className="popular-name">{name.name}</span>
                </Link>
            </div>
        )
    })


    return (
        <>
            {popularDisplay}
        </>
    )
}

export default Popular
