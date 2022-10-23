import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export default function Root() {

    return (
        <Grid container
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }} spacing={2}>
            <Stack direction="row" spacing={2}>
                <Grid spacing={2}>
                    <Button variant="contained" href="/tests">Test Hazirla</Button>
                </Grid>
                <Grid spacing={2}>
                    <Button variant="contained" href="/questions">Soru Ekle</Button>
                </Grid>
            </Stack>
        </Grid>
    )
}