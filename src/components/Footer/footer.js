import React, { useEffect, useState } from "react";
import * as style from "./styles";
import { meService } from "../../apis/services/me";
import { useNavigate } from "react-router-dom";

function Footer() {
  const [data, setData] = useState();
  const navigator = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const data = await meService.getInfo();
        setData(data.user?.user);
      } catch (e) {
        setData({ name: "guest" });
      }
    })();
  }, []);

  return (
    <style.Wrap>
      <style.Menu>
        <style.BtnLink onClick={() => navigator("/")}>
          <img src={process.env.PUBLIC_URL + "/images/Footer/mainIcon.svg"} />
        </style.BtnLink>
        <style.BtnLink onClick={() => navigator("/map")}>
          <img src={process.env.PUBLIC_URL + "/images/Footer/mapIcon.svg"} />
        </style.BtnLink>
        <style.BtnLink
          onClick={() =>
            navigator("/write-post", {
              state: { title: "", contents: "", type: "UPLOAD" },
            })
          }
        >
          <img src={process.env.PUBLIC_URL + "/images/Footer/writeIcon.svg"} />
        </style.BtnLink>
        <style.BtnLink onClick={() => navigator("/board")}>
          <img src={process.env.PUBLIC_URL + "/images/Footer/notiIcon.svg"} />
        </style.BtnLink>
        <style.BtnLink onClick={() => navigator(`/mypage/${data?.name}`)}>
          <img src={process.env.PUBLIC_URL + "/images/Footer/mypageIcon.svg"} />
        </style.BtnLink>
      </style.Menu>
    </style.Wrap>
  );
}

export default Footer;
