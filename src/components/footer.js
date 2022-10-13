import React from 'react';
import { Link } from 'react-router-dom';

function footer() {

  return (
    <footer>
      <ul className="footer-links">
        <Link to="/mentions-legales">
          <li>Mentions légales</li>
        </Link>
        <Link to="/cookies">
          <li>Cookies <span>🍪</span></li>
        </Link>
      </ul>
      <div className="copyrights">
        <p>© Pauline Gilg 2022 | Développé avec React ❤️</p>
      </div>
    </footer>
  );
}

export default footer;