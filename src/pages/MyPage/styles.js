import styled from 'styled-components';

export const Wrap = styled.div`
  margin-top: 50px;
  height: calc(100vh - 50px);
`;

export const FirstContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  > div:nth-child(2) {
    margin-bottom: 16px;
    > span {
      font-weight: 700;
      font-size: 18px;
      color: #000000;

      :nth-child(2) {
        font-size: 20px;
        color: #009800;
        margin: 0 10px;
      }
    }
  }
`;

export const ImgBlock = styled.div`
  position: relative;
  cursor: pointer;
  padding-top: 30px;
  margin-bottom: 20px;
    > img {
      object-fit: cover;
      :first-child {
        width: 160px;
        height: 160px;
        border-radius: 70%;
        background: #D9D9D9;
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
      }
      :last-child {
        position: absolute;
        right: -5px;
        bottom: -5px;
      }
    }
  
`
export const RecordBlock = styled.div`
  display: flex;
  gap: 40px;
  background: #009800;
  color: #ffffff;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  padding: 22px 50px;
  margin-bottom: 15px;
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    :nth-child(2) {
      padding: 0 40px;
      border-left: 2px solid #ffffff;
      border-right: 2px solid #ffffff;
    }
    > span {
      font-size: 18px;
      :first-child {
        font-weight: 700;
      }
    }
  }
`

export const SecondContents = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  
  > div {
    display: flex;
    justify-content: space-between;
    
    > span:first-child {
        font-weight: 700;
        font-size: 18px;
        color: #000000;
    }
  }
`;
