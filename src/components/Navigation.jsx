import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';
import Dropdown from './Dropdown';
import { c } from '../utils/content';
import { useContent } from '../hooks/useContent';

const NavigationHeader = styled.header`
  transition: all 0.3s ease-in-out;
  top: 0;
  width: 100%;
  z-index: 100;
  padding: ${({ $isScrolled }) => ($isScrolled ? '0.75rem 3rem' : '0')};
  ${({ $isScrolled }) =>
    $isScrolled
      ? `filter: drop-shadow(0 8px 24px rgba(0, 0, 0, 0.15));`
      : `filter: none`}
  @media (max-width: 576px) {
    padding: ${({ $isScrolled }) => ($isScrolled ? '0.5rem 1.25rem' : '0')};
  }
`;

const StyledNav = styled.nav`
  height: 80px;
  padding: 0;
  z-index: 101;
  font-size: 0.9rem;
  background-color: ${({ $isScrolled }) =>
    $isScrolled ? 'rgba(31, 55, 69, 0.9)' : 'transparent'};
  box-shadow: ${({ $isScrolled }) =>
    $isScrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'unset'};
  backdrop-filter: ${({ $isScrolled }) =>
    $isScrolled ? 'blur(20px)' : 'unset'};
  -webkit-backdrop-filter: ${({ $isScrolled }) =>
    $isScrolled ? 'blur(20px)' : 'unset'};
  border: ${({ $isScrolled }) =>
    $isScrolled ? '1px solid rgba(255, 255, 255, 0.3)' : 'unset'};
  transition: all 0.5s ease-in-out;
  border-radius: 1rem;

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
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  font-family: 'Montserrat';
  font-weight: 600;
  text-transform: uppercase;
  color: #fff;
  &:hover {
    background-color: #2c5870;
    color: #fff;
  }

  &.active {
    background-color: #2c5870;
    color: #fff !important;
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
    gap: 0.25rem;
  }
`;

const StyledAnchor = styled.a`
  color: #000;
  &:hover {
    text-decoration: none;
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 1.2rem;
  background-color: #456882;
  color: #fff;
  padding: 0.25rem;
  border-radius: 0.35rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #1b3c53;
  }
`;

const Burger = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

const BurgerLine = styled.div`
  height: 4px;
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

    window.addEventListener('scroll', handleScroll);

    // Run once on mount
    handleScroll();

    // clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    function closeNavigation(e) {
      if (isNavbarOpen && !navigation.current?.contains(e.target)) {
        setIsNavbarOpen(false);
      }
    }

    if (isNavbarOpen) {
      document.addEventListener('mousedown', closeNavigation);
    }

    return () => {
      document.removeEventListener('mousedown', closeNavigation);
    };
  }, [isNavbarOpen]);

  function handleNavClick(e) {
    const link = e.target.closest('a');
    if (!link) return;
    setIsNavbarOpen(false);
  }

  // Social Links
  const socialLinks = [1, 2, 3, 4]
    .map((n) => {
      const raw = c(contentMap, `navbar_social_${n}`);
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
            className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`}
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
            {socialLinks.map((link) => (
              <StyledAnchor
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noreferrer"
              >
                <StyledFontAwesomeIcon icon={iconMap[link.platform]} />
              </StyledAnchor>
            ))}
          </StyledSocialLinks>
        </StyledNavContainer>
      </StyledNav>
    </NavigationHeader>
  );
}

export default Navigation;
