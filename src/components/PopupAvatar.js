import PopupWithForm from "./PopupWithForm";

function PopupAvatar(props) {
  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={props.isOpen}
      onClose={props.onClose}
      textButton="Сохранить"
    >
      <fieldset className="popup__set">
        <label className="popup__field">
          <input
            className="popup__input popup__input_type_avatar"
            placeholder="Ссылка на аватар"
            type="url"
            name="avatar"
            id="avatar-data"
            required
          />
          <span className="popup__input-error" id="avatar-data-error"></span>
        </label>
        {/* <button class="popup__button popup__button_type_avatar" type="submit">Сохранить</button> */}
      </fieldset>
    </PopupWithForm>
  );
}
export default PopupAvatar;
