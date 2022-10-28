import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Outlet } from 'react-router-dom';
import Nav from '../layouts/nav';

export default function Root() {

    return (
        <Grid container
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }} spacing={2}>
                <Nav></Nav>

                <Outlet></Outlet>
        </Grid>
    )
}