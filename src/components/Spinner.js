import React, { Component } from "react";
import "../App.css";

export default class Spinner extends Component {
  render() {
    return (
      <>
        <div className="d-flex justify-content-center align-items-center mt-5" style={{height: 'calc(100vh - 330px)'}}>
          <div className="loader text-center"></div>
        </div>
      </>
    );
  }
}
