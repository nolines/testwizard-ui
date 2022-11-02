import PropTypes from 'prop-types';
// @mui
import {Box, Card, Grid} from '@mui/material';
import {styled} from '@mui/material/styles';
// utils
import Label from './components/label';
import {ColorPreview} from './components/color-utils';

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

export default function QuestionCard({question}) {
    const {subject, unit, level, answer, fileKey} = question;

    return (
        <Grid item>
            <Card>
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
                    <StyledProductImg src={"qweqwe"}/>
                </Box>
            </Card>
        </Grid>

    );
}
