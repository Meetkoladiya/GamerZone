import React from "react";
import "../Css/SinglePost.css";

function SinglePost({
  image,
  name,
  about,
  publisher,
  developer,
  play,
  download,
}) {
  return (
    <div className="singlePost">
      <img src={image} />
      <div className="singlePost_data">
        <h3>{name}</h3>
        <p>{about}</p>
        <h4 className="publisher_post">
          Publisher : <span> {publisher} </span>
        </h4>
        <h4 className="developer_post">
          Developer :<span> {developer}</span>
        </h4>
        <div className="button_post">
          <a href={play} target="_blank">
            Play Now
          </a>
          <a href={download} target="_blank">
            Download
          </a>
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
