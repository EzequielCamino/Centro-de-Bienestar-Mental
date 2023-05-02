import React from "react";
import './Card 1.scss'

function Card1({cardnum, icon, title, text}) {
    return(
        <div className={"aboutusCard " + cardnum}>
                        <img className="aboutusCardIcon" src={icon} alt={icon} />
                        <h3>{title}</h3>
                        <p>{text}</p>
        </div>
    )
}

export default Card1;