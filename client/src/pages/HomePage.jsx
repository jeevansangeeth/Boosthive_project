import React, { useState } from "react";
import HomeDecor from "../assets/images/HomeDecor.jpg";
import Dress from "../assets/images/Dress.jpg";
import Restaurent from "../assets/images/resturent.jpg";
import styled from "styled-components";

const HomePage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <StyledHomepage>
      <Navbar>
        <LogoContainer>
          <Logo src={HomeDecor} alt="Logo" />
          <Heading>BoostHive</Heading>
        </LogoContainer>
        <NavList>
          <NavItem>
            <SearchBarContainer>
              <input type="text" placeholder="Search..." />
              <button type="submit">Search</button>
            </SearchBarContainer>
          </NavItem>
          <NavItem>
            <Dropdown>
              <DropdownToggle onClick={toggleDropdown}>Location</DropdownToggle>
              {dropdownOpen && (
                <DropdownMenu>
                  <DropdownItem>Trichy</DropdownItem>
                  <DropdownItem>Chennai</DropdownItem>
                  <DropdownItem>Coimbatore</DropdownItem>
                  {/* Add more locations here */}
                </DropdownMenu>
              )}
            </Dropdown>
          </NavItem>
          <NavItem>
            <NavLink href="#about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#contact">Contact</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#logout">Logout</NavLink>
          </NavItem>
        </NavList>
      </Navbar>
      {/* <!-- Carousel --> */}
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
        {/* <!-- Indicators/dots --> */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="2"
          ></button>
        </div>

        {/* <!-- The slideshow/carousel --> */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={HomeDecor}
              alt="Los Angeles"
              className="d-block"
              style={{ width: "100%" }}
            />
            <div className="carousel-caption">
              <h3>Los Angeles</h3>
              <p>We had such a great time in LA!</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={Dress}
              alt="Chicago"
              className="d-block"
              style={{ width: "100%" }}
            />
            <div className="carousel-caption">
              <h3>Chicago</h3>
              <p>Thank you, Chicago!</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={Restaurent}
              alt="New York"
              className="d-block"
              style={{ width: "100%" }}
            />
            <div className="carousel-caption">
              <h3>New York</h3>
              <p>We love the Big Apple!</p>
            </div>
          </div>
        </div>

        {/* <!-- Left and right controls/icons --> */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
      <Footer>
        <FooterContent>
          <FooterSection>
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              cursus est nec suscipit commodo.
            </p>
          </FooterSection>
          <FooterSection>
            <h3>Useful Links</h3>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </FooterSection>
          <FooterSection>
            <h3>Contact Us</h3>
            <p>Email: example@example.com</p>
            <p>Phone: +1234567890</p>
          </FooterSection>
        </FooterContent>
      </Footer>
    </StyledHomepage>
  );
};

const StyledHomepage = styled.div`
  font-family: Arial, sans-serif;
`;

const Navbar = styled.nav`
  background-color: #ddd0e4;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap; /* Allow items to wrap to next line */
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0; /* Prevent logo from shrinking */
`;

const Logo = styled.img`
  max-width: 100px;
`;

const Heading = styled.h1`
  margin-left: 10px;
  font-size: 24px;
`;

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap to next line */
`;

const NavItem = styled.li`
  margin-right: 10px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: white;
  padding: 10px;
  &:hover {
    background-color: #aaa;
  }
`;

const SearchBarContainer = styled.div`
  margin-right: 10px;
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownToggle = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const DropdownMenu = styled.div`
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropdownItem = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: #ddd;
  }
`;
const Footer = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px 0;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterSection = styled.div`
  flex: 1;
`;
export default HomePage;
