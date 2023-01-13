import React, { useState } from 'react';
import * as style from './styles';
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header"
import {useNavigate} from "react-router";
import { DATA } from '../Map/data';
import Banner from '../../components/Banner/banner';
import GreenFullButton from '../../components/Button/greenFullButton';

function BottleDetail(props) {
    const navigator = useNavigate();

    const [indexNum, setIndexNum] = useState(1); //데이터 인덱스
    const [pageNum, setPageNum] = useState(1); //페이지 번호
    const [like, setLike] = useState(DATA[indexNum].isLiked);

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
                        <Banner styleSoju btnName={['소주병', <br />, DATA[indexNum].sojuNum, '병']} />
                        <Banner styleBeer btnName={['맥주병', <br />, DATA[indexNum].beerNum, '병']} />
                        <Banner styleEtc btnName={['기타병', <br />, DATA[indexNum].extraNum, '병']} />
                        <Banner style2 btnName={['예상 보증금', <br />, DATA[indexNum].money, '원']} />
                        <Banner style3 btnName={['내부 이물질', <br />, '없어요']} />
                        <Banner style3 btnName={['깨진 부분', <br />, '없어요']} />
                    </style.banners>
                    <style.etcFont>조회 {DATA[indexNum].click} | 관심 {DATA[indexNum].like}</style.etcFont>
                    <GreenFullButton onClick={pageClick} btnName={"공병 수거하러 가기"}/>
                    </>
                    : pageNum === 2 ?
                    <>
                    ㅁㄴㅇㄹ
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