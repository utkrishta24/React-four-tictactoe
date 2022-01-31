import React from "react";
import { FaTimes, FaPen, FaRegCircle, FaEarlybirds } from 'react-icons/fa';


const Icon = ({ name }) => {
    switch (name) {
        case 'circle':
            return <FaRegCircle className="icons"/>
            break;

        case 'pen':
                return <FaPen className="icons"/>
                break;

        case 'cross':
            return <FaTimes className="icons"/>
            break;
            
        default:
            return <FaEarlybirds className="icons"/>
    }
};

export default Icon;