import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";
import Dropdown from "./Dropdown";
import { c } from "../utils/content";
import { useContent } from "../hooks/useContent";

const NavigationHeader = styled.header`
  transition: all 0.3s ease-in-out;
  top: 0;
  width: 100%;
  z-index: 100;
  padding: ${({ $isScrolled }) => ($isScrolled ? "0.75rem 1.5rem" : "0")};
  ${({ $isScrolled }) =>
    $isScrolled
      ? `filter: drop-shadow(0 8px 24px rgba(0, 0, 0, 0.15));`
      : `filter: none`}
  @media (max-width: 576px) {
    padding: ${({ $isScrolled }) => ($isScrolled ? "0.5rem 1.25rem" : "0")};
  }
`;

const StyledNav = styled.nav`
  height: 80px;
  padding: 0;
  z-index: 101;
  font-size: 0.9rem;
  background-color: ${({ $isScrolled }) =>
    $isScrolled ? "rgba(15, 47, 90, 0.93)" : "transparent"};
  box-shadow: ${({ $isScrolled }) =>
    $isScrolled ? "0 1px 24px rgba(0, 0, 0, 0.2)" : "unset"};
  backdrop-filter: ${({ $isScrolled }) =>
    $isScrolled ? "blur(20px)" : "unset"};
  -webkit-backdrop-filter: ${({ $isScrolled }) =>
    $isScrolled ? "blur(20px)" : "unset"};
  border: ${({ $isScrolled }) =>
    $isScrolled ? "0.5px solid rgba(168, 212, 245, 0.15)" : "unset"};
  transition: all 0.5s ease-in-out;
  border-radius: 0.75rem;

  @media (max-width: 992px) {
    height: unset;
    padding: 0.5rem;
  }
`;

const StyledNavContainer = styled.div`
  height: 100%;
  @media (max-width: 992px) {
    max-width: unset;
  }
`;

const StyledButton = styled.button`
  color: #fff;
  border-color: #fff;
  padding: 0.5rem;
`;

const StyledNavCollapse = styled.div`
  height: 100%;

  @media (max-width: 576px) {
    margin-right: 0 !important;
  }
`;

const StyledNavUl = styled.ul`
  height: 100%;
  display: flex;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  font-family: "Montserrat";
  font-weight: 400;
  color: rgba(168, 212, 245, 0.75);
  padding: 0 1rem !important;
  letter-spacing: 0.05em;
  font-size: 14px;
  position: relative;

  &:hover {
    background-color: transparent;
    color: #fff;
  }

  &.active {
    background-color: transparent;
    color: #fff !important;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 24px;
    left: 1rem;
    right: 1rem;
    height: 1px;
    background: #60a5e8;
    width: 0;
    transition: width 0.25s ease;
  }

  &:hover::after,
  &.active::after {
    width: calc(100% - 2rem);
  }

  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const StyledSocialLinks = styled.div`
  display: none;

  @media (min-width: 992px) {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-left: 1.5rem;
    padding-left: 1.5rem;
    border-left: 0.5px solid rgba(168, 212, 245, 0.15);
  }
`;

const StyledAnchor = styled.a`
  color: inherit;
  &:hover {
    text-decoration: none;
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 1.2rem;
  color: rgba(168, 212, 245, 0.65);
  background-color: transparent;
  padding: 0rem;
  border-radius: 0;
  transition: color 0.2s ease;

  &:hover {
    color: #fff;
  }
`;

const Burger = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

const BurgerLine = styled.div`
  height: 2px;
  border-radius: 2px;
  width: 25px;
  background-color: #fff;
`;

function Navigation() {
  const { contentMap } = useContent();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigation = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const myBool = window.scrollY > 0;
      setIsScrolled(myBool);
    };

    window.addEventListener("scroll", handleScroll);

    // Run once on mount
    handleScroll();

    // clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    function closeNavigation(e) {
      if (isNavbarOpen && !navigation.current?.contains(e.target)) {
        setIsNavbarOpen(false);
      }
    }

    if (isNavbarOpen) {
      document.addEventListener("mousedown", closeNavigation);
    }

    return () => {
      document.removeEventListener("mousedown", closeNavigation);
    };
  }, [isNavbarOpen]);

  function handleNavClick(e) {
    const link = e.target.closest("a");
    if (!link) return;
    setIsNavbarOpen(false);
  }

  // Social Links
  const socialLinks = [1, 2, 3, 4]
    .map((n) => {
      const raw = c(contentMap, `global.navbar_social_${n}`);
      if (!raw) return null;
      try {
        return JSON.parse(raw);
      } catch {
        return null;
      }
    })
    .filter(Boolean);

  const iconMap = {
    facebook: faFacebook,
    instagram: faInstagram,
    tiktok: faTiktok,
    youtube: faYoutube,
    linkedin: faLinkedin,
  };

  return (
    <NavigationHeader
      $isScrolled={isScrolled}
      onClick={handleNavClick}
      className="sticky-top"
    >
      <StyledNav
        className="navbar navbar-expand-lg sticky-top"
        ref={navigation}
        $isScrolled={isScrolled}
      >
        <StyledNavContainer className="container">
          <Link to="/" className="navbar-brand">
            <Logo />
          </Link>

          <StyledButton
            type="button"
            onClick={() => setIsNavbarOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            className="navbar-toggler"
          >
            <Burger>
              <BurgerLine></BurgerLine>
              <BurgerLine></BurgerLine>
              <BurgerLine></BurgerLine>
            </Burger>
          </StyledButton>
          <StyledNavCollapse
            className={`collapse navbar-collapse ${isNavbarOpen ? "show" : ""}`}
            id="menuLinks"
          >
            <StyledNavUl className="navbar-nav ms-auto">
              <StyledNavLink to="/" className="nav-item nav-link">
                Acasă
              </StyledNavLink>
              {/* Dropdown Button */}

              <Dropdown className="my-dropdown" />

              <StyledNavLink to="/services" className="nav-item nav-link">
                Servicii
              </StyledNavLink>
              <StyledNavLink to="/products" className="nav-item nav-link">
                Produse
              </StyledNavLink>
              <StyledNavLink to="/portfolio" className="nav-item nav-link">
                Portofoliu
              </StyledNavLink>
              <StyledNavLink to="/faq" className="nav-item nav-link">
                Întrebări Frecvente
              </StyledNavLink>
              <StyledNavLink to="/contact" className="nav-item nav-link">
                Contact
              </StyledNavLink>
            </StyledNavUl>
          </StyledNavCollapse>
          <StyledSocialLinks>
            {/* {socialLinks.map((link) => (
              <StyledAnchor
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noreferrer"
              >
                <StyledFontAwesomeIcon icon={iconMap[link.platform]} />
              </StyledAnchor>
            ))} */}
            {/* Temporary: before inserting the website in the database */}
            <StyledAnchor
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              <StyledFontAwesomeIcon icon={faFacebook} />
            </StyledAnchor>
            <StyledAnchor
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <StyledFontAwesomeIcon icon={faInstagram} />
            </StyledAnchor>
          </StyledSocialLinks>
        </StyledNavContainer>
      </StyledNav>
    </NavigationHeader>
  );
}

export default Navigation;
