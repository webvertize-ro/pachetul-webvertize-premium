import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";
import styled from "styled-components";
import { useContent } from "../hooks/useContent";
import { c } from "../utils/content";

const StyledDropdown = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 0.5rem;
  }
  text-decoration: none;

  @media (min-width: 992px) {
    &:hover {
      background-color: transparent;
    }
  }
`;

const StyledButton = styled.div`
  border: none;
  height: 100%;
  background-color: transparent;
  text-decoration: none !important;
  position: relative;
  padding: 0 1rem;
  font-family: "Montserrat";
  font-weight: 400;
  color: rgba(168, 212, 245, 0.75);
  letter-spacing: 0.04em;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    color: #fff;
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

  &:hover::after {
    width: calc(100% - 2rem);
  }
`;

const DropdownItems = styled.ul`
  position: static;
  top: 100%;
  color: #fff;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  border-radius: 0.75rem;
  margin-top: 0.5rem;
  background-color: rgba(15, 47, 90, 0.96);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 0.5px solid rgba(168, 212, 245, 0.15);
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
  color: rgba(168, 212, 245, 0.75);
  display: flex;
  text-decoration: none;
  padding: 0.6rem 1rem;

  @media (max-width: 992px) {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 992px) {
    &:hover {
      background-color: transparent;
      color: #fff;
    }
  }

  &.active {
    background-color: transparent;
    color: #fff;
  }
`;

function Dropdown() {
  const [open, setOpen] = useState(false);
  const { contentMap } = useContent();

  // Close the dropdown when clicking outside
  const myRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (myRef.current && !myRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
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
        {c(contentMap, "global.navbar_dropdown_label")}
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
              <StyledNavLink
                to={c(contentMap, "global.navbar_dropdown_link_1_route")}
                onClick={() => setOpen(false)}
              >
                {c(contentMap, "global.navbar_dropdown_link_1_text")}
              </StyledNavLink>
            </StyledLi>
            <StyledLi>
              <StyledNavLink
                to={c(contentMap, "global.navbar_dropdown_link_2_route")}
                onClick={() => setOpen(false)}
              >
                {c(contentMap, "global.navbar_dropdown_link_2_text")}
              </StyledNavLink>
            </StyledLi>
            <StyledLi>
              <StyledNavLink
                to={c(contentMap, "global.navbar_dropdown_link_3_route")}
                onClick={() => setOpen(false)}
              >
                {c(contentMap, "global.navbar_dropdown_link_3_text")}
              </StyledNavLink>
            </StyledLi>
          </DropdownItems>
        </DropdownItemsContainer>
      )}
    </StyledDropdown>
  );
}

export default Dropdown;
