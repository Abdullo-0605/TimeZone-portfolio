import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import './App.css';
import Navbar from './components1/Navbar'
import End from './components10/End';
import Title from './components2/title'
import Arrivals from './components3/Arrivals';
import Gallery from './components4/Gallery';
import Shop from './components5/Shop';
import Video from './components6/Video';
import About from './components7/About';
import About2 from './components8/About2';
import Method from './components9/Methods';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar/>

          <Switch>

            <Route path="/" exact>
              <Title/>
              <Arrivals/>
              <Gallery/>
              <Shop/>
              <Video/>
              <About/>
              <About2/>
              <Method/>
              <Shop/>
              <End/>
            </Route>

            <Route path="/shop">
              <Shop/>
              <Method/>
              <End/>
            </Route>

            <Route path="/about">
              <Video/>
              <Method/>
              <End/>
            </Route>

            <Route path="/latest">
              <Shop/>
              <Method/>
              <End/>
            </Route>

            <Route path="/blog">
              <Method/>
              <End/>
            </Route>

            <Route path="/pages">
              <Gallery/>
              <Method/>
              <End/>
            </Route>

            <Route path="/contact">
              <End/>
            </Route>

          </Switch>



        </BrowserRouter>
      </div>
    );
  }
}

export default App;