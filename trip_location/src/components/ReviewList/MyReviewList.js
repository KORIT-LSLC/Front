/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Rating, Typography } from '@mui/material';
import axios from "axios";
import React, { useState } from 'react';
import { useQuery } from "react-query";
import logotitle from "../../images/logotitle.png"


const cardTitleContainer = css`
    display: flex;
    justify-content: space-between;
`;

const ratingStyle = css`
    font-size: 14px;
`;

const MyReviewList = ({ reviewDataList, userInfo }) => {

    return (
        <Container>
            <Grid container spacing={4}>
                {reviewDataList.map((data, index) => (
                    <Grid key={index} item xs={12} sm={6} md={4} sx={{ minWidth: 300}}>
                        <Card sx={{ minWidth: 250 , minHeight:250}}>
                            <CardActionArea>
                                <CardMedia
                                    component='img'
                                    alt={data.reviewImgUrl}
                                    height='140'
                                    image={data.reviewImgUrl.includes('null') ? logotitle: data.reviewImgUrl }
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2" css={cardTitleContainer}>
                                    {data.reviewTitle}
                                    </Typography>
                                    <Rating name="read-only" defaultValue={data.reviewRating} readOnly css={ratingStyle}/>
                                    <Typography variant='body2' color='textSecondary' component='p'>
                                        {data.startDate} ~ {data.endDate}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default MyReviewList;