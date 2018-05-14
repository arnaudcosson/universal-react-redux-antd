import React, { Component } from 'react';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import { RoutesNames } from '../../../routes';

const { Footer } = Layout;

export default class FooterView extends Component {
  render() {
    return (
      <Footer>
          © 2018 | <Link to={RoutesNames.LEGAL_NOTICE}>Legal notice</Link>
      </Footer>
    );
  }
}
