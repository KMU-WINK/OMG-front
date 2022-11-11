import React, {useState} from 'react';
import * as style from './styles';
import Input from "../../components/Input/input";
import FullButton from "../../components/Button/fullButton";
import StrokeButton from "../../components/Button/strokeButton";

function Login(props) {

    const [Account, setAccount] = useState(false);
    const RememberACT = (e) =>  {
        setAccount(!Account)
    }

    return (
        <style.Wrap>
            <style.LogoBlock>
                <img src={""} />
            </style.LogoBlock>
            <style.InputBlock>
                <div>
                    <Input title={'이메일'}/>
                    <Input title={'비밀번호'}/>
                </div>
                <style.LoginSetting>
                    <span>
                        <span>아이디 찾기</span>
                        <span> | </span>
                        <span>비밀번호 찾기</span>
                    </span>
                    <input type={"checkbox"} id={"rememberAccount"} onClick={RememberACT} style={{display:"none"}}/>
                    <label for={"rememberAccount"}>
                        {
                            Account ?
                                <img src={process.env.PUBLIC_URL + '/images/Common/checkedIcon.svg'}/>
                            :
                                <img src={process.env.PUBLIC_URL + '/images/Common/uncheckedIcon.svg'}/>
                        }

                        <span>자동 로그인</span>
                    </label>
                </style.LoginSetting>
            </style.InputBlock>
            <style.ButtonBlock>
                <FullButton btnName={'로그인'}/>
                <StrokeButton btnName={'회원가입'}/>
            </style.ButtonBlock>
        </style.Wrap>
    );
}

export default Login;
