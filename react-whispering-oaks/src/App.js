import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages'
import Contact from './pages/contact'



export default class App extends Component {


  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={ Home } exact />
          <Route path="/contact" component={ Contact } exact />
        </Switch>
      </Router>
    )
  }
}
