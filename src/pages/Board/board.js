import React from 'react';
import * as style from './styles';
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import Card from "../../components/Card/card";

function Board(props) {

    return (
        <style.Wrap>
            <Header title={"게시판"} />
            <style.SearchContainer>
                <style.Search type={"text"} placeholder={"단어를 검색해보세요"}/>
            </style.SearchContainer>
            <style.mainTitle>내 주변 소식</style.mainTitle>
            <style.boardContent>
                <Card name={"이다은"} getCnt={3} setCnt={2} point={500}></Card>
            </style.boardContent>
            <Footer />
        </style.Wrap>
    );
}


export default Board;

