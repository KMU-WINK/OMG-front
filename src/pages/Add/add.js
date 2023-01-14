import React, { useState, useRef } from 'react';
import * as style from './styles';
import Footer from "../../components/Footer/footer";
import BottleBanner from '../../components/Banner/bottleBanner';
import Modal1 from '../../components/Modal/modal1';
import Modal2 from '../../components/Modal/modal2';
import Modal4 from '../../components/Modal/modal4';
import Postcode from "react-daum-postcode";
import Input from '../../components/Input/input';
import WhiteFullButton from '../../components/Button/whiteFullButton';
import heic2any from "heic2any";
import GreenFullButton from '../../components/Button/greenFullButton';
import {useNavigate} from "react-router";

function Add(props) {

    const navigate = useNavigate();

    const [ModalOpen, setModalOpen] = useState(false); //주소 입력 모달
    const openModal = () => {
        setModalOpen(true);
        setAddressDetail("");
    }
    const closeModal = () => setModalOpen(false);

    const [Modal2Open, setModal2Open] = useState(false); //주소 찾기(다음) 모달
    const openModal2 = () => setModal2Open(true);
    const closeModal2 = () => setModal2Open(false);

    const [Modal3Open, setModal3Open] = useState(false); //주소 입력 오류 모달
    const openModal3 = () => setModal3Open(true);
    const closeModal3 = () => setModal3Open(false);

    const [sojuModalOpen, setSojuModalOpen] = useState(false) //소주 모달
    const openSojuModal = () => setSojuModalOpen(true);
    const closeSojuModal = () => setSojuModalOpen(false);

    const [beerModalOpen, setBeerModalOpen] = useState(false) //맥주 모달
    const openBeerModal = () => setBeerModalOpen(true);
    const closeBeerModal = () => setBeerModalOpen(false);

    const [etcModalOpen, setEtcModalOpen] = useState(false) //기타 모달
    const openEtcModal = () => setEtcModalOpen(true);
    const closeEtcModal = () => setEtcModalOpen(false);

    const [bottleErrorModalOpen, setBottleErrorModal] = useState(false) //병 오류 모달
    const openBottleErrorModal = () => setBottleErrorModal(true);
    const closeBottleErrorModal = () => setBottleErrorModal(false);

    const [address, setAddress] = useState(''); // 주소
    const [addressDetail, setAddressDetail] = useState(''); // 상세주소
    const [fullAddress, setFullAddress] = useState('여기를 눌러 수거받을 주소를 입력해주세요'); //주소 + 상세주소

    const onCompletePost = (data) => {
        let addr = data.roadAddress; //주소 변수 (도로명 주소 가져옴)
        let extraAddr = ''; // 참고항목 변수
    
        if (data.bname !== '') { // 법정동명이 있을 경우 추가한다. (법정리는 제외)
            extraAddr += data.bname;
        }
        if (data.buildingName !== '') { // 건물명이 있을 경우 추가한다.
            extraAddr += (extraAddr !== '' ? `, ${data.buildingName}` : data.buildingName);
        }
        addr += (extraAddr !== '' ? ` (${extraAddr})` : '');
    
        setAddress(addr);
        closeModal2();
      };

    const onChangeAddressDetail = (e) => setAddressDetail(e.target.value); //상세주소 상태관리

    const onClickModal = () => { //주소 입력 모달 클릭했을 때
        if (address !== '' && addressDetail !== '') {
            setFullAddress(address + ' ' + addressDetail);
            closeModal();
        }
        else {
            openModal3();
        }
    }

    const [soju, setSoju] = useState(0); //소주병
    const [beer, setBeer] = useState(0); //맥주병
    const [etc, setEtc] = useState(0); //기타

    const incSoju = (e) => { //소주병 개수 증가
        if (soju === 30) openBottleErrorModal();
        else setSoju(soju + 1);
    }
    const decSoju = (e) => { //소주병 개수 감소
        if (soju === 0) openBottleErrorModal();
        else setSoju(soju - 1);
    }

    const incBeer = (e) => { //맥주병 개수 증가
        if (beer === 30) openBottleErrorModal();
        else setBeer(beer + 1);
    }
    const decBeer = (e) => { //맥주병 개수 감소
        if (beer === 0) openBottleErrorModal();
        else setBeer(beer - 1);
    }

    const incEtc = (e) => { //기타 개수 증가
        if (etc === 30) openBottleErrorModal();
        else setEtc(etc + 1);
    }
    const decEtc = (e) => { //기타 개수 감소
        if (etc === 0) openBottleErrorModal();
        else setEtc(etc - 1);
    }

    const [check1, setCheck1] = useState([{color: "black", background: "white"}, '❎']); //공병상태 확인1
    const [check2, setCheck2] = useState([{color: "black", background: "white"}, '❎']); //공병상태 확인2
    const [check3, setCheck3] = useState([{color: "#ffffff", background: "#009800"}, '✅']); //비밀번호 존재 확인

    const setChoice1 = (e) => { //공병상태 확인1
        if(check1[1] === '❎') setCheck1([{color: "#ffffff", background: "#009800"}, '✅']);
        else setCheck1([{color: "black", background: "white"}, '❎']);
    }
    const setChoice2 = (e) => { //공병상태 확인2
        if(check2[1] === '❎') setCheck2([{color: "#ffffff", background: "#009800"}, '✅', {cursor: "pointer"}]);
        else setCheck2([{color: "black", background: "white"}, '❎']);
    }
    const setChoice3 = (e) => { //비밀번호 존재 확인
        if(check3[1] === '❎') {
            setCheck3([{color: "#ffffff", background: "#009800"}, '✅', {cursor: "pointer"}]);
            setPassword('여기를 눌러 입력해주세요')
        }
        else {
            setCheck3([{color: "black", background: "white"}, '❎', {cursor: "default"}]);
            setPassword('비밀번호 없이 출입가능');
        }
    }

    const imgRef = useRef();
    const [base64, setBase64] = useState('/images/Add/altImg.png');

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

    const [password, setPassword] = useState("여기를 눌러 입력해주세요"); //비밀번호 관련 모달 및 로직들
    const [temPassword, setTemPassword] = useState("");
    const [passwordModal, setPasswordModal] = useState(false);
    const openPasswordModal = () => {
        if(check3[1] === '✅') {
            setTemPassword(password);
            setPasswordModal(true);
            if(password === "여기를 눌러 입력해주세요") setPassword("");
        }
    }
    const closePasswordModal = () => {
        if(password === ""){
            setPassword("여기를 눌러 입력해주세요")
        }
        setPassword(temPassword);
        setPasswordModal(false);
    }
    const onChangePassword = (e) => setPassword(e.target.value);
    const onClickPasswordModal = () => {
        if(password === ""){
            setPassword("여기를 눌러 입력해주세요")
        }
        setPasswordModal(false);
    }

    const [addError, setAddError] = useState('');
    const checkAdd = () => { //공병 등록하기 모달 및 로직들
        if(fullAddress === '여기를 눌러 수거받을 주소를 입력해주세요'){
            setAddError('공병 수거받을 주소를 입력해 주세요')
            openAddErrorModal();
        }
        else if(soju === 0 && beer === 0 && etc === 0){
            setAddError('공병을 1병 이상 추가해 주세요')
            openAddErrorModal();
        }
        else if(check1[1] === '❎' || check2[1] === '❎'){
            setAddError('공병에 이물질과 깨진 부분이 없어야 돼요')
            openAddErrorModal();
        }
        else if(base64 === '/images/Add/altImg.png'){
            setAddError('공병 사진을 추가해 주세요')
            openAddErrorModal();
        }
        else if(password === '여기를 눌러 입력해주세요'){
            setAddError('공동현관 비밀번호를 입력하거나 비밀번호 없이 출입이 가능해야 돼요')
            openAddErrorModal();
        }
        else{openAddModal();}
    }
    const [addErrorModal, setAddErrorModal] = useState(false);
    const openAddErrorModal = () => setAddErrorModal(true);
    const closeAddErrorModal = () => setAddErrorModal(false);

    const [addModal, setAddModal] = useState(false);
    const openAddModal = () => setAddModal(true);
    const closeAddModal = () => {
        setAddModal(false);
        navigate("/");
    }


    return (
        <style.Wrap>
            <style.Top>
                <img src={process.env.PUBLIC_URL + '/images/Main/myIcon.svg'} onClick={()=>navigate("/mypage")}/>
                <img src={process.env.PUBLIC_URL + '/images/Main/notiIcon.svg'} onClick={()=>navigate("/noti")}/>
            </style.Top>

            <style.Top2>
                <h1>이유빈님 안녕하세요<br /> 공병 등록을 시작해 볼까요? </h1>
            </style.Top2>

            <style.Top3>
                <WhiteFullButton style={{ justifyContent: "center", fontWeight: "600", textAlign: "center"}} btnName={fullAddress} onClick={openModal}/>
            </style.Top3>

            <style.Wrap2>
                <style.title><h1>어떤 종류의 공병을 가지고 있나요?</h1></style.title>
                <style.banners>
                    <BottleBanner style1 onClick={openSojuModal} btnName={['소주병', <br />, soju, '병']}/>
                    <BottleBanner style2 onClick={openBeerModal} btnName={['맥주병', <br />, beer, '병']}/>
                    <BottleBanner style3 onClick={openEtcModal} btnName={['기타', <br />, etc, '병']}/>
                </style.banners>

                <style.title><h1>공병의 상태를 확인해주세요</h1></style.title>
                <style.choiceButtons>
                    <WhiteFullButton style={check1[0]} onClick={setChoice1} btnName={[check1[1], ' 모든 공병 내부에 이물질이 없습니다']} />
                    <WhiteFullButton style={check2[0]} onClick={setChoice2} btnName={[check2[1], ' 모든 공병에 깨진 부분이 없습니다']} />
                </style.choiceButtons>

                <style.title><h1>공병 사진을 올려주세요</h1></style.title>
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
                <style.ImgContents>
                    <label htmlFor={'uploadImg'}>
                        <style.ImgBlock>
                            <img src={base64} />
                            <img src={process.env.PUBLIC_URL + '/images/MyPage/picIcon.svg'} />
                        </style.ImgBlock>
                    </label>
                </style.ImgContents>

                <style.title><h1>공동현관 비밀번호를 입력해주세요</h1></style.title>
                <style.choiceButtons>
                    <WhiteFullButton style={check3[0]} onClick={setChoice3} btnName={[check3[1], ' 공동현관 비밀번호가 있습니다']} />
                    <WhiteFullButton style={check3[2]} btnName={[<b>공동현관 비밀번호 | </b>, password]} onClick={openPasswordModal}/>
                </style.choiceButtons>

                <style.texts>
                    <div>수거를 원하는 공병은 집 문앞에 놓아주세요</div>
                    <div>출입이 제한되는 회사, 학교, 기숙사 등의 장소나</div>
                    <div>비밀번호 오류등의 사유로 출입이 어려운 경우</div>
                    <div>부득이하게 수거가 불가능할 수 있어요</div>
                </style.texts>
                <style.bottom>
                    <GreenFullButton onClick={checkAdd} btnName={'공병 등록하기'}/>
                </style.bottom>
            </style.Wrap2>
            <Footer />

            <Modal1 open={ModalOpen} close={closeModal} header="주소 입력" //모달창 모음
            button1={closeModal} button2={onClickModal} button1Content="취소" button2Content="확인">
            <style.Input>
                <Input onClick={openModal2} title={'주소'} value={address}/>
                <Input title={'상세주소'} onChange={onChangeAddressDetail} value={addressDetail}/>
            </style.Input>
            </Modal1>

            <Modal4 open={Modal2Open} close={closeModal2} header="주소 찾기" button1={closeModal2} button1Content="취소">
            <Postcode
                style={{ width: "100%", height: "500px" }}
                onComplete={onCompletePost}
            />
            </Modal4>

            <Modal4 open={Modal3Open} close={closeModal3} header="확인해 주세요" button1={closeModal3} button1Content="확인">
            주소와 상세주소를 모두 입력해주세요
            </Modal4>

            <Modal2 open={sojuModalOpen} close={closeSojuModal} header="소주병 개수" button1={closeSojuModal} button1Content="확인">
            <style.count>
                <style.countButton onClick={decSoju}>-</style.countButton>
                소주병<br/>{soju}병
                <style.countButton onClick={incSoju}>+</style.countButton>
            </style.count>
            </Modal2>

            <Modal2 open={beerModalOpen} close={closeBeerModal} header="맥주병 개수" button1={closeBeerModal} button1Content="확인">
            <style.count>
                <style.countButton onClick={decBeer}>-</style.countButton>
                맥주병<br/>{beer}병
                <style.countButton onClick={incBeer}>+</style.countButton>
            </style.count>
            </Modal2>

            <Modal2 open={etcModalOpen} close={closeEtcModal} header="기타병 개수" button1={closeEtcModal} button1Content="확인">
            <style.count>
                <style.countButton onClick={decEtc}>-</style.countButton>
                기타<br/>{etc}병
                <style.countButton onClick={incEtc}>+</style.countButton>
            </style.count>
            </Modal2>

            <Modal4 open={bottleErrorModalOpen} close={closeBottleErrorModal} header="확인해 주세요" button1={closeBottleErrorModal} button1Content="확인">
            병의 개수는 0병에서 30병까지만 선택할 수 있어요
            </Modal4>

            <Modal1 open={passwordModal} close={closePasswordModal} header="공동현관 비밀번호 입력"
            button1={closePasswordModal} button2={onClickPasswordModal} button1Content="취소" button2Content="확인">
            <style.Input>
                <Input title={'공동현관 비밀번호'} onChange={onChangePassword} value={password}/>
                <div><b>"종 누르고 1234"</b>처럼 자세히 입력해주세요</div>
            </style.Input>
            </Modal1>

            <Modal4 open={addErrorModal} close={closeAddErrorModal} header="확인해 주세요" button1={closeAddErrorModal} button1Content="확인">
                {addError}
            </Modal4>

            <Modal4 open={addModal} close={closeAddModal} header="공병등록 완료!" button1={closeAddModal} button1Content="홈으로 돌아가기">
                공병 등록을 완료했어요!
                <br/>확인 수정 삭제는 등록내역을 확인해주세요!
            </Modal4>

        </style.Wrap>
    );
}

export default Add;
