import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    const { title, discription, imgUrl, newsUrl } = this.props;
    return (
      <>
        <div className="card" style={{ width: "18rem" }}>
          <img src={imgUrl ? imgUrl : "https://www.kxan.com/wp-content/uploads/sites/40/2024/06/6663ea61a721e0.77334856.jpeg?w=1280"} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{discription}</p>
          <a rel="noreferrer" href={newsUrl === "https://removed.com" ? "https://edition.cnn.com/2024/09/20/science/earth-asteroid-mini-moon/index.html" : newsUrl } target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </>
    );
  }
}
