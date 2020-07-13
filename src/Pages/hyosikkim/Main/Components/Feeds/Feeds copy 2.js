import React from 'react';
import Comment from './Comment/Comment';
import './Feeds.scss';

class Feeds extends React.Component {
  render() {
    return (
      <div className="Feeds_KHS">
        <article>
          <div className="article__header">
            <div className="article__header__left">
              <img
                alt="프로필사진"
                src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/92861059_2667400006814306_5574150608497147904_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=bSkRBPbPuj8AX_Is-WS&oh=1d974fc43bf6ff07c16a91d8541c5231&oe=5F27CBED"
              />
              <div className="header-id name">kkong150109</div>
            </div>
            <div className="article__header__right">
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
                alt="쓰리닷"
              />
            </div>
          </div>
          <div className="article-picture">
            <img
              src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/92268303_211469443469638_3713567905355449607_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=amm3vmsPrnkAX_8hc0m&oh=20d7bf0f07e8a2bcbd53a78d6b00de1a&oe=5F27A965"
              alt="사진"
            />
          </div>
          <div className="article__center">
            <div className="article__center-icon">
              <div className="article__center-icon__left">
                <button className="like-button article-icon">
                  <svg
                    x="50%"
                    y="50%"
                    className="changeHeart 8-yf5"
                    width="24"
                    height="24"
                    aria-label="Unlike"
                    fill="white"
                    stroke="#262626"
                    strokeWidth="3"
                    viewBox="0 0 48 48"
                  >
                    <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                  </svg>
                </button>
                <img
                  className="article-icon"
                  alt="말풍선"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"
                />
                <img
                  className="article-icon"
                  alt="공유"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"
                />
              </div>
              <div className="article__center-icon__right">
                <img
                  className="article-icon"
                  alt="북마크"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"
                />
              </div>
            </div>
            <div className="like">
              <img
                className="like-picture"
                alt="좋아요 프사"
                src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/15306097_265287643886576_1327359277756579840_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=8JPgE47nuG8AX8AVlTY&oh=7e62d317a1a0a9394becce5f490e1ec2&oe=5F2A072B"
              />
              <div className="like-who">
                <span className="name">jojungsuk</span>님<span className="name">외 234명</span>이
                좋아합니다
              </div>
            </div>
            <div className="comments">
              <div className="comment">
                <div className="comment-container">
                  <span className="name">cha</span>
                  <span className="comment-text">언니 이뻐요!!</span>
                  <span className="comment-text grey">더 보기</span>
                </div>
              </div>
              <div className="comment">
                <div className="comment-container">
                  <span className="name">heis</span>
                  <span className="comment-text">공블리~~</span>
                </div>
                <div className="comment-icon-container">
                  <button className="dot">
                    <img
                      alt="쓰리닷"
                      src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
                    />
                  </button>
                  <img
                    className="comment-heart"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                    alt="댓글하트"
                  />
                </div>
              </div>
              <Comment />
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default Feeds;
