import React from 'react';
import {Col} from './styles';
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Input from "../../components/Input/input";
import FullButton from "../../components/Button/fullButton";


function FindEmail() {

    const GetEmail = () => {
        alert("문자를 확인해 주세요 !")
    }

    return (
        <>
            <Header title={'이메일 찾기'}/>
            <Col wrap={true}>
                <Input title={'이름'}/>
                <Input title={'전화번호'}/>
                <FullButton btnName={'이메일 문자로 받기'} onClick={GetEmail}/>
            </Col>
            <Footer />
        </>
    );
}

export default FindEmail;
