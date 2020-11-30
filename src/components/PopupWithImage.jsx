import '../index.css';

function PopupWithImage(props) {
    console.log(props);
    const cardData = props.card;
    console.log(cardData);

    return (
        <div className={`popup ${props.isOpen}`} id="popupImg">
          <div className="popup__img-container">
            <img src={cardData.link} alt={cardData.name} className="popup__image"/>
            <button className="popup__close" type="button" id="popupImgClose"></button>
            <h3 className="popup__img-subline">{cardData.name}</h3>
          </div>
        </div>
    );
}

export default PopupWithImage;
