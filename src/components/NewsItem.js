import React from "react";

const NewsItem = (props) => {
  let { title, description, imgurl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          position: 'absolute',
          right: '0'
        }}>
          <span className="badge rounded-pill bg-danger">{source}
          </span>
        </div>
        <img src={!imgurl ? 'https://static.foxnews.com/foxnews.com/content/uploads/2023/01/956197ac-GettyImages-88429980.jpg' : imgurl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title} </h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
          <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    </div>
  )
}
export default NewsItem