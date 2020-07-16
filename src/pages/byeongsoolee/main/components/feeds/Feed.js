import React from "react";
import "./Feed.scss";

class Feed extends React.Component {
  constructor(props) {
    super();

    this.state = {
      comments: [
        "tottenham_official wow Jisung Park is my favorite player!",
        "real_madrid_official Jisung Park is a living lenged",
      ],
      typeComment: "",
    };
  }

  textChange = (e) => {
    this.setState({
      typeComment: e.target.value,
    });
  };

  add = () => {
    const { comments, typeComment } = this.state;
    typeComment.length !== 0 &&
      this.setState({
        comments: comments.concat(`hm_son7 ` + typeComment),
        typeComment: "",
      });
  };

  handleKeyPress = (e) => {
    e.keyCode === 13 && this.add();
  };

  handleDelete = (index) => {
    const tempArr = this.state.comments.slice(0, index);
    const afterDeleteArr = this.state.comments.slice(index + 1);
    this.setState({
      comments: [...tempArr, ...afterDeleteArr],
    });
  };

  render() {
    const commentList = this.state.comments.map((typeComment, index) => {
      return (
        <li className="replyList" key={index}>
          {typeComment}
          <span className="imgList">
            <span onClick={() => this.handleDelete(index)}>삭제</span>
          </span>
        </li>
      );
    });

    return (
      <div className="Feed_BS">
        <div className="feedsContainer">
          <div className="header">
            <div className="profile">
              <img
                alt="맨유 프로필"
                src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/95389054_555222165374068_542779107667083264_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=m6OgKSZDdncAX83Bmgk&oh=ba627dce6632eb1cd73943c1624731d0&oe=5F2645D0"
              />
              <p>manchester_united</p>
            </div>
            <img
              alt="..."
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
            />
          </div>
          <div className="feedPic">
            <img
              alt="박지성 사진"
              src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/104418570_713138709525676_2431057879476108410_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=YI7DZfikd18AX8Lf6mh&oh=3c02c1a82078b7b6ffd33608a6b8b376&oe=5F232C00"
            />
          </div>
          <div className="feedLogo">
            <div className="feedLogoLeft">
              <img
                alt="하트"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              />
              <img
                alt="말풍선"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"
              />
              <img
                alt="공유"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"
              />
            </div>
            <img
              alt="북마크"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"
            />
          </div>
          <div className="feedReply">
            <div className="replyLikeTotal">
              <img
                alt="토트넘 프로필"
                src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/91813079_951055115342792_3781464304625123328_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=ctRc2X7wrHYAX9MMcfT&oh=84bfa84d58a12c228a70cada7426ba18&oe=5F24D9AF"
              />
              <p>tottenham_official님 외 7천명이 좋아합니다</p>
            </div>
            <div className="replyContent">
              <ul>{commentList}</ul>
            </div>
            <div className="replyTime">
              <p>42분 전</p>
            </div>
          </div>
          <div className="feedComment">
            <input
              type="text"
              value={this.state.typeComment}
              onChange={this.textChange}
              onKeyUp={this.handleKeyPress}
              className="commentBox"
              placeholder="댓글 달기..."
            />
            <button onClick={this.add} className="commentBtn">
              게시
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Feed;
