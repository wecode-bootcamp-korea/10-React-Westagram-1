import React, { Component } from "react";
import "./Comments.scss";

class Comments extends Component {
  constructor() {
    super();
    this.state = {
      active: false,
      deactive: false,
      comment: "",
      comments: [],
    };
  }

  num = 0;

  commentVal = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  submitComment = (e) => {
    e.preventDefault();
    const { comment, comments } = this.state;
    this.setState({
      comments: comments.concat({
        comment: comment,
        comments: comments,
        num: this.num,
      }),
      comment: "",
    });
    this.num += 1;
  };

  removeComment = (num) => {
    const { comments } = this.state;
    const nextComments = comments.filter((item) => {
      return item.num !== num;
    });
    this.setState({
      comments: nextComments,
    });
  };

  render() {
    const { commentVal, submitComment, removeComment } = this;
    const { comment, comments } = this.state;
    return (
      <div className="Comment_Kwon">
        <div className="chat">
          {comments.map((item) => {
            return (
              <div className="chat-key" key={item.num}>
                <div className="chat-view">
                  <span className="chat-user">ivorycode</span>
                  <span className="chat-up">{item.comment}</span>
                  <button
                    className="remove-btn"
                    onClick={() => removeComment(item.num)}
                  >
                    댓글 삭제
                  </button>
                </div>
                <div className="chat-like">
                  <img
                    className="chat-heart"
                    alt="heart"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                  />
                </div>
              </div>
            );
          })}
        </div>
        <p className="chat-textdate">
          <span>2020년 10월 29일</span>
        </p>
        <form
          className="comment"
          onSubmit={
            !comment
              ? (e) => {
                  e.preventDefault();
                }
              : submitComment
          }
        >
          <input
            type="text"
            className="input-box"
            name="comment"
            placeholder="댓글 달기..."
            onChange={commentVal}
            value={comment}
          />
          <button className={comment.length >= 1 ? "commentOff" : "commentOn"}>
            게시
          </button>
        </form>
      </div>
    );
  }
}

export default Comments;
