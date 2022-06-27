import React, { Component } from "react";
import NewsHeadlines from "./NewsHeadlines.js";
import Spinner from "./Spinner.js";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  //Do write props keyword in constructor if you are using props
  constructor(props) {
    super(props);
    //calling super class constructor is must here
    //Here state is a reserved keyword
    //this here refers to the current object that will be created when the constructor is instantiated
    //this.state is the state of the new object and vice versa with the articles.
    this.state = {
      articles: [],
      page: 1,
      totalResults: 0,
      loading: false
    };

    document.title = `NewsMachine- ${this.props.category}`;
  }
  //making a combined function for the entire article
  async articleupload() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8af3b77a4b4f4f7d852754071106ba67&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    //Spinning starts here
    this.setState({
      loading: true,
    });
    this.props.progressBar(20);
    let response = await fetch(url);
    this.props.progressBar(30);
    let data = await response.json();
    this.props.progressBar(100);
    console.log(data);
    this.setState({
      articles: data.articles,
      totalResults: data.totalResults,
      loading: false,
    });
  }

  //this will automatically run after render method
  async componentDidMount() {
    this.articleupload();
  }
  fetchMoreData = async() => {
    this.setState({
      page: this.state.page + 1
    });

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8af3b77a4b4f4f7d852754071106ba67&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    this.setState({
      articles: this.state.articles.concat(data.articles)
    });
  };
  render() {
    return (
      <>
        {console.log("inside render")}
        <div className="container my-3">
          <h2 className="text-center text-secondary my-2" style={{marginTop: '104px'}}>
            LOOK AT THE MOST LATEST{" "}
            <span className="badge bg-success text-light m-1">News</span> OUT
            THERE!
          </h2>
          <hr />
          {this.state.loading&&<Spinner/>}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length != this.state.totalResults}
            loader={<Spinner />}
          >
            <div className="row justify-content-around my-3">
              {this.state.articles.map(function (elem, prop) {
                return (
                  <NewsHeadlines
                    key={prop}
                    url={elem.url}
                    title={elem.title == null ? "" : elem.title.slice(0, 80)}
                    description={
                      elem.description == null
                        ? ""
                        : elem.description.slice(0, 200)
                    }
                    urlToImage={
                      elem.urlToImage == null
                        ? "https://cdn.bmwblog.com/wp-content/uploads/2022/03/Lotus-Eletre-3.jpeg"
                        : elem.urlToImage
                    }
                    author={elem.author == null ? "Unknown" : elem.author}
                    publishedAt={elem.publishedAt}
                  />
                );
              })}
            </div>
          </InfiniteScroll>
        </div>
      </>
    );
  }
}

export default News;
