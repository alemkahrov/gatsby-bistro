import React, { Component } from "react"

import { Section, Title } from "../../utils"

export default class Speisekarte extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items.edges,
      menuItems: props.items.edges,
    }
  }
  render() {
    if (this.state.items.length > 0) {
      return (
        <Section>
          <Title message="l'angolo di michel's" title="speisekarte" />
        </Section>
      )
    } else {
      return (
        <Section>
          <Title message="l'angolo di michel's" title="speisekarte" />
          <div className="row">
            <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
              <h2>Es wurden keine Speisen gefunden</h2>
            </div>
          </div>
        </Section>
      )
    }
  }
}
