import React from "react"

import { styles, Section } from "../../utils"
import styled from "styled-components"

export default function Contact() {
  return (
    <FormWrapper>
      <Section>
        <div className="row">
          <div className="col-10 col-sm-8 col-md-6 mx-auto">
            <form
              action="https://formspree.io/langolodimichel@hotmail.com"
              method="POST"
            >
              {/* name */}
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="Jon Doe"
                />
              </div>
              {/* email */}
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="email@email"
                />
              </div>
              {/* description */}
              <div className="form-group">
                <label htmlFor="nachricht">Nachricht</label>
                <textarea
                  name="nachricht"
                  id="nachricht"
                  className="form-control"
                  rows="5"
                  placeholder="Schreiben Sie uns..."
                />
              </div>
              {/* submit */}
              <button type="submit" className="btn">
                Senden
              </button>
            </form>
          </div>
        </div>
      </Section>
    </FormWrapper>
  )
}

const FormWrapper = styled.div`
  font-size: 1.8rem;
  color: ${styles.colors.mainGrey};
  background: ${styles.colors.mainLightGrey2};
  .form-control {
    font-size: 1.3rem;
  }
  .btn {
    font-size: 1.8rem;
    color: ${styles.colors.mainGreen};
    ${styles.border({ color: `${styles.colors.mainGreen}` })};
    width: 100%;
    &:hover {
      background: ${styles.colors.mainGreen};
      color: ${styles.colors.mainWhite};
    }
  }
`
