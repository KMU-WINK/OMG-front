import React, {useEffect, useState} from 'react';
import * as style from './styles';
import {meService} from "../../apis/services/me";

function Footer() {

    const [data, setData] = useState();

    useEffect(() => {(
        async () => {
            try {
                const data = await meService.getInfo();
                setData(data.user?.user);
            } catch (e) {
                // console.log(`footer: ${e}`);
                setData({name: "guest"});
            }
        })();
    }, []);

    return (
        <style.Wrap>
            <style.Menu>
            <style.BtnLink href={'/'}>
                <img src={process.env.PUBLIC_URL + '/images/Footer/mainIcon.svg'}/>
            </style.BtnLink>
            <style.BtnLink href={'/map'}>
                <img src={process.env.PUBLIC_URL + '/images/Footer/mapIcon.svg'}/>
            </style.BtnLink>
            <style.BtnLink href={'/write-post'}>
                <img src={process.env.PUBLIC_URL + '/images/Footer/writeIcon.svg'}/>
            </style.BtnLink>
            <style.BtnLink href={'/board'}>
                <img src={process.env.PUBLIC_URL + '/images/Footer/notiIcon.svg'}/>
            </style.BtnLink>
            <style.BtnLink href={`/mypage/${data?.name}`}>
                <img src={process.env.PUBLIC_URL + '/images/Footer/mypageIcon.svg'}/>
            </style.BtnLink>
            </style.Menu>
        </style.Wrap>
    );
}

export default Footer;
