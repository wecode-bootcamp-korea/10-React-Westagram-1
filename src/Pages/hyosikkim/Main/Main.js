import React from 'react';
import Nav from './Components/Nav/Nav';
import Feed from './Components/Feeds/Feeds';
import MainRight from './Components/MainRight/MainRight';
import '../../../Styles/reset.scss';
import '../../../Styles/common.scss';
import '../../../Styles/onlyMine.scss';

class Main extends React.Component {
  render() {
    return (
      <div className="Main_KHS">
        <Nav />
        <main>
          <div className="main-container">
            <Feed />
            <MainRight />
          </div>
        </main>
      </div>
    );
  }
}

export default Main;
