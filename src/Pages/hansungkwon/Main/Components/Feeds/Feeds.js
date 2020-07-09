import React, { Component } from "react";
import "./Feeds.scss";
import "../../../../../Styles/common.scss";
import "../../../../../Styles/reset.scss";

class Feeds extends Component {
  render() {
    return (
      <div className="Feed_kwon">
        <article className="arc-container">
          <div className="feed-story">
            <ul>
              <li className="story-list">
                <div className="user-img">
                  <img alt="user-profile" src="/images/hansungkwon/dog.jpg" />
                </div>
                <span className="story-name">dog</span>
              </li>
            </ul>
            <ul>
              <li className="story-list">
                <div className="user-img">
                  <img alt="user-profile" src="/images/hansungkwon/dog.jpg" />
                </div>
                <span className="story-name">dog</span>
              </li>
            </ul>
            <ul>
              <li className="story-list">
                <div className="user-img">
                  <img alt="user-profile" src="/images/hansungkwon/dog.jpg" />
                </div>
                <span className="story-name">dog</span>
              </li>
            </ul>
            <ul>
              <li className="story-list">
                <div className="user-img">
                  <img alt="user-profile" src="/images/hansungkwon/dog.jpg" />
                </div>
                <span className="story-name">dog</span>
              </li>
            </ul>
            <ul>
              <li className="story-list">
                <div className="user-img">
                  <img alt="user-profile" src="/images/hansungkwon/dog.jpg" />
                </div>
                <span className="story-name">dog</span>
              </li>
            </ul>
            <ul>
              <li className="story-list">
                <div className="user-img">
                  <img alt="user-profile" src="/images/hansungkwon/dog.jpg" />
                </div>
                <span className="story-name">dog</span>
              </li>
            </ul>
            <ul>
              <li className="story-list">
                <div className="user-img">
                  <img alt="user-profile" src="/images/hansungkwon/dog.jpg" />
                </div>
                <span className="story-name">dog</span>
              </li>
            </ul>
            <ul>
              <li className="story-list">
                <div className="user-img">
                  <img alt="user-profile" src="/images/hansungkwon/dog.jpg" />
                </div>
                <span className="story-name">dog</span>
              </li>
            </ul>
            <ul>
              <li className="story-list">
                <div className="user-img">
                  <img alt="user-profile" src="/images/hansungkwon/dog.jpg" />
                </div>
                <span className="story-name">dog</span>
              </li>
            </ul>
            <ul>
              <li className="story-list">
                <div className="user-img">
                  <img alt="user-profile" src="/images/hansungkwon/dog.jpg" />
                </div>
                <span className="story-name">dog</span>
              </li>
            </ul>
            <ul>
              <li className="story-list">
                <div className="user-img">
                  <img alt="user-profile" src="/images/hansungkwon/dog.jpg" />
                </div>
                <span className="story-name">dog</span>
              </li>
            </ul>
          </div>
          <div className="feed-main">
            <header className="feed-userinfo">
              <div className="feed-userimg">
                <img alt="me" src="/images/hansungkwon/me.jpg" />
              </div>
              <ul className="feed-username">
                <li className="feed-myid">ivorycode</li>
                <li className="feed-myname">HanSung Kwon</li>
              </ul>
              <div className="feed-more">
                <img
                  alt="three-dots"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
                />
              </div>
            </header>
            <div className="content">
              <div className="content-img">
                <img alt="mycontent" src="/images/hansungkwon/pensu.jpg" />
              </div>
              <div className="content-btn">
                <div className="left-conbtn">
                  <div className="heart-btn">
                    <img
                      className="heart"
                      alt="heart"
                      src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                    />
                    <svg
                      className="fill-heart"
                      aria-label="좋아요 취소"
                      fill="#ed4956"
                      height="24"
                      viewBox="0 0 48 48"
                      width="24"
                    >
                      <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                    </svg>
                  </div>
                  <img
                    alt="balloon"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"
                  />
                  <img
                    alt="share"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"
                  />
                </div>
                <div className="right-conbtn">
                  <img
                    alt="bookmark"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"
                  />
                </div>
              </div>
            </div>
            <div className="comment-area">
              <div className="like">
                <span>좋아요 139개</span>
              </div>
              <div className="feed-text">
                <p className="feed-textinfo">
                  <span>ivorycode</span>&nbsp;
                  <span>??? : 거 대충 넘어갑시다</span>
                </p>
                <p className="feed-textdate">
                  <span>2020년 10월 29일</span>
                </p>
              </div>
              <div className="chat"></div>
              <form className="comment">
                <input
                  className="input-box"
                  type="text"
                  placeholder="댓글 달기..."
                />
                <button className="combtn">게시</button>
              </form>
            </div>
          </div>
          <div className="feed-main">
            <header className="feed-userinfo">
              <div className="feed-userimg">
                <img alt="me" src="/images/hansungkwon/me.jpg" />
              </div>
              <ul className="feed-username">
                <li className="feed-myid">ivorycode</li>
                <li className="feed-myname">HanSung Kwon</li>
              </ul>
              <div className="feed-more">
                <img
                  alt="three-dots"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
                />
              </div>
            </header>
            <div className="content">
              <div className="content-img">
                <img alt="mycontent" src="/images/hansungkwon/myfeed.jpg" />
              </div>
              <div className="content-btn">
                <div className="left-conbtn">
                  <div className="heart-btn">
                    <img
                      className="heart"
                      alt="heart"
                      src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                    />
                    <svg
                      className="fill-heart"
                      aria-label="좋아요 취소"
                      fill="#ed4956"
                      height="24"
                      viewBox="0 0 48 48"
                      width="24"
                    >
                      <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                    </svg>
                  </div>
                  <img
                    alt="balloon"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"
                  />
                  <img
                    alt="share"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"
                  />
                </div>
                <div className="right-conbtn">
                  <img
                    alt="bookmark"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"
                  />
                </div>
              </div>
            </div>
            <div className="comment-area">
              <div className="like">
                <span>좋아요 139개</span>
              </div>
              <div className="feed-text">
                <p className="feed-textinfo">
                  <span>ivorycode</span>&nbsp;
                  <span>잠을 자면 꿈을 꾸지만, 안자면 졸리다.</span>
                </p>
                <p className="feed-textdate">
                  <span>2020년 10월 29일</span>
                </p>
              </div>
              <div className="chat"></div>
              <form className="comment">
                <input
                  className="input-box"
                  type="text"
                  placeholder="댓글 달기..."
                />
                <button className="combtn">게시</button>
              </form>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default Feeds;
