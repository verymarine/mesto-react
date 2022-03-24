import React from "react"
import "../App.css";
import Footer from "./Footer";
import Header from "./Header";
import ImagePopup from "./ImagePopup";
import Main from "./Main";
import PopupAddCard from "./PopupAddCard";
import PopupAvatar from "./PopupAvatar";
import PopupEditProfile from "./PopupEditProfile";





function App() {

   
// Стейт, в котором содержится значение 
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  // Стейт, в котором содержится значение 
  const [selectedCard, setselectedCard] = React.useState({name: '', link: ''});

   // Обработчик изменения инпута обновляет стейт
    function handleEditAvatarClick(){
      setIsEditAvatarPopupOpen(true);
      }
    
       // Обработчик изменения инпута обновляет стейт
    function handleEditProfileClick(){
        setIsEditProfilePopupOpen(true);
      }
    
       // Обработчик изменения инпута обновляет стейт
    function handleAddPlaceClick(){
        setIsAddPlacePopupOpen(true);
      }

       // Обработчик изменения инпута обновляет стейт
      // function handleCardClick(){
      //   setselectedCard(card);
      // }

       // Обработчик изменения инпута обновляет стейт
      function closeAllPopups(){
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setselectedCard({name: '', link: ''});

      }

  return (
    <div>
      <body className="page">
        <Header/>
        <Main
          onEditProfile={handleEditProfileClick} 
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          // onCardClick={handleCardClick}
          // onClose={closeAllPopups}
        />
        <Footer/>
        <PopupAvatar isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        />
        <PopupEditProfile isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        />
        <PopupAddCard isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        />
        <ImagePopup 
        card={selectedCard}
        onClose={closeAllPopups}
        />
        <template className="template">
          <article className="content__grid">
            <img className="content__image" />
            <div className="content__info">
              <h2 className="content__title">Карачаевск</h2>
              <div className="like__area">
                <button className="content__like" type="button"></button>
                <p className="content__like-counter">0</p>
              </div>
              <button className="content__trashcan" type="button"></button>
            </div>
          </article>
        </template>
      </body>
    </div>
  );
}

export default App;
