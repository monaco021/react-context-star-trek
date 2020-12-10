// imports

const Card = ({ imgUrl, content}) => {
  // Need content and imgUrl
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img alt="card face" src={imgUrl} />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">{content}</div>
      </div>
    </div>
  );
};

export default Card;
