import React from "react";
import Comment from "./Comment";
import FeedImg from "./FeedImg";
import LoaderImg from "./Loader";
import "./Feeds.scss";

class Feeds extends React.Component {
  constructor() {
    super();
    this.state = {
      feedData: [],
      feedImg: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.getDatas();
    this.getFeedImg();
  }

  getDatas = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          feedData: result,
        });
      });
  };

  getFeedImg = () => {
    fetch("https://yts.mx/api/v2/list_movies.json?sort_by=like_count")
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          feedImg: result.data.movies,
          isLoading: false,
        });
      });
  };

  render() {
    const { feedData, feedImg, isLoading } = this.state;
    return (
      <article className="Feeds_YJ">
        {feedData.map((item, i) => {
          return (
            <div className="feeds" key={item.id}>
              <header>
                <div className="feed-profile-img">
                  <img
                    alt={item.username}
                    className={item.username}
                    src={`https://robohash.org/${item.id}?set=set2&size=180x180`}
                  />
                </div>
                <div className="feeds-profile-box">
                  <div className="feeds-profile-id">{item.name}</div>
                  <div className="dots-box">
                    <img
                      alt="dots"
                      className="dots"
                      src="http://bitly.kr/CalOachfOq6"
                    />
                  </div>
                </div>
              </header>
              {isLoading ? (
                <LoaderImg />
              ) : (
                feedImg.length > 0 && (
                  <FeedImg imgSrc={feedImg[i].large_cover_image} />
                )
              )}
              <div className="feed-icon-box">
                <div className="feed-icon-left">
                  <div className="icon-box">
                    <img
                      alt="heart"
                      className="heart"
                      src="http://bitly.kr/QfGVZXIl2eV"
                    />
                    <i className="fas fa-heart fillheart"></i>
                  </div>
                  <div className="icon-box">
                    <img alt="comment" src="http://bitly.kr/XMK54UfJE0z" />
                  </div>
                  <div className="icon-box">
                    <img alt="share" src="http://bitly.kr/JVz4XZQ5ufA" />
                  </div>
                </div>
                <div className="icon-box-right">
                  <img alt="bookmark" src="http://bitly.kr/XZ50hSGSoK1" />
                </div>
              </div>

              <div className="like-count">
                <p>좋아요 5개</p>
              </div>
              <div className="feed-article">
                <p className="feed-article-id">{item.name}</p>
                <p className="feed-article-comment">
                  {item.company.catchPhrase}
                </p>
                <p className="feed-article-hashtag">
                  #위코드 #Wecode #코딩부트캠프
                </p>
              </div>
              <Comment />
            </div>
          );
        })}
      </article>
    );
  }
}

export default Feeds;
