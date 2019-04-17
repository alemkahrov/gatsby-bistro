import React, { Component } from "react"
import styled from "styled-components"
import { styles } from "../../../utils"
import { FaInstagram, FaFacebook } from "react-icons/fa"
import { transDefault } from "../../../utils/styles"

export default class NavbarIcons extends Component {
  state = {
    icons: [
      {
        id: 0,
        icon: <FaFacebook className="icon icon-facebook" />,
        path: "https://www.facebook.com",
      },

      {
        id: 1,
        icon: <FaInstagram className="icon icon-instagram" />,
        path: "https://www.instagram.com",
      },
    ],
  }
  render() {
    return (
      <IconWrapper>
        {this.state.icons.map(item => {
          return (
            <a
              href={item.path}
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          )
        })}
      </IconWrapper>
    )
  }
}

const IconWrapper = styled.div`
  padding: 0 1rem;
  display: none;
  .icon {
    font-size: 2rem;
    margin-left: 1.5rem;
    cursor: pointer;
    ${transDefault};
    &:hover {
      color: ${styles.colors.mainYellow};
    }
  }

  .icon-facebook {
    color: #3a5999;
  }
  .icon-instagram {
    color: #f09faf;
  }

  @media (min-width: 768px) {
    display: flex;
  }
`
