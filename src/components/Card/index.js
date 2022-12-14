const Card = ({ image, name, price, installment, installmentValue, onBuy }) => {
  return (
    <div className="card">
      <div className="card-media">
        <img id="card-image" src={image} alt={name} />
      </div>
      <div className="card-content">
        <div className="card-product">
          <span className="card-product-title">{name}</span>
        </div>
        <div className="card-prices">
          <span id="card-price-amount">R$ {price}</span>
          <br />
          <span id="card-price-installment">
            até {installment}x de R$ {installmentValue}
          </span>
        </div>
        <div className="card-button">
          <button id="card-button-buy" onClick={onBuy}>
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
