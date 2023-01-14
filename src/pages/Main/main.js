import React from 'react';
import * as style from './styles';
import Footer from "../../components/Footer/footer";
import View from '../../components/View/view';
import VerticalButton from '../../components/Button/verticalButton';
import Banner from '../../components/Banner/banner';
import {useNavigate} from "react-router";

function Main(props) {

    const navigate = useNavigate();

    return (
        <style.Wrap>
            <style.Top>
                <img src={process.env.PUBLIC_URL + '/images/Main/myIcon.svg'} onClick={()=>navigate("/mypage")}/>
                <img src={process.env.PUBLIC_URL + '/images/Main/notiIcon.svg'} onClick={()=>navigate("/noti")}/>
            </style.Top>
            <style.Top2>
                <h1>이유빈님 안녕하세요<br /> 5병의 공병을 재활용 했어요 </h1>
            </style.Top2>
            <View contents={[<b style={{color: "#009800"}}>3병</b>, '의 공병을 수거하고 ',<b style={{color: "#009800"}}>2병</b>,'의 공병을 등록했어요']} />
            <style.Wrap2>
                <style.buttons>
                    <VerticalButton content1={['근처 공병을',<br />,'수거해 주세요']}
                        content2={process.env.PUBLIC_URL + '/images/Main/bycicleIcon.svg'}
                        content3={'수거하기'}
                        content4={()=>navigate("/map")}/>
                    <VerticalButton content1={['공병 등록으로',<br />,'환경을 지켜요']}
                        content2={process.env.PUBLIC_URL + '/images/Main/bottlesIcon.svg'}
                        content3={'등록하기'} 
                        content4={()=>navigate("/add")} />
                    <VerticalButton content1={['원하는',<br />,'공병이 없나요?']}
                        content2={process.env.PUBLIC_URL + '/images/Main/commentsIcon.svg'}
                        content3={'커뮤니티'} 
                        content4={()=>navigate("/board")} />
                </style.buttons>
                <style.title>
                    <h1>커뮤니티</h1>
                    <span onClick={()=>navigate("/board")}>더보기▶</span>
                </style.title>
                <style.box>
                    <style.community>
                        커뮤니티 글 1 제목입니다.
                    </style.community>
                    <style.community>
                        커뮤니티 글 2 제목입니다.
                    </style.community>
                    <style.community>
                        커뮤니티 글 3 제목입니다.
                    </style.community>
                </style.box>
                <style.title>
                    <h1>환경 캠페인</h1>
                    <span>더보기▶</span>
                </style.title>
                <style.banners>
                    <Banner style1 btnName={['2022 서울', <br />, '환경 캠페인']}/>
                    <Banner style2 btnName={['2023 부산', <br />, '환경 캠페인']}/>
                    <Banner style3 btnName={['2024 대전', <br />, '환경 캠페인']}/>
                </style.banners>
            </style.Wrap2>
            <Footer />
        </style.Wrap>
    );
}

export default Main;
