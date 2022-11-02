import {Box, MenuItem, Select, Stack} from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import React from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';

const baseURL = "http://localhost:8080";

interface IFormInput {
    subject: String;
    unit: String;
    level: String;
}

function getUrl(unit: String, level: String) {
    if (unit && level) {
        return "/unit/" + unit + "/level/" + level;
    } else if (unit && !level) {
        return "/unit/" + unit;
    } else {
        return "/level/" + level;
    }
}

export default function Tests() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = data => {
        axios
            .get(baseURL + '/questions/subject/' + data.subject + getUrl(data.unit, data.level))
            .then((response) => {
                let questions = response.data;
                dispatch({type: 'questionsChanged', payload: questions});
                navigate("/testList");
            })
    }

    return (
        <Box sx={{minWidth: 120}} className="form-box">
            <form onSubmit={handleSubmit(onSubmit)}>

                <label>Ders</label>
                <select {...register("subject")} >
                    <option value="Subject1">Turkce</option>
                    <option value="subject2">Matematik</option>
                    <option value="subject3">Geometri</option>
                    <option value="subject3">Fizik</option>
                    <option value="subject3">Kimya</option>
                    <option value="subject3">Bioloji</option>
                    <option value="subject3">Tarih</option>
                    <option value="subject3">Cografya</option>
                </select>
                <label>Konu</label>
                <select {...register("unit")} >
                    <option value="unit1">Unit1</option>
                    <option value="unit2">Unit2</option>
                    <option value="unit3">Unit3</option>
                </select>
                <label>Level</label>
                <select {...register("level")} >
                    <option value="Easy">Kolay</option>
                    <option value="Medium">Orta</option>
                    <option value="Hard">Zor</option>
                </select>
                <input type="submit" value="Devam"/>
            </form>
        </Box>

    )
}