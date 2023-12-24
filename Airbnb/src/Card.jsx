import './App.css'

export default function Card(){
    return (
        <div className='card'>
            <img className='card--image' src="../images/image 12.png"></img>
            <div className='card--stats'>
            <img className="card--star" src="../images/Star 1.png"></img>
                <span className='grey'>5.0</span>
                <span className='grey'>(6)</span>
                <span className='grey'> • USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span className='bold'>From $136</span>/ person</p>
        </div>
    )
}