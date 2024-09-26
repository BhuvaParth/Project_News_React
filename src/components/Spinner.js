import React, { Component } from "react";
import "../App.css";

export default class Spinner extends Component {
  render() {
    return (
      <>
        <div className="d-flex justify-content-center my-5">
          <div class="loader text-center"></div>
        </div>
      </>
    );
  }
}
