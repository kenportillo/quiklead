import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div` 
    .navbar{
        background-color: #F7EBEB
    }

    .navbar-brand, .navbar-nav, .nav-link{
        color: #bbb;

        &:hover {
            color: white;
        }
    }
`;


export default function NavBar(){
    return(
    <Styles>
        <Navbar expand='lg' fixed="top">
            <Navbar.Brand href="/"> QuikLead</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='ml-auto'>
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
    )
}