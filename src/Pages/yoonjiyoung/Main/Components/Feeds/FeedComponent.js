import React from "react";
import Comment from "./Comment";

class FeedComponent extends React.Component {
  render() {
    const {
      feedImg,
      userId,
      content,
      likeProfile,
      likeId,
      timeAgo,
    } = this.props;
    return (
      <article className="main__feed">
        <div className="feed__user">
          <div className="user__profile">
            <div className="user__profile-top">
              <img
                alt="user__profile"
                className="user__profile-photo"
                src={this.props.userProfile}
              />
              <div className="user__id">
                <span className="user__name">{this.props.userId}</span>
                <br />
                <span className="user__location">{this.props.location}</span>
              </div>
            </div>
            <img
              alt="profile__info"
              className="profile__info"
              src={
                "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
              }
            />
          </div>
        </div>
        <div className="feed__photo">
          <img alt="photo__post" className="photo__post" src={feedImg} />
        </div>
        <div className="feed__interactive">
          <div className="interactive__icon">
            <svg
              className="feed__icon"
              fill="#262626"
              height="22"
              viewBox="0 0 48 48"
              width="22"
            >
              <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
            </svg>
            <img
              alt="feed__icon"
              className="feed__icon"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"
            />
            <img
              alt="feed__icon"
              className="feed__icon"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"
            />
          </div>
          <div className="interactive__bookmark">
            <img
              alt="feed__icon"
              className="feed__icon"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"
            />
          </div>
        </div>
        <div className="feed__like">
          <div className="like__profile">
            <img
              alt="like-profile__photo"
              className="like-profile__photo"
              src={likeProfile}
            />
          </div>
          <span className="like__people">
            <span className="like-id">{likeId}</span>님 외
            <span className="like-num">154명</span>이 좋아합니다
          </span>
        </div>
        <div className="feed__statusTxt">
          <div className="user__name">{userId}</div>
          <p className="statusTxt">{content}</p>
          <button className="statusTxt__more">더보기</button>
        </div>
        <span className="time__text">{timeAgo}</span>
        <Comment />
      </article>
    );
  }
}
export default FeedComponent;
