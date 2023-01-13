import React, { useState, useRef } from 'react';
import * as style from './styles';
import Footer from "../../components/Footer/footer";
import BottleBanner from '../../components/Banner/bottleBanner';
import Modal1 from '../../components/Modal/modal1';
import Modal2 from '../../components/Modal/modal2';
import Modal4 from '../../components/Modal/modal4';
import Postcode from '@actbase/react-daum-postcode';
import Input from '../../components/Input/input';
import WhiteFullButton from '../../components/Button/whiteFullButton';
import heic2any from "heic2any";

function Add(props) {

    const [ModalOpen, setModalOpen] = useState(false); //주소 입력 모달
    const openModal = () => setModalOpen(true);
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

    const [check1, setCheck1] = useState([{color: "black", background: "white"}, '❎']);
    const [check2, setCheck2] = useState([{color: "black", background: "white"}, '❎']);

    const setChoice1 = (e) => {
        if(check1[1] === '❎') setCheck1([{color: "#ffffff", background: "#009800"}, '✅']);
        else setCheck1([{color: "black", background: "white"}, '❎']);
    }
    const setChoice2 = (e) => {
        if(check2[1] === '❎') setCheck2([{color: "#ffffff", background: "#009800"}, '✅']);
        else setCheck2([{color: "black", background: "white"}, '❎']);
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

    return (
        <style.Wrap>
            <style.Top>
                <img src={process.env.PUBLIC_URL + '/images/Main/notiIcon.svg'}/>
                <img src={process.env.PUBLIC_URL + '/images/Main/myIcon.svg'}/>
            </style.Top>

            <style.Top2>
                <h1>{props.name}님 안녕하세요<br /> 공병 등록을 시작해 볼까요? </h1>
            </style.Top2>

            <style.Top3>
                <WhiteFullButton btnName={fullAddress} onClick={openModal}/>
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

            </style.Wrap2>
            <Footer />

            <Modal1 open={ModalOpen} close={closeModal} header="주소 입력"
            button1={closeModal} button2={onClickModal} button1Content="취소" button2Content="확인">
            <style.Input>
                <Input onClick={openModal2} title={'주소'} value={address}/>
                <Input title={'상세주소'} onChange={onChangeAddressDetail} value={addressDetail}/>
            </style.Input>
            </Modal1>

            <Modal4 open={Modal2Open} close={closeModal2} header="주소 찾기" button1={closeModal2} button1Content="취소">
            <Postcode
                style={{ width: 400, height: 500 }}
                jsOptions={{ animation: true, hideMapBtn: true }}
                onSelected={onCompletePost}
            />
            </Modal4>

            <Modal4 open={Modal3Open} close={closeModal3} header="오류" button1={closeModal3} button1Content="확인">
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

            <Modal4 open={bottleErrorModalOpen} close={closeBottleErrorModal} header="오류" button1={closeBottleErrorModal} button1Content="확인">
            병의 개수는 0병에서 30병까지만 선택할 수 있습니다
            </Modal4>

        </style.Wrap>
    );
}

export default Add;
