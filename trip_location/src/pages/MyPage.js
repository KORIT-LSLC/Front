/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from "@emotion/react";
import defaultImg from '../images/logotitle.png';
import {Button} from "@mui/material";
import styled from "@emotion/styled";

const container = css`
  display: flex;
  margin-top: 64px;
  width: 100%;
  height: 100vh;
`;

const main =  css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const imgContainer = css`
  margin-bottom: 20px;
  border: 1px solid #dbdbdb;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background-color: rgba(0,0,0,0.8);
  background-image: url(${defaultImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const ModifyButton = styled(Button)`
  margin-top: 20px;
  border-radius: 0;
  width: 100px;
  background-color: #0BD0AF;
  color: #FFFFFF;
  font-weight: 600;

  &:hover {
    background-color: #0BAF94;
  }

  &:active {
    background-color: #40D6BD;
  }
`;

const mainContents = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  width: 50%;
  
`;

const myPlanAndReview = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  border: 1px solid #dbdbdb;
  width: 40%;
  height: 100px
`;

const MyPage = () => {
    return (
        <div css={container}>
            <main css={main}>
                <div css={imgContainer}>

                </div>
                <div>Example@gmail.com</div>
                <ModifyButton>수정하기</ModifyButton>
                <div css={mainContents}>
                    <div css={myPlanAndReview}>
                        <span>나의 일정</span>
                        <span>0</span>
                    </div>
                    <div css={myPlanAndReview}>
                        <span>나의 리뷰</span>
                        <span>0</span>
                    </div>
                </div>
                <div>
                    <h2>나의 일정</h2>
                </div>
            </main>
        </div>
    );
};

export default MyPage;