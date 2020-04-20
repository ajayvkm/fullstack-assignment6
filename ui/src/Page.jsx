import React from 'react';
import {NavLink} from 'react-router-dom';
import {Glyphicon, MenuItem, Nav, Navbar, NavDropdown, NavItem, OverlayTrigger, Tooltip, Grid,} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

import Contents from './Contents.jsx';

function NavBar() {
    return (
        <Navbar fluid>
            <Navbar.Header>
                <Navbar.Brand>Inventory System</Navbar.Brand>
            </Navbar.Header>

            <Nav>
                <LinkContainer exact to="/"><NavItem>Home</NavItem></LinkContainer>
                <LinkContainer to="/products"><NavItem>Product List</NavItem></LinkContainer>
                <LinkContainer to="/report"><NavItem>Report</NavItem></LinkContainer>
            </Nav>

            <Nav pullRight>
                <NavItem>
                    <OverlayTrigger
                        placement="left"
                        delayShow={1000}
                        overlay={<Tooltip id="create-issue">Create Issue</Tooltip>}
                    >
                        <Glyphicon glyph="plus"/>
                    </OverlayTrigger>
                </NavItem>
                <NavDropdown
                    id="user-dropdown"
                    title={<Glyphicon glyph="option-vertical"/>}
                    noCaret
                >
                    <MenuItem>About</MenuItem>
                </NavDropdown>

            </Nav>

        </Navbar>
    );
}

function Footer() {
    return (
        <small>
            <p className="text-center">
                Copyright @Ajay
            </p>
        </small>
    );
}

export default function Page() {
    return (
        <div>
            <NavBar/>
            <Grid fluid>
                <Contents/>
            </Grid>
            <Footer/>
        </div>
    );
}