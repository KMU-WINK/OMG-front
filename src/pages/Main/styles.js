import styled from 'styled-components';

export const Wrap = styled.div`
    max-width: 480px;
    background: #009800;
    display: flex;
    flex-direction: column;
`;

export const Top = styled.div`
    display: flex;
    flex-direction: row-reverse;
    margin: 10px 20px;
    margin-left: 20px;
    margin-right: 20px;
    > img {
        width: 21.5px;
        height: 21.5px;
        margin-left: 10px;
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

export const View = styled.div`
    margin: 10px 20px;
`;

export const buttons = styled.div`
    margin: -80px 20px 10px 20px;
    display: flex;
    justify-content: space-between;
    display: flex;
`;

export const Wrap2 = styled.div`
    margin: 85px 0px 0px 0px;
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
    > span {
        font-weight: 700;
        font-size: 11px;
        line-height: 13px;
        color: #009800;
    }
`;

export const community = styled.div`
    background: #FFFFFF;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
`;