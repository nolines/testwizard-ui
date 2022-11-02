import {Grid} from '@mui/material';
import React from 'react';
import {useSelector} from 'react-redux';
import QuestionCard from './QuestionCard';


export default function Questions(...other) {

    const questions = useSelector((state: any) => state.questions);

    return (
        <Grid
            container
            spacing={2}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{minHeight: '100vh'}}
            {...other}
        >
            {questions.map((question) => (
                <Grid key={question.id} item xs={12} sm={6} md={3}>
                    <QuestionCard question={question}/>
                </Grid>
            ))}
        </Grid>
    )
}