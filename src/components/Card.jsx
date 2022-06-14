import Star from "../images/star.png";

export default function Card(props) {
    const item = props.item;
    let badgeText;
    if(item.openSpots === 0){
        badgeText = "SOLD OUT";
    } else if(item.location === "Online") {
        badgeText = "ONLINE";
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--image" src={`../images/${item.coverImg}`}/>
            <div className="card--stats">
                <img src={Star} className="card--star"/>
                <span>{item.stats.rating}</span>
                <span className="gray">({item.stats.reviewCount}) • </span>
                <span className="gray">{item.location}</span>
            </div>
            <p>{item.title}</p>
            <p><strong>From {item.price}</strong>/person</p>
        </div>
    )
}