import { Layout, Row, Typography } from 'antd';
import './NavBar.css';
import { icons } from '../../../resources';
const { Header } = Layout;
import React from 'react';

const NavBar: React.FC = () => {
  return (
    <>
      <Header className="menu">

        <Row className="container-logo">
          <img src={icons.agroInc} />
          <label className="logo">AGROINC</label>
        </Row>

        <ul className="menu-items">
          <li className="active">
            <a style={{ color: '#beb31e' }} href="#">
              Inicio
            </a>
          </li>

          <li>
            <a href="#">Nosotros</a>
          </li>

          <li>
            <a href="#" className="tienda">
              Tienda
              <img src={icons.downArrow} />
            </a>
          </li>

          <li>
            <a href="#">Contactos</a>
          </li>
        </ul>

        <Row className="container-login">
          <Typography className="iniciar-sesion">Iniciar Sesión</Typography>
          <Typography className="register">Registrarse</Typography>
          <img className="icon-navBar" src={icons.search} />
          <img className="icon-navBar" src={icons.shopCart} />
        </Row>
      </Header>
    </>
  );
};

export default NavBar;
