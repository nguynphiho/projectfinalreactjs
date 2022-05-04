import React from "react";
import { Link } from "react-router-dom";

function Blog({ blogid,imgBg, infoBg, titleBg, desBg }) {
  return (
    <div className="blog">
      <Link to={`/blog/${blogid}`}>
        <img src={imgBg} alt="" />
      </Link>
      <Link to={`/blog/${blogid}`}>
        <span className="blog__info">{infoBg}</span>
      </Link>
      <Link to={`/blog/${blogid}`}>
        <span className="blog__title">{titleBg}</span>
      </Link>
      <p className="blog__des">{desBg}</p>
      <Link to={`/blog/${blogid}`}>
        <span className="blog__more">read more</span>
      </Link>
    </div>
  );
}

export default Blog;