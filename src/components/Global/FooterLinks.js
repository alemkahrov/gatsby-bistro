import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { styles } from "../../utils"
export default class FooterLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        path: "/impressum",
        name: "impressum",
      },
      {
        id: 1,
        path: "/datenschutz/",
        name: "datenschutzerklärung",
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
  display: flex;
  justify-content: center;
  .nav-item {
    list-style-type: none;
  }
  .nav-link {
    display: block;
    padding: 1rem;
    font-size: 1.4rem;
    font-weight: 400;
    text-transform: capitalize;
    cursor: pointer;
    color: ${styles.colors.mainLightGrey2};
    ${styles.transDefault};
    &:hover {
      color: ${styles.colors.mainWhite};
      /* text-decoration: underline; */
    }
  }
`
