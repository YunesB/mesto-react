import React from "react";

function Card(props) {
    const cardData = props.card;
    
    function handleCardClick() {
        props.onCardClick(cardData);
    }

    return (
        <li className="card">
            <img 
                src={cardData.link}
                alt={cardData.name}
                className="card__image"
                onClick={handleCardClick}
            />
            <button type="button" className="card__delete-button"></button>
            <div className="card__box">
                <h2 className="card__title">{cardData.name}</h2>
                <div className="card__like-box">
                    <button type="button" className="card__like"></button>
                    <p className="card__like-counter">{cardData.likes.length}</p>
                </div>
            </div>
        </li>
    );
}

export default Card;