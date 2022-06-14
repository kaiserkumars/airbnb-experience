import Star from "../images/star.png";

export default function Card(props) {
    return (
        <div className="card">
            <img className="card--image" src={props.coverImg}/>
            <div className="card--stats">
                <img src={Star} className="card--star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><strong>From {props.price}</strong>/person</p>
        </div>
    )
}