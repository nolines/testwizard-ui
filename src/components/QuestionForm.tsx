import { Box, Grid, SelectChangeEvent } from '@mui/material';
import React, { useState, useRef } from 'react'

import { useForm, SubmitHandler } from "react-hook-form";
import './QuestionForm.css';

interface IFormInput {
    description: String;
    unit: String;
    subject: String;
    level: String;
    correctAnswer: String;
    img: String;
}

export default function QuestionForm() {

    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

    return (
        <Box sx={{ minWidth: 120 }} className = "form-box">
            <form onSubmit={handleSubmit(onSubmit)} >
                    <label>Aciklama</label>
                    <input {...register("description")} />
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
                        <option value="easy">Kolay</option>
                        <option value="medium">Orta</option>
                        <option value="hard">Zor</option>
                    </select>
                    <label>Dogru Cevap</label>
                    <select {...register("correctAnswer")} >
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