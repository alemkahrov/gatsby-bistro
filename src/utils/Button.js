import styled from "styled-components"
import { styles } from "../utils"

const BannerButton = styled.button`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${styles.colors.mainWhite};
  background: transparent;
  text-transform: uppercase;
  text-decoration: none;
  padding: 0.5rem 0.5rem 0.7rem 1rem;
  display: block;
  cursor: pointer;
  ${styles.border};
  ${styles.letterSpacing({ spacing: ".5rem" })};
  ${styles.transition({})};

  &:hover {
    background: ${styles.colors.mainWhite};
    color: ${styles.colors.mainBlack};
  }
`

const SectionButton = styled(BannerButton)`
  color: ${styles.colors.mainBlack};
  ${styles.border({ color: `${styles.colors.mainBlack}` })};
  &:hover {
    background: ${styles.colors.mainBlack};
    color: ${styles.colors.mainYellow2};
  }
`

export { BannerButton, SectionButton }
