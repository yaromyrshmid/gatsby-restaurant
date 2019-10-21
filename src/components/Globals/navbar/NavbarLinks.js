import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { styles } from "../../../utils"

const NavbarLinks = ({ navbarOpen }) => {
  const [links, setLinks] = useState([
    {
      id: 0,
      path: "/",
      name: "home",
    },
    {
      id: 1,
      path: "/about",
      name: "about",
    },
    {
      id: 2,
      path: "/menu",
      name: "menu",
    },
    {
      id: 3,
      path: "/contact",
      name: "contact",
    },
  ])
  return (
    <LinkWrapper open={navbarOpen}>
      {links.map(link => {
        return (
          <li key={link.id}>
            <Link to={link.path} className="nav-link">
              {link.name}
            </Link>
          </li>
        )
      })}
    </LinkWrapper>
  )
}

const LinkWrapper = styled.ul`
  li {
    list-style: none;
  }

  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem;
    color: ${styles.colors.mainGrey};
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
    ${styles.transDefault};
    &:hover {
      background: ${styles.colors.mainGrey};
      color: ${styles.colors.mainYellow};
      padding: 0.5rem 1rem 0.5rem 1.3rem;
    }
  }
  height: ${props => (props.open ? "152px" : 0)};
  overflow: hidden;
  ${styles.transObject({ time: "0.6s" })};

  @media (min-width: 768px) {
    display: flex;
    height: auto;
    margin: 0 auto;

    .nav-link:hover {
      background: ${styles.colors.mainWhite};
      padding: 0.5rem 1rem;
    }
  }
`

export default NavbarLinks
