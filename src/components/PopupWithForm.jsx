import '../index.css';

function PopupWithForm(props) {
    return (
        <div className={`popup ${props.isOpen ? ' popup_opened ' : " "}`} id={props.name}>
          <div className="popup__container">
            <h2 className="popup__heading">{props.title}</h2>
            <form className="popup__form" name={props.name} id="popupFormInfo" noValidate>
              <fieldset className="popup__set">
                {props.children}
                <button type="submit" className="popup__button" id="infoSubmit">Сохранить</button>
              </fieldset>  
            </form>
            <button className="popup__close" type="button" id="popupInfoClose" onClick={props.onClose}></button>
          </div>
        </div>
    );
}

export default PopupWithForm;
