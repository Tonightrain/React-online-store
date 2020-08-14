import React, {Component} from 'react';
import {BrowserRouter as Route, BrowserRouter, Switch,NavLink } from 'react-router-dom';
import AddCommodity from '../src/component/AddCommodity';
import Order from '../src/component/Order';
import Mall from '../src/component/Mall';
import '../src/css/mall.css';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
        <nav className="/header">
            <ul>
                <li><NavLink to="/mall" className="mall">商城</NavLink></li>
                <li><NavLink to="/order" className="order">订单</NavLink></li>
                <li><NavLink to="/addCommodity" className="addCommodity">+ 添加商品</NavLink></li>
            </ul>
        </nav>
        <Switch>
            <Route exact path="/mall" component={Mall}></Route>
            <Route exact path="/order" component={Order}></Route>
            <Route exact path="/addCommodity" component={AddCommodity}></Route>
        </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
