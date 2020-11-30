import '../index.css';
import React from 'react';
import Card from './Card.jsx';
import {api} from '../utils/Api.js';

function Main(props) {

    const [userName, setUserName] = React.useState();
    const [userInfo, setUserInfo] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([
            api.getUserInfo(), 
            api.getInitialCards()])
                .then(([userData, cards]) => {
                    setUserName(userData.name);
                    setUserInfo(userData.about);
                    setUserAvatar(userData.avatar);
                    setCards(cards);
                })
          .catch((err) => console.log(err));
      }, []);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile-info">
                    <div className="profile-info__image-container">
                        <button type="button" className="profile-info__avatar-customizaton" onClick={props.onEditAvatar}>
                        </button>
                        <img src={userAvatar} alt="Аватар" className="profile-info__image"/>
                    </div>
                    <div className="profile-info__container">
                        <div className="profile-info__name-box">
                            <h1 className="profile-info__name">{userName}</h1>
                            <button type="button" className="profile-info__customization" onClick={props.onEditProfile}></button>
                        </div>
                        <p className="profile-info__job">{userInfo}</p>
                    </div>
                </div>
                <button type="button" className="profile__button" onClick={props.onAddPlace}></button>
            </section>
            <section className="elements">
                <ul className="cards">
                    {cards.forEach((item) => {
                        <Card
                            props={item} 
                            key={item._id} 
                            onCardClick={props.onCardClick}
                        />
                    }
                )}
                </ul>
            </section>
        </main>
  );
}

export default Main;
