import styled from "styled-components";

export const fullButton = styled.div`
  background: #009800;
  border-radius: 30px;
  padding: 10px;
  color: #ffffff;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
`;
export const strokeButton = styled.div`
  background: #ffffff;
  border: 2px solid #009800;
  border-radius: 30px;
  padding: 10px;
  color: #141414;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
`;

export const CircleButton = styled.div`
  width: 50px;
  height: 50px;
  background: #ffffff;
  align-items: center;
  display: flex;
  justify-content: center;
  border-radius: 30px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);

  > img {
    cursor: pointer;
  }
`;
