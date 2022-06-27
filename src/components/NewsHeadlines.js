import React, { Component } from "react";
// in class based components use props->this.props state ->this.state
// do add render method in the class extending Component class

export class NewsHeadlines extends Component {
    render() {
    let {title,description,urlToImage,url,author,publishedAt}=this.props;
    return (
      <>


<div className="jumbotron" style={{backgroundColor: "#5e37b13b"}}>
  <h1 className="display-4">{title}...</h1>
<img src={urlToImage} className="card-img-top" alt="..."/>
  <p className="lead">By {author} on {new Date(publishedAt).toGMTString()}</p>
  <hr className="my-2"/>
  <p>{description}...</p>
  <p className="lead">
    <a href={url} className="btn btn-dark">Read more</a>
  </p>
</div>

 </>
    );
  }
}

export default NewsHeadlines;
