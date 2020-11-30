import '../index.css';
import React from 'react';
import loading from '../images/loading.svg'
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import PopupWithForm from './PopupWithForm.jsx';
import PopupWithImage from './PopupWithImage';

function App() {

  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(
    false
  );
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(
    false
  );

  const [isAddCardPopupOpen, setAddCardPopupOpen] = React.useState(
    false
  );

  const [cardImage, setCardImageOpen] = React.useState();

  // const [isConfirmationPopupOpen, setConfirmationPopupOpen] = React.useState(
  //   false
  // );

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddCardClick() {
    setAddCardPopupOpen(true);
  }

  // function handleDeleteClick() {
  //   setConfirmationPopupOpen(true);
  // }

  function handleCardClick() {
    setCardImageOpen();
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddCardPopupOpen(false);
    // setConfirmationPopupOpen(false);
  }


  return (
      <div className="page">
        <Header/>
        <Main
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddCardClick}
          onCardClick={handleCardClick}
        />
        <Footer/>
        <PopupWithForm 
          name="popupFormInfo" 
          title="Редактировать профиль" 
          buttonName="Сохранить" 
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          children = {
            <>
              <label className="popup__field">
                <input 
                  minLength="2" 
                  maxLength="40" 
                  type="text" 
                  className="popup__input popup__input_data_name" 
                  name="name" placeholder="Имя" required
                  id="name-input"/>
                <span className="popup__error" id="name-input-error"></span>
              </label>
              <label className="popup__field">
                <input minLength="2"
                  maxLength="200"
                  type="text" className="popup__input popup__input_data_info"
                  name="info" placeholder="О себе" required
                  id="data-input"/>
                <span className="popup__error" id="data-input-error"></span>
              </label>
            </>
          }
        />
        <PopupWithForm 
          name="popupFormCard" 
          title="Новое место" 
          buttonName="Создать" 
          isOpen={isAddCardPopupOpen}
          onClose={closeAllPopups}
          children = {
            <>
              <label className="popup__field">
                <input 
                  minLength="2" 
                  maxLength="30" type="text" 
                  className="popup__input popup__input_data_name" 
                  name="name" placeholder="Название" required
                  id="place-input"/>
                <span className="popup__error" id="place-input-error"></span>
              </label>
              <label className="popup__field">
                <input 
                  minLength="2"
                  type="url" 
                  className="popup__input popup__input_data_info" 
                  name="link" placeholder="Ссылка на картинку" required
                  id="url-input"/>
                <span className="popup__error" id="url-input-error"></span>
              </label>
            </>
          }
        />
        <PopupWithForm 
          name="popupFormCard" 
          title="Обновить аватар" 
          buttonName="Сохранить" 
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          children = {
            <>
              <label className="popup__field">
                <input 
                  minLength="2"
                  type="url" 
                  className="popup__input popup__input_data_info" 
                  name="link" placeholder="Ссылка на картинку" required
                  id="url-input"/>
                <span className="popup__error" id="url-input-error"></span>
              </label>
            </>
          }
        />
        {/* <PopupWithForm 
          name="popupConfirm" 
          title="Вы уверены?" 
          buttonName="Да" 
          isOpen={isConfirmationPopupOpen} 
          onClose={closeAllPopups}
        />       */}
      </div>
  );
}

export default App;
