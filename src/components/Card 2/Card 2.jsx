import React from "react";
import './Card 2.scss'

function Card2({icon, color, title, text}) {
    return(
        <div className="card2">
            <div className={"card2Icon " + color}>
                <img src={icon} alt={icon} />
            </div>
            <div className="card2Text">
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Card2;