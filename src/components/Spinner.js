import React, { Component } from 'react';
import spinImg from './spinImg.gif';
export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
          <img src={spinImg}/>
      </div>
    )
  }
}
