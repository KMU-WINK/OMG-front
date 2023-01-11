import styled from 'styled-components';

export const Wrap = styled.div`
    background-color: #D9D9D9;
  height:100vh;
  > div {
    :nth-child(2), :nth-child(3){
      margin-bottom: 12px;
    }
  }
`;

export const SubTitle = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #000000;
  background-color: #ffffff;
  padding: 16px 20px;
`;

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 19px 20px;
  font-size: 16px;
  color: #000000;
  > div {
    display: flex;
    align-items: center;
  }
  > div > img {
      margin-right: 25px;
  }
  > img {
    cursor: pointer;
  }
  > span {
    color: #7C7C7C;
  }

`;
export const MySwitch = styled.div`
  border: 2px solid ${(props) => props.mySwitch ? '#009800' : '#7C7C7C'};
  border-radius: 15px;
  width: 50px;
  height: 24px;
  position: relative;
  cursor: pointer;

  > div {
    transition: all .5s ease;
    border-radius: 70%;
    background-color: ${(props) => props.mySwitch ? '#009800' : '#7C7C7C'};
    width: 18px;
    height: 18px;
    position: absolute;
    right: ${(props) => props.mySwitch ? '4px' : '28px'};
    // left: ${(props) => props.mySwitch ? 'unset' : '4px'};
  }
`
