// src/components/Navbar.js

import { formatCurrency } from '../utils/helpers.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <i className="fas fa-pizza-slice"></i> Home
      </a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          {token ? (
            <>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-unlock"></i> Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-lock"></i> Logout
                </a>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-lock-key"></i> Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-lock-key"></i> Register
                </a>
              </li>
            </>
          )}
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-shopping-cart"></i> Total: ${formatCurrency(total)}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
