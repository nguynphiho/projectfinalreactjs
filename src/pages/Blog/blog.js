import React from "react";
import { Link } from "react-router-dom";

function Blog({ imgBg, infoBg, titleBg, desBg }) {
  return (
    <div className="blog">
      <Link to="/detailblog">
        <img src={imgBg} alt="" />
      </Link>
      <span className="blog__info">{infoBg}</span>
      <Link to="/detailblog">
        <span className="blog__title">{titleBg}</span>
      </Link>
      <p className="blog__des">{desBg}</p>
      <Link to="/detailblog">
        <span className="blog__more">read more</span>
      </Link>
    </div>
  );
}

export default Blog;