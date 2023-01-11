import React from 'react';
import {Column, Flex, Img, Text} from './styles';

const Noti = () => {

    return (
        <Flex gap={'12px'} padding={"10px 20px"} wrap={true}>
            <Img src={""} />
            <Column gap={'2px'}>
                <Text size={"16px"} weight={"700"}>알림</Text>
                <Text size={"12px"}>1일전</Text>
            </Column>
        </Flex>
    );
}

export default Noti;