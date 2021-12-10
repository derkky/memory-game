const CardContainer = ({cards, handleClick}) => {
    return(
        <div className="card-container">
            {cards.map(card => {
            return(
                <div 
                key={card.id}
                id={card.id}
                className="card" 
                style={{backgroundColor: card.color}}
                onClick={handleClick}/>
            )
            })}
        </div>
        
    )
}

export default CardContainer