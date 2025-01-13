import data from "../../data/data.json";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="container-fluid navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} width="130" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {data?.menuItems?.map((item, index) => (
              <li key={index} className="nav-item dropdown">
                <Link
                  className={
                    item?.submenu ? "nav-link dropdown-toggle" : "nav-link"
                  }
                  to={item.link}
                  role="button"
                  data-bs-toggle={item?.submenu ? "dropdown" : null}
                  aria-expanded="false"
                >
                  {item.name}
                </Link>

                <ul className="dropdown-menu">
                  {item.submenu?.map((submenuItem, index) => (
                    <li key={index}>
                      <Link className="dropdown-item" to={submenuItem.link}>
                        {submenuItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <button className="btn btn-primary" type="button">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
