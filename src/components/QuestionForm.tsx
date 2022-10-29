import { Box, Grid, SelectChangeEvent } from '@mui/material';
import axios from 'axios';
import React, { useState, useRef } from 'react'

import { useForm, SubmitHandler } from "react-hook-form";
import { useSelector } from 'react-redux';
import './QuestionForm.css';

const baseURL = "http://localhost:8080";

interface IFormInput {
    unit: String;
    subject: String;
    level: String;
    answer: String;
    file: String;
}

function submitQuestions(data: IFormInput, file: String) {
    data.file = file;
    console.log(data);
    axios
        .post(baseURL + '/questions', data)
        .then((response) => {
            console.log(response);
        });
}

export default function QuestionForm() {

    const { register, handleSubmit } = useForm<IFormInput>();

    const base64File = useSelector((state: any) => state.base64File);
    console.log(base64File);
    const onSubmit: SubmitHandler<IFormInput> = data => submitQuestions(data, base64File);

    return (
        <Box sx={{ minWidth: 120 }} className="form-box">
            <form onSubmit={handleSubmit(onSubmit)} >
               
                <label>Ders</label>
                <select {...register("unit")} >
                    <option value="unit1">Turkce</option>
                    <option value="unit2">Matematik</option>
                    <option value="unit3">Geometri</option>
                    <option value="unit3">Fizik</option>
                    <option value="unit3">Kimya</option>
                    <option value="unit3">Bioloji</option>
                    <option value="unit3">Tarih</option>
                    <option value="unit3">Cografya</option>
                </select>
                <label>Konu</label>
                <select {...register("subject")} >
                    <option value="Subject1">Subject1</option>
                    <option value="Subject2">Subject2</option>
                    <option value="Subject3">Subject3</option>
                </select>
                <label>Level</label>
                <select {...register("level")} >
                    <option value="Easy">Kolay</option>
                    <option value="Medium">Orta</option>
                    <option value="Hard">Zor</option>
                </select>
                <label>Dogru Cevap</label>
                <select {...register("answer")} >
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                </select>
                <input type="submit" value="Ekle" />
            </form>
        </Box>
    )
}