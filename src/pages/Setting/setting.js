import React from 'react';
import * as style from './styles';
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";

function Setting(props) {

    return (
        <style.Wrap>
            <Header title={'세팅'}/>
            Setting
            <Footer />
        </style.Wrap>
    );
}

export default Setting;
