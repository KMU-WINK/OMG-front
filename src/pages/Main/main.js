import React from 'react';
import * as style from './styles';
import Footer from "../../components/Footer/footer";
import View from '../../components/View/view';
import VerticalButton from '../../components/Button/verticalButton';

function Main(props) {

    return (
        <style.Wrap>
            <style.Top>
                <img src={process.env.PUBLIC_URL + '/images/Main/notiIcon.svg'}/>
                <img src={process.env.PUBLIC_URL + '/images/Main/myIcon.svg'}/>
            </style.Top>
            <style.Top2>
                <h1>{props.name}님 안녕하세요<br /> {props.bottles}병의 공병을 재활용 했어요 </h1>
            </style.Top2>
            <style.View>
                <View contents={'3병의 공병을 수거하고 2병의 공병을 등록했어요'} />
            </style.View>
            <style.Wrap2>
                <style.buttons>
                    <VerticalButton content1={['근처 3곳에',<br />,'공병이 있어요']}
                        content2={process.env.PUBLIC_URL + '/images/Main/bycicleIcon.svg'}
                        content3={'수거하기'} />
                    <VerticalButton content1={['공병 등록하고',<br />,'환경을 지켜주세요']}
                        content2={process.env.PUBLIC_URL + '/images/Main/bycicleIcon.svg'}
                        content3={'등록하기'} />
                    <VerticalButton content1={['원하는',<br />,'공병이 없나요?']}
                        content2={process.env.PUBLIC_URL + '/images/Main/bycicleIcon.svg'}
                        content3={'커뮤니티'} />
                </style.buttons>
                <style.title>
                    <h1>커뮤니티</h1>
                    <span>더보기▶</span>
                </style.title>
            </style.Wrap2>
            <Footer />
        </style.Wrap>
    );
}

export default Main;
