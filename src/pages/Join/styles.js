import styled from 'styled-components';
import React from "react";

export const Wrap = styled.div`
    margin-top: 50px;
  
  > div:last-child {
    padding: 20px;
  }
`;
export const InputWrap = styled.div`
  > hr {
    margin: 20px 0;
    width: 100%;
  }
  > div:first-child {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  > div:last-child {
    margin-bottom: 60px;
    > div {
      display: flex;
      gap: 10px;
      
      :nth-child(2) {
        margin: 20px 0 8px 0;
      }
    }
  }
`;

export const svgC = styled.svg`
  fill: none;
  stroke: ${(props) => (props.checked ? '#009800' : '#E0E0E0')}; ;
  stroke-width: 2px;
  width: 12px;
  height: 11px;
`;


export const C = styled.div`
  border: ${(props) => (props.checked ? '2px solid #009800' : '2px solid #E0E0E0')};
  background-color: ${(props) => (props.checked ? '#009800' : '')};
  border-radius: 4px;
  width: 18px;
  height: 18px;
  text-align: center;
`;

export const S = styled.svg`
  width:12px;
  height:11px; 
  fill:none;
`;
export const P = styled.path`
  stroke: ${(props) => (props.checked ? '#ffffff' : '')};
  stroke-width: 2px;
`;

export const Checkbox = ({ checked, onClick, id }) => (
    <C type="button" onClick={onClick} id={id} checked={checked}>
        <S>
            <P d="M1.00005 6.81818L3.90914 9L10.4546 1" checked={checked}/>
        </S>
    </C>
);

