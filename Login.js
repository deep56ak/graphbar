import * as React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import solarImage from '../../assets/img/logos/solarlogin.jpg';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import '../../pages/auth/index.css'
import Typography from '@mui/material/Typography';

// import { Form } from 'react-bootstrap';

import { LoadingButton } from '@mui/lab';
import { Alert, Card, CardContent, Container, FormControl, FormHelperText, Input, InputBase, InputLabel, Paper, responsiveFontSizes, Stack, useMediaQuery, useTheme } from '@mui/material';
import { AuthenticationContext } from '../../context/AuthenticationContext';
import cover from '../../assets/img/bg/solar-panel-close-up1.png'
import { useState, useContext } from 'react';
import Image from 'mui-image';
export default function Login() {
    const { palette, spacing, shape: { borderRadius }, typography, breakpoints } = useTheme()
    const mds = useMediaQuery('(max-width:1368px)');
    const allSpacing = spacing(4)
    const { LoginLoading, userLogin } = useContext(AuthenticationContext)
    const [LOGIN_NAME, setLOGIN_NAME] = useState('')
    const [PW, setPW] = useState('')

    const APP_KEY = 'WEBXYZ321'

    function onSubmitHandler() {
        if (LOGIN_NAME.length == 0 || PW.length == 0) {
            alert('All Fields Are Required!')
        } else {
            userLogin(LOGIN_NAME, PW, APP_KEY)
        }
    }

    return (
        <Box
            component="main"
            sx={{
                backgroundImage: { sm: '', md: `url(${cover})` },
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100vw",
                height: "100vh",

            }}
        >
            <CssBaseline />
            {/* <ToastContainer /> */}

            <Grid container sx={{ pt: { xl: spacing(2), xs: spacing(2) } }} alignItems={'center'} justifyContent={'center'}>

                <Grid item sx={{
                    backgroundColor: 'rgba(0, 0, 0, 0.28)',
                    p: allSpacing,
                    border: 2, borderRadius: allSpacing,
                    borderColor: "white",
                    display: 'flex',

                    flexDirection: {
                        xs: 'column',
                        sm: 'column',
                        md: 'row',
                        lg: 'row',
                        xl: 'row'
                    }
                }}
                    xxl={10} xl={8} lg={7} md={10} sm={10} xs={11}
                    columnGap={allSpacing}
                    rowGap={allSpacing}

                >
                    <Box sx={{ flex: 1.2, pt: { sm: 2, md: 0, lg: 0 }, borderRadius: '20px', overflow: 'hidden' }}>
                        <Image fit='contain' src={solarImage} />
                    </Box>

                    <Paper variant='elevation' sx={{ rowGap: mds ? 2 : 5, justifyContent: 'center', display: 'flex', flexDirection: 'column', flex: 1, borderRadius: allSpacing, p: allSpacing }}>
                        <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'flex-start'}>
                            <Image fit='contain' width={'25%'} wrapperStyle={{ backgroundColor: "white" }} src={require('../../assets/img/logos/logo 1.svg').default} />
                            <Box textAlign={'end'}>
                                <Typography variant="h6"> Welcome,</Typography>
                                <Typography variant="body2">eSolar Plant Monitoring System</Typography>
                                {/* <Typography variant='body1'> We are very happy to see you back!</Typography> */}
                            </Box>
                        </Box>
                        <Stack component="form" rowGap={mds ? 2 : 5} >
                            <Stack rowGap={allSpacing} mt={3}>

                                <Stack rowGap={2}>
                                    <Typography variant='body2' htmlFor="my-input">Login ID</Typography>
                                    <TextField
                                        hiddenLabel
                                        variant="outlined"
                                        value={LOGIN_NAME}
                                        onChange={(val) => setLOGIN_NAME(val.currentTarget.value)}
                                        size='medium'
                                    />
                                </Stack>
                                <Stack rowGap={2}>
                                    <Typography variant='body2' htmlFor="my-input">Password</Typography>
                                    <TextField
                                        hiddenLabel
                                        variant="outlined"
                                        value={PW}
                                        onChange={(val) => setPW(val.currentTarget.value)}
                                        type='password'
                                    />
                                </Stack>

                                {/* <Form.Group controlId="formBasicLOGIN_NAME">
                                    <Typography varient='body2' sx={{}} mb={1}>User ID</Typography>
                                    <Form.Control
                                        value={LOGIN_NAME}
                                        onChange={(val) => setLOGIN_NAME(val.currentTarget.value)}
                                        size='lg' type="LOGIN_NAME"
                                        style={{ padding: mds ? '' : 15, fontSize: '0.7rem' }}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-2" controlId="formBasicPW">
                                    <Typography varient='body2' sx={{}} mb={1}>Password</Typography>
                                    <Form.Control
                                        size='lg' type="password"
                                        value={PW}
                                        onChange={(val) => setPW(val.currentTarget.value)}
                                        style={{ padding: mds ? '' : 15, fontSize: '0.7rem' }}
                                    />
                                </Form.Group> */}


                            </Stack>

                            <LoadingButton
                                fullWidth
                                variant='contained'
                                sx={{ backgroundColor: palette.blue, color: 'primary.light' }}
                                onClick={onSubmitHandler}
                                loading={LoginLoading ? true : false}
                            >
                                Login
                            </LoadingButton>

                            <Stack direction={'row'} alignItems={'center'} justifyContent={"space-evenly"}>
                                <Stack alignItems={'center'}>
                                    <Typography variant='body2'>Download App</Typography>
                                    <a href='https://play.google.com/store/apps/details?id=com.logicpower.afs&pli=1' style={{ alignSelf: 'center' }}>
                                        <img style={{ margin: 'auto', display: "flex" }} fit='contain' width={'90%'} src={require('../../assets/img/logos/google-play-store.png')} />
                                    </a>
                                </Stack>
                                <Stack alignItems={'center'} >
                                    <Typography variant='body2'>Follow us on</Typography>
                                    <a href='https://www.linkedin.com/in/logics-poweramr-3856511ba/'>
                                        <img style={{}} fit='contain' width={'90%'} src={require('../../assets/img/logos/lin.png')} />
                                    </a>
                                </Stack>
                            </Stack>
                            <Box textAlign={'center'}>
                                <Typography variant='body2'>
                                    Copyright © 2017
                                    <a href="https://poweramr.in/">
                                        Logics PowerAMR [P] Ltd.
                                    </a>
                                </Typography>
                                <Typography variant="body2">
                                    Visit Our Entire Portfolio ©
                                    <a href="https://poweramr.in/" >
                                        www.poweramr.in
                                    </a>
                                </Typography>
                            </Box>
                        </Stack>
                    </Paper>

                    {/* <Box sx={{ flex: 1.2, pt: { sm: 2, md: 0, lg: 0 } }}>
                        <Image fit='contain' src={require('../../assets/img/logos/Frame 1171275272.svg').default} />
                        
                    </Box> */}

                    {/* <Box sx={{ flex: 1.2, pt: { sm: 2, md: 0, lg: 0 }, borderRadius: '20px', overflow: 'hidden' }}>
                        <Image fit='contain' src={solarImage} />
                    </Box> */}


                </Grid>

                <Grid pt={spacing(2)} item xl={9} lg={7} md={10} sm={11} xs={10}>
                    <Box component={Paper} alignItems={'center'} bgcolor={'white'} sx={{ borderRadius: 1, p: 0.5 }} display={'flex'}>
                        {/* <Typography color={'red'} variant='body2'>
                            ms
                        </Typography> */}
                        <marquee>
                            <Typography variant='h5'>
                                Industrial Energy Management System Flow Meter & Ground Water Monitoring Smart Metering and DLMS Solution Industrial Energy Management System Flow Meter & Ground Water Monitoring
                            </Typography>
                        </marquee>
                    </Box>
                </Grid>
            </Grid>
            <Box sx={{ overflow: 'hidden', marginTop: spacing(2), backgroundColor: "background.default" }} alignItems={'center'} display={'flex'}>
                <Stack sx={{ px: 1 }} color={'white'} bgcolor={palette.blue}>
                    <Typography noWrap variant='body2'>
                        PowerAMR in
                    </Typography>
                    <Typography noWrap variant='h6'>
                        NEWS
                    </Typography>
                </Stack>
                <marquee>
                    <Typography variant='h5'>
                        are all in one Controller | Logics PowerAMR reaches to 10+ countries across the globe | Logics PowerAMR introduces LoRa based communication system | Logics PowerAMR reaches to 10+ countries across the globe
                    </Typography>
                </marquee>
            </Box>
        </Box >
    );
}





