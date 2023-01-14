import React, { useState } from "react";
import { Column, Flex, Img, Text } from "./styles";

const Noti = (props) => {
  const [delNoti, setDelNoti] = useState(false);

  return (
    <Flex gap={"12px"} padding={"10px 20px"} wrap={true}>
      <Flex gap={"12px"}>
        <Img src={""} />
        <Column gap={"2px"}>
          <Text size={"16px"} weight={"700"}>
            알림
          </Text>
          <Text size={"12px"}>1일전</Text>
        </Column>
      </Flex>
      {props.del ? (
        <div>
          {delNoti ? (
            <img
              src={process.env.PUBLIC_URL + "/images/Common/checkedR.svg"}
              onClick={() => setDelNoti(false)}
            />
          ) : (
            <img
              src={process.env.PUBLIC_URL + "/images/Common/uncheckedR.svg"}
              onClick={() => setDelNoti(true)}
            />
          )}
        </div>
      ) : null}
    </Flex>
  );
};

export default Noti;
