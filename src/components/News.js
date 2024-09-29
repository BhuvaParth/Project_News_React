import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - NewsPartner`;
  }

  async componentDidMount() {
    this.fetchNews();
  }

  async fetchNews() {
    const { country, category, pageSize } = this.props;
    const { page } = this.state;
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=7edfd5861d33403f9c400df9f636410a&page=${page}&pageSize=${pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 }, () => {
      this.fetchNews();
    });
  };

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 }, () => {
      this.fetchNews();
    });
  };

  render() {
    return (
      <div className="container my-5">
        <h2 className="text-center mb-5">
          <strong>NewsPartner - Top Headlines</strong>
        </h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => (
              <div className="col-md-3" key={element.url}>
                <NewsItem
                  title={
                    element.title ? element.title.slice(0, 45) : "No Title"
                  }
                  description={
                    element.description
                      ? element.description.slice(0, 88)
                      : "No Description"
                  }
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                />
              </div>
            ))}
        </div>
        <div className="container d-flex justify-content-between my-5">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
