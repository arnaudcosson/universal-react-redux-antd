import React from 'react';
import { Switch } from 'react-router-dom';
import { Header, Footer, RouteWithSubRoutes } from '@components/common';
import { hot } from 'react-hot-loader';
import { Layout } from 'antd';
import routes from '@routes';

const { Content } = Layout;
const App = () => (
  <Layout className="layout">
    <Header />
    <Content style={{ padding: '0 50px' }}>
      <Switch>
        {routes.map(route => (
          <RouteWithSubRoutes key={route.path} {...route} />
        ))}
      </Switch>
    </Content>
    <Footer />
  </Layout>
);

export default hot(module)(App);
