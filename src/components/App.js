import React from 'react';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import PopupWithForm from './PopupWithForm.jsx';
import ImagePopup from './ImagePopup';
import PageIsLoading from './PageIsLoading';
import { CurrentUserContext } from '../contexts/CurrentUserContext.jsx';
import {api} from '../utils/api.js';

function App() {

  const [isPageLoading, setIsPageLoading] = React.useState(true);

  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddCardPopupOpen, setAddCardPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCardOpen] = React.useState();
  // const [isConfirmationPopupOpen, setConfirmationPopupOpen] = React.useState(false);

  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([
        api.getUserInfo(), 
        api.getInitialCards()])
          .then(([userData, cards]) => {
              setCurrentUser(userData);
              setCards(cards);
          })
          .catch((err) => console.log(err))
          .finally(() => {
            setIsPageLoading(false);
          })
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card, !isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        setCards(newCards);
      });
  }

  function handleCardDelete(card) {
    // setConfirmationPopupOpen(true);
    setIsPageLoading(true);
    api.deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter((c) => c._id !== card._id);
        setCards(newCards);
      })
      .catch((err) => console.log(err))
      .finally(() => closeAllPopups());
}

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddCardClick() {
    setAddCardPopupOpen(true);
  }

  function handleCardClick(id) {
    setSelectedCardOpen(id);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddCardPopupOpen(false);
    setIsPageLoading(false);
    setSelectedCardOpen();
  }


  return (
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <Header/>
          <Main
            onEditProfile={handleEditProfileClick}
            onEditAvatar={handleEditAvatarClick}
            onAddPlace={handleAddCardClick}
            onCardClick={handleCardClick}
            onLikeClick={handleCardLike}
            onDeleteClick={handleCardDelete}
            cards={cards}
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
          <ImagePopup 
            isOpen={selectedCard ? 'popup_opened' : ''} 
            card={selectedCard || ''}
            onClose={closeAllPopups}
          />
          <PageIsLoading 
            isOpen={isPageLoading}
          />
        </div> 
      </CurrentUserContext.Provider>
  );
}

export default App;
