import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import OrderTable from '../components/OrderCheckOut';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const country = [
    {
        value: 'THAI',
        label: 'Thailand',
    },
    {
        value: 'USA',
        label: 'United States',
    },
    {
        value: 'UK',
        label: 'United Kingdom',
    },
    {
        value: 'JP',
        label: 'Japan',
    },
];
const city = [
    {
        value: 'BKK',
        label: 'Bangkok',
    },
    {
        value: 'NY',
        label: 'New York',
    },
    {
        value: 'AM',
        label: 'Armagh',
    },
    {
        value: 'TK',
        label: 'Tokyo',
    },
];
const CheckOut = () => {
    return (
        <Container maxWidth="xl" className='bodyTop'>
            <CssBaseline>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid spacing={20} columns={0}>
                        <Grid item xs={0} md={0}>

                            <Typography style={{ textAlign: 'center', fontWeight: 'bold', paddingTop: '20px' }} gutterBottom variant="h5" component="div">
                                Checkout form
                            </Typography>


                        </Grid>
                        <br />
                        <Grid style={{ display: 'flex', flexDirection: 'row', paddingTop: '5%' }}>
                            <Grid spacing={0} item xs={0} md={20}>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', textAlign: 'left' }}>
                                    <Typography style={{ textAlign: 'left', fontWeight: 'bold' }} gutterBottom variant="h5" component="div">
                                        Billing address

                                    </Typography>

                                </div>


                                <Grid spacing={10} item xs={0} md={25}>

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
                                    <div style={{ textAlign: 'left', paddingTop: '5%' }}>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Username"
                                            size='small'
                                            style={{ width: '115%' }}
                                            InputProps={{
                                                startAdornment: <InputAdornment position="start">@</InputAdornment>,
                                            }}
                                        />
                                    </div>
                                    <div style={{ textAlign: 'left', paddingTop: '5%' }}>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Email"
                                            size='small'
                                            style={{ width: '115%' }}
                                        />
                                    </div>
                                    <div style={{ textAlign: 'left', paddingTop: '5%' }}>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Address"
                                            size='small'
                                            style={{ width: '115%' }}
                                        />
                                    </div>
                                    <div style={{ textAlign: 'left', paddingTop: '5%' }}>
                                        <TextField
                                            // required
                                            id="outlined-required"
                                            label="Address 2"
                                            size='small'
                                            style={{ width: '115%' }}
                                        />
                                    </div>
                                    <div style={{ paddingTop: '5%' }}>
                                        <Box
                                            component="form"
                                            sx={{
                                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                                            }}
                                            noValidate
                                            autoComplete="off"
                                        >
                                            <div>
                                                <TextField
                                                    id="outlined-select-currency"
                                                    select
                                                    label="Country"
                                                    defaultValue="EUR"
                                                // helperText="Please select your currency"
                                                >
                                                    {country.map((option) => (
                                                        <MenuItem key={option.value} value={option.value}>
                                                            {option.label}
                                                        </MenuItem>
                                                    ))}
                                                </TextField>
                                                <TextField
                                                    id="outlined-select-currency"
                                                    select
                                                    label="City"
                                                    defaultValue="EUR"
                                                // helperText="Please select your currency"
                                                >
                                                    {city.map((option) => (
                                                        <MenuItem key={option.value} value={option.value}>
                                                            {option.label}
                                                        </MenuItem>
                                                    ))}
                                                </TextField>
                                            </div>
                                            <div>
                                                <TextField
                                                    label='Zip code'>

                                                </TextField>
                                            </div>
                                            <div>
                                                <FormGroup>
                                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Save Information" />

                                                </FormGroup>
                                            </div>
                                            <div style={{ padding: '5%' }}>
                                                <Typography style={{ textAlign: 'left', fontWeight: 'bold' }} gutterBottom variant="h5" component="div">
                                                    Payment
                                                </Typography>
                                                <div>
                                                    <FormControl>
                                                        {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
                                                        <RadioGroup
                                                            aria-labelledby="demo-radio-buttons-group-label"
                                                            defaultValue="female"
                                                            name="radio-buttons-group"
                                                        >
                                                            <FormControlLabel value="female" control={<Radio />} label="Credit card" />
                                                            <FormControlLabel value="male" control={<Radio />} label="Debit card" />
                                                            <FormControlLabel value="other" control={<Radio />} label="Paypal" />
                                                        </RadioGroup>
                                                    </FormControl>
                                                </div>
                                            </div>

                                        </Box>
                                    </div>
                                </Grid>





                            </Grid>
                            <div style={{ paddingLeft: '20%' }}>
                                <Grid item xs={20} md={20}>
                                    <div style={{}}>
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', textAlign: 'left' }}>
                                            <Typography style={{ textAlign: 'left', fontWeight: 'bold' }} gutterBottom variant="h5" component="div">
                                                Your cart
                                            </Typography>

                                        </div>
                                        <div style={{}}>
                                            <OrderTable />
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', textAlign: 'left', paddingTop: '5%' }}>

                                        <Item style={{ width: '100%' }}>
                                            <TextField
                                                label='Promotion code'
                                                id="filled-hidden-label-small"
                                                variant="filled"
                                                size="small"
                                                sx={{ width: '100%' }}
                                            />


                                        </Item>
                                        <Item>
                                            <div style={{ paddingTop: '5%' }}>
                                                <Button variant="contained" href="#contained-buttons">
                                                    Submit
                                                </Button>
                                            </div>
                                        </Item>


                                    </div>

                                </Grid>
                            </div>

                        </Grid>
                    </Grid>

                </Box>

            </CssBaseline>

        </Container>

    )
}

export default CheckOut