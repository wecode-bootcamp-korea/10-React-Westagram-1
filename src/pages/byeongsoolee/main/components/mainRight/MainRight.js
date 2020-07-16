import React from "react";
import "./MainRight.scss";

class MainRight extends React.Component {
    render() {
      return (
        <div className="MainRight_BS">
             <div className="mainRight">
                <div className="myProfileBox">
                        <img alt="손흥민" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/89702461_241223783579455_197774112880328704_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=zUG8_yYjX-0AX_QN54X&oh=1a6779a0f9aa2d0c7d92c73fc6608b7f&oe=5F23FB6A"/>
                        <div className="profileInfo">
                            <p>hm_son7</p>
                            <p>TottenHam Hotspur</p>
                        </div>  
                </div>
                <div className="storyBox">
                    <div className="boxHeader">
                        <p>스토리</p>
                        <p>모두보기</p>
                    </div>
                    <ul className= "storyPics">
                        <li>
                            <img alt="호날두" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/67310557_649773548849427_4130659181743046656_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=5XUcjirTLsQAX8GG-fq&oh=7fc5cbebde200b9121d65fc42bf1931f&oe=5F2699A3"/>
                            <div className="picsInfo">
                                <p>cristiano</p>
                                <p>12분전</p>
                            </div> 
                        </li>
                        <li>
                            <img alt="포그바" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/79268529_716008922482339_2268691894290612224_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=TgMMWqFI1ewAX8pdASm&oh=486e0c8b3b5ede760fec2a1167e12464&oe=5F255878"/>
                            <div className="picsInfo">
                            <p>paulpogba</p>
                            <p>13분전</p>
                            </div> 
                        </li>
                        <li>
                            <img alt="마샬" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/50910782_329216161033952_2941091719086604288_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=Gb-HP23YgxQAX89CqVY&oh=b36efaaefab3bb5d7953476d2f175484&oe=5F248EDF"/>
                            <div className="picsInfo">
                            <p>martial_9</p>
                            <p>14분전</p>
                            </div> 
                        </li>
                        <li>
                            <img alt="메시" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/43818140_2116018831763532_3803033961098117120_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=lfT7GKQyMfQAX-hD9ol&oh=dfd0b7e5a10d575880897668294cbb18&oe=5F2741F2"/>
                            <div className="picsInfo">
                            <p>leomessi</p>
                            <p>15분전</p>
                            </div> 
                        </li> 
                    </ul>     
                </div>
                <div className="recommendationBox">
                    <div className="boxHeader">
                        <p>회원님을 위한 추천</p>
                        <p>모두보기</p>
                    </div>
                    <ul className= "storyPics">
                        <li>
                            <img alt="기성용" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/43817581_107490883524844_1979684300857016320_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=D9vbJCxKwlcAX9mWArb&oh=a99d405fff3557020617b5f920962f45&oe=5F26303A"/>
                            <div className="picsInfo">
                                <p>underhiswnigs_2016_</p>
                                <p>jisung_park님 외 2명이...</p>
                            </div> 
                            <button type="text">팔로우</button>
                        </li>
                        <li>
                            <img alt="이청용" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/94889809_564719894163406_4071020296662941696_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=wuksckC3ucYAX_KyDEi&oh=2d3c4508cba78b77371d955da71f2a26&oe=5F243A00"/>
                            <div className="picsInfo">
                                <p>c.y.lee_fan_ulsan</p>
                                <p>paulpogba님 외 12명이...</p>
                            </div>
                            <button type="text">팔로우</button>
                        </li>
                        <li>
                            <img alt="이승우" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/90996525_149299759760231_1036596593182113792_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=1mYADresNrwAX-xCEYZ&oh=5a622931c32facfb20d4d3f08093b86c&oe=5F244FE8"/>
                            <div className="picsInfo">
                                <p>seungwoolee</p>
                                <p>hm_son7님 외 12명이...</p>
                            </div>
                            <button type="text">팔로우</button>
                        </li>
                    </ul>     
                </div>
                <div className="instagramInfo">
                    <p>Instagram 정보. 지원. 홍보센터. API.</p>
                    <p>채용 정보. 개인정보처리방침. 약관.</p>
                    <p>디렉터리. 프로필. 해시태그. 언어</p>
                    <p>㉿ 2019 INSTAGRAM</p>
                </div>
            </div>
        </div>
      );
    }
  }

export default MainRight; 
