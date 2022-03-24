import PopupWithForm from "./PopupWithForm";

function PopupAddCard(props){

  return(
    <PopupWithForm
    name="add"
    title="Новое место"
    isOpen={props.isOpen}
    onClose={props.onClose}
    textButton="Создать"
    >
                    <fieldset className="popup__set">
                <label className="popup__field">
                  <input
                    className="popup__input popup__input_type_place"
                    placeholder="Название"
                    type="text"
                    name="name"
                    id="place-data"
                    minlength="2"
                    maxlength="30"
                    required
                  />
                  <span className="popup__input-error" id="place-data-error"></span>
                </label>
                <label className="popup__field">
                  <input
                    className="popup__input popup__input_type_link"
                    placeholder="Ссылка на картинку"
                    type="url"
                    name="link"
                    id="url-data"
                    required
                  />
                  <span className="popup__input-error" id="url-data-error"></span>
                </label>
                {/* <button class="popup__button" type="submit">Создать</button> */}
              </fieldset>
    </PopupWithForm>
  )
}
export default PopupAddCard