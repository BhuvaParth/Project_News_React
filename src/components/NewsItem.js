import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    const { title, description, imgUrl, newsUrl, author, date } = this.props;
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={imgUrl || "https://www.kxan.com/wp-content/uploads/sites/40/2024/06/6663ea61a721e0.77334856.jpeg?w=1280"}
          className="card-img-top"
          alt="News"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small>
          </p>
          <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">
            Read More
          </a>
        </div>
      </div>
    );
  }
}
