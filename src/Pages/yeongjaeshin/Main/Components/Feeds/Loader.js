import React from "react";
import Loader from "react-loader-spinner";
import "./Loader.scss";

class LoaderImg extends React.Component {
  render() {
    return (
      <Loader
        className="loader"
        type="Oval"
        color="#262626"
        height={40}
        width={40}
      />
    );
  }
}

export default LoaderImg;
