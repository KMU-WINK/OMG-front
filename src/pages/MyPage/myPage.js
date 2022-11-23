import React from 'react';
import * as style from './styles';
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import {SecondContents} from "./styles";

function MyPage(props) {

    return (
        <style.Wrap>
            <Header title={'마이페이지'}/>
            <style.FirstContents>
                <style.ImgBlock>
                    <img src={""} />
                    <img src={process.env.PUBLIC_URL + '/images/MyPage/picIcon.svg'} />
                </style.ImgBlock>
                <div>
                    <span>나의 등급은</span>
                    <span>멋쟁이 지구 지킴이</span>
                    <span>입니다.</span>
                </div>
                <style.RecordBlock>
                    <div>
                        <span>등록내역</span>
                        <span>28 건</span>
                    </div>
                    <div>
                        <span>수거내역</span>
                        <span>4 건</span>
                    </div>
                    <div>
                        <span>찜내역</span>
                        <span>123 건</span>
                    </div>
                </style.RecordBlock>
            </style.FirstContents>
            <style.SecondContents>
                <div>
                    <span>공병지수</span>
                    <span>
                        <span>1320</span>
                        <span>ml</span>
                    </span>
                </div>
            </style.SecondContents>
            <Footer />
        </style.Wrap>
    );
}

export default MyPage;
