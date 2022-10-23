import React, { useState, useRef } from 'react'

import { Button, InputLabel, MenuItem, Select, TextField, Box, FormControl, SelectChangeEvent } from '@mui/material';

export default function QuestionForm() {
    const [correctAnswer, setCorrectAnswer] = React.useState('');
    const [subject, setSubject] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [level, setLevel] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        console.log(event)
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="type">Soru Tipi</InputLabel>
                <TextField
                    label={"Soru tipi"}
                />
                <InputLabel id="level">Zorluk</InputLabel>
                <Select
                    labelId="level"
                    id="level"
                    value={level}
                    onChange={handleChange}
                    label="Zorluk"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={'Kolay'}>Kolay</MenuItem>
                    <MenuItem value={'Orta'}>Orta</MenuItem>
                    <MenuItem value={'Zor'}>Zor</MenuItem>
                </Select>
                <InputLabel id="category">Ders</InputLabel>
                <Select
                    labelId="category"
                    id="category"
                    value={category}
                    onChange={handleChange}
                    label="Ders"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={'Trigonometri'}>Trigonometri</MenuItem>
                </Select>

                <InputLabel id="subject">Konu</InputLabel>
                <Select
                    labelId="subject"
                    id="subject"
                    value={subject}
                    onChange={handleChange}
                    label="Konu"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={'Trigonometri'}>Trigonometri</MenuItem>
                </Select>
                <InputLabel id="correct-answer">Dogru cevap</InputLabel>
                <Select
                    labelId="correct-answer"
                    id="correct-answer"
                    value={correctAnswer}
                    onChange={handleChange}
                    label="Dogru cevap"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={'A'}>A</MenuItem>
                    <MenuItem value={'B'}>B</MenuItem>
                    <MenuItem value={'C'}>C</MenuItem>
                    <MenuItem value={'D'}>D</MenuItem>
                    <MenuItem value={'E'}>E</MenuItem>
                </Select>
                <Button variant="contained">Kaydet</Button>
            </FormControl>
        </Box>
    )
}