import React from 'react';
import * as style from './styles';
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";

function Noti(props) {

    return (
        <style.Wrap>
            <Header title={'알림'}/>
            Notification
            <Footer />
        </style.Wrap>
    );
}

export default Noti;
