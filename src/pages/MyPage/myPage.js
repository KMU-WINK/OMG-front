import React from 'react';
import * as style from './styles';
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";

function MyPage(props) {

    return (
        <style.Wrap>
            <Header title={'마이페이지'}/>
            My Page
            <Footer />
        </style.Wrap>
    );
}

export default MyPage;
