import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { styles } from "../../../utils"
export default class NavbarLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        path: "/",
        name: "startseite",
      },
      {
        id: 1,
        path: "/bistro/",
        name: "unser bistro",
      },
      {
        id: 2,
        path: "/menu/",
        name: "menükarte",
      },
      {
        id: 3,
        path: "/products/",
        name: "unsere produkte",
      },
      {
        id: 4,
        path: "/contact/",
        name: "kontakt",
      },
    ],
  }
  render() {
    return (
      <LinkWrapper open={this.props.navbarOpen}>
        {this.state.links.map(item => {
          return (
            <li key={item.id} className="nav-item">
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
  .nav-item {
    list-style-type: none;
  }
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 1rem 1.5rem 1rem 1.5rem;
    font-size: 1.6rem;
    font-weight: 400;
    text-transform: capitalize;
    cursor: pointer;
    color: ${styles.colors.mainGreen};
    ${styles.transDefault};
    &:hover {
      background: ${styles.colors.mainGreen};
      color: ${styles.colors.mainWhite};
      padding: 1rem 1.5rem 1rem 1.5rem;
    }
  }
  //
  height: ${props => (props.open ? "185px" : "0px")};
  overflow: hidden;
  ${styles.transObject({ time: "1s" })};
  //

  @media (min-width: 768px) {
    //
    height: auto;
    //
    display: flex;
    margin: 0 auto;

    .nav-link {
      cursor:pointer;
      /* border-bottom: 2px solid ${styles.colors.mainWhite}; */
      &:hover,
      &:focus {
        background: ${styles.colors.mainWhite};
        padding: 1rem 1.5rem 1rem 1.5rem;
        /* border-color: ${styles.colors.mainRed}; */
        color: ${styles.colors.mainRed};
      }
    }
  }
`
