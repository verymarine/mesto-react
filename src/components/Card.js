const Card = (props) => {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <article className="content__grid">
      <img
        className="content__image"
        src={props.link}
        alt={props.name}
        onClick={handleClick}
      />
      <div className="content__info">
        <h2 className="content__title">{props.name}</h2>
        <div className="like__area">
          <button className="content__like" type="button"></button>
          <p className="content__like-counter">{props.likes.length}</p>
        </div>
        <button className="content__trashcan" type="button"></button>
      </div>
    </article>
  );
};

export default Card;
