import React, {useState} from 'react';
import * as style from './styles';
import Header from "../../components/Header/header";
import FullButton from "../../components/Button/fullButton";
import Input from "../../components/Input/input";
import {useNavigate} from "react-router";

function Join() {

    const navigate = useNavigate();

    // 전체선택, privacy policy, terms of service
    const [all, setAll] = useState(false);
    const [pp, setPP] = useState(false);
    const [ts, setTs] = useState(false);

    const [check, setCheck] = useState();

    const checkBoxClicked = async (e) => {
        await setCheck(e.target.parentNode.id);

        if( check === 'pp' ) await setPP(!pp);
        else if( check === 'ts' ) await setTs(!ts);
        else if( check === 'all' && all === true ) {
            await setPP(false);
            await setTs(false);
            await setAll(false);
        }
        else if( check === 'all' && all === false ) {
            await setPP(true);
            await setTs(true);
            await setAll(true);
        }

    }

    const [modal, setModal] = useState(false);

    const ModalClose = (e) => {
        e.preventDefault();
        setModal(false);
    }

    const Join = () => {
        alert("join")
        navigate("/login");
    }



    return (
        <style.Wrap>
            <Header title={"회원가입"} />
            {
                modal ?  <style.Modal>
                    <div>
                        <h6>개인정보 처리방침</h6>
                        <div>

                        </div>
                        <button onClick={ModalClose}>닫기</button>
                    </div>
                </style.Modal> : null
            }

            <div>
                <style.InputWrap>
                    <div>
                        <Input title={'이름'}/>
                        <Input title={'전화번호'}/>
                        <Input title={'이메일'}/>
                        <Input title={'비밀번호'}/>
                        <Input title={'비밀번호 확인'}/>
                        <hr style={{border: "1px solid #E0E0E0"}} />
                    </div>
                    <div>
                        <div>
                            <span id={"all"} onClick={checkBoxClicked}>
                                {
                                    all ?  <img src={process.env.PUBLIC_URL + '/images/Common/checkedIcon.svg'}/>
                                        :  <img src={process.env.PUBLIC_URL + '/images/Common/uncheckedIcon.svg'}/>
                                }
                            </span>
                            <span>전체 선택</span>
                        </div>
                        <div>
                            <span id={"pp"} onClick={checkBoxClicked}>
                                 {
                                     pp ?  <img src={process.env.PUBLIC_URL + '/images/Common/checkedIcon.svg'}/>
                                         :  <img src={process.env.PUBLIC_URL + '/images/Common/uncheckedIcon.svg'}/>
                                 }
                            </span>
                            <span>개인정보 처리방침을 확인했습니다.</span>
                        </div>
                        <div>
                            <span id={"ts"} onClick={checkBoxClicked}>
                                 {
                                     ts ?  <img src={process.env.PUBLIC_URL + '/images/Common/checkedIcon.svg'}/>
                                         :  <img src={process.env.PUBLIC_URL + '/images/Common/uncheckedIcon.svg'}/>
                                 }
                            </span>
                            <span>서비스 이용방침을 확인했습니다.</span>
                        </div>
                    </div>
                </style.InputWrap>
                <FullButton btnName={"회원가입 완료"} onClick={Join} />
            </div>
        </style.Wrap>
    );
}

export default Join;
