import { useState } from 'react';
import MenuList from './components/MenuList';
import { menuItems } from './data/menu';

function App() {
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  function handleToggleFavorite(id) {
    setFavoriteIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((favoriteId) => favoriteId !== id);
      }

      return [...prev, id];
    });
  }

  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">

      {/* HEADER */}
      <header className="header">
        <div className="header__container">
          <div className="logo">
            <span className="logo__icon">🍜</span>

            <div>
              <strong>Ẩm Thực Huế</strong>
              <small>Hương vị Cố Đô</small>
            </div>
          </div>

          <nav className="nav">
            <a href="#home">Trang chủ</a>
            <a href="#menu">Thực đơn</a>
            <a href="#about">Về Huế</a>
          </nav>

          <div className="favorite-counter">
            ❤️ {favoriteIds.length}
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero__overlay"></div>

        <div className="hero__content">
          <span className="hero__tag">
            ✦ TINH HOA ẨM THỰC CỐ ĐÔ ✦
          </span>

          <h1>
            Hương vị Huế
            <br />
            <span>đậm đà khó quên</span>
          </h1>

          <p>
            Khám phá những món ăn truyền thống mang đậm
            nét văn hóa và tinh hoa của vùng đất Cố đô.
          </p>

          <a href="#menu" className="hero__button">
            Khám phá thực đơn
            <span>→</span>
          </a>
        </div>
      </section>

      {/* MENU */}
      <main className="main" id="menu">

        <div className="section-heading">
          <div>
            <span className="section-heading__subtitle">
              KHÁM PHÁ HƯƠNG VỊ
            </span>

            <h2>
              Thực đơn đặc sản
              <span> Huế</span>
            </h2>
          </div>

          <p>
            Những món ăn được yêu thích nhất
            của ẩm thực Cố đô.
          </p>
        </div>

        {/* SEARCH */}
        <div className="toolbar">
          <div className="search-box">
            <span>🔍</span>

            <input
              type="text"
              placeholder="Tìm món ăn..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="menu-count">
            <span>🍽️</span>
            {filteredItems.length} món ăn
          </div>
        </div>

        {/* MENU LIST */}
        {filteredItems.length > 0 ? (
          <MenuList
            items={filteredItems}
            onToggleFavorite={handleToggleFavorite}
          />
        ) : (
          <div className="empty-state">
            <span>🍜</span>
            <h3>Không tìm thấy món ăn</h3>
            <p>
              Hãy thử tìm kiếm với tên món khác.
            </p>
          </div>
        )}

      </main>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="about__content">
          <span>VỀ ẨM THỰC HUẾ</span>

          <h2>
            Một chút Huế
            <br />
            trong từng món ăn
          </h2>

          <p>
            Ẩm thực Huế nổi tiếng bởi sự tinh tế,
            cầu kỳ và đậm đà bản sắc văn hóa.
            Mỗi món ăn là một câu chuyện về vùng
            đất, con người và lịch sử của Cố đô.
          </p>

          <div className="about__stats">
            <div>
              <strong>5+</strong>
              <span>Món đặc sản</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>Hương vị Huế</span>
            </div>

            <div>
              <strong>♥</strong>
              <span>Yêu thích</span>
            </div>
          </div>
        </div>

        <div className="about__decoration">
          🏯
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div>
          <strong>🍜 Ẩm Thực Huế</strong>
          <p>Hương vị Cố đô - Tinh hoa Việt Nam</p>
        </div>

        <p>
          © 2026 Hue Cuisine. Made with ❤️
        </p>
      </footer>

    </div>
  );
}

export default App;