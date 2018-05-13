import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Button, Icon, DatePicker, Breadcrumb } from 'antd';
import moment from 'moment';

const { MonthPicker, RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

import css from './index.scss';

class HomePage extends Component {
  render() {
    return (
      <div className={css.home}>
        <Helmet
          title="Welcome home"
          meta={ [
            { name: "description", content: "This is the home description" },
            { name: "keywords", content: "react homepage" },
          ] }
        />
        <h1>It Works!!!!</h1>
        <Button type="primary">Test</Button>
        <Icon type="link" />
        <RangePicker
          defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
          format={dateFormat}
        />
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item><Link to="/todos">Application Center</Link></Breadcrumb.Item>
          <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
          <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
        <p>
          You've successfully started up your first universally rendered react
          and redux app.<br />
          Hint: Try View Source on this page to see that it was rendered on the
          server as well.
        </p>
        <p>
          Check out the
          <Link to="/todos"> todos list</Link>.
        </p>
        
      </div>
    );
  }
}

export default HomePage;
