import React from "react";
import Story from "./Story";
import "./Feeds.scss";

class Feeds extends React.Component {
  render() {
    return (
      <article className="Feeds_YJ">
        <Story />
        <div className="feeds">
          <header>
            <div className="feed-profile-img">
              <img
                alt="wecode"
                className="wecode"
                src="http://bitly.kr/KU7jRuBbyxc"
              />
            </div>
            <div className="feeds-profile-box">
              <div className="feeds-profile-id">kimehwa</div>
              <div className="dots-box">
                <img
                  alt="dots"
                  className="dots"
                  src="http://bitly.kr/CalOachfOq6"
                />
              </div>
            </div>
          </header>
          <div className="img-box">
            <img alt="feed-img" src="/images/yeongjaeshin/feed_img.jpeg" />
            <div className="feed-icon-box">
              <div className="feed-icon-left">
                <div className="icon-box">
                  <img
                    alt="heart"
                    className="heart"
                    src="http://bitly.kr/QfGVZXIl2eV"
                  />
                </div>
                <i className="fas fa-heart fillheart"></i>
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
          </div>
          <div className="like-count">
            <p>좋아요 5개</p>
          </div>
          <div className="feed-article">
            <p className="feed-article-id">kimewha</p>
            <p className="feed-article-comment">위코드 인스타그램 클론 코딩</p>
            <p className="feed-article-hashtag">
              #위코드 #Wecode #코딩부트캠프
            </p>
          </div>
          <div className="comment"></div>
          <div className="article-time">4시간 전</div>
          <form className="comment-input">
            <input type="text" placeholder="댓글 달기..." className="input" />
            <button className="comment-btn">게시</button>
          </form>
        </div>
        <div className="feeds">
          <header>
            <div className="feed-profile-img">
              <img
                alt="wecode"
                className="wecode"
                src="http://bitly.kr/KU7jRuBbyxc"
              />
            </div>
            <div className="feeds-profile-box">
              <div className="feeds-profile-id">kimehwa</div>
              <div className="dots-box">
                <img
                  alt="dots"
                  className="dots"
                  src="http://bitly.kr/CalOachfOq6"
                />
              </div>
            </div>
          </header>
          <div className="img-box">
            <img alt="feed-img" src="/images/yeongjaeshin/feed_img.jpeg" />
            <div className="feed-icon-box">
              <div className="feed-icon-left">
                <div className="icon-box">
                  <img
                    alt="heart"
                    className="heart"
                    src="http://bitly.kr/QfGVZXIl2eV"
                  />
                </div>
                <i className="fas fa-heart fillheart"></i>
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
          </div>
          <div className="like-count">
            <p>좋아요 5개</p>
          </div>
          <div className="feed-article">
            <p className="feed-article-id">kimewha</p>
            <p className="feed-article-comment">위코드 인스타그램 클론 코딩</p>
            <p className="feed-article-hashtag">
              #위코드 #Wecode #코딩부트캠프
            </p>
          </div>
          <div className="comment"></div>
          <div className="article-time">4시간 전</div>
          <form className="comment-input">
            <input type="text" placeholder="댓글 달기..." className="input" />
            <button className="comment-btn">게시</button>
          </form>
        </div>
      </article>
    );
  }
}

export default Feeds;
