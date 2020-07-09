import React from 'react';
import '../../../Styles/common.scss';
import Nav from './Components/Nav/Nav';
import Feed from './Components/Feeds/Feeds';
import MainRight from './Components/MainRight/MainRight';

class Main extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <main>
          <div className="main-container">
            <Feed />
            <MainRight />
          </div>
        </main>
      </>
    );
  }
}

export default Main;
