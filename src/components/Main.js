import api  from '../utils/Api.js';
import React from 'react';
// import { useEffect } from 'react';
import Card from './Card.js';
function Main(props) {

  // Стейт, в котором содержится значение 
  const [userName, setuserName] = React.useState('');
  const [userDescription, setuserDescription] = React.useState('');
  const [userAvatar, setuserAvatar] = React.useState('');

  // Стейт, в котором содержится значение 
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
    .then((userData) => {
      setuserName(userData.name)
      setuserDescription(userData.about)
      setuserAvatar(userData.avatar)
    })
    .catch((err) => (console.log('ERROR')))
    // .then(userData => {
    //   const userInfo = userData.results.map(item => {
    //     return {
    //       id: item._id,
    //       name: item.name,
    //       about: item.about,
    //       avatar: item.avatar,
    //     }
    //   })
    api.getCards()
    .then((cardsList) => {
    setCards( cardsList.map((card) => ({
      name: card.name, 
      likes: card.likes, 
      link: card.link, 
      id: card._id})))
    })
    .catch((err) => (console.log('ERROR: cards')))


    ////////////////////////
// api.getCards(cards)
// .then(data => {
//   const cards = data.res.map(item => {
//     return {
//       id:item._id,
//       link: item.link,
//       name: item.name,
//       likes: item.likes
//     }
//   })
//   setCards(cards)
// })




////////////////////////////
      // api.getCards()
      // .then((cards) => {
      // setCards(cards.name, cards.likes, cards.link, cards._id)
      // })
      // .catch((err) => (console.log('ERROR: cards')))
    
// console.log('cards', cards)
    }, [])


  return (
    <main className="main">
          <section className="profile">
            <div className="profile__block">
              <button className="profile__button-avatar" onClick={props.onEditAvatar} type="button"></button>
              <img
                className="profile__avatar"
                src={userAvatar}
                // style={{ backgroundImage: `url(${userAvatar})` }}
                alt="Фотография пользователя"
              />

              <div className="profile__info">
                <div className="profile__content">
                  <h1 className="profile__name">{userName}</h1>
                  <button className="profile__button" type="button" onClick={props.onEditProfile}></button>
                </div>
                <p className="profile__job">{userDescription}</p>
              </div>
            </div>
            <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
          </section>
          <section className="content">
            {
          cards.map(card =>
            <Card 
            card={card}
            key={card.id}
            link={card.link}
            name={card.name}
            likes={card.likes}
            />
            )
            }

          </section>
        </main>
  )
}
export default Main
