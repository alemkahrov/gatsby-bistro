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
        path: "/speisekarte/",
        name: "speisekarte",
      },
      {
        id: 3,
        path: "/kontakt/",
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
    padding: 0.5rem 1rem 0.5rem 1rem;
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: capitalize;
    cursor: pointer;
    color: ${styles.colors.mainGrey};
    ${styles.transDefault};
    &:hover {
      background: ${styles.colors.mainGrey};
      color: ${styles.colors.mainYellow};
      padding: 0.5rem 1rem 0.5rem 1.3rem;
    }
  }
  //
  height: ${props => (props.open ? "152px" : "0px")};
  overflow: hidden;
  ${styles.transObject({ time: "1s" })};
  //

  @media (min-width: 768px) {
    //
    height: auto;
    //
    display: flex;
    margin: 0 auto;
    .nav-item: {
      padding: 0 2rem;
    }
    .nav-link:hover {
      background: ${styles.colors.mainWhite};
      padding: 0.5rem 1rem 0.5rem 1rem;
    }
  }
`
