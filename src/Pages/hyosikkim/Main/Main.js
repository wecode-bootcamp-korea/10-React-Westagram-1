import React from 'react';
import Nav from './Components/Nav/Nav';
import Feeds from './Components/Feeds/Feeds';
import MainRight from './Components/MainRight/MainRight';
import '../../../Styles/onlyMine.scss';

class Main extends React.Component {
  render() {
    return (
      <div className="Main_KHS">
        <Nav />
        <main className="main-container">
          <div className="feeds-container">
            <Feeds />
          </div>
          <MainRight />
        </main>
      </div>
    );
  }
}

export default Main;
