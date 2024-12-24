import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Menu from "../components/img/menu.png";



function NavSideBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navLinks = {
    Home: "/",
    Info: "/info",
    Contact: "/contact",
    Tutorial: "/tutorial",
    Help: "/help",
    Settings: "/settings",
  };
  return (
    <>
      <Button
        onClick={handleShow}
        className="rounded-0"
      >
        <img src={Menu} width={40}  alt="menu" />
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>GeldManagmentApp</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column">
          {Object.keys(navLinks).map((key) => (
            <Button className="w-100 bg-primary text-white m-2 text-decoration-none bolder" key={key} href={navLinks[key]} variant="link">
              {key}
            </Button>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default NavSideBar;
