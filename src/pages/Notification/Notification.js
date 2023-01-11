import React from 'react';
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import Noti from "../../components/Notification/Noti";

function Notification() {

    return (
        <div>
            <Header title={'알림'}/>
            <div>
                <Noti/>
                <Noti/>
                <Noti/>
            </div>
            <Footer />
        </div>
    );
}

export default Notification;
