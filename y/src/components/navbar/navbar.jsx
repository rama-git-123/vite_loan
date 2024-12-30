import menuData from "../../data/data.json";
import logo from "../../assets/images/logo.webp";
const Navbar = () => {
  return (
    <nav className="container-fluid navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} width="157" height="44" />
        </a>

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
            {menuData?.menuItems?.map((item, index) => (
              <li key={index} className="nav-item dropdown">
                <a
                  className={
                    item?.submenu ? "nav-link dropdown-toggle" : "nav-link"
                  }
                  href="#"
                  role="button"
                  data-bs-toggle={item?.submenu ? "dropdown" : null}
                  aria-expanded="false"
                >
                  {item.name}
                </a>

                <ul className="dropdown-menu">
                  {item.submenu?.map((submenuItem, index) => (
                    <li key={index}>
                      <a className="dropdown-item" href="#">
                        {submenuItem.name}
                      </a>
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
