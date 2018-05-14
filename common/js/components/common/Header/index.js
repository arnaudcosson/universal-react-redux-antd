import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Affix, Layout, Row, Col, Menu } from 'antd';
import css from './index.scss';
const { Header } = Layout;

const menuItems = [
  { name: 'Home', to: '/', exact: 'true' },
  { name: 'Pricing', to: '/pricing', exact: 'true' },
];

class HeaderView extends Component {
  render() {
    return (
      <Affix>
        <Header>
          <Row>
            <Col span={10}>
            Make business travel an amazing experience
            </Col>
            <Col span={4}>
              <h1><Link to="/"><img src="assets/icon-menu.png" alt="Tepee Pro Couching" className={css.logo} /></Link></h1>
            </Col>
            <Col span={10}>
              <Menu 
                mode="horizontal"
                >
                {menuItems.map(item => (
                  <Menu.Item {...item} key={item.name}>
                    {item.name}
                  </Menu.Item>
                ))}
              </Menu>
            </Col>
          </Row>
        </Header>
      </Affix>
    );
  }
}

export default HeaderView;
