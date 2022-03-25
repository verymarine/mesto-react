import PopupWithForm from "./PopupWithForm";

function PopupEditProfile(props) {
  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      isOpen={props.isOpen}
      onClose={props.onClose}
      textButton="Сохранить"
    >
      <fieldset className="popup__set">
        <label className="popup__field">
          <input
            className="popup__input popup__input_type_name"
            placeholder="Имя"
            type="text"
            name="name"
            id="name-data"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="popup__input-error" id="name-data-error"></span>
        </label>
        <label className="popup__field">
          <input
            className="popup__input popup__input_type_job"
            placeholder="О себе"
            type="text"
            name="about"
            id="job-data"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="popup__input-error" id="job-data-error"></span>
        </label>
        {/* <button class="popup__button" type="submit">Сохранить</button> */}
      </fieldset>
    </PopupWithForm>
  );
}
export default PopupEditProfile;
