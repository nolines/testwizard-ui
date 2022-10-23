import { MenuItem, Select, SelectChangeEvent, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import React from 'react';

export default function Tests() {

    const [category, setCategory] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value)
    };

    return (
        <Grid container
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }} spacing={2}>
            <Select 
                labelId="category"
                id="category"
                value={category}
                onChange={handleChange}
                label="Ders Sec"
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={'A'}>Matematik</MenuItem>
                <MenuItem value={'B'}>Geometri</MenuItem>
                <MenuItem value={'C'}>Fizik</MenuItem>
                <MenuItem value={'D'}>Kimya</MenuItem>
                <MenuItem value={'E'}>Edebiyat</MenuItem>
                <MenuItem value={'F'}>Tarih</MenuItem>
                <MenuItem value={'G'}>Cografya</MenuItem>
            </Select>
            <Button variant="contained">Devam</Button>
        </Grid>
    )
}