import React, { Component } from 'react'
import {Switch,Route} from 'react-router-dom'
import Home from './components/Home'
import Home1 from './components/Home1'
import Home2 from './components/Home2'
import Home3 from './components/Home3'
import Home4 from './components/Home4'
import Home5 from './components/Home5'
import Home6 from './components/Home6'
export default class App extends Component {
  
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route  path="/home1" component={Home1}/>
          <Route  path="/home2" component={Home2}/>
          <Route  path="/home3" component={Home3}/>
          <Route  path="/home4" component={Home4}/>
          <Route  path="/home5" component={Home5}/>
          <Route  path="/home6" component={Home6}/>
        </Switch>
      </div>
    )
  }
}

