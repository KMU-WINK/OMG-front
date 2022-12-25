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