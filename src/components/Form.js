import React from "react";
import '../styles/form.css'


const Form = () => {

    return (

        <div className="form">
            <input
                className='search-input'
                type='search'
                placeholder='Search by name, location and genre...'
                autoComplete='off'
            />
        </div>
    )
}

export default Form