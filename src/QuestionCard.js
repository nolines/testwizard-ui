import PropTypes from 'prop-types';
// @mui
import { Box, Card, Grid, CardActionArea, CardActions, Button } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';
// utils
import Label from './components/label';
import { ColorPreview } from './components/color-utils';

// ----------------------------------------------------------------------

const StyledProductImg = styled('img')({
    top: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
});

// ----------------------------------------------------------------------

QuestionCard.propTypes = {
    question: PropTypes.object,
};

export default function QuestionCard({ question }) {
    const { subject, unit, level, answer, fileKey } = question;

    return (
        <Grid item>
            {/* <Card>
                <Box>
                    <img src={"https://testwizard.s3.eu-central-1.amazonaws.com/" + fileKey} />
                    <span> {subject} {unit} {level} {answer}</span>
                </Box>
            </Card> */}

            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={"https://testwizard.s3.eu-central-1.amazonaws.com/" + fileKey}
                        alt="question"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h3" component="div">
                            {subject} {unit} {level} {answer}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" position="right">
                        Ekle
                    </Button>
                </CardActions>
            </Card>

            {/* <Card>
                <Box sx={{pt: '100%', position: 'relative'}}>
                    {(
                        <Label
                            variant="filled"
                            color={'info'}
                            sx={{
                                zIndex: 9,
                                top: 16,
                                right: 16,
                                textTransform: 'uppercase'
                            }}
                        >
                            {subject} {unit} {level} {answer}
                        </Label>
                    )}
                    <StyledProductImg src={"https://testwizard.s3.eu-central-1.amazonaws.com/" + fileKey}/>
                </Box>
            </Card> */}
        </Grid>

    );
}
