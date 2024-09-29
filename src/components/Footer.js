import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="d-flex flex-column justify-content-center gap-1 h-100">
                <Link className="footer-brand text-white " to="/">
                  NewsPartner
                </Link>
                <p className="fs-6 m-0">Designed & Developed By Parth Bhuva</p>
                <span className="fs-6">&copy; 2024</span>
              </div>
            </div>
            <div className="col-4">
              <div className="list-wrapper">
                <ul className="d-flex flex-column gap-2 me-auto mb-2 mb-lg-0 p-0">
                  <li className="">
                    <Link className="" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="">
                    <Link className="" to="/business">
                      Business
                    </Link>
                  </li>
                  <li className="">
                    <Link className="" to="/entertainment">
                      Entertainment
                    </Link>
                  </li>
                  <li className="">
                    <Link className="" to="/general">
                      General
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-4">
              <div className="list-wrapper">
                <ul className="d-flex flex-column gap-2 me-auto mb-2 mb-lg-0 p-0">
                  <li className="">
                    <Link className="" to="/health">
                      Health
                    </Link>
                  </li>
                  <li className="">
                    <Link className="" to="/science">
                      Science
                    </Link>
                  </li>
                  <li className="">
                    <Link className="" to="/sports">
                      Sports
                    </Link>
                  </li>
                  <li className="">
                    <Link className="" to="/technology">
                      Technology
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
