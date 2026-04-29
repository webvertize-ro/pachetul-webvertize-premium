import {
  faArrowUp,
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router';
import styled from 'styled-components';

const StyledDropdown = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 0.5rem;
  }
  /* width: 150px; */

  text-decoration: none;
  /* &:hover {
    background-color: #2c5870;
    color: #fff;
  }

  &.active {
    background-color: #e9e0d8;
    color: #fff !important;
  } */

  @media (min-width: 992px) {
    &:hover {
      background-color: #2c5870;
    }
  }
`;

const StyledButton = styled.div`
  border: none;
  height: 100%;
  background-color: transparent;
  text-decoration: none !important;
  position: relative;
  font-family: 'Montserrat';
  font-weight: 600;
  color: #fff;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const DropdownItems = styled.ul`
  position: static;
  top: 100%;
  color: #fff;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  font-weight: 600;
  /* border: 3px solid #1b3c53; */
  border-radius: 0.25rem;
  background-color: rgba(31, 55, 69, 0.85);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const DropdownItemsContainer = styled.div`
  position: absolute;
  top: 100%;
  width: 150px;

  @media (max-width: 992px) {
    position: static;
    width: 100%;
  }
`;

const StyledLi = styled.li``;

const StyledNavLink = styled(NavLink)`
  color: #fff;
  display: flex;
  text-decoration: none;
  padding: 0.75rem;

  @media (max-width: 992px) {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 992px) {
    &:hover {
      background-color: #2c5870;
      color: #fff;
    }
  }

  &.active {
    background-color: #2c5870;
    color: #fff;
  }
`;

function Dropdown() {
  const [open, setOpen] = useState(false);

  // Close the dropdown when clicking outside
  const myRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (myRef.current && !myRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener('click', handleClickOutside);

    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <StyledDropdown ref={myRef}>
      <StyledButton
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          return setOpen((t) => !t);
        }}
      >
        Despre Noi
        {open ? (
          <FontAwesomeIcon icon={faChevronUp} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} />
        )}
      </StyledButton>
      {open && (
        <DropdownItemsContainer>
          <DropdownItems>
            <StyledLi>
              <StyledNavLink to="/about-us" onClick={() => setOpen(false)}>
                Despre Noi
              </StyledNavLink>
            </StyledLi>
            <StyledLi>
              <StyledNavLink to="/testimonials" onClick={() => setOpen(false)}>
                Testimoniale
              </StyledNavLink>
            </StyledLi>
            <StyledLi>
              <StyledNavLink
                to="/blog"
                onClick={() => setOpen(false)}
              >
                Blog/Noutăți
              </StyledNavLink>
            </StyledLi>
          </DropdownItems>
        </DropdownItemsContainer>
      )}
    </StyledDropdown>
  );
}

export default Dropdown;
