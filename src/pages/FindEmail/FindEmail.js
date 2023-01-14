import React, {useState} from 'react';
import {Col} from './styles';
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Input from "../../components/Input/input";
import FullButton from "../../components/Button/fullButton";
import {authApiController} from "../../apis/api/auth";


function FindEmail() {

    const [Form, setForm] = useState({
        name: "",
        phone: "",
    });

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...Form,
            [name]: value,
        });
    };

    const GetEmail = async () => {
        if (Form.name && Form.phone) {
            try {
                await authApiController.ForgotEmail(Form);
                alert("문자를 확인해주세요 !")
            } catch (e) {
                console.log(e)
            }
        }
        else alert("입력되지 않은 곳이 있습니다.");
    }

    return (
        <>
            <Header title={'이메일 찾기'}/>
            <Col wrap={true}>
                <Input title={'이름'} onChange={handleOnChange} name={"name"} value={Form.name}/>
                <Input title={'전화번호'} onChange={handleOnChange} name={"phone"} value={Form.phone}/>
                <FullButton btnName={'이메일 문자로 받기'} onClick={GetEmail}/>
            </Col>
            <Footer />
        </>
    );
}

export default FindEmail;
