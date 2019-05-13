import React, { Component } from "react"
import { FaInstagram, FaFacebook } from "react-icons/fa"
import styled from "styled-components"
import { styles } from "../../../utils"
export default class NavbarIcons extends Component {
  state = {
    icons: [
      {
        id: 1,
        icon: <FaFacebook className="icon facebook-icon" />,
        path: `https://www.facebook.com`,
      },
      {
        id: 2,
        icon: <FaInstagram className="icon instagram-icon" />,
        path: `https://www.instagram.com`,
      },
    ],
  }
  render() {
    return (
      <IconWrapper>
        {this.state.icons.map(item => (
          <div className="icon-box">
            <a
              href={item.path}
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          </div>
        ))}
      </IconWrapper>
    )
  }
}

const IconWrapper = styled.div`
  .icon-box {
    padding-right: 1.5rem;
  }
  .icon {
    font-size: 2rem;
    cursor: pointer;
    ${styles.transFunction()};
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
  .icon:hover {
    color: ${styles.colors.mainGreen};
  }
  display: none;
  @media (min-width: 807px) {
    display: flex;
    justify-content: space-around;
  }
`
