import React from "react";
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import 'bootstrap/dist/css/bootstrap.min.css';
import Cartwidget from "../Cartwidget/Cartwidget";
import { Link } from "react-router-dom";
import styles from '../../CSS/navBar.module.css';
import Button from "react-bootstrap/esm/Button";
import { useCartContext } from "../Context/CartContext";


const NavBar = () => {

  const { cartQuantity } = useCartContext()

    return (

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container className={styles.alingItems}>
          <Link className={styles.navBar} to='/'>
          <Button variant="outline-light">DrumOffice</Button>
          </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">

      <Link className={styles.navBar} to='/category/baterias'><Button variant="outline-warning">Baterias</Button></Link>
      <Link className={styles.navBar} to='/category/redoblantes'><Button variant="outline-warning">Redoblantes</Button></Link>
      <Link className={styles.navBar} to='/category/baquetas'><Button variant="outline-warning">Baquetas</Button></Link>
      <Link className={styles.navBar} to='/category/platillos'><Button variant="outline-warning">Platillos</Button></Link>
      </Nav>
    <Link className={styles.cartQuantity} to='/cart'>
    {cartQuantity() !== 0 && cartQuantity()}
      <Cartwidget />
    </Link>

  </Navbar.Collapse>
  </Container>
</Navbar>
    
    );

}

export default NavBar;