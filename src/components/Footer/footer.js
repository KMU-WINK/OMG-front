import React from 'react';
import * as style from './styles';

function Footer(props) {

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
            <style.BtnLink href={'/mypage'}>
                <img src={process.env.PUBLIC_URL + '/images/Footer/mypageIcon.svg'}/>
            </style.BtnLink>
            </style.Menu>
        </style.Wrap>
    );
}

export default Footer;
