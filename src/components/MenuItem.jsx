import { useState } from 'react';

function MenuItem({
  id,
  name,
  price,
  description,
  isSpicy,
  image,
  onToggleFavorite,
}) {
  const [isFavorite, setIsFavorite] = useState(false);

  function handleToggleFavorite() {
    setIsFavorite((prev) => !prev);
    onToggleFavorite(id);
  }

  return (
    <article className="menu-card">
      {/* Hình ảnh */}
      <div className="menu-card__image-wrapper">
        <img
          src={image}
          alt={name}
          className="menu-card__image"
        />

        {isSpicy && (
          <span className="menu-card__spicy">
            🌶️ Món cay
          </span>
        )}

        <button
          className={`favorite-button ${
            isFavorite ? 'is-favorite' : ''
          }`}
          onClick={handleToggleFavorite}
          aria-label="Yêu thích món ăn"
        >
          {isFavorite ? '♥' : '♡'}
        </button>
      </div>

      {/* Nội dung */}
      <div className="menu-card__content">
        <div className="menu-card__category">
          ĐẶC SẢN HUẾ
        </div>

        <h2>{name}</h2>

        <p className="menu-card__description">
          {description}
        </p>

        <div className="menu-card__bottom">
          <strong className="menu-card__price">
            {price.toLocaleString('vi-VN')}đ
          </strong>

          <button
            className={`favorite-text ${
              isFavorite ? 'is-favorite' : ''
            }`}
            onClick={handleToggleFavorite}
          >
            {isFavorite ? '♥ Đã thích' : '♡ Yêu thích'}
          </button>
        </div>
      </div>
    </article>
  );
}

export default MenuItem;