import styled from 'styled-components';

export const banner = styled.div`
    height: 145px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    margin: 0px 20px 20px 0px;
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 600;
    font-size: 20px;
    text-align: center;

    flex: 0 0 180px;

    background: ${props => {
        if (props.style1) return 'conic-gradient(from 180deg at 50% 50%, #009800 0deg, #FFFFFF 360deg);'
        if (props.style2) return 'linear-gradient(180deg, #E3FFE4 0%, #009800 100%);'
        if (props.style3) return 'conic-gradient(from 180deg at 50% 50%, #009800 0deg, #D6CBFF 360deg);'
        return 'conic-gradient(from 180deg at 50% 50%, #009800 0deg, #FFFFFF 360deg);'
    }}
`;

export const bottleBanner = styled.div`
    height: 115px;
    width: 140px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    margin: 0px 20px 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 600;
    font-size: 20px;
    text-align: center;

    cursor: pointer;

    background: ${props => {
        if (props.style1) return 'conic-gradient(from 180deg at 50% 50%, #009800 0deg, rgba(0, 152, 0, 0) 360deg);'
        if (props.style2) return 'conic-gradient(from 180deg at 50% 50%, #A95C01 0deg, rgba(169, 92, 1, 0) 360deg);'
        if (props.style3) return 'conic-gradient(from 180deg at 50% 50%, #D2D2D2 0deg, rgba(210, 210, 210, 0) 360deg);'
        return 'conic-gradient(from 180deg at 50% 50%, #009800 0deg, rgba(0, 152, 0, 0) 360deg);'
    }}
`;