import React from 'react';
import * as style from './styles';
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";

function Board(props) {

    return (
        <style.Wrap>
            <style.SearchBox/>
            <style.mainTitle>내 주변 소식</style.mainTitle>
            
            <Footer />
        </style.Wrap>
    );
}


export default Board;

