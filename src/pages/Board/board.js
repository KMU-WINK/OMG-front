import React from 'react';
import * as style from './styles';
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";

function Board(props) {

    return (
        <style.Wrap>
            <Header title={'게시판'}/>
            Board
            <Footer />
        </style.Wrap>
    );
}

export default Board;
