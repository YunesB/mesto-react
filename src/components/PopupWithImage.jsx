import '../index.css';

function PopupWithImage() {
    return (
        <div className="popup" id="popupImg">
          <div className="popup__img-container">
            <img src="#" className="popup__image"/>
            <button className="popup__close" type="button" id="popupImgClose"></button>
            <h3 className="popup__img-subline"></h3>
          </div>
        </div>
    );
}

export default PopupWithImage;
