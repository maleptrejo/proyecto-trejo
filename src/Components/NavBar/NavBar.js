import React from 'react';
import Nav from 'react-bootstrap/Nav';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = ()=> {

    return (
        <Nav className="justify-content-between align-items-center font-quicksand" activeKey="/home">
            <div>
                <div className="d-flex flex-row logo-container">
                    <img src="../Images/Chez_Didi_transparent.png"/>
                    <h1>Chez Didi | Masa madre & cia. </h1>
                </div>
            </div>
            <div className="d-flex justify-content-end flex-row">
                <Nav.Item>
                  <Nav.Link href="/home">Edibles</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1">Insumos</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">Recetas</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="disabled" disabled>
                    Fans friendly!
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="d-flex align-items-center">
                  <Nav.Link>
                    <CartWidget/>
                  </Nav.Link>
                </Nav.Item>
            </div>
        </Nav>
    )
}

export default NavBar;