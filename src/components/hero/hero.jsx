import React from "react"
import './hero.css'

function Allhero(props) {
    return (
        <div className="all-hero">
            <h1>{props.title}</h1>
            <p className="hero-det">Home <span> &#x22D7; Tour Pakage</span></p>
        </div>
    )
}

export default Allhero