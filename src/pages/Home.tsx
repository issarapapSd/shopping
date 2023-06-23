import ResponsiveAppBar from '../components/ResponsiveAppBar'
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import CustomizedTables from '../components/TableS';
import SpcTables from '../components/SpcTable';
import ReviewTable from '../components/ReviewTable';
import CheckOut from './CheckOut';
import React from 'react'

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 20,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {

        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
}));

const Home = () => {
    return (<>
        <div>
            <ResponsiveAppBar />

        </div>
        <React.Fragment>
            <Container maxWidth="xl" >
                <CssBaseline>
                    <Box sx={{ flexGrow: 1 }}>

                        {/* <Stack spacing={2}> */}
                        <Grid container spacing={0} columns={55} >
                            {/*  <Stack> */}
                            <Grid container spacing={0} columns={8}>
                                <Grid xs={8} md={5} >
                                    <div style={{ paddingTop: '50px' }}>
                                        <img className="imageJordan" src="https://www.grandprix.co.th/wp-content/uploads/2018/05/Nike-Air-Jordan-3-Retro-5-600x400@2x.jpg"
                                            alt="Jordan1" />
                                    </div>
                                </Grid>
                                <Grid xs={8} md={6} >
                                    <div >
                                        <Typography variant="body1" style={{ textAlign: 'left' }}>
                                            Stock (50/100)
                                        </Typography >
                                        <Box sx={{ flexGrow: 1 }}>
                                            <BorderLinearProgress variant="determinate" value={50} />
                                        </Box>
                                    </div>
                                </Grid>

                            </Grid>


                            {/* </Stack> */}
                            <Grid xs={8} md={20}  >
                                <div style={{ paddingTop: '50px' }}>
                                    <Card sx={{ maxWidth: 600 }}>
                                        <CardContent>
                                            <Typography style={{ textAlign: 'left', fontWeight: 'bold' }} gutterBottom variant="h5" component="div">
                                                NIKE AIR JORDAN 3 RETRO
                                            </Typography>
                                            <Typography variant="body1" style={{ textAlign: 'left' }}>
                                                รองเท้ารุ่น Air Jordan 3 Retro ที่โดดเด่นด้วยระบบลดแรงกระแทกน้ำหนักเบาที่มองเห็นได้
                                                เพื่อความกระชับสบายในสไตล์ออริจินัล โครงสร้างจากหนังมอบความทนทาน และรายละเอียดแบบซิกเนเจอร์
                                                เพื่อเป็นการเฉลิมฉลองให้กับไอคอนจอมพลิกเกม อย่าง Michael Jordan
                                            </Typography >
                                            <br></br>
                                            <Typography variant="body1" style={{ textAlign: 'left' }}>
                                                Price: $12.99
                                            </Typography>
                                            <br />
                                            <TextField
                                                helperText=" "
                                                id="demo-helper-text-aligned-no-helper"
                                                placeholder="1"
                                                type="text"
                                                style={{ width: '100%' }}
                                            />

                                        </CardContent>
                                        <CardActions>
                                            <Button style={{ background: '#0d6efd', color: 'white' }} variant="contained" type="submit" href="/CheckOut">
                                                Add to Cart
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </div>
                                <div style={{ paddingTop: '50px' }}>
                                    <CustomizedTables />
                                </div>
                            </Grid>

                            <Grid xs={6} md={49}>
                                <div style={{ paddingTop: '50px' }}>
                                    <SpcTables />
                                </div>
                            </Grid>


                            <Grid xs={6} md={49}>
                                <div style={{ paddingTop: '50px' }}>
                                    <ReviewTable />
                                </div>
                            </Grid>
                        </Grid>
                        {/* </Stack> */}

                    </Box>
                </CssBaseline>


            </Container>
        </React.Fragment>
    </>

    )
}

export default Home