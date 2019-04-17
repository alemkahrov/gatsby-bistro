import React, { Component } from "react"

import styled from "styled-components"
import { styles } from "../../utils"
import { FaFacebook, FaInstagram } from "react-icons/fa"

export default class Footer extends Component {
  state = {
    icons: [
      {
        id: 0,
        icon: <FaFacebook className="icon icon - facebook" />,
        path: "https://www.facebook.com",
      },

      {
        id: 1,
        icon: <FaInstagram className="icon icon - instagram" />,
        path: "https://www.instagram.com",
      },
    ],
  }
  render() {
    return (
      <FooterWrapper>
        <div className="title">eatery</div>
        <div className="icons">
          {this.state.icons.map(item => (
            <a
              href={item.path}
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <p className="copyright">
          copyright &copy; 2019 eatery. All rights reserved.
        </p>
      </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.footer`
  background: ${styles.colors.mainBlack};
  padding: 4rem 0;
  .title {
    color: ${styles.colors.mainYellow};
    font-size: 1.6rem;
    text-transform: uppercase;
    text-align: center;
    width: 12rem;
    margin: 0 auto 2rem auto;
    padding: 0.2rem 0.7rem 0 1rem;
    ${styles.border({ color: `${styles.colors.mainYellow}` })};
    ${styles.letterSpacing({ spacing: "0.2rem" })};
  }
  .icons {
    width: 6rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
  .icon {
    color: ${styles.colors.mainWhite};
    font-size: 2rem;
    ${styles.transition({})};
    &:hover {
      color: ${styles.colors.mainYellow};
    }
  }
  .copyright {
    color: ${styles.colors.mainWhite};
    font-size: 1.3rem;
    text-align: center;
    text-transform: capitalize;
    margin: 1rem 0;
  }
`
