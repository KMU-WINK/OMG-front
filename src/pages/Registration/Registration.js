import React from 'react';
import Header from "../../components/Header/header";
import {Wrap} from "./styles";
import Card from "../../components/Card/card";


function Registration() {

    return (
        <div>
            <Header title={'등록내역'}/>
            <Wrap>
                <Card name={"이다은"} getCnt={3} setCnt={2} point={500}></Card>
                <Card name={"이다은"} getCnt={3} setCnt={2} point={1500}></Card>
                <Card name={"이다은"} getCnt={3} setCnt={2} point={2000}></Card>
                <Card name={"이다은"} getCnt={3} setCnt={2} point={500}></Card>
            </Wrap>
        </div>
    );
}

export default Registration;
