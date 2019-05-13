import React, { Component } from "react"
import styled from "styled-components"
import { styles, Section } from "../../utils"
import { FaInstagram, FaFacebook } from "react-icons/fa"
import logo from "../../images/bistro_logo_dunkel.svg"
import FooterLinks from "./FooterLinks"
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
        <Section>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="contact">
                <h4 className="title">Kontakt</h4>
                <div className="call">
                  <p>Tel.: 01/4023694</p>
                  <p className="location">Fuhrmannsgasse 1 - 1080 Wien</p>
                  <p>Mobil: +43 676/46 144 18</p>

                  <p>E-mail: michel@langolo.at</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="opening">
                <h4 className="title">Öffnungszeiten</h4>
              </div>
              <div className="opening-wrapper">
                <div className="opening-1">
                  <p className="day">Montag - Freitag</p>
                  <p className="time">09:00 - 21:30</p>
                </div>
                <div className="opening-2">
                  <p className="day">Samstag </p>
                  <p className="time">10:00 - 18:00</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <img src={logo} className="logo" alt="company logo" />
              <FooterLinks />
            </div>
          </div>
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
        </Section>
        <div className="footer-bottom">
          <p className="copyright">
            copyright &copy; 2019 Developed by Alem Kahrovic
          </p>
        </div>
      </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.footer`
  
  background: #20201f;
  font-size: 1.4rem;
  @media(min-width: 768px) {
    padding: 2rem 0 0 0;
  }
  p {
    color: #ccc;
    line-height: 1;
  }
  .logo {
    height: 8rem;
    margin: 3rem auto 0 auto;
    display:flex;
    
    @media(min-width:768px) {
      margin-top: 0;
    }
  }
  .icons {
    width: 5rem;
    display: flex;
    justify-content: space-between;
    margin: auto;
    @media(min-width: 768px) {
      margin-top: 0;
    }
  }
  .icon {
    color: ${styles.colors.mainWhite};
    font-size: 1.8rem;
    ${styles.transition({})};
    &:hover {
      color: ${styles.colors.mainGreen};
    }
  } 
    .location {
      margin-bottom: 2rem;
    }
    .call {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  .opening-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    .opening-2 {
      margin-left: 4rem;
    }
  }
  .time {
    line-height: 1rem;
  }
  
  .copyright {
    color: ${styles.colors.mainWhite};
    text-transform: capitalize;
    text-align: center;
    font-size: 1rem;
    margin-bottom: 0;
  }
  .title {
    color: ${styles.colors.mainWhite};
    margin: 2rem 0;
    font-size: 1.3rem;
    font-weight: 700;
    
    text-align: center;
    text-transform: uppercase;
    /* ${styles.border({ color: `${styles.colors.mainGreen}` })}; */
  }
  .footer-bottom {
    background: ${styles.colors.mainBlack};
    padding: 1.5rem 0;
  }
`
