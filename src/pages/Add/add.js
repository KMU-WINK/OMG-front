import React from 'react';
import * as style from './styles';
import Footer from "../../components/Footer/footer";
import View from '../../components/View/view';
import Banner from '../../components/Banner/banner';
import BottleBanner from '../../components/Banner/bottleBanner';

function Add(props) {

    return (
        <style.Wrap>
            <style.Top>
                <img src={process.env.PUBLIC_URL + '/images/Main/notiIcon.svg'}/>
                <img src={process.env.PUBLIC_URL + '/images/Main/myIcon.svg'}/>
            </style.Top>
            <style.Top2>
                <h1>{props.name}님 안녕하세요<br /> 공병 등록을 시작해 볼까요? </h1>
            </style.Top2>
            <View contents={'여기를 눌러 수거받을 주소를 입력해주세요'} />
            <style.Wrap2>
                <style.title><h1>어떤 종류의 공병을 가지고 있나요?</h1></style.title>
                <style.banners>
                    <BottleBanner btnName={['소주병',<br />,'20병']}/>
                    <BottleBanner btnName={['맥주병',<br />,'20병']}/>
                    <BottleBanner btnName={['기타',<br />,'20병']}/>
                </style.banners>
                <style.title><h1>공병의 상태를 확인해주세요</h1></style.title>
                <View contents={'모든 공병 내부에 이물질이 없습니다'} />
                <View contents={'모든 공병에 깨진 부분이 없습니다'} />
                <style.title><h1>공병 사진을 올려주세요</h1></style.title>
            </style.Wrap2>
            <Footer />
        </style.Wrap>
    );
}

export default Add;
