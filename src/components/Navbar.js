import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
        <>
        
        <nav className="navbar  sticky-top navbar-expand-lg navbar-dark bg-light">
        <Link to="/" className="navbar-brand text-secondary" >NewsExpress <i className="fa fa-train" style={{fontSize:"24px"}}></i></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link badge badge-danger" style= {{padding:"10px",margin: "8px",fontSize: "medium"}}>General <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item active">
              <Link to="/business" className="nav-link badge badge-danger" style= {{padding:"10px",margin: "8px",fontSize: "medium"}}> Business<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item active">
              <Link to="/entertainment" className="nav-link badge badge-danger" style= {{padding:"10px",margin: "8px",fontSize: "medium"}}> Entertainment <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item active">
              <Link to="/health" className="nav-link badge badge-danger" style= {{padding:"10px",margin: "8px",fontSize: "medium"}}> Health<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item active">
              <Link to="/science" className="nav-link badge badge-danger" style= {{padding:"10px",margin: "8px",fontSize: "medium"}}> Science<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item active">
              <Link to="/technology" className="nav-link badge badge-danger" style= {{padding:"10px",margin: "8px",fontSize: "medium"}}> Technology<span className="sr-only">(current)</span></Link>
            </li>
          
          </ul>

        </div>
      </nav>
      </> 
    )
  }
}
