import React, {useState, useRef} from 'react';
import heic2any from "heic2any";
import * as style from './styles';
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import {useNavigate} from "react-router";

function MyPage(props) {

    const navigate = useNavigate();

    const imgRef = useRef();
    const [base64, setBase64] = useState('');

    const upload = async e => {
        let file = imgRef.current.files[0];
        const fileName = file.name.split('.')[1].toLowerCase(); //확장자명 체크를 위해 소문자 변환 HEIC, heic
        if (fileName === 'heic') {
            let blob = file;
            await heic2any({ blob: blob, toType: 'image/jpeg' })
                .then(function (resultBlob) {
                    file = new File([resultBlob], file.name.split('.')[0] + '.jpg', {
                        type: 'image/jpeg',
                        lastModified: new Date().getTime(),
                    });
                    reader.readAsDataURL(file);
                })
                .catch(function (x) {
                    console.log(x);
                });
        }
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setBase64(reader.result);
        };
    };

    return (
        <style.Wrap>
            <Header title={'마이페이지'}/>
            <input
                style={{ display: 'none' }}
                accept="image/*, image/heic"
                id="uploadImg"
                name="img_url"
                type="file"
                content_type="multipart/form-data"
                ref={imgRef}
                onChange={upload}
            />
            <style.FirstContents>
                <label htmlFor={'uploadImg'}>
                    <style.ImgBlock>
                        <img src={base64} />
                        <img src={process.env.PUBLIC_URL + '/images/MyPage/picIcon.svg'} />
                    </style.ImgBlock>
                </label>
                <div>
                    <span>나의 등급은</span>
                    <span>멋쟁이 지구 지킴이</span>
                    <span>입니다.</span>
                </div>
                <style.RecordBlock>
                    <div onClick={()=> navigate('/registration')}>
                        <span>등록내역</span>
                        <span>28 건</span>
                    </div>
                    <div>
                        <span>수거내역</span>
                        <span>4 건</span>
                    </div>
                    <div>
                        <span>찜내역</span>
                        <span>123 건</span>
                    </div>
                </style.RecordBlock>
            </style.FirstContents>
            <style.SecondContents>
                <style.Block color={"#009800"}>
                    <span>공병지수</span>
                    <span>
                        <span>1320</span>
                        <span>ml</span>
                    </span>
                </style.Block>
                <style.Block color={"#E0E0E0"}>
                    <span>제한한 공병지수</span>
                    <span>
                        <span>400</span>
                        <span>ml</span>
                    </span>
                </style.Block>
                <style.Block>
                    <span>획득한 뱃지</span>

                </style.Block>
            </style.SecondContents>
            <Footer />
        </style.Wrap>
    );
}

export default MyPage;
