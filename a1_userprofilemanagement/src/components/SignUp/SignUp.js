import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import MuiPhoneNumber from 'material-ui-phone-number';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import 'react-phone-input-2/lib/bootstrap.css'
import './SignUp.css';
import { IconButton, Paper } from '@material-ui/core';
import { TextField, InputAdornment } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import EmailIcon from '@material-ui/icons/Email';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Checkbox from '@material-ui/core/Checkbox';

function SignUp() {
    const [password, setPassword] = useState("");
    const [displayPassword, setDisplayPassword] = useState(false)
    const [displayConfirmPassword, setDisplayConfirmPassword] = useState(false)

    const [error, setError] = useState({
        firstName: false,
        lastName: false,
        email: false,
        password: false,
        confirmPassword: false,
        checkedBox: false
    });
    const [detail, setDetail] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        snackbar: false,
        checkbox: false
    });

    const handleClickOnSubmit = (e) => {
        e.preventDefault()
        for (const [, value] of Object.entries(error)) {
            if (value) {
                return
            }
        }
        if (!detail.checkbox) {
            setError(pre => ({ ...pre, checkedBox: true }))
            return
        }

        setDetail(pre => ({ ...pre, snackbar: true }))
        setDetail(pre => ({ ...pre, phoneNumber: '' }))
        e.target.reset();
    }

    const handleNameChange = (e) => {
        const { name, value } = e.target;

        if (!value.match(/^[ 0-9a-zA-Z]+$/)) {
            setError(pre => ({ ...pre, [name]: true }))

        }
        else {
            setError(pre => ({ ...pre, [name]: false }))
        }
        setDetail(pre => ({ ...pre, [name]: value }))
    }

    const handlePhoneNumberChange = (e) => {
        const { name, value } = e.target;

        setDetail(pre => ({ ...pre, [name]: value }))
    }

    const handleEmailChange = (e) => {
        const { name, value } = e.target;

        if (value.match(/^\S+@\S+\.\S+$/)) {
            setError(pre => ({ ...pre, [name]: false }))
        }
        else {
            setError(pre => ({ ...pre, [name]: true }))
        }
        setDetail(pre => ({ ...pre, [name]: value }))
    }

    const handleEmailBlur = (e) => {
        const { name, value } = e.target;

        if (!value.match(/^\S+@\S+\.\S+$/)) {
            setError(pre => ({ ...pre, [name]: true }))
        }
        else {
            setError(pre => ({ ...pre, [name]: false }))
        }
        setDetail(pre => ({ ...pre, [name]: value }))
    }

    const handlePasswordChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target;
        if (password.match('^[a-zA-Z0-9!@#$&()\\-`.+,/"]*$')) {
            if (password.length + 1 > 7) {
                setError(pre => ({ ...pre, [name]: false }))
            }
            else {
                setError(pre => ({ ...pre, [name]: true }))
            }
        }
        setPassword(value)
    }

    const handleConfirmPasswordChange = (e) => {
        const { name, value } = e.target;
        if (password === value) {
            setError(pre => ({ ...pre, [name]: false }))
        }
        else {
            setError(pre => ({ ...pre, [name]: true }))
        }

    }

    const handlePasswordClickChange = () => {
        setDisplayPassword(!displayPassword)
    }

    const handleConfirmPasswordClickChange = () => {
        setDisplayConfirmPassword(!displayConfirmPassword)
    }
    const handleSnackBar = () => {
        setDetail(pre => ({ ...pre, snackbar: false }))
    }
    const handleCheckedSnackBar = () => {
        setError(pre => ({ ...pre, checkedBox: false }))
    }

    const handleCheckedBoxChange = (e) => {
        setDetail(pre => ({ ...pre, checkbox: !detail.checkbox }))
    }

    return (
        <section>
            <header style={{ fontFamily: "cursive", textAlign: "center" }}>
                Dalffins
            </header>

            <Container component="main" maxWidth="lg" className="mainContainer">
                <Paper elevation={3} className="inside" >
                    <Card style={{ margin: '3%', height: '100%' }} md={6}>
                        <CardMedia
                            image="image.jpg"
                            title="Tiffins image"
                            style={{ height: '649px', width: '1020px' }}
                        />
                    </Card>
                    <form onSubmit={handleClickOnSubmit}>

                        <Grid item xs={12} sm={12}>
                            <PersonAddIcon color="primary" style={{ height: '30%', width: '30%', marginLeft: '30%' }} />
                            <Typography variant="h5" style={{ textAlign: 'center', marginBottom: '3%' }}>
                                Dalffins Registration form!
                            </Typography>
                        </Grid>

                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    name="firstName"
                                    variant="outlined"
                                    id="firstName"
                                    label="First Name"
                                    fullWidth
                                    required
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="start">
                                                <AccountCircleIcon />
                                            </InputAdornment>
                                        )
                                    }}
                                    onChange={handleNameChange}
                                    error={error.firstName}
                                    helperText={error.firstName ? 'Enter only alphanumeric characters!' : ''}
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField
                                    name="lastName"
                                    variant="outlined"
                                    id="lastName"
                                    fullWidth
                                    required
                                    label="Last Name"
                                    placeholder="Last Name"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="start">
                                                <AccountCircleIcon />
                                            </InputAdornment>
                                        )
                                    }}
                                    onChange={handleNameChange}
                                    error={error.lastName}
                                    helperText={error.lastName ? 'Enter only alphanumeric characters!' : ''}
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField
                                    variant="outlined"
                                    name="email"
                                    id="email"
                                    label="Email"
                                    type="email"
                                    fullWidth
                                    required
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="start">
                                                <EmailIcon />
                                            </InputAdornment>
                                        )
                                    }}
                                    onChange={handleEmailChange}
                                    onBlur={handleEmailBlur}
                                    error={error.email}
                                    helperText={error.email ? 'Example: abc@gmail.com' : ''}
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <MuiPhoneNumber
                                    name="phoneNumber"
                                    id="phoneNumber"
                                    value={detail.phoneNumber}
                                    defaultCountry={"ca"}
                                    disableAreaCodes={true}
                                    variant="outlined"
                                    onlyCountries={["ca"]}
                                    label="Phone Number"
                                    fullWidth
                                    required
                                    onChange={phone => handlePhoneNumberChange({ target: { value: phone, name: 'phoneNumber' } })}
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField
                                    name="password"
                                    variant="outlined"
                                    id="password"
                                    label="Password"
                                    type={displayPassword ? "text" : "password"}
                                    fullWidth
                                    required
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    label="visibility of passwords"
                                                    onClick={handlePasswordClickChange}
                                                >
                                                    {displayPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                    onPaste={(e) => { e.preventDefault() }}
                                    onChange={handlePasswordChange}
                                    error={error.password}
                                    helperText={error.password ? 'Minimum of 8 characters!' : ''}
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField
                                    variant="outlined"
                                    name="confirmPassword"
                                    id="confirm-password"
                                    label="Confirm Password"
                                    type={displayConfirmPassword ? "text" : "password"}
                                    fullWidth
                                    required
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    label="visibility of passwords"
                                                    onClick={handleConfirmPasswordClickChange}
                                                >
                                                    {displayConfirmPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                    onChange={handleConfirmPasswordChange}
                                    error={error.confirmPassword}
                                    helperText={error.confirmPassword ? 'Passwords do not match' : ''}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Checkbox
                                    name="checkbox"
                                    checked={detail.checkbox}
                                    size="small"
                                    color="primary"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    onChange={handleCheckedBoxChange}
                                />
                                <Typography variant='caption' style={{ fontSize: '14px' }}>
                                    Yes, I agree to the terms and conditions of Dalffins!
                                </Typography>
                            </Grid>

                            <Grid item xs={12}>
                                <Button type="submit"
                                    color="primary"
                                    variant="contained"
                                    style={{ textTransform: 'none', float: 'right', width: '200px', margin: '2%' }}
                                    OnClick={handleClickOnSubmit}>
                                    Register
                            </Button>
                                <Snackbar open={detail.snackbar} autoHideDuration={6000} onClose={handleSnackBar}>
                                    <MuiAlert elevation={6} variant="filled" onClose={handleSnackBar} severity="success">
                                        Registered Successfully!!
                                </MuiAlert>
                                </Snackbar>
                                <Snackbar open={error.checkedBox} autoHideDuration={6000} onClose={handleCheckedSnackBar}>
                                    <MuiAlert elevation={6} variant="filled" onClose={handleCheckedSnackBar} severity="error">
                                        Please Agree to terms and conditions
                                </MuiAlert>
                                </Snackbar>
                            </Grid>

                        </Grid>
                    </form>
                </Paper>
            </Container>

            <footer style={{ textAlign: 'center' }}>
                Copyright © 2021 Dalffins. All rights reserved.
            </footer>
        </section>
    );
}

export default SignUp;