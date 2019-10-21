import React, { useState } from "react"
import styled from "styled-components"
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa"

import { styles } from "../../../utils"

const NavbarIcons = () => {
  const [icons, setIcons] = useState([
    {
      id: 1,
      icon: <FaFacebook className="icon facebook-icon" />,
      path: "https://www.facebook.com/",
    },
    {
      id: 2,
      icon: <FaTwitter className="icon twitter-icon" />,
      path: "https://www.twitter.com/",
    },
    {
      id: 3,
      icon: <FaInstagram className="icon instagram-icon" />,
      path: "https://www.instagram.com/",
    },
  ])

  return (
    <IconWrapper>
      {icons.map(icon => {
        return (
          <a
            href={icon.path}
            key={icon.id}
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon.icon}
          </a>
        )
      })}
    </IconWrapper>
  )
}

const IconWrapper = styled.div`
  .icon {
    font-size: 1.3rem;
    cursor: pointer;
    ${styles.transFunction()};
    &:hover {
      color: ${styles.colors.mainYellow};
    }
  }

  .facebook-icon {
    color: #3b579d;
  }

  .twitter-icon {
    color: #3ab7f0;
  }

  .instagram-icon {
    color: #da5f53;
  }

  display: none;

  @media (min-width: 768px) {
    display: flex;
    width: 10rem;
    justify-content: space-around;
  }
`

export default NavbarIcons
