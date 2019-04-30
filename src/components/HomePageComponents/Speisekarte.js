import React, { Component } from "react"
import Img from "gatsby-image"

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
          {/* categories */}
          {/* items */}
          <div className="row">
            {this.state.menuItems.map(({ node }) => {
              return (
                <div key={node.id} className="col-11 col-md-6 my-3 d-flex">
                  <Img fixed={node.image.fixed} />
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between ml-3">
                      <h5 className="title">{node.title}</h5>
                      <h5 className="price">€ {node.price.toFixed(2)}</h5>
                    </div>
                    <p className="text-muted">
                      {/* <small>{node.description.description}</small> */}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
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
