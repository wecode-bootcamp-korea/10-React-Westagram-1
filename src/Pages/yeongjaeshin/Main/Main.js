import React from "react";
import Nav from "../../yeongjaeshin/Main/Components/Nav/Nav";
import Feeds from "../Main/Components/Feeds/Feeds";
import "./main.scss";
import "../../../Styles/common.scss";

class Main extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <main>
          <Feeds />
          <div className="right-fix">
            <div className="main-feed-right">
              <div className="main-feed-right-profile">
                <div className="right-profile-img-box">
                  <img
                    alt="right-profile-img"
                    src="/images/yeongjaeshin/profile.jpg"
                  />
                </div>
                <ul className="right-profile">
                  <li className="right-profile-id">__masancityboy</li>
                  <li className="right-profile-introduce">sʜɪɴ ʏᴇᴏɴɢ ᴊᴀᴇ</li>
                </ul>
              </div>
              <div className="recommend-container">
                <div className="right-recommend-box">
                  <span className="recommend">회원님을 위한 추천</span>
                  <span className="see-all">모두 보기</span>
                </div>
                <div className="recommend-profile-container">
                  <div className="recommend-profile-img-box">
                    <img
                      alt="recommend-profile-img"
                      src="http://bitly.kr/xcBDWWXv1hr"
                    />
                  </div>
                  <ul className="recommend-profile">
                    <li className="recommend-profile-id">realisshoman</li>
                    <li className="recommend-profile-introduce">
                      회원님을 팔로우 합니다
                    </li>
                  </ul>
                  <button>팔로우</button>
                </div>
                <div className="recommend-profile-container">
                  <div className="recommend-profile-img-box">
                    <img
                      alt="recommend-profile-img"
                      src="http://bitly.kr/jgstnMkAhEf"
                    />
                  </div>
                  <ul className="recommend-profile">
                    <li className="recommend-profile-id">nasungcityboy</li>
                    <li className="recommend-profile-introduce">
                      회원님을 팔로우 합니다
                    </li>
                  </ul>
                  <button>팔로우</button>
                </div>
                <div className="recommend-profile-container">
                  <div className="recommend-profile-img-box">
                    <img
                      alt="recommend-profile-img"
                      src="http://bitly.kr/pALfma6bNV8"
                    />
                  </div>
                  <ul className="recommend-profile">
                    <li className="recommend-profile-id">thisloop</li>
                    <li className="recommend-profile-introduce">
                      회원님을 팔로우 합니다
                    </li>
                  </ul>
                  <button>팔로우</button>
                </div>
                <div className="recommend-profile-container">
                  <div className="recommend-profile-img-box">
                    <img
                      alt="recommend-profile-img"
                      src="http://bitly.kr/KU7jRuBbyxc"
                    />
                  </div>
                  <ul className="recommend-profile">
                    <li className="recommend-profile-id">kimehwa</li>
                    <li className="recommend-profile-introduce">
                      회원님을 팔로우 합니다
                    </li>
                  </ul>
                  <button>팔로우</button>
                </div>
                <div className="recommend-profile-container">
                  <div className="recommend-profile-img-box">
                    <img
                      alt="recommend-profile-img"
                      src="http://bitly.kr/6NxEpTSJAmP"
                    />
                  </div>
                  <ul className="recommend-profile">
                    <li className="recommend-profile-id">thequiett</li>
                    <li className="recommend-profile-introduce">
                      회원님을 팔로우 합니다
                    </li>
                  </ul>
                  <button>팔로우</button>
                </div>
              </div>
              <div className="main-feed-right-copyright">
                <p>
                  소개 ・ 도움말 ・ 홍보 ・ 센터 ・ API ・ 채용 ・ 정보 ・
                  개인정보처리방침 ・ 약관 ・ 위치 ・ 인기 계정 ・ 해시태그 ・
                  언어
                </p>
                <p>© 2020 INSTAGRAM FROM FACEBOOK</p>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default Main;

// const shortenStoryProfileId = document.querySelectorAll(".story-profile-id");
// const commentForm = document.querySelectorAll(".comment-input");
// const commentBox = document.querySelectorAll(".comment");
// const commentInput = document.querySelectorAll(".input");
// const commentBtn = document.querySelectorAll(".comment-btn");
// const commentId = document.querySelector(".right-profile-id").textContent;
// const heartIcon = document.querySelectorAll(".heart");
// const fillHeart = document.querySelectorAll(".fillheart");

// function handleHeartColor() {
//   for (let i = 0; i < heartIcon.length; i++) {
//     heartIcon[i].addEventListener("click", function () {
//       heartIcon[i].style.visibility = "hidden";
//       fillHeart[i].style.visibility = "visible";
//     });
//   }
// }

// function handleFillheartColor() {
//   for (let i = 0; i < fillHeart.length; i++) {
//     fillHeart[i].addEventListener("click", function () {
//       fillHeart[i].style.visibility = "hidden";
//       heartIcon[i].style.visibility = "visible";
//     });
//   }
// }

// function handleComment() {
//   for (let i = 0; i < commentForm.length; i++) {
//     commentForm[i].addEventListener("submit", function (e) {
//       e.preventDefault();
//       const commentLi = document.createElement("li");
//       const comment = commentInput[i].value;
//       commentLi.innerHTML = `<strong>${commentId}</strong> ${comment}`;
//       commentBox[i].appendChild(commentLi);
//       commentInput[i].value = "";
//     });
//   }
// }

// function handleCommentBtnColor() {
//   for (let i = 0; i < commentBtn.length; i++) {
//     commentInput[i].addEventListener("keyup", function () {
//       if (commentInput[i].value.length >= 1) {
//         commentBtn[i].style.opacity = 1;
//       } else {
//         commentBtn[i].style.opacity = 0.5;
//       }
//     });
//   }
// }

// function shortenId() {
//   for (let i = 0; i < shortenStoryProfileId.length; i++) {
//     if (shortenStoryProfileId[i].textContent.length >= 10) {
//       shortenStoryProfileId[i].textContent =
//         shortenStoryProfileId[i].textContent.slice(0, 10) + "...";
//     }
//   }
// }

// function handleSearchIcon() {
//   const navSearch = document.querySelector(".search");
//   const searchIcon = document.querySelector(".search-icon");
//   navSearch.addEventListener(
//     "click",
//     (search = () => {
//       searchIcon.style.left = "10px";
//     })
//   );
//   navSearch.addEventListener(
//     "blur",
//     (search = () => {
//       searchIcon.style.left = "78px";
//     })
//   );
// }

// (function init() {
//   shortenId();
//   handleComment();
//   handleCommentBtnColor();
//   handleHeartColor();
//   handleFillheartColor();
//   handleSearchIcon();
// })();
