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
    const onSubmit: SubmitHandler<IFormInput> = data => submitQuestions(data, base64File);

    return (
        <Box sx={{ minWidth: 120 }} className="form-box">
            <form onSubmit={handleSubmit(onSubmit)} >
               
                <label>Ders</label>
                <select {...register("subject")} >
                    <option value="tr">Turkce</option>
                    <option value="mat">Matematik</option>
                    <option value="geo">Geometri</option>
                    <option value="fizik">Fizik</option>
                    <option value="kimya">Kimya</option>
                    <option value="biyoloji">Biyoloji</option>
                    <option value="tarih">Tarih</option>
                    <option value="cografya">Cografya</option>
                </select>
                <label>Konu</label>
                <select {...register("unit")} >
                    <option value="unit1">Unit1</option>
                    <option value="unit2">Unit2</option>
                    <option value="unit3">Unit3</option>
                </select>
                <label>Level</label>
                <select {...register("level")} >
                    <option value="easy">Kolay</option>
                    <option value="medium">Orta</option>
                    <option value="hard">Zor</option>
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