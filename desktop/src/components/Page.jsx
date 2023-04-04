import React, { Component } from 'react'
import Display from './Display'
import LeftMenu from './LeftMenu'
import IndexPage from '../pages/IndexPage'
import AboutPage from '../pages/AboutPage'
import { Route, Switch,Redirect } from 'react-router-dom'
export default class Page extends Component {
  render(){
    return (
        <div>
          <Switch>
            <Route path="/page/:page/:article" component={Display}></Route>
            <Route exact path="/about" component={AboutPage}></Route>
            <Route exact path="/" component={IndexPage}></Route>
            <Redirect to="/"/>
          </Switch>
          <Route path="/page/:page/:article" component={LeftMenu}></Route>
        </div>
    )
  }
}
