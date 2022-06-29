import "./Card.css"

export function Card(props){
    return(
        <div className="Card">
        <p>{props.name}</p>
        <p>{props.time}</p>
    </div>
    )    
}



