import React from "react"
import { Link } from "gatsby"
import logo from "../../../images/bistro_logo.svg"
import { FaAlignRight } from "react-icons/fa"
import styled from "styled-components"
import { styles } from "../../../utils"
export default function NavbarHeader({ handleNavbar }) {
  return (
    <HeaderWrapper>
      <Link to="/">
        <img src={logo} className="logo" alt="company logo" />
      </Link>
      <FaAlignRight
        className="toggle-icon"
        onClick={() => {
          handleNavbar()
        }}
      />
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  padding: 0.5rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    height: 9rem;
  }
  .toggle-icon {
    font-size: 1.75rem;
    color: ${styles.colors.mainGreen};
    cursor: pointer;
  }
  @media (min-width: 807px) {
    .toggle-icon {
      display: none;
    }
  }
`
