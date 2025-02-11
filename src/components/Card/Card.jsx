import './Card.css'

function Card(props) {
    return (
        <div className="card">
            <img src={props.img} alt="title" />
            <div className="card-details">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Card