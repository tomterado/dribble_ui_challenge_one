import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  position: relative;
  z-index: 5;

  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: #889FF8;
  font-size: 18px;
  font-weight: 800;
  border-radius: 48px;
  border-width: 0px;
  color: white;
  height: 51px;
  width: 216px;
  // border: 2px solid palevioletred;
  margin: 0 1em;
  // padding: 0.25em 1em;
  transition: 0.5s all ease-out;
 
  // &:hover {
  //   background-color: palevioletred;
  //   color: white;
  // }
`;

export const ButtonShadow = styled.button`
  position: relative;
  top: -45px;
  z-index: 3;
  left: -107px;
  border-width: 0px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: #C7D3FB;
  font-size: 18px;
  font-weight: 800;
  border-radius: 48px;
  color: white;
  height: 51px;
  width: 197px;
  // border: 2px solid palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
 
  // &:hover {
  //   background-color: palevioletred;
  //   color: white;
  // }
`;

export const LeftContentContainer = styled.div`
   width: 50%;
   display: flex;
   flex-direction: column;
   padding: 1em;
`;
//
// <div style={{display: 'flex', backgroundColor: 'green', flex: 11, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>

export const LeftContent = styled.div`
    display: flex; 
    flex: 11;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    // border: 1px solid #000000;
`;

export const MainTitle = styled.h1`
    font-size: 3em;
    font-height: 2;
    text-align: left;
`;

export const SecondaryTitleRow = styled.div`
    display: flex;
    width: 300px;
    // border: 1px solid #000000;
    // justify-content: space-between;
    align-items: center;
`;


export const SecondaryTitleText = styled.p`
    color: #34424E
    font-size: 1em;
    text-align: left;
`;

export const BlueNumberedText = styled.p`
    color: #889FF8;
    font-size: 10px;
    text-align: left;
    margin-right: 16px;
`;


export const Header = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // border: 2px solid palevioletred;
    // background-color: palevioletred;
`;

export const HeaderContentOne = styled.div`
    display: flex;
    flex : 3;
    height: 100%;
    // border: 2px solid palevioletred;
    align-items: center;
    justify-content: center;
`;

export const HeaderContentTwo = styled.div`
    display: flex;
    flex : 6;
    justify-content: center;
    align-items: center;
    height: 100%;
    // border: 2px solid green
`;

export const HeaderContentTwoText = styled.div`
    color: #A8AFB4;
    padding-right: 16px;
`;

export const HeaderContentThree = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex : 3;
    height: 100%;
    // border: 2px solid blue
`;
