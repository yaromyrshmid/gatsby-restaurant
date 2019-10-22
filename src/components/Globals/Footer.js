import React, { useState } from "react"
import styled from "styled-components"
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa"

import { styles } from "../../utils"

const Footer = () => {
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
    <FooterWrapper>
      <div className="title">zen restaurant</div>
      <div className="icons">
        {icons.map(icon => {
          return (
            <a
              href={icon.path}
              key={icon.id}
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              {icon.icon}
            </a>
          )
        })}
      </div>
      <p className="copyright">
        copyright &copy;{new Date().getFullYear().toString()} zen restaurant
      </p>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  padding: 2rem 0;
  background: ${styles.colors.mainBlack};

  .icons {
    width: 10rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }

  .icon {
    color: ${styles.colors.mainWhite};
    font-size: 1.3rem;
    ${styles.transition({})}
    &:hover {
      color: ${styles.colors.mainYellow};
    }
  }

  .copyright {
    color: ${styles.colors.mainWhite};
    text-transform: capitalize;
    text-align: center;
    margin: 1rem 0;
  }

  .title {
    text-align: center;
    width: 20rem;
    color: ${styles.colors.mainYellow};
    text-transform: uppercase;
    padding: 0.3rem 1rem;
    margin: 0 auto 2rem auto;
    font-size: 1.5rem;
    ${styles.border({ color: `${styles.colors.mainYellow}` })}
  }
`

export default Footer
