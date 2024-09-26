import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export default class News extends Component {
  articles = [];
  comanUrl =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=7edfd5861d33403f9c400df9f636410a";

  constructor() {
    super();
    this.state = {
      articleClass: this.articles,
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `${this.comanUrl}&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articleClass: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }

  hendelPrevClick = async () => {
    let url = `${this.comanUrl}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      page: this.state.page - 1,
      articleClass: parseData.articles,
      loading: false,
    });
  };

  hendelNextClick = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this / this.props.pageSize))) {
      let url = `${this.comanUrl}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articleClass: parseData.articles,
        loading: false,
      });
    }
  };

  render() {
    return (
      <>
        <div className="container my-5">
          <h2 className="text-center my-5">
            <strong>New - Top headlines</strong>
          </h2>
          {this.state.loading && <Spinner/>}
          <div className="row">
            {!this.state.loading && this.state.articleClass.map((element) => {
              return (
                <div className="col-md-3" key={element.url}>
                  <NewsItem
                    title={
                      element.title
                        ? element.title.slice(0, 45)
                        : "No Title Available"
                    }
                    imgUrl={element.urlToImage}
                    discription={
                      element.description
                        ? element.description.slice(0, 88)
                        : "No Description Available"
                    }
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="container my-5">
          <div className="row">
            <div className="d-flex justify-content-between">
              <button
                disabled={this.state.page <= 1}
                type="button"
                className="btn btn-dark"
                onClick={this.hendelPrevClick}
              >
                &larr; Previous{" "}
              </button>
              <button
                disabled={
                  this.state.page + 1 >
                  Math.ceil(this.state.totalResults / this.props.pageSize)
                }
                type="button"
                className="btn btn-dark"
                onClick={this.hendelNextClick}
              >
                Next &rarr;
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
