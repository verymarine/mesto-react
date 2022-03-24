function ImagePopup(props){

  return(
    <ImagePopup
    // isOpen={props.isOpen}
    onClose={props.onClose}
    // card={props.selectedCard}
    >
    <div className="popup popup_picture">
    <div className="popup__block">
      <button
        className="popup__close popup__close_type_big-image"
        type="button"
      ></button>
      <img className="popup__image"
      //  src={props.link} 
       />
      <h2 className="popup__capture"></h2>
    </div>
  </div>
    </ImagePopup>

  )
}
export default ImagePopup