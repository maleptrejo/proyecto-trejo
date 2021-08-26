import React from 'react';
import Nav from 'react-bootstrap/Nav';
import CartWidget from '../CartWidget/CartWidget';
import Dropdown from 'react-bootstrap/DropdownButton';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const NavBar = ()=> {



    return (
        <Nav className="justify-content-between align-items-center font-quicksand" activeKey="/home">
            <div>
            <Nav.Link href="/home"><Link to="/"> <div className="d-flex flex-row logo-container">
                    <img src="../Images/Chez_Didi_transparent.png"/>
                    <h1>Chez Didi | Masa madre & cia. </h1>
                </div></Link></Nav.Link>
                
            </div>
            <div className="d-flex justify-content-end flex-row">
                

                {/* <NavDropdown title="Edibles" id="nav-dropdown">
                        <NavDropdown.Item eventKey="4.1"><Link to={`category/1`}> </Link></NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.2"><Link to={`category/2`}> </Link></NavDropdown.Item>
                        
                </NavDropdown> */}

                <Nav.Item>
                  <Nav.Link href="/home"><Link to="/category/1"> Edibles</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1"><Link to="/category/2"> Insumos</Link></Nav.Link>
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