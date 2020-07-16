import React from "react";
import "./Right.scss";

class Right extends React.Component {
  constructor() {
    super();
    this.state = {
      recommendData: [],
    };
  }

  componentDidMount() {
    this.getDatas();
  }

  getDatas = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) =>
        this.setState({
          recommendData: result,
        })
      );
  };

  render() {
    const { recommendData } = this.state;
    return (
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
            {recommendData.map((item) => {
              return (
                <div key={item.id}>
                  <div className="recommend-profile-container">
                    <div className="recommend-profile-img-box">
                      <img
                        alt="recommend-profile-img"
                        src={`https://robohash.org/${item.id}?set=set2&size=180x180`}
                      />
                    </div>
                    <ul className="recommend-profile">
                      <li className="recommend-profile-id">{item.username}</li>
                      <li className="recommend-profile-introduce">
                        회원님을 팔로우 합니다
                      </li>
                    </ul>
                    <button>팔로우</button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="main-feed-right-copyright">
            <p>
              <a href="https://about.instagram.com/">소개</a> ・{" "}
              <a href="https://help.instagram.com/">도움말</a> ・{" "}
              <a href="https://about.instagram.com/blog/">홍보 센터</a> ・{" "}
              <a href="https://www.instagram.com/developer/">API</a> ・{" "}
              <a href="https://www.instagram.com/about/jobs/">채용 정보</a> ・{" "}
              <a href="https://help.instagram.com/519522125107875">
                개인정보처리방침
              </a>{" "}
              ・ <br />
              <a href="https://help.instagram.com/581066165581870">
                약관
              </a> ・{" "}
              <a href="https://www.instagram.com/explore/locations/">위치</a> ・{" "}
              <a href="https://www.instagram.com/directory/profiles/">
                인기 계정
              </a>{" "}
              ・{" "}
              <a href="https://www.instagram.com/directory/hashtags/">
                해시태그
              </a>{" "}
              ・{" "}
              <span>
                언어
                <select aria-label="표시 언어 변경" className="language">
                  <option value="af">Afrikaans</option>
                  <option value="cs">Čeština</option>
                  <option value="da">Dansk</option>
                  <option value="de">Deutsch</option>
                  <option value="el">Ελληνικά</option>
                  <option value="en">English</option>
                  <option value="es">Español (España)</option>
                  <option value="es-la">Español</option>
                  <option value="fi">Suomi</option>
                  <option value="fr">Français</option>
                  <option value="id">Bahasa Indonesia</option>
                  <option value="it">Italiano</option>
                  <option value="ja">日本語</option>
                  <option value="ko">한국어</option>
                  <option value="ms">Bahasa Melayu</option>
                  <option value="nb">Norsk</option>
                  <option value="nl">Nederlands</option>
                  <option value="pl">Polski</option>
                  <option value="pt-br">Português (Brasil)</option>
                  <option value="pt">Português (Portugal)</option>
                  <option value="ru">Русский</option>
                  <option value="sv">Svenska</option>
                  <option value="th">ภาษาไทย</option>
                  <option value="tl">Filipino</option>
                  <option value="tr">Türkçe</option>
                  <option value="zh-cn">中文(简体)</option>
                  <option value="zh-tw">中文(台灣)</option>
                  <option value="bn">বাংলা</option>
                  <option value="gu">ગુજરાતી</option>
                  <option value="hi">हिन्दी</option>
                  <option value="hr">Hrvatski</option>
                  <option value="hu">Magyar</option>
                  <option value="kn">ಕನ್ನಡ</option>
                  <option value="ml">മലയാളം</option>
                  <option value="mr">मराठी</option>
                  <option value="ne">नेपाली</option>
                  <option value="pa">ਪੰਜਾਬੀ</option>
                  <option value="si">සිංහල</option>
                  <option value="sk">Slovenčina</option>
                  <option value="ta">தமிழ்</option>
                  <option value="te">తెలుగు</option>
                  <option value="vi">Tiếng Việt</option>
                  <option value="zh-hk">中文(香港)</option>
                  <option value="bg">Български</option>
                  <option value="fr-ca">Français (Canada)</option>
                  <option value="ro">Română</option>
                  <option value="sr">Српски</option>
                  <option value="uk">Українська</option>
                </select>
              </span>
            </p>
            <p>© 2020 INSTAGRAM FROM FACEBOOK</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Right;
