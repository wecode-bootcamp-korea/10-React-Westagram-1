import React from "react";

import "./Feeds.scss";

class Feed extends React.Component {
  render() {
    return (
      <div className="Main__feeds-wrap_JY">
        <div className="main__top-story">
          <div className="story__column">
            <div className="story__user">
              <div className="story__profile-border">
                <img
                  alt="story__profile"
                  className="story__profile-photo"
                  src="/images/yoonjiyoung/profile2.jpg"
                />
              </div>
            </div>
            <div className="story__title">
              <span className="story__id">voohje</span>
              <br />
            </div>
          </div>
          <div className="story__column">
            <div className="story__user">
              <div className="story__profile-border">
                <img
                  alt="story__profile"
                  className="story__profile-photo"
                  src="/images/yoonjiyoung/profile.JPG"
                />
              </div>
            </div>
            <div className="story__title">
              <span className="story__id">bo_you_ng</span>
              <br />
            </div>
          </div>
          <div className="story__column">
            <div className="story__user">
              <div className="story__profile-border">
                <img
                  alt="story__profile"
                  className="story__profile-photo"
                  src="/images/yoonjiyoung/profile3.jpg"
                />
              </div>
            </div>
            <div className="story__title">
              <span className="story__id">cho_puke</span>
              <br />
            </div>
          </div>
          <div className="story__column">
            <div className="story__user">
              <div className="story__profile-border">
                <img
                  alt="story__profile"
                  className="story__profile-photo"
                  src="/images/yoonjiyoung/profile4.jpg"
                />
              </div>
            </div>
            <div className="story__title">
              <span className="story__id">muzmuu</span>
              <br />
            </div>
          </div>
          <div className="story__column">
            <div className="story__user">
              <div className="story__profile-border">
                <img
                  alt="story__profile"
                  className="story__profile-photo"
                  src="/images/yoonjiyoung/profile10.jpg"
                />
              </div>
            </div>
            <div className="story__title">
              <span className="story__id">lemon</span>
              <br />
            </div>
          </div>
          <div className="story__column">
            <div className="story__user">
              <div className="story__profile-border">
                <img
                  alt="story__profile"
                  className="story__profile-photo"
                  src="/images/yoonjiyoung/profile16.jpg"
                />
              </div>
            </div>
            <div className="story__title">
              <span className="story__id">griong</span>
              <br />
            </div>
          </div>
          <div className="story__column">
            <div className="story__user">
              <div className="story__profile-border">
                <img
                  alt="story__profile"
                  className="story__profile-photo"
                  src="/images/yoonjiyoung/profile15.jpg"
                />
              </div>
            </div>
            <div className="story__title">
              <span className="story__id">tokkiko</span>
              <br />
            </div>
          </div>
          <div className="story__column">
            <div className="story__user">
              <div className="story__profile-border">
                <img
                  alt="story__profile"
                  className="story__profile-photo"
                  src="/images/yoonjiyoung/profile11.jpg"
                />
              </div>
            </div>
            <div className="story__title">
              <span className="story__id">watermelon</span>
              <br />
            </div>
          </div>
          <div className="story__column">
            <div className="story__user">
              <div className="story__profile-border">
                <img
                  alt="story__profile"
                  className="story__profile-photo"
                  src="/images/yoonjiyoung/profile3.jpg"
                />
              </div>
            </div>
            <div className="story__title">
              <span className="story__id">watermelon</span>
              <br />
            </div>
          </div>
          <div className="story__column">
            <div className="story__user">
              <div className="story__profile-border">
                <img
                  alt="story__profile"
                  className="story__profile-photo"
                  src="/images/yoonjiyoung/profile13.jpg"
                />
              </div>
            </div>
            <div className="story__title">
              <span className="story__id">watermelon</span>
              <br />
            </div>
          </div>
        </div>
        <article className="main__feed">
          <div className="feed__user">
            <div className="user__profile">
              <div className="user__profile-top">
                <img
                  alt="user__profile"
                  className="user__profile-photo"
                  src="/images/yoonjiyoung/profile.JPG"
                />
                <div className="user__id">
                  <span className="user__name">yojuyoon</span>
                  <br />
                  <span className="user__location">Seoul,KR</span>
                </div>
              </div>
              <img
                alt="profile__info"
                className="profile__info"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
              />
            </div>
          </div>
          <div className="feed__photo">
            <img
              alt="photo__post"
              className="photo__post"
              src="/images/yoonjiyoung/feed__photo.png"
            />
          </div>
          <div className="feed__interactive">
            <div className="interactive__icon">
              <svg
                aria-label="Unlike"
                className="feed__icon-heart"
                fill="#ed4956"
                stroke="none;"
                height="24"
                viewBox="0 0 48 48"
                width="24"
              >
                <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
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
                alt="like__profile"
                className="like-profile__photo"
                src="/images/yoonjiyoung/profile11.jpg"
              />
            </div>
            <span className="like__people">
              <span className="like-id">yojuyoon</span>님 외
              <span className="like-num">33명</span>이 좋아합니다
            </span>
          </div>
          <div className="feed__statusTxt">
            <span className="user__name">yojuyoon</span>
            <p className="statusTxt">
              정말 정말 맛있는 레몬 말차 갸또 위에 딸기 이것은~녹차맛이 나면서
              레몬맛도 나지만 딸기를 먹으면 또 딸기맛이 나지~
            </p>
            <button className="statusTxt__more">더보기</button>
          </div>
          <span className="time__text">54분전</span>
          <ul className="js-feedCommentList"></ul>
          <form className="feed__comment">
            <input
              type="text"
              className="comment__text"
              placeholder="댓글 달기..."
            />
            <button className="comment__post-btn">게시</button>
          </form>
        </article>
        <article className="main__feed">
          <div className="feed__user">
            <div className="user__profile">
              <div className="user__profile-top">
                <img
                  className="user__profile-photo"
                  alt="user__profile"
                  src="/images/yoonjiyoung/profile3.jpg"
                />
                <div className="user__id">
                  <span className="user__name">midorhee</span>
                  <br />
                  <span className="user__location">Seoul,KR</span>
                </div>
              </div>
              <img
                alt="profile__info"
                className="profile__info"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
              />
            </div>
          </div>
          <div className="feed__photo">
            <img
              alt="photo__post"
              className="photo__post"
              src="/images/yoonjiyoung/profile2.jpg"
            />
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
                src="/images/yoonjiyoung/profile3.jpg"
              />
            </div>
            <span className="like__people">
              <span className="like-id">limmmye</span>님 외
              <span className="like-num">53명</span>이 좋아합니다
            </span>
          </div>
          <div className="feed__statusTxt">
            <span className="user__name">midorhee</span>
            <p className="statusTxt">
              이것은 정말정말 맛있는 크림 까르보나라이고 친구가 만든거를
              불펌해왔다~~~
            </p>
            <button className="statusTxt__more">더보기</button>
          </div>
          <span className="time__text">54분전</span>
          <ul className="js-feedCommentList"></ul>
          <form className="feed__comment">
            <input
              type="text"
              className="comment__text"
              placeholder="댓글 달기..."
            />
            <button className="comment__post-btn">게시</button>
          </form>
        </article>
        <article className="main__feed">
          <div className="feed__user">
            <div className="user__profile">
              <div className="user__profile-top">
                <img
                  alt="user__profile"
                  className="user__profile-photo"
                  src="/images/yoonjiyoung/profile2.JPG"
                />
                <div className="user__id">
                  <span className="user__name">casa__shop</span>
                  <br />
                  <span className="user__location">Seoul,KR</span>
                </div>
              </div>
              <img
                alt="profile__info"
                className="profile__info"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
              />
            </div>
          </div>
          <div className="feed__photo">
            <img
              alt="photo__post"
              className="photo__post"
              src="/images/yoonjiyoung/profile9.jpg"
            />
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
                src="/images/yoonjiyoung/profile5.jpg"
              />
            </div>
            <span className="like__people">
              <span className="like-id">fifielekf</span>님 외
              <span className="like-num">154명</span>이 좋아합니다
            </span>
          </div>
          <div className="feed__statusTxt">
            <span className="user__name">casa__shop</span>
            <p className="statusTxt">
              SOLD Beautiful shell glass box, $40 + shipping. DM email and zip
              code to purchase. *100% of proceeds in tonight’s instagram sale
              will go to BLM organizations mentioned in our last post*
            </p>
            <button className="statusTxt__more">더보기</button>
          </div>
          <span className="time__text">54분전</span>
          <ul className="js-feedCommentList"></ul>
          <form className="feed__comment">
            <input
              type="text"
              className="comment__text"
              placeholder="댓글 달기..."
            />
            <button className="comment__post-btn">게시</button>
          </form>
        </article>
      </div>
    );
  }
}

export default Feed;
