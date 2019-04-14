import React, { Component } from "react"

import styled from "styled-components"
import { styles } from "../../../utils"
import { Link } from "gatsby"

export default class NavbarLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        path: "/",
        name: "home",
      },

      {
        id: 1,
        path: "/about/",
        name: "about",
      },

      {
        id: 2,
        path: "/menu/",
        name: "menu",
      },

      {
        id: 3,
        path: "/contact/",
        name: "contact",
      },
    ],
  }
  render() {
    return (
      <LinkWrapper open={this.props.navbarOpen}>
        {this.state.links.map(item => {
          return (
            <li key={item.id}>
              <Link to={item.path} className="nav-link">
                {item.name}
              </Link>
            </li>
          )
        })}
      </LinkWrapper>
    )
  }
}

const LinkWrapper = styled.ul`
  .nav-link {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${styles.colors.mainGrey};
    text-decoration: none;
    text-transform: capitalize;
    padding: 0.5rem 1rem;
    display: block;
    ${styles.transDefault};
    &:hover {
      background: ${styles.colors.mainGrey};
      color: ${styles.colors.mainYellow};
      padding: 0.5rem 1rem 0.5rem 1.3rem;
    }
  }
  height: ${props => (props.open ? "152px" : "0px")};
  overflow: hidden;
  list-style: none;
  ${styles.transObject({ time: "1s" })};

  @media (min-width: 768px) {
    height: auto;
    display: flex;
    margin: 0 auto;

    .nav-link:hover {
      background: ${styles.colors.mainWhite};
      padding: 0.5rem 1rem;
    }
  }
`
