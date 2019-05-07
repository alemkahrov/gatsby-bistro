import React, { Component } from "react"
import styled from "styled-components"
import { styles, IntroText } from "../../utils"
import { FaInstagram, FaFacebook } from "react-icons/fa"
import logo from "../../images/bistro_logo_dunkel.svg"
export default class Footer extends Component {
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
      <FooterWrapper>
        <img src={logo} className="logo" alt="company logo" />
        <h5 className="location">
          Fuhrmannsgasse 1 - 1080 Wien <br />
          Tel.: +43676/46 144 18 <br />
          E-mail: langolodimichel@hotmail.com
        </h5>
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
          copyright &copy; 2019 Developed by Alem Kahrovic
        </p>
      </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.footer`
  padding: 3rem 0 5rem 0;
  background: ${styles.colors.mainBlack};
  text-align: center;
  .logo {
    height: 8rem;
    margin-bottom: 2rem;
  }
  .icons {
    width: 5rem;
    display: flex;
    justify-content: space-between;
    margin: 1rem auto;
  }
  .icon {
    color: ${styles.colors.mainWhite};
    font-size: 1.4rem;
    ${styles.transition({})};
    &:hover {
      color: ${styles.colors.mainRed};
    }
  }
  .location {
    color: ${styles.colors.mainWhite};
    line-height: 2rem;
    text-align: center;
    font-size: 1.5rem;
  }
  .copyright {
    color: ${styles.colors.mainWhite};
    text-transform: capitalize;
    text-align: center;
    margin: 1rem 0;
  }
  .title {
    text-align: center;
    width: 10rem;
    color: ${styles.colors.mainYellow};
    text-transform: uppercase;
    padding: 0.3rem 1rem;
    margin: 0 auto 2rem auto;
    font-size: 1.5rem;
    ${styles.border({ color: `${styles.colors.mainYellow}` })}
  }
`
