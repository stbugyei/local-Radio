import { useState } from 'react'

const Toggle = () => {

    const [isopen, setIsopen] = useState(false)

    const handleToggle = () => {
        setIsopen(!isopen)
    }

    const closeSideBar = () => {
        setIsopen(false)
    }


    return {
        isopen,
        handleToggle,
        closeSideBar,
    }

}

export default Toggle
