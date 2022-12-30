import React, {useState} from 'react';
import * as style from './styles';
import Header from "../../components/Header/header";
import FullButton from "../../components/Button/fullButton";
import Input from "../../components/Input/input";
import {Checkbox} from "./styles";

function Join() {

    // 전체선택, privacy policy, terms of service
    const [all, setAll] = useState(false);
    const [pp, setPP] = useState(false);
    const [ts, setTs] = useState(false);

    const [check, setCheck] = useState("");

    const checkBoxClicked = async (e) => {
        // e.preventDefault();
        if(e.target.tagName === "svg") {
            setCheck(e.target.parentElement.id);
        }
        else if(e.target.tagName === "path") {
            setCheck(e.target.parentElement.parentElement.id);
        }
        else {
            setCheck(e.target.id);
        }

    }


    return (
        <style.Wrap>
            <Header title={"회원가입"} />
            <div>
                <style.InputWrap>
                    <div>
                        <Input title={'이름'}/>
                        <Input title={'전화번호'}/>
                        <Input title={'이메일'}/>
                        <Input title={'비밀번호'}/>
                        <Input title={'비밀번호 확인'}/>
                        <hr style={{border: "2px solid #E0E0E0"}} />
                    </div>
                    <div>
                        <div>
                            <Checkbox checked={all} id={"all"} onClick={checkBoxClicked}/>
                            <span>전체 선택</span>
                        </div>
                        <div>
                            <Checkbox checked={pp} id={"pp"} onClick={checkBoxClicked}/>
                            <span>개인정보 처리방침을 확인했습니다.</span>
                        </div>
                        <div>
                            <Checkbox checked={ts} id={"ts"} onClick={checkBoxClicked}/>
                            <span>서비스 이용방침을 확인했습니다.</span>
                        </div>
                    </div>
                </style.InputWrap>
                <FullButton btnName={"회원가입 완료"} />
            </div>
        </style.Wrap>
    );
}

export default Join;
