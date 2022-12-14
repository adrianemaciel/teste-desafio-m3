import getImages from "../../utils/getImages";

const Header = () => {
  return (
    <header className="header">
      <div className="page">
        <div className="header-container">
          <img id="logo" src={getImages("logo_m3")} alt="logo-m3" />
          <img id="padlock-icon" src={getImages("padlock")} alt="carrinho" />
        </div>
      </div>
    </header>
  );
};

export default Header;