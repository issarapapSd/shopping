import Typography from '@mui/material/Typography';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import OrderTable from '../components/OrderCheckOut';
import InputAdornment from '@mui/material/InputAdornment';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CustomizedTables from '../components/TableS';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const CheckOut = () => {
    return (
        <Container maxWidth="xl" className='bodyTop'>
            <CssBaseline>
                <Box sx={{ flexGrow: 10 }}>
                    <Grid container spacing={10} columns={10}>
                        <Grid item xs={8} md={20}>
                            <Typography style={{ textAlign: 'center', fontWeight: 'bold', paddingTop: '20px' }} gutterBottom variant="h5" component="div">
                                Checkout form
                            </Typography>
                        </Grid>

                        <Grid style={{ display: 'flex', flexDirection: 'row', paddingLeft: '10%' }}>
                            <Grid spacing={0} item xs={0} md={50}>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', textAlign: 'left' }}>
                                    <Typography style={{ textAlign: 'left', fontWeight: 'bold' }} gutterBottom variant="h5" component="div">
                                        Billing address

                                    </Typography>

                                </div>


                                <Grid item xs={0} md={30}>

                                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', textAlign: 'left' }}>
                                        <div >
                                            <TextField
                                                required
                                                id="outlined-required"
                                                label="First name"
                                                size='small'
                                                style={{ width: '140%' }}
                                            />
                                        </div>
                                        <div style={{ paddingLeft: '20%' }}>
                                            <TextField
                                                required
                                                id="outlined-required"
                                                label="Last name"
                                                size='small'
                                                style={{ width: '140%' }}
                                            />
                                        </div>

                                    </div>

                                </Grid>


                                <div style={{ display: 'flex', justifyContent: 'flex-start', textAlign: 'left', paddingTop: '2%' }}>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Username"
                                        size='small'
                                        style={{ width: '100%' }}
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">@</InputAdornment>,
                                        }}
                                    />
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'flex-start', textAlign: 'left', paddingTop: '2%' }}>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Email"
                                        size='small'
                                        style={{ width: '50%' }}
                                    />
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'flex-start', textAlign: 'left', paddingTop: '2%' }}>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Address"
                                        size='small'
                                        style={{ width: '50%' }}
                                    />
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'flex-start', textAlign: 'left', paddingTop: '2%' }}>
                                    <TextField
                                        // required
                                        id="outlined-required"
                                        label="Address 2"
                                        size='small'
                                        style={{ width: '50%' }}
                                    />
                                </div>

                            </Grid>
                            <Grid item xs={8} md={0}>
                                <div >

                                    <Typography style={{ fontWeight: 'bold' }} gutterBottom variant="h5" component="div">
                                        Your cart
                                    </Typography>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>

                </Box>

            </CssBaseline>

        </Container>

    )
}

export default CheckOut