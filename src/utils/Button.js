import styled from "styled-components"
import { styles } from "../utils"
const BannerButton = styled.button`
  display: block;
  color: ${styles.colors.mainWhite};
  background: transparent;
  padding: 0.8rem 1.5rem 0.8rem 2rem;
  text-transform: uppercase;
  font-size: 1.8rem;
  letter-spacing: 0.5rem;
  font-weight: 700;
  ${styles.border({ color: `${styles.colors.mainWhite}` })};
  margin-top: 1rem;
  ${styles.transition({})};
  &:hover {
    background: ${styles.colors.mainWhite};
    color: ${styles.colors.mainBlack};
    cursor: pointer;
  }

  @media (min-width: 576px) {
    font-size: 2.2rem;
    padding: 1rem 1.5rem 1rem 2rem;
  }
`

const SectionButton = styled(BannerButton)`
  color: ${styles.colors.mainBlack};
  ${styles.border({ color: `${styles.colors.mainBlack}` })};
  &:hover {
    background: ${styles.colors.mainBlack};
    color: ${styles.colors.mainRed};
    cursor: pointer;
  }
`

export { BannerButton, SectionButton }
