import React from "react";
import HashLoader from "react-spinners/HashLoader";
import "../Css/Loading.css";

function Loading() {
  return (
    <div className="loading">
      <HashLoader color="#4cd137" className="loadingData" size="60" />
    </div>
  );
}

export default Loading;
