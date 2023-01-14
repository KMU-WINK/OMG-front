import React, { Fragment, useState } from 'react';
import * as style from './styles';
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header"
import {useNavigate} from "react-router";
import { DATA } from '../Map/data';
import Banner from '../../components/Banner/banner';
import GreenFullButton from '../../components/Button/greenFullButton';
import BottleBanner from '../../components/Banner/bottleBanner';
import WhiteFullButton from '../../components/Button/whiteFullButton';
import WhiteView from '../../components/View/whiteView';
import moment from '@date-io/moment';
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

import "moment/locale/ko";

function BottleDetail(props) {
    const navigator = useNavigate();

    const [indexNum, setIndexNum] = useState(1); //데이터 인덱스
    const [pageNum, setPageNum] = useState(1); //페이지 번호
    const [like, setLike] = useState(DATA[indexNum].isLiked);
    const [selectedDate, handleDateChange] = useState(new Date());
    const [choiceDateTime, setChoiceDateTime] = useState(['여기를 눌러 ', <b style={{color: "#009800"}}>수거예정시간</b>,'을 선택할 수 있어요']);

    const handleLikeClick = (e) => {
        setLike((like) => !like);
        //like 상태 DATA에 저장하는 코드 필요함
    }

    const pageClick = () => {
        setPageNum(pageNum + 1);
    }

    return (
        <style.Wrap>
            <Header title={pageNum === 1 ? '지도' : pageNum === 4 ? '수거예약 확정' : '수거하기'} />
            <style.map>지도 삽입용 임시 박스</style.map>
            <style.Wrap2>
                <style.address>{DATA[indexNum].address}</style.address>
                {
                    pageNum === 1 ? //1페이지
                    <>
                    <style.infoContainer>
                        <div>
                            <style.profileImg src={process.env.PUBLIC_URL + '/images/Common/Profile.svg'}/>
                            <style.userInfoBox>
                                <span style={{fontWeight: "600"}}> 이유빈 </span>
                                <span>
                                    수거 <b style={{color: "#009800"}}> 1회 </b> |
                                    등록 <b style={{color: "#009800"}}> 2회 </b> |
                                    공병지수 <b style={{color: "#009800"}}> 30ml </b>
                                </span>
                            </style.userInfoBox>
                         </div>
                         <img alt={"likeIcon"} onClick={handleLikeClick}
                            src={ like
                            ? process.env.PUBLIC_URL + "/images/Common/likeFilledIcon.svg"
                            : process.env.PUBLIC_URL + "/images/Common/likeIcon.svg"
                            }
                        />
                    </style.infoContainer>
                    <style.image src={process.env.PUBLIC_URL + "/images/Add/altImg.png"} />
                    <style.banners>
                        { DATA[indexNum].sojuNum !== 0 ? <Banner styleSoju btnName={['소주병', <br />, DATA[indexNum].sojuNum, '병']}/> : <></> }
                        { DATA[indexNum].beerNum !== 0 ? <Banner styleBeer btnName={['맥주병', <br />, DATA[indexNum].beerNum, '병']}/> : <></> }
                        { DATA[indexNum].extraNum !== 0 ? <Banner styleEtc btnName={['기타', <br />, DATA[indexNum].extraNum, '병']}/> : <></> }
                        <Banner style2 btnName={['예상 보증금', <br />, DATA[indexNum].money, '원']} />
                        <Banner style3 btnName={['내부 이물질', <br />, '없어요']} />
                        <Banner style3 btnName={['깨진 부분', <br />, '없어요']} />
                    </style.banners>
                    <style.etcFont>조회 {DATA[indexNum].click} | 관심 {DATA[indexNum].like}</style.etcFont>
                    <GreenFullButton onClick={pageClick} btnName={"공병 수거하러 가기"}/>
                    </>
                    : pageNum === 2 ?
                    <>
                    <style.title>이유빈님이 수거할 공병이에요</style.title>
                    <style.bottleBanners>
                        <BottleBanner style1 style={{margin: "0px", cursor: "default"}} btnName={['소주병', <br />, DATA[indexNum].sojuNum, '병']}/>
                        <BottleBanner style2 style={{margin: "0px", cursor: "default"}} btnName={['맥주병', <br />, DATA[indexNum].beerNum, '병']}/>
                        <BottleBanner style3 style={{margin: "0px", cursor: "default"}} btnName={['기타', <br />, DATA[indexNum].extraNum, '병']}/>
                    </style.bottleBanners>
                    <WhiteView btnName={[<b style={{color: "#009800"}}>총 보증금 {DATA[indexNum].money}원</b>, " 예상"]}/>
                    <style.title>수거예정시간을 선택해주세요</style.title>
                    <WhiteFullButton style={{ justifyContent: "center"}} btnName={choiceDateTime}/>
                    <MuiPickersUtilsProvider utils={moment}>
                        <DateTimePicker
                            label="수거예정시간"
                            inputVariant="outlined"
                            value={selectedDate}
                            onChange={handleDateChange}
                            format="yyyy년 MM월 DD일 a hh:mm"
                        />
                    </MuiPickersUtilsProvider>

                    </>
                    :
                    <></>
                }
            </style.Wrap2>
            <Footer />
        </style.Wrap>
    );
}


export default BottleDetail;