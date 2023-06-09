import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from '../nav/NavMenu';
import { FooterComp } from './Footer';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div className="mb-10 bg-light">
        <div className="bg-light">
          <NavMenu />
        </div>

        <div className="m-10 mt-4">
          <Container>{this.props.children}</Container>
        </div>
        <div>
          <br></br>
        </div>
        <div className="mt-10">
          <FooterComp />
        </div>
      </div>
    );
  }
}
