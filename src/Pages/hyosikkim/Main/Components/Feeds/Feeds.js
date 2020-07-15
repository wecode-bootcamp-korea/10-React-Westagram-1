import React from 'react';
import Feed from './Feed/Feed';
import './Feeds.scss';

class Feeds extends React.Component {
  render() {
    return (
      <div className="Feeds_KHS">
        {Array(6)
          .fill()
          .map((_, i) => {
            return <Feed key={i} />;
          })}
      </div>
    );
  }
}

export default Feeds;
