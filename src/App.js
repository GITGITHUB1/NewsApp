import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News' ;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
//Initialise the instance variables
  constructor()
 {
   super();
  this.pageSize=6;
  this.country="in";
  this.state={
    progress:0
  }
 }
 //This function is set passed as a prop to  news component
  progressBar=(progress)=>{
  this.setState({
    progress:progress
  });
  }
  render() {
    return (
      <>
      <Router>
      <Navbar/>
      <LoadingBar
        color='#f11946'//through color you can set the color for the loading bar
        progress={this.state.progress} //through progress you can set the width for the loading bar from (0-100)
        height={3}
      />
      <Routes>
      <Route exact path="/" element={<News progressBar={this.progressBar} key="general" pageSize={this.pageSize} country={this.country} category="General"/>}></Route>
      <Route exact path="/business" element={<News progressBar={this.progressBar} key="business" pageSize={this.pageSize}country={this.country}  category="Business"/>}></Route>
      <Route exact path="/entertainment" element={<News progressBar={this.progressBar} key="entertainment" country={this.country}  pageSize={this.pageSize} category="Entertainment"/>}></Route>
      <Route exact path="/health" element={<News progressBar={this.progressBar} key="health" pageSize={this.pageSize} country={this.country} category="Health"/>}></Route>
      <Route exact path="/science" element={<News progressBar={this.progressBar} key="science"  pageSize={this.pageSize} country={this.country} category="Science"/>}></Route>
      <Route exact path="/technology" element={<News progressBar={this.progressBar} key="technology" pageSize={this.pageSize} country={this.country} category="Technology"/>}></Route>
      </Routes>
      </Router>
      </>
    )
  }
}


