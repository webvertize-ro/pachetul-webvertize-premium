import { NavLink } from "react-router";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faPinterest,
  faTiktok,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { c } from "../utils/content";
import { useContent } from "../hooks/useContent";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  padding: 4rem 0;
  background-color: #1a3f72;
  color: #fff;
  border-top: 0.5px solid rgba(168, 212, 245, 0.1);
`;

const StyledH6 = styled.h6`
  font-size: 1rem;
  letter-spacing: 0.02em;
  margin: 0;
`;

const ColumnTitle = styled.h5`
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(168, 212, 245, 0.5);
  margin-bottom: 1.25em;
`;

const FooterLink = styled(NavLink)`
  text-decoration: none;
  color: rgba(168, 212, 245, 0.65);
  font-size: 0.9rem;
  transition: color 0.2s ease;
  display: block;
  margin-bottom: 0.5rem;

  &:hover {
    color: #fff;
  }

  &.active {
    color: #fff;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 1.2rem;
  color: rgba(168, 212, 245, 0.6);
  transition: color 0.25s ease;
  background-color: transparent;
  padding: 0;
  border-radius: 0;

  &:hover {
    color: #fff;
  }
`;

const StyledFooterLink = styled.a`
  text-decoration: none;
`;

const FooterP = styled.p`
  color: rgba(168, 212, 245, 0.65);
  font-size: 0.9rem;
  line-height: 1.65;
`;

const StrongEmail = styled.strong`
  color: #60a5e8;
  font-weight: 400;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #fff;
  }
`;

const Copyright = styled.div`
  display: flex;
  justify-content: center;
  font-size: 0.75rem;
  color: rgba(168, 212, 245, 0.35);
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 0.5px solid rgba(168, 212, 245, 0.1);
`;

function Footer() {
  const { contentMap } = useContent();

  const links = [1, 2, 3, 4, 5].map((link) => ({
    link_text: c(contentMap, `global.footer_link_${link}_text`),
    link_route: c(contentMap, `global.footer_link_${link}_route`),
  }));

  const iconMap = {
    facebook: faFacebook,
    instagram: faInstagram,
    tiktok: faTiktok,
    youtube: faYoutube,
    linkedin: faLinkedin,
  };

  const socialLinks = [1, 2, 3, 4]
    .map((n) => {
      const raw = c(contentMap, `footer_social_${n}`);
      if (!raw) return null;
      try {
        return JSON.parse(raw);
      } catch {
        return null;
      }
    })
    .filter(Boolean);

  return (
    <StyledFooter className="footer py-6">
      <div className="container">
        <div className="row">
          <div className="col-md-4 my-3">
            <div className="d-flex align-items-center gap-1">
              <StyledH6 className="fw-bold">Despre</StyledH6>
              {c(contentMap, "global.brand_name")}
            </div>
            <FooterP>{c(contentMap, "global.footer_description")}</FooterP>
          </div>
          <div className="col-md-4 my-3">
            <ColumnTitle className="fw-bold">
              {c(contentMap, "global.footer_links_title")}
            </ColumnTitle>
            <ul className="list-unstyled">
              {links.map((link) => (
                <li>
                  <FooterLink to={link.link_route}>{link.link_text}</FooterLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-4 my-3">
            <ColumnTitle className="fw-bold">
              {c(contentMap, "global.footer_social_title")}
            </ColumnTitle>
            <div className="mb-4 d-flex gap-2">
              {socialLinks.map((link) => (
                <a key={link.platform} href={link.url} target="_blank">
                  <StyledFontAwesomeIcon icon={iconMap[link.platform]} />
                </a>
              ))}
            </div>
            <FooterP>
              {c(contentMap, "global.footer_paragraph")}
              <StyledFooterLink
                href={`mailto:${c(contentMap, "global.footer_paragraph_link_text")}`}
                aria-label="Click pentru a scrie un email pe adresa afacerii"
              >
                {" "}
                <StrongEmail>
                  {c(contentMap, "global.footer_paragraph_link_text")}
                </StrongEmail>
              </StyledFooterLink>
            </FooterP>
          </div>
        </div>

        {/* Copyright */}
        <Copyright>{c(contentMap, "global.footer_copyright")}</Copyright>
      </div>
    </StyledFooter>
  );
}

export default Footer;
