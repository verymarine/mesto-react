import React from "react";
import "../App.css";
import Footer from "./Footer";
import Header from "./Header";
import ImagePopup from "./ImagePopup";
import Main from "./Main";
import PopupAddCard from "./PopupAddCard";
import PopupAvatar from "./PopupAvatar";
import PopupEditProfile from "./PopupEditProfile";

function App() {
  // Стейт, в котором содержится значение попапов
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

  // Стейт, в котором содержится значение выбранной карточки
  const [selectedCard, setselectedCard] = React.useState({
    name: "",
    link: "",
  });

  // Обработчик открытия попапа Аватара обновляет стейт
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  // Обработчик открытия попапа Редактирование профиля обновляет стейт
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  // Обработчик открытия попапа Добавить Место обновляет стейт
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  // Обработчик открытия попапа Большой картинки обновляет стейт
  function handleCardClick(card) {
    setselectedCard({name: card.name, link: card.link});
    // setselectedCard(card);
  }

  // Обработчик закрытия попапа обновляет стейт
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setselectedCard({ name: "", link: "" });
  }

  return (
    <div>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupAvatar isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
      <PopupEditProfile
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />
      <PopupAddCard isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
