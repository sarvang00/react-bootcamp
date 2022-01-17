import React from "react"
import {FaTimes, FaPen, FaRegCircle} from "react-icons/fa"

const Icon = ({name}) => {
    return(
        <h1 className="icon">
            <div>Cross <FaTimes/></div>
            <div>Pen <FaPen/></div>
            <div>Circle <FaRegCircle/></div>
        </h1>
    )
}

export default Icon