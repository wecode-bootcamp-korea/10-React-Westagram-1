import React from "react";

class Comment extends React.Component {
  state = {
    comment: "",
    comments: [],
    btn: "게시",
  };
  num = 0;

  handleChange = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter" && this.state.comment.length > 0) {
      return this.handleComment();
    }
  };

  handleComment = () => {
    this.setState({
      comments: this.state.comments.concat({
        num: this.num,
        comment: this.state.comment,
      }),
      comment: "",
    });
    this.num += 1;
  };

  handleRemove = (num) => {
    const { comments } = this.state;
    const nextComments = comments.filter((comment) => {
      return comment.num !== num;
    });
    this.setState({
      comments: nextComments,
    });
  };

  render() {
    const { handleChange, handleComment, handleRemove, handleKeyPress } = this;
    const { comments } = this.state;
    return (
      <>
        <ul className="js-feedCommentList">
          {comments.map((commentText) => {
            return (
              <li className="feedCommentList" key={commentText.num}>
                <span className="user__name">yojuyoon</span>
                {commentText.comment}
                <button
                  className="delBtn"
                  onClick={() => handleRemove(commentText.num)}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
        <div className="feed__comment">
          <input
            value={this.state.comment}
            onChange={handleChange}
            onKeyUp={handleKeyPress}
            type="text"
            className="comment__text"
            placeholder="댓글 달기..."
          />
          <button
            onClick={
              !this.state.comment
                ? (e) => {
                    alert("댓글 입력 내용이 없습니다!");
                  }
                : handleComment
            }
            className={
              this.state.comment.length > 1
                ? "comment__post-btn-clicked"
                : "comment__post-btn"
            }
          >
            {this.state.btn}
          </button>
        </div>
      </>
    );
  }
}

export default Comment;
