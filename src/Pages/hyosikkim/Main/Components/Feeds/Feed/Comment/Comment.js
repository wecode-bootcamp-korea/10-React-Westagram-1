import React from 'react';
import './Comment.scss';

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      comment: '',
      comments: [],
    };
  }
  num = 0;

  changeHandler = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };

  addComment = (e) => {
    if (e.keyCode === 13 && this.state.comment.length > 0) {
      this.clickHandler();
    }
  };

  clickHandler = () => {
    const { comment, comments } = this.state;
    this.setState({
      comments: comments.concat({
        num: this.num,
        comment: comment,
      }),
      comment: '',
    });
    this.num += 1;
  };

  removeHandler = (num) => {
    const commentFilter = this.state.comments.filter((comment) => {
      return comment.num !== num;
    });
    this.setState({ comments: commentFilter });
    console.log(this.state.comment.comment);
  };

  render() {
    const { comment } = this.state;
    return (
      <>
        {this.state.comments.map((comment) => {
          return (
            <>
              <div key={comment.num} className="comment">
                <div className="comment-container">
                  <span className="name">h_sick</span>
                  <span className="comment-text">{comment.comment}</span>
                </div>
                <div className="comment-icon-container">
                  <button className="dot" onClick={() => this.removeHandler(comment.num)}>
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
              <div className="ago grey">방금 전</div>
            </>
          );
        })}
        <div className="border-bottom-line"></div>
        <div className="add-comment">
          <div className="grey">
            <input
              onChange={this.changeHandler}
              onKeyUp={this.addComment}
              type="text"
              className="add-input"
              placeholder="댓글 달기..."
              value={comment}
            />
          </div>
          <button
            onClick={this.clickHandler}
            className={comment.length > 0 ? 'add-btn-changed' : 'add-btn'}
          >
            게시
          </button>
        </div>
      </>
    );
  }
}

export default Comment;
