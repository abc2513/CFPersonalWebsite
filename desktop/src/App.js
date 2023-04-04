import React, { Component } from 'react'
import TopMenu from './components/TopMenu'
import Page from "./components/Page"
import {HashRouter} from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
        <HashRouter>
          <TopMenu/>
          <Page></Page>
        </HashRouter>
    )
  }
}
