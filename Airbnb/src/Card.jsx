import './App.css'

export default function Card(props){
    let badgeText;
    if (props.openSpots == 0){
        badgeText = "SOLD OUT";
    } else if (props.location == "Online"){
        badgeText = "Online";
    }
   
    return (
        <div className='card'>
            {badgeText && <div className='badge'>{badgeText}</div>}
            <img className='card--image' src={`../images/${props.coverImg}`}></img>
            <div className='card--stats'>
            <img className="card--star" src="../images/Star 1.png"></img>
                <span className='grey'>{props.stats.rating}</span>
                <span className='grey'>({props.stats.reviewCount})</span>
                <span className='grey'> • {props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className='bold'>From ${props.price}</span>/ person</p>
        </div>
    )
}