const Card = (card) => {
  function handleClick() {
    card.onCardClick(card.card);
  }

  return (
    <article className="content__grid">
      <img
        className="content__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <div className="content__info">
        <h2 className="content__title">{card.name}</h2>
        <div className="like__area">
          <button className="content__like" type="button"></button>
          <p className="content__like-counter">{card.likes.length}</p>
        </div>
        <button className="content__trashcan" type="button"></button>
      </div>
    </article>
  );
};

export default Card;
