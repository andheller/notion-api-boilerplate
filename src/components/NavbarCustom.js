import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import { useAuth } from "util/auth.js";

function NavbarCustom(props) {
  const auth = useAuth();

  return (
    <Navbar bg={props.bg} variant={props.variant} expand={props.expand}>
      <Container>
        <Navbar.Toggle aria-controls="navbar-nav" className="border-0" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="mr-1">
            <Link href="/" passHref={true}>
              <Nav.Link active={false}>Home</Nav.Link>
            </Link>

            <Link href="/read" passHref={true}>
              <Nav.Link active={false}>Read</Nav.Link>
            </Link>

            <Link href="/write" passHref={true}>
              <Nav.Link active={false}>Write</Nav.Link>
            </Link>

            <Nav.Link
              href="https://github.com/andheller/notion-api-boilerplate"
              active={false}
            >
              GitHub
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCustom;
