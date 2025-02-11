import PropTypes from "prop-types"
import './Card.css'

export function Card(props) {
    return (
        <div className="card">
            <img src={props.img} alt="title" />
            <div className="card-details">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <button>Learn More</button>
            </div>
        </div>
    )
}

export function CardRnd(props) {
    return (
        <div className="cardrnd">
            <img className="round" src={props.img} alt="title" />
            <div className="card-details">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}