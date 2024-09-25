import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [
    {
      source: {
        id: "bbc-sport",
        name: "BBC Sport",
      },
      author: null,
      title:
        "Premier League predictions 2024-25: BBC Sport pundits pick their top four",
      description:
        "We ask 30 BBC Sport football pundits to predict who will win the Premier League title, and which clubs will finish in the top four this season.",
      url: "http://www.bbc.co.uk/sport/football/articles/cp8nkkwjk39o",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_sport/0c89/live/c89f6cb0-5a66-11ef-b2d2-cdb23d5d7c5b.jpg",
      publishedAt: "2024-08-15T05:52:14.9273059Z",
      content:
        "Pat Nevin: It is a complete guess but I am going to be wild and say Chelsea will sneak in, in fourth place. If you take last season as a whole, it could be anything again this time. But if you look a… [+2121 chars]",
    },
    {
      source: {
        id: "bbc-sport",
        name: "BBC Sport",
      },
      author: null,
      title:
        "Premier League: Football heading towards 'saturation point' says Richard Masters",
      description:
        "Football will reach saturation point if matches keep being added to the calendar, according to Premier League chief executive Richard Masters.",
      url: "http://www.bbc.co.uk/sport/football/articles/c1w70l5rrj8o",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_sport/f8e9/live/90f9f290-5a83-11ef-b2d2-cdb23d5d7c5b.jpg",
      publishedAt: "2024-08-14T23:07:16.5055525Z",
      content:
        "Masters said the legal action was not just about Fifa's plans for an expanded Club World Cup and more about the impact its scheduling could have on existing competitions.\r\nHe added: \"If our clubs get… [+1051 chars]",
    },
    {
      source: {
        id: "bbc-sport",
        name: "BBC Sport",
      },
      author: null,
      title: "Zambia: The 1993 air crash and the 2012 Afcon underdogs",
      description:
        "Nineteen years and 10 miles separated Zambia's football team from a lost, golden generation on a fateful night in Libreville.",
      url: "http://www.bbc.co.uk/sport/football/articles/czrgm6grxvlo",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_sport/da5c/live/8672a690-5575-11ef-b2d2-cdb23d5d7c5b.jpg",
      publishedAt: "2024-08-14T23:07:15.2399525Z",
      content:
        "For Zambia's population, its football team was a beacon of hope.\r\nThe price of copper, the country's primary export, had almost halved in the past four years, tanking the economy. Income had dropped … [+5188 chars]",
    },
    {
      source: {
        id: "four-four-two",
        name: "FourFourTwo",
      },
      author: "Callum Rice-Coates",
      title:
        "How does Cole Palmer's remarkable nine-year contract compare to football's longest-ever deals?",
      description:
        "The Chelsea star has committed his long-term future to the club",
      url: "https://www.fourfourtwo.com/news/cole-palmer-nine-year-contract-chelsea",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/jGDeos5ZYBw9DMfnuyux3U-1200-80.jpg",
      publishedAt: "2024-08-14T15:00:00Z",
      content:
        "Cole Palmer has signed a new nine-year contract at Chelsea, prompting bemusement and more questions around Chelsea’s ownership. The 22-year-old, who excelled at Stamford Bridge last season after his … [+2744 chars]",
    },
    {
      source: {
        id: "fox-sports",
        name: "Fox Sports",
      },
      author: null,
      title:
        "National Football League\n     <!----> \n        Five potential Cowboys picks to track at the NFL Draft Combine\n       \n      1 hour ago",
      description: null,
      url: "http://www.foxsports.com/stories/nfl/five-potential-cowboys-picks-to-track-at-the-nfl-draft-combine",
      urlToImage: null,
      publishedAt: "2024-02-29T18:37:22.5746516Z",
      content: null,
    },
    {
      source: {
        id: "bleacher-report",
        name: "Bleacher Report",
      },
      author: "David Kenyon",
      title: "Unique Stats from the 2023 College Football Regular Season",
      description:
        "Numbers are an integral part of college football. Whether you're previewing games, ranking teams or picking an award winner, statistics help shape the story.…",
      url: "https://bleacherreport.com/articles/10100739-unique-stats-from-the-2023-college-football-regular-season",
      urlToImage:
        "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1702319871/sdx1wjlqkcqz3anqfabp.jpg",
      publishedAt: "2023-12-12T12:00:00Z",
      content:
        "Zach Bolinger/Icon Sportswire via Getty Images\r\nSpeaking of Iowa...\r\nWhat makes the Hawkeyes' stellar defensive season even more impressive is how much the team desperately needed it.\r\nAmong the many… [+711 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
      description:
        "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
      urlToImage:
        "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
      publishedAt: "2020-04-27T07:20:43Z",
      content:
        "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]",
    },
  ];

  constructor() {
    super();
    this.state = {
      articleClass: this.articles,
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=7edfd5861d33403f9c400df9f636410a&page=1&pageSize=20";
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articleClass: parseData.articles,
      totalResults: parseData.totalResults,
    });
  }

  hendelPrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=7edfd5861d33403f9c400df9f636410a&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      page: this.state.page - 1,
      articleClass: parseData.articles,
    });
  };

  hendelNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {

    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=7edfd5861d33403f9c400df9f636410a&page=${
        this.state.page + 1
      }&pageSize=20`;
      let data = await fetch(url);
      let parseData = await data.json();
      console.log(parseData);
      this.setState({
        page: this.state.page + 1,
        articleClass: parseData.articles,
      });
    }
  };

  render() {
    return (
      <>
        <div className="container my-5">
          <h2>New - Top headlines</h2>
          <div className="row">
            {this.state.articleClass.map((element) => {
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
