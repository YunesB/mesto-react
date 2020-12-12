import React from 'react';
import PopupWithForm from './PopupWithForm.jsx';

function EditAvatarPopup(props) {

    const avatarRef = React.useRef();

    function handleSubmit(evt) {
        evt.preventDefault();   
        props.onUpdateUser({
            avatar: avatarRef.current.value
        });
    }

    return (
        <PopupWithForm 
            isOpen={props.isOpen ? "popup_opened" : ""}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            name="popupFormCard" 
            title="Обновить аватар" 
            buttonName="Сохранить" 
            children = {
              <>
                <label className="popup__field">
                  <input 
                    minLength="2"
                    type="url" 
                    className="popup__input popup__input_data_info" 
                    name="link" placeholder="Ссылка на картинку" required
                    id="url-input"
                    ref={avatarRef}
                    // value={props.isOpen ? props.emptyField : avatarRef}
                  />
                  <span className="popup__error" id="url-input-error"></span>
                </label>
              </>
            }
          />
    );
}

export default EditAvatarPopup;
