import React, {useState} from 'react';
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import Noti from "../../components/Notification/Noti";
import {Button, Wrap} from "./styles";

function Notification() {
    const [del, setDel] = useState(false);

    const HandleNotification = () => {
        setDel(true);
    }

    const DeleteNotification = () => {
        alert("알림을 삭제했습니다.");
        setDel(false);
    }


    return (
        <Wrap>
            <Header title={'알림'} onClick={HandleNotification}/>
            <div>
                <Noti del={del}/>
                <Noti del={del}/>
                <Noti del={del}/>
            </div>
            {
                del?
                    <Button onClick={DeleteNotification}>
                        <img src={process.env.PUBLIC_URL + '/images/Common/delete.svg'}/>
                    </Button>
                    :null
            }
            <Footer />
        </Wrap>
    );
}

export default Notification;
