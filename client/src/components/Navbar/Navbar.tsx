import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState<boolean>(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar__logo" onClick={closeMobileMenu}>
            ALPHA
            <i className="fab fa-typo3" />
          </Link>
          <div className="menu__icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'menu active' : 'menu'}>
            <li className="menu__item">
              <Link to="/" className="menu__links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="menu__item">
              <Link
                to="/latest"
                className="menu__links"
                onClick={closeMobileMenu}
              >
                Latest
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
