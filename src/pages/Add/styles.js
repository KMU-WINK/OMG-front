import styled from 'styled-components';

export const Wrap = styled.div`
    max-width: 480px;
    background: #009800;
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
`;

export const Top = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 10px 20px;
    gap: 10px;
  
    > img {
        width: 21.5px;
        height: 21.5px;
        cursor: pointer;
    }
`;

export const Top2 = styled.div`
margin: 10px 20px;
    > h1 {
        color: white;
        font-weight: 600;
        font-size: 20px;
        margin: 0px;
    }
`;

export const Top3 = styled.div`
    margin: 0px 20px 10px 20px;
`;

export const Wrap2 = styled.div`
    margin: 5px 0px 0px 0px;
    padding: 20px 0px 0px 0px;
    background: white;
    display: flex;
    flex-direction: column;
    border-radius: 30px 30px 0px 0px;
`;

export const title = styled.div`
    margin: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > h1 {
        margin: 0px;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
    }
`;

export const banners = styled.div`
    margin: 0px 0px 10px 20px;
    display: flex;
`;

export const Input = styled.div`
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 5px 0 5px 0;
`;

export const count = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 18px;
    gap: 50px;
`;

export const countButton = styled.div`
    background: #ffffff;
    width: 20px;
    border-radius: 30px;
    padding: 12px;
    color: #000000;
    font-weight: 800;
    font-size: 16px;
    text-align: center;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    user-select: none;
`;

export const choiceButtons = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px 20px 10px 20px;
    gap: 16px;
`;

export const ImgBlock = styled.div`
  position: relative;
  cursor: pointer;
  margin: 5px 20px 10px 20px;
    > img {
      object-fit: cover;
      :first-child {
        width: 100%;
        height: 180px;
        border-radius: 30px;
        background: #D9D9D9;
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
      }
      :last-child {
        position: absolute;
        right: 0px;
        bottom: 0px;
      }
    }
  `;

export const ImgContents = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    > label {
        width: 100%;
    }
`;

export const texts = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    font-weight: 500;
    font-size: 14px;
    margin: 7px 20px;
    color: #535353;
`;

export const bottom = styled.div`
    margin: 10px 20px 30px 10px;
`;

/////////// ADD2 ////////////

export const Row = styled.div`
  display: flex;
  gap: 2%;
`;

export const Col = styled(Row)`
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #009800;
`;

export const Contents = styled.div`
  margin-bottom: 20px;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 12px;
  
`;
export const TopWrap = styled.div`
  padding: 24px 20px;
  
  > div:first-child {
    display: flex;
    flex-direction: row-reverse;
    gap: 12px;
  }
  
  > div:nth-child(2) {
    color: white;
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 12px;
  }
  
  > button {
    all: unset;
    cursor: pointer;
    width: 100%;
    text-align: center;
    background-color: #ffffff;
    border-radius: 30px;
    height: 50px;
    font-size: 16px;
    font-weight: 600;
  }
`;
export const InfoWrap = styled.div`
  background-color: #ffffff;
  border-radius: 30px 30px 0 0;
  padding: 24px 20px;
`;

export const Glass = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  cursor: pointer;
  flex: 1 1 33%;
  border-radius: 28px;
  padding: 20px;
  font-weight: 600;
  font-size: 18px;
  background: conic-gradient(from 180deg at 50% 50%, ${(props) => props.back ? props.back : null } 0deg, rgba(0, 152, 0, 0) 360deg);
`;