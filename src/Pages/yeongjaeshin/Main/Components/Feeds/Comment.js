import React from "react";
import "./Comment.scss";

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "__masancityboy",
      comment: "",
      comments: [],
    };
  }
  index = 0;

  handleComment = (e) => {
    const { value } = e.target;
    this.setState({
      comment: value,
    });
  };

  addComment = (e) => {
    e.preventDefault();
    const { comment, comments } = this.state;
    this.setState({
      comments: comments.concat({
        index: this.index,
        comment: comment,
      }),
      comment: "",
    });
    this.index += 1;
  };

  deleteComment = (index) => {
    const { comments } = this.state;
    const filterComment = comments.filter((item) => {
      return item.index !== index;
    });
    this.setState({
      comments: filterComment,
    });
    this.index = 0;
  };

  render() {
    const { id, comment, comments } = this.state;
    return (
      <>
        <div className="comment">
          {comments.map((item) => {
            return (
              <ul key={item.index}>
                <li>
                  <span>{id}</span>
                  <p>{item.comment}</p>
                  <button onClick={() => this.deleteComment(item.index)}>
                    삭제
                  </button>
                </li>
              </ul>
            );
          })}
        </div>
        <div className="article-time">4시간 전</div>
        <form
          className="comment-input"
          onSubmit={
            !comment
              ? (e) => {
                  e.preventDefault();
                }
              : this.addComment
          }
        >
          <input
            type="text"
            placeholder="댓글 달기..."
            className="input"
            value={comment}
            onChange={this.handleComment}
          />
          <button className={comment.length >= 1 ? "active" : "non-active"}>
            게시
          </button>
        </form>
      </>
    );
  }
}

export default Comment;
