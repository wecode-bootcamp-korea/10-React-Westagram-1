import React from "react";

class Comment extends React.Component {
  state = {
    comment: "",
    comments: [],
    btn: "게시",
  };
  num = 0;

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      comment: value,
    });
  };

  handleKeyPress = (e) => {
    const { comment } = this.state;
    if (e.key === "Enter" && comment.length > 0) {
      return this.handleComment();
    }
  };

  handleComment = () => {
    const { comment, comments } = this.state;
    this.setState({
      comments: comments.concat({
        num: this.num,
        comment: comment,
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
    const { comment, comments, btn } = this.state;
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
            value={comment}
            onChange={handleChange}
            onKeyUp={handleKeyPress}
            type="text"
            className="comment__text"
            placeholder="댓글 달기..."
          />
          <button
            onClick={
              !comment
                ? (e) => {
                    alert("댓글 입력 내용이 없습니다!");
                  }
                : handleComment
            }
            className={
              comment.length > 1
                ? "comment__post-btn-clicked"
                : "comment__post-btn"
            }
          >
            {btn}
          </button>
        </div>
      </>
    );
  }
}

export default Comment;
