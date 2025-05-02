import { Link } from "react-router-dom";
import { Nav, Dropdown, Navbar } from "react-bootstrap";
import { Imagesdata } from "../../commondata/commonimages";
const SideMenuIcon = () => {
  //leftsidemenu
  document.querySelector(".app")?.classList.toggle("sidenav-toggled");
};
// Darkmode
const DarkMode = () => {
  if (document.querySelector("body")?.classList.contains("dark-mode")) {
    document.querySelector("body")?.classList.remove("dark-mode");

    const myonoffswitch2 = document.querySelector(
      "#myonoffswitch1"
    ) as HTMLInputElement;
    myonoffswitch2.checked = true;
    const myonoffswitch5 = document.querySelector(
      "#myonoffswitch3"
    ) as HTMLInputElement;
    myonoffswitch5.checked = true;
    const myonoffswitch8 = document.querySelector(
      "#myonoffswitch6"
    ) as HTMLInputElement;
    myonoffswitch8.checked = true;
  } else {
    document.querySelector("body")?.classList.add("dark-mode");
    const myonoffswitch2 = document.querySelector(
      "#myonoffswitch2"
    ) as HTMLInputElement;
    myonoffswitch2.checked = true;
    const myonoffswitch5 = document.querySelector(
      "#myonoffswitch5"
    ) as HTMLInputElement;
    myonoffswitch5.checked = true;
    const myonoffswitch8 = document.querySelector(
      "#myonoffswitch8"
    ) as HTMLInputElement;
    myonoffswitch8.checked = true;
  }
};
// FullScreen
const elem: any = document.documentElement;
let i = true;
const Fullscreen = (vale: any) => {
  switch (vale) {
    case true:
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        /* IE11 */
        elem.msRequestFullscreen();
      }
      i = false;
      break;
    case false:
      document.exitFullscreen();
      i = true;
      break;
  }
};

const Header = () => {
  document.querySelector(".main-content")?.addEventListener("click", () => {
    console.log("search-result");
    document.querySelector(".search-result")?.classList.add("d-none");
  });

  return (
    <div className="">
      <div className="header sticky app-header header1">
        <div className="container-fluid main-container">
          <div className="d-flex">
            <Link
              aria-label="Hide Sidebar"
              className="app-sidebar__toggle"
              data-bs-toggle="sidebar"
              to="#"
              onClick={() => SideMenuIcon()}
            />
            <Link
              className="logo-horizontal "
              to={`${import.meta.env.BASE_URL}Dashboard`}
            >
              <img
                src={Imagesdata("logo")}
                className="header-brand-img desktop-logo"
                alt="logo"
              />
              <img
                src={Imagesdata("logo1")}
                className="header-brand-img light-logo1"
                alt="logo"
              />
            </Link>

            <Navbar className="d-flex order-lg-2 ms-auto header-right-icons">
              <Navbar.Toggle className="d-lg-none ms-auto header2">
                <span className="navbar-toggler-icon fe fe-more-vertical"></span>
              </Navbar.Toggle>

              <div className="responsive-navbar p-0">
                <Navbar.Collapse className="" id="navbarSupportedContent-4">
                  <div className="d-flex order-lg-2">
                    {/* Dark Mode */}

                    <div className="dropdown  d-flex">
                      <Nav.Link
                        className="nav-link icon theme-layout nav-link-bg layout-setting"
                        onClick={() => DarkMode()}
                      >
                        <span className="dark-layout">
                          <i className="fe fe-moon"></i>
                        </span>
                        <span className="light-layout">
                          <i className="fe fe-sun"></i>
                        </span>
                      </Nav.Link>
                    </div>

                    {/* FullScreen button */}

                    <div className="dropdown d-flex">
                      <Nav.Link
                        className="nav-link icon full-screen-link nav-link-bg"
                        onClick={() => Fullscreen(i)}
                      >
                        <i className="fe fe-minimize fullscreen-button"></i>
                      </Nav.Link>
                    </div>

                    {/* Profile  */}

                    <Dropdown className="d-flex profile-1">
                      <Dropdown.Toggle
                        variant=""
                        className="nav-link leading-none d-flex no-caret"
                      >
                        <img
                          src={Imagesdata("users21")}
                          alt="profile-user"
                          className="avatar  profile-user brround cover-image"
                        />
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu-end dropdown-menu-arrow">
                        <div className="drop-heading">
                          <div className="text-center">
                            <h5 className="text-dark mb-0 fs-14 fw-semibold">
                              Percy Kewshun
                            </h5>
                            <small className="text-muted">Senior Admin</small>
                          </div>
                        </div>
                        <div className="dropdown-divider m-0"></div>
                        <Link
                          className="dropdown-item"
                          to={`${import.meta.env.BASE_URL}Pages/profile`}
                        >
                          <i className="dropdown-icon fe fe-user"></i> Profile
                        </Link>
                        <Link
                          className="dropdown-item"
                          to={`${import.meta.env.BASE_URL}Pages/mailinbox/`}
                        >
                          <i className="dropdown-icon fe fe-mail"></i> Inbox
                          <span className="badge bg-danger rounded-pill float-end">
                            5
                          </span>
                        </Link>
                        <Link
                          className="dropdown-item"
                          to={`${
                            import.meta.env.BASE_URL
                          }Authentication/lockscreen/`}
                        >
                          <i className="dropdown-icon fe fe-lock"></i>{" "}
                          Lockscreen
                        </Link>
                        <Dropdown.Item className="dropdown-item">
                          <i className="dropdown-icon fe fe-alert-circle"></i>{" "}
                          Sign out
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </Navbar.Collapse>
              </div>
            </Navbar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
